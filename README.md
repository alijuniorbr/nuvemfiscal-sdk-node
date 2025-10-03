<h1 align="center">@alijunior/nuvemfiscal-sdk-node</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/@alijunior/nuvemfiscal-sdk-node">
    <img alt="npm version" src="https://img.shields.io/npm/v/@alijunior/nuvemfiscal-sdk-node.svg">
  </a>
  <a href="https://www.npmjs.com/package/@alijunior/nuvemfiscal-sdk-node">
    <img alt="npm downloads" src="https://img.shields.io/npm/dw/@alijunior/nuvemfiscal-sdk-node.svg">
  </a>
  <img alt="license" src="https://img.shields.io/npm/l/@alijunior/nuvemfiscal-sdk-node.svg">
  <img alt="node >= 18" src="https://img.shields.io/badge/node-%3E%3D18-blue">
</p>

SDK em **TypeScript/Node.js** para integração com a **API Nuvem Fiscal**, com tipos gerados a partir do OpenAPI e client HTTP enxuto (fetch/axios).

> ✅ Destaques
>
> - Tipagem forte (params, body e response) **direto do OpenAPI**
> - Client simples: `NuvemFiscalClient`
> - Adapters: `FetchHttpClient` (nativo) e `AxiosHttpClient` (opcional)
> - **Novos helpers de token**:
>   - `getClientCredentialsToken` (objeto completo do token)
>   - `getAccessTokenString` (só a string do token; wrapper)
>   - `getNuvemFiscalTokenForBrowser` (para **testes no browser** — não usar em produção)

---

## Instalação

```bash
pnpm add @alijunior/nuvemfiscal-sdk-node
```

ou

```bash
npm i @alijunior/nuvemfiscal-sdk-node
```

ou

```bash
yarn add @alijunior/nuvemfiscal-sdk-node
```

### Requisitos

- Node **>= 18** (fetch nativo)
- TypeScript **>= 5** (recomendado)

---

## Variáveis de ambiente (para exemplos)

Crie um `.env` na raiz do seu projeto:

```dotenv
TOKEN_URL=https://auth.nuvemfiscal.com.br/oauth/token
CLIENT_ID=SEU_CLIENT_ID
CLIENT_SECRET=SEU_CLIENT_SECRET
API_BASE=https://api.nuvemfiscal.com.br
SCOPE=empresa conta cnpj cep nfce nfe
```

---

## Helpers de Token

### 1) `getClientCredentialsToken` (Node – objeto completo)

Fluxo **OAuth2 Client Credentials**. Retorna `{ access_token, expires_in, ... }`.  
Suporta `authStyle`: `"basic" | "body" | "both" | "auto"` (padrão: `"auto"`).

```ts
import {
  getClientCredentialsToken,
  type ClientCredentialsInput,
} from "@alijunior/nuvemfiscal-sdk-node";

const input: ClientCredentialsInput = {
  tokenUrl: process.env.TOKEN_URL!,
  clientId: process.env.CLIENT_ID!,
  clientSecret: process.env.CLIENT_SECRET!,
  scope: process.env.SCOPE,
  authStyle: "auto", // tenta basic e cai para Body em 400/401
};

const token = await getClientCredentialsToken(input);
console.log("access_token:", token.access_token, "exp:", token.expires_in);
```

### 2) `getAccessTokenString` (Node – apenas a string)

Wrap prático quando você só precisa do `access_token`.

```ts
import { getAccessTokenString } from "@alijunior/nuvemfiscal-sdk-node";

const accessToken = await getAccessTokenString({
  tokenUrl: process.env.TOKEN_URL!,
  clientId: process.env.CLIENT_ID!,
  clientSecret: process.env.CLIENT_SECRET!,
  scope: process.env.SCOPE!,
});
```

### 3) `getNuvemFiscalTokenForBrowser` (Browser – **somente testes**)

Útil para provar fluxo no front **localmente**. **Não use em produção** (expõe o `client_secret`).

```ts
import { getNuvemFiscalTokenForBrowser } from "@alijunior/nuvemfiscal-sdk-node";

const accessToken = await getNuvemFiscalTokenForBrowser(
  "CLIENT_ID",
  "CLIENT_SECRET",
  "https://auth.nuvemfiscal.com.br/oauth/token", // default
  "empresa conta cnpj cep nfce nfe" // default
);
```

---

## Usando o Client com o Token

### Com `fetch` (nativo Node 18+)

```ts
import {
  NuvemFiscalClient,
  FetchHttpClient,
  getAccessTokenString,
} from "@alijunior/nuvemfiscal-sdk-node";

const accessToken = await getAccessTokenString({
  tokenUrl: process.env.TOKEN_URL!,
  clientId: process.env.CLIENT_ID!,
  clientSecret: process.env.CLIENT_SECRET!,
  scope: process.env.SCOPE!,
});

const http = new FetchHttpClient({
  headers: { Authorization: `Bearer ${accessToken}` },
});

const api = new NuvemFiscalClient(http, process.env.API_BASE!);

// CEP
const cep = await api.consultarCep({ Cep: "04513010" });
console.log("CEP:", cep);

// CNPJ (exemplo)
const cnpjList = await api.listarCnpj({
  cnae_principal: "6201501",
  municipio: "3550308",
  natureza_juridica: "2062",
  $top: 5,
  $skip: 0,
  $inlinecount: false,
});
console.log("CNPJ:", cnpjList);
```

### Com `axios` (opcional)

```ts
import axios from "axios";
import {
  NuvemFiscalClient,
  AxiosHttpClient,
  getAccessTokenString,
} from "@alijunior/nuvemfiscal-sdk-node";

const accessToken = await getAccessTokenString({
  tokenUrl: process.env.TOKEN_URL!,
  clientId: process.env.CLIENT_ID!,
  clientSecret: process.env.CLIENT_SECRET!,
});

const axiosInstance = axios.create({
  headers: { Authorization: `Bearer ${accessToken}` },
});

const http = new AxiosHttpClient(axiosInstance);
const api = new NuvemFiscalClient(http, process.env.API_BASE!);

// exemplo
const cep = await api.consultarCep({ Cep: "01001000" });
```

---

## Tratamento de erros (exemplo)

Os adapters levantam `Error` com `status` e, se presente, `body`.

```ts
function printHttpError(e: unknown, ctx?: string) {
  const status = (e as any)?.status;
  const msg =
    (e as any)?.body?.error?.message ??
    (e as any)?.body?.message ??
    (e as Error)?.message ??
    String(e);

  console.error(
    `${ctx ? ctx + ": " : ""}${status ? status + " - " : ""}${msg}`
  );
}

try {
  const res = await api.listarCnpj({
    /* ... */
  });
} catch (e) {
  printHttpError(e, "Falha ao listar CNPJ");
}
```

---

## Tipos úteis (reexportados)

```ts
import type {
  CepEndereco,
  CnpjListagem,
  CnpjEmpresa,
  ContaCotaListagem,
  ContaCota,
  EmpresaListagem,
  Empresa,
  EmpresaCertificado,
  NfePedidoEmissao,
  Dfe,
  NfePedidoCancelamento,
  DfeCancelamento,
  EmpresaPedidoCadastroCertificado,
} from "@alijunior/nuvemfiscal-sdk-node";
```

> Os tipos de **params/query/body/response** dos métodos são inferidos das **operations**/**paths** do OpenAPI. Se o contrato mudar, o TypeScript aponta onde ajustar.

---

## Download de binarios

```typescript
import { writeFile } from "node:fs/promises";
import { arrayBufferToNodeBuffer } from "../types/nuvem-fiscal-api.httpclient";

// Node: para salvar o arquivo

const pdf = await api.baixarPdfNfe({ id: "..." });
await writeFile("nota.pdf", arrayBufferToNodeBuffer(pdf));
```

```typescript
// Browser: para baixar

const ab = await api.baixarPdfNfe({ id: "..." });
const blob = new Blob([ab], { type: "application/pdf" });
const url = URL.createObjectURL(blob);
const a = document.createElement("a");
a.href = url;
a.download = "nota.pdf";
a.click();
URL.revokeObjectURL(url);
```

---

## Desenvolvimento

```bash
# exemplos locais (usando .env)
pnpm test

# build da lib
pnpm build
```

---

## Segurança

- **Nunca** exponha `CLIENT_SECRET` no front em produção.
- Faça a emissão de token **no backend** e envie apenas o `access_token` ao cliente.
- Rotacione/Revogue credenciais comprometidas.

---

## Licença

[MIT](./LICENSE)
