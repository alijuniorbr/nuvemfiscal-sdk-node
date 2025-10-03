/**
 * Estratégia de autenticação para o fluxo OAuth2 Client Credentials.
 *
 * - `"basic"`: envia `Authorization: Basic base64(clientId:clientSecret)` e o corpo **sem** `client_id/client_secret`.
 * - `"body"`: envia credenciais **no corpo** (`client_id` / `client_secret`) **sem** `Authorization: Basic`.
 * - `"both"`: envia **Basic** e **também** `client_id/client_secret` no corpo (máxima compatibilidade).
 * - `"auto"`: tenta `"basic"` e, em caso de erro típico (400/401), faz fallback para `"body"`.
 */
export type ClientCredentialsAuthStyle = "basic" | "body" | "both" | "auto";

/**
 * Parâmetros para obtenção de token via OAuth2 Client Credentials.
 */
export type ClientCredentialsInput = {
  /** URL do endpoint de token (ex.: "https://auth.nuvemfiscal.com.br/oauth/token"). */
  tokenUrl: string;
  /** Client ID fornecido pelo provedor OAuth2. */
  clientId: string;
  /** Client Secret fornecido pelo provedor OAuth2. ⚠️ Não exponha em front-end de produção. */
  clientSecret: string;
  /**
   * Escopos solicitados (separados por espaço). Alguns provedores aceitam vazio; outros exigem ao menos um.
   * Ex.: `"empresa conta cnpj cep nfce nfe"`.
   */
  scope?: string;
  /**
   * Estratégia de autenticação:
   * - `"basic"` | `"body"` | `"both"` | `"auto"` (padrão).
   * Em `"auto"`, a função tenta Basic e, se falhar com 400/401, reenvia credenciais no corpo.
   */
  authStyle?: ClientCredentialsAuthStyle;
};

/**
 * Resposta do endpoint de token (padronizada) — campos comuns de OAuth2.
 * Provedores podem incluir atributos adicionais; por isso o índice `[k: string]: unknown`.
 */
export type ClientCredentialsToken = {
  /** Token de acesso (Bearer). */
  access_token: string;
  /** Tipo do token (geralmente "Bearer"). */
  token_type?: string;
  /** Tempo de expiração (segundos). */
  expires_in?: number;
  /** Escopos efetivamente concedidos. */
  scope?: string;
  /** Campos extras específicos do provedor. */
  [k: string]: unknown;
};

/**
 * Faz a requisição ao endpoint de token com os headers/body fornecidos.
 * @internal
 */
async function requestToken(
  tokenUrl: string,
  headers: Record<string, string>,
  body: URLSearchParams
) {
  const res = await fetch(tokenUrl, {
    method: "POST",
    headers,
    body: body.toString(),
  });

  const text = await res.text();

  if (!res.ok) {
    let details: any;
    try {
      details = text ? JSON.parse(text) : undefined;
    } catch {
      details = text;
    }
    const err = new Error(
      `Token request failed: HTTP ${res.status} ${res.statusText}${
        text ? ` - ${text}` : ""
      }`
    ) as Error & { status?: number; body?: any };
    err.status = res.status;
    err.body = details;
    throw err;
  }

  try {
    return JSON.parse(text) as ClientCredentialsToken;
  } catch {
    // Alguns provedores retornam texto puro; último recurso: trata como access_token.
    return { access_token: text } as ClientCredentialsToken;
  }
}

/**
 * Obtém um token de acesso via **OAuth2 Client Credentials** (lado servidor/Node).
 *
 * - Suporta múltiplos estilos de autenticação (`authStyle`), cobrindo provedores que
 *   exigem credenciais em **Basic**, no **corpo**, **ambos**, ou com fallback **automático**.
 * - Retorna o objeto completo do token (`access_token`, `expires_in`, etc.).
 *
 * ⚠️ **Segurança:** Não use Client Secret no front-end em produção.
 * Em apps web, faça essa troca **no backend** e envie ao cliente apenas o `access_token`.
 *
 * @param input Parâmetros do fluxo (URL do token, credenciais, escopo e `authStyle`).
 * @returns Promessa que resolve para o objeto `ClientCredentialsToken`.
 *
 * @throws {Error} Se a resposta do servidor não for 2xx. O erro conterá `status` e `body` (quando disponíveis).
 *
 * @example
 * ```ts
 * const token = await getClientCredentialsToken({
 *   tokenUrl: "https://auth.nuvemfiscal.com.br/oauth/token",
 *   clientId: process.env.CLIENT_ID!,
 *   clientSecret: process.env.CLIENT_SECRET!,
 *   scope: "empresa conta cnpj cep nfce nfe", // opcional (depende do provedor)
 *   authStyle: "auto", // padrão
 * });
 *
 * console.log("access_token:", token.access_token);
 * ```
 */
export async function getClientCredentialsToken(
  input: ClientCredentialsInput
): Promise<ClientCredentialsToken> {
  const { tokenUrl, clientId, clientSecret, scope, authStyle = "auto" } = input;

  const makeBody = () => {
    const b = new URLSearchParams();
    b.set("grant_type", "client_credentials");
    if (scope) b.set("scope", scope);
    return b;
  };

  const basicHeader = () =>
    `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`;

  // Estratégias
  const doBasic = async () => {
    const headers: Record<string, string> = {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
      Authorization: basicHeader(),
    };
    const body = makeBody();
    return requestToken(tokenUrl, headers, body);
  };

  const doBodyCreds = async () => {
    const headers: Record<string, string> = {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    };
    const body = makeBody();
    body.set("client_id", clientId);
    body.set("client_secret", clientSecret);
    return requestToken(tokenUrl, headers, body);
  };

  const doBoth = async () => {
    const headers: Record<string, string> = {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
      Authorization: basicHeader(),
    };
    const body = makeBody();
    body.set("client_id", clientId);
    body.set("client_secret", clientSecret);
    return requestToken(tokenUrl, headers, body);
  };

  if (authStyle === "basic") return doBasic();
  if (authStyle === "body") return doBodyCreds();
  if (authStyle === "both") return doBoth();

  // authStyle === "auto"
  try {
    return await doBasic();
  } catch (e: any) {
    // compat: queda típica de invalid_client/unsupported auth no Basic
    const status = e?.status;
    if (status === 400 || status === 401) {
      return doBodyCreds();
    }
    throw e;
    // Se quiser ser ainda mais tolerante:
    // return doBodyCreds().catch(() => { throw e; });
  }
}
