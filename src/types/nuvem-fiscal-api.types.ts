// src/types/nuvem-fiscal-api.core-types.ts
import type {
  operations as OperationsNS,
  definitions,
} from "./nuvem-fiscal-api.models";

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
type ResponsesOf<T> = T extends { responses: infer R } ? R : never;
type ParamsOf<T> = T extends { parameters: infer P } ? P : never;

export type PathParamsOf<T> = ParamsOf<T> extends { path: infer A } ? A : never;
export type QueryParamsOf<T> = ParamsOf<T> extends { query: infer A }
  ? A
  : never;
export type BodyOf<T> = ParamsOf<T> extends { body: infer A } ? A : never;

// Dado um responses e um status, obter o schema (ou void se não existir)
type SchemaFromResponse<R, C> = C extends keyof R
  ? R[C] extends { schema: infer S }
    ? unknown extends S
      ? void
      : S // alguns geradores colocam unknown
    : void
  : void;

// Unir os schemas de todos os 2xx (se houver 204 sem body -> vira void)
export type ResponseOf<T> = ResponsesOf<T> extends infer R
  ? Extract<keyof (R & {}), SuccessHttpStatus> extends infer C // intersecção segura
    ? C extends number
      ? SchemaFromResponse<R & {}, C>
      : void
    : void
  : void;

// Conveniência para referenciar Operations do seu OpenAPI
export type Operations = OperationsNS;

export type CepEndereco = definitions["CepEndereco"];
export type CnpjListagem = definitions["CnpjListagem"];
export type CnpjEmpresa = definitions["CnpjEmpresa"];
export type ContaCotaListagem = definitions["ContaCotaListagem"];
export type ContaCota = definitions["ContaCota"];
export type EmpresaListagem = definitions["EmpresaListagem"];
export type Empresa = definitions["Empresa"];
export type EmpresaCertificado = definitions["EmpresaCertificado"];
export type NfePedidoEmissao = definitions["NfePedidoEmissao"];
export type Dfe = definitions["Dfe"];
export type NfePedidoCancelamento = definitions["NfePedidoCancelamento"];
export type DfeCancelamento = definitions["DfeCancelamento"];
export type EmpresaPedidoCadastroCertificado =
  definitions["EmpresaPedidoCadastroCertificado"];
