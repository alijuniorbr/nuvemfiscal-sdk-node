/**
 * Obtém um *access token* da Nuvem Fiscal **no navegador** via OAuth2 *Client Credentials*.
 *
 * ⚠️ **Atenção (segurança):** este helper é somente para **testes locais**.
 * Ele **expõe o Client Secret** no front-end, o que **não é seguro** em produção.
 * Em produção, obtenha o token no **backend** (use {@link getClientCredentialsToken})
 * e envie ao cliente apenas o `access_token`.
 *
 * @param clientId     Seu **Client ID**.
 * @param clientSecret Seu **Client Secret** (⚠️ não usar no front em produção).
 * @param tokenUrl     URL do endpoint de token OAuth2.
 *                     @defaultValue `"https://auth.nuvemfiscal.com.br/oauth/token"`
 * @param scope        Escopos solicitados (separados por espaço).
 *                     @defaultValue `"empresa conta cnpj cep nfce nfe"`
 *
 * @returns `Promise<string>` contendo o `access_token`.
 *
 * @throws {Error} Se a resposta não for 2xx, ou se o payload não trouxer `access_token`.
 *
 * @example
 * ```ts
 * const token = await getNuvemFiscalTokenForBrowser(
 *   "CLIENT_ID",
 *   "CLIENT_SECRET"
 * );
 * console.log("Bearer", token);
 * ```
 */

export async function getNuvemFiscalTokenForBrowser(
  clientId: string,
  clientSecret: string,
  tokenUrl: string = "https://auth.nuvemfiscal.com.br/oauth/token",
  scope: string = "empresa conta cnpj cep nfce nfe"
): Promise<string> {
  // Usa APIs de browser (btoa)
  const encodedCredentials = btoa(`${clientId}:${clientSecret}`);

  const body = new URLSearchParams();
  body.set("grant_type", "client_credentials");
  if (scope) body.set("scope", scope);

  const res = await fetch(tokenUrl, {
    method: "POST",
    headers: {
      Authorization: `Basic ${encodedCredentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
    body,
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    const msg =
      (data as any)?.error_description ||
      (data as any)?.error ||
      `${res.status} ${res.statusText}`;
    throw new Error(`Falha na autenticação: ${msg}`);
  }

  const accessToken = (data as any)?.access_token as string | undefined;
  if (!accessToken) {
    throw new Error("Access token não foi retornado na resposta da API.");
  }
  return accessToken;
}
