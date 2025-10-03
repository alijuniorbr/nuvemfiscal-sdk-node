// nuvem-fiscal-run-example.ts
/**
 * Script executável:
 * - Obtém token via client_credentials
 * - Cria o client tipado
 * - Faz chamadas de exemplo e imprime no console
 *
 * Execução (Node 18+):
 *   # usando variáveis de ambiente:
 *   TOKEN_URL="https://auth.seuservico.com/oauth/token" \
 *   CLIENT_ID="..." \
 *   CLIENT_SECRET="..." \
 *   API_BASE="https://api.seuservico.com" \
 *   node --loader ts-node/esm nuvem-fiscal-run-example.ts
 *
 *   # ou com ts-node via npx
 *   npx ts-node nuvem-fiscal-run-example.ts
 *
 * Dica: salve as variáveis em um .env e use uma ferramenta de sua preferência para carregá-las.
 */

import { getClientCredentialsToken } from "../src/api/nuvem-fiscal-token-acquire";
import { FetchHttpClient } from "../src/adapters/fetch-http-client";
import { NuvemFiscalClient } from "../src/api/nuvem-fiscal-client";

function requiredEnv(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Env var ${name} is required`);
  return v;
}

function printHttpError(e: unknown, context?: string) {
  const msg =
    typeof e === "object" && e && "body" in e
      ? // tenta mensagem específica da API
        (e as any).body?.error?.message ??
        (e as any).body?.message ??
        (e as unknown as Error).message
      : (e as Error)?.message ?? String(e);

  const code =
    typeof e === "object" && e && "status" in e ? (e as any).status : undefined;

  const prefix = context ? `${context}: ` : "";
  if (code) {
    console.error(`${prefix}Erro ${code}: ${msg}`);
  } else {
    console.error(`${prefix}${msg}`);
  }
}

async function main() {
  const TOKEN_URL = requiredEnv("TOKEN_URL");
  const CLIENT_ID = requiredEnv("CLIENT_ID");
  const CLIENT_SECRET = requiredEnv("CLIENT_SECRET");
  const API_BASE = requiredEnv("API_BASE");
  const SCOPE = requiredEnv("SCOPE");

  // 1) Obter token (client_credentials)
  console.log(">> Solicitando token...");
  const token = await getClientCredentialsToken({
    tokenUrl: TOKEN_URL,
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    scope: SCOPE,
    authStyle: "auto",
  });
  console.log("Token recebido:", {
    ...token,
    access_token: `***${token.access_token?.slice(-6)}`, // ofusca
  });

  // 2) Instanciar HttpClient com Authorization
  const http = new FetchHttpClient({
    headers: {
      Authorization: `Bearer ${token.access_token}`,
    },
  });

  // 3) Criar client tipado
  const api = new NuvemFiscalClient(http, API_BASE);

  // 4) Chamada de exemplo 1: CEP
  try {
    console.log("\n>> Consultar CEP 04513010...");
    const cep = await api.consultarCep({ Cep: "04513010" });
    console.log("Resposta CEP:", cep);
  } catch (e) {
    printHttpError(e, "Falha ao consultar CEP:");
  }

  // 5) Chamada de exemplo 2: CNPJ (ajuste os campos de acordo com seu OpenAPI)
  try {
    console.log("\n>> Listar CNPJ (exemplo)...");
    const lista = await api.listarCnpj({
      cnae_principal: "6201501",
      municipio: "3550308",
      natureza_juridica: "2062",
      $top: 5,
      $skip: 0,
      $inlinecount: false,
    } as any); // se o OpenAPI tipou exatamente, o "as any" não será necessário
    console.log("Resposta CNPJ:", lista);
  } catch (e) {
    printHttpError(e, "Falha ao listar CNPJ");
  }

  // 6) Chamada de exemplo 2: listarEmpresas (ajuste os campos de acordo com seu OpenAPI)
  try {
    console.log("\n>> Listar empresas cadastradas...");
    const lista = await api.listarEmpresas({ $top: 10 });
    console.log("Resposta:", lista);
  } catch (e) {
    printHttpError(e, "Falha ao listar empresas:");
  }

  // 7) Chamada de exemplo 3: listarCotasConta()
  try {
    console.log("\n>> Listar as cotas da conta");
    const lista = await api.listarCotasConta();
    console.log("Resposta:", lista);
  } catch (e) {
    printHttpError(e, "Falha ao listar cotas da conta:");
  }
}

main().catch((err) => {
  console.error("Erro fatal no script:", err);
  process.exit(1);
});
