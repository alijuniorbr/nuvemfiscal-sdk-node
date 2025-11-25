// src/types/nuvem-fiscal-api.core-types.ts

/** Conjunto de códigos 2xx considerados sucesso */
export type SuccessHttpStatus =
  | 200
  | 201
  | 202
  | 203
  | 204
  | 205
  | 206
  | 207
  | 208
  | 226;

// Helpers para extrair partes das operations -------------------------------
// (Mantidos apenas se forem úteis genericamente, mas sem dependência de models)
// Como removemos models, operations não existe mais aqui.

export type ResponseOf<T> = any; // Placeholder ou remover se não usado.
// Na verdade, ResponseOf era usado em interfaces.ts, mas eu removi o uso lá.
// Verifiquei que interfaces.ts não usa mais ResponseOf.
// O client usa ResponseOf? Não, o client usa *Result.
// Então podemos limpar quase tudo aqui.

// Se houver algum lugar usando ResponseOf, vai quebrar.
// O arquivo nuvem-fiscal-client.ts usa ResponseOf?
// Eu refatorei para usar *Result.
// Vamos verificar se sobrou algo.
