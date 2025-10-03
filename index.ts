// index.ts

// Tipos e HttpClient base
export * from "./src/types/nuvem-fiscal-api.types";
export * from "./src/types/nuvem-fiscal-api.httpclient";

// Cliente principal
export * from "./src/api/nuvem-fiscal-client";

// Adapters HTTP
export * from "./src/adapters/fetch-http-client";
export * from "./src/adapters/axios-http-client";

// Tokens (Node + Browser)
// - Node (objeto completo do token)
export { getClientCredentialsToken } from "./src/api/nuvem-fiscal-token-acquire";
// - Node (apenas string do access_token; wrapper que usa a função acima)
export { getAccessTokenString } from "./src/api/nuvem-fiscal-token-string";
// - Browser (APENAS para testes locais; NÃO usar em produção)
export { getNuvemFiscalTokenForBrowser } from "./src/api/nuvem-fiscal-token-browser";
