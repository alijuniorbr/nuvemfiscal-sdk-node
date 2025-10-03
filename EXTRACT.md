# nuvemfiscal-sdk-node

No início da documentação da **_API Nuvem Fiscal_** tem um link para baixar o arquivo `swagger.json`.

- Documentação da API: https://dev.nuvemfiscal.com.br/docs/api/
- Swagger JSON: https://api.nuvemfiscal.com.br/openapi/swagger.json

Esse arquivo está em formato `Swagger 2.0` e não é mais suportado pelos pacotes mais recentes da `openapi-typescript`

Se você baixar o arquivo `swagger.json` e tentar executar em algum repositório os comandos abaixo:

```bash
➜ npm install -D openapi-typescript

devDependencies:
+ openapi-typescript ^7.9.1

➜ npx openapi-typescript ./openapi/swagger.json --output ./types/nuvem-fiscal-api.models.ts
```

Vai receber o erro:

```bash
✨ openapi-typescript 7.9.1

throw new Error("Unsupported Swagger version: 2.x. Use OpenAPI 3.x instead.")
      ^
```

Tive outras tentativas não documentadas de traduzir o formato do aquivo através do `swagger-cli` porém também sem sucesso.

Para contornar esse erro precisei executar:

```bash
➜ npx openapi-typescript@5 ./openapi/swagger.json -o ./types/nuvem-fiscal-api.models.ts

Need to install the following packages:
openapi-typescript@5.4.2
Ok to proceed? (y) y

✨ openapi-typescript 5.4.2

🚀 ./openapi/swagger.json -> ./types/nuvem-fiscal-api.models.ts [496ms]
```

Então finalmente consegui extrair os modelos definidos na documentação em formato **_Swagger 2.x_**.

---

Então criei o arquivo `nuvem-fiscal-api.types.ts` como alias para os tipos extraídos, e o arquivo `nuvem-fiscal-client.ts` que implementa os métodos disponibilizados na api. Criei também os utilitários de aquisição de token.
