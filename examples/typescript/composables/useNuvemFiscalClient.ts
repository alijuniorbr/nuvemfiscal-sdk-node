import {
  AxiosHttpClient,
  getNuvemFiscalTokenForBrowser,
  NuvemFiscalApi,
} from "@alijunior/nuvemfiscal-sdk-node";

// === Configuração da NuvemFiscal ===
const clientId = "import.meta.env.VITE_NUVEMFISCAL_CLIENT_ID";
const clientSecret = "import.meta.env.VITE_NUVEMFISCAL_CLIENT_SECRET";
const scope = "import.meta.env.VITE_NUVEMFISCAL_SCOPE";
const tokenUrl = "https://auth.nuvemfiscal.com.br/oauth/token";
const baseUrl = "https://api.nuvemfiscal.com.br";

// === Cache de token e cliente ===
let tokenPromise: Promise<string> | null = null;
let apiClient: NuvemFiscalApi | null = null;

export const getNuvemFiscalClient = async (): Promise<NuvemFiscalApi> => {
  if (apiClient) return apiClient;

  if (!tokenPromise) {
    console.log({
      tokenUrl,
      clientId,
      clientSecret,
      scope,
    });
    tokenPromise = getNuvemFiscalTokenForBrowser(clientId, clientSecret);
  }

  const token = await tokenPromise;

  // Inicializa a API com o token obtido
  const httpClient = new AxiosHttpClient({
    accessToken: token,
    baseURL: baseUrl,
  });
  apiClient = new NuvemFiscalApi(httpClient, baseUrl);

  return apiClient;
};

// Função para resetar o cache (útil para testes ou logout)
export const resetNuvemFiscalClient = () => {
  tokenPromise = null;
  apiClient = null;
};
