/**
 * Cliente de API completo para Nuvem Fiscal.
 *
 * Este arquivo contém a classe `NuvemFiscalApi` que implementa todas as chamadas
 * para os endpoints da API, usando a interface NuvemFiscalHttpClient.
 *
 * Pré-requisito: o arquivo `nuvem-fiscal-api.types.ts` com todas as interfaces
 * geradas deve existir e ser importado.
 */

// AUTO-GENERATED thin client from openapi-typescript models.
// Do not edit by hand. Regenerate if the OpenAPI spec changes.

import { ResponseOf } from "../types/nuvem-fiscal-api.types";
import { NuvemFiscalHttpClient } from "../types/nuvem-fiscal-api.httpclient";
import { operations as Operations } from "../types/nuvem-fiscal-api.models";

export class NuvemFiscalClient {
  constructor(private http: NuvemFiscalHttpClient, private baseUrl: string) {}

  /** Auto-generated for /cep/{Cep} [GET] -> operations["ConsultarCep"] */
  async consultarCep(
    params: Operations["ConsultarCep"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarCep"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarCep"]>>(
      `${this.baseUrl}/cep/${encodeURIComponent(params.Cep)}`
    );
  }
  /** Auto-generated for /cnpj [GET] -> operations["ListarCnpj"] */
  async listarCnpj(
    query?: Operations["ListarCnpj"]["parameters"]["query"]
  ): Promise<ResponseOf<Operations["ListarCnpj"]>> {
    return this.http.get<ResponseOf<Operations["ListarCnpj"]>>(
      `${this.baseUrl}/cnpj`,
      query
    );
  }
  /** Auto-generated for /cnpj/{Cnpj} [GET] -> operations["ConsultarCnpj"] */
  async consultarCnpj(
    params: Operations["ConsultarCnpj"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarCnpj"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarCnpj"]>>(
      `${this.baseUrl}/cnpj/${encodeURIComponent(params.Cnpj)}`
    );
  }
  /** Auto-generated for /conta/cotas [GET] -> operations["ListarCotasConta"] */
  async listarCotasConta(): Promise<
    ResponseOf<Operations["ListarCotasConta"]>
  > {
    return this.http.get<ResponseOf<Operations["ListarCotasConta"]>>(
      `${this.baseUrl}/conta/cotas`
    );
  }
  /** Auto-generated for /conta/cotas/{nome} [GET] -> operations["ConsultarCotaConta"] */
  async consultarCotaConta(
    params: Operations["ConsultarCotaConta"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarCotaConta"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarCotaConta"]>>(
      `${this.baseUrl}/conta/cotas/${encodeURIComponent(params.nome)}`
    );
  }
  /** Auto-generated for /cte [GET] -> operations["ListarCte"] */
  async listarCte(
    query?: Operations["ListarCte"]["parameters"]["query"]
  ): Promise<ResponseOf<Operations["ListarCte"]>> {
    return this.http.get<ResponseOf<Operations["ListarCte"]>>(
      `${this.baseUrl}/cte`,
      query
    );
  }
  /** Auto-generated for /cte [POST] -> operations["EmitirCte"] */
  async emitirCte(
    body: Operations["EmitirCte"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["EmitirCte"]>> {
    return this.http.post<ResponseOf<Operations["EmitirCte"]>>(
      `${this.baseUrl}/cte`,
      body
    );
  }
  /** Auto-generated for /cte/eventos/{id} [GET] -> operations["ConsultarEventoCte"] */
  async consultarEventoCte(
    params: Operations["ConsultarEventoCte"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarEventoCte"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarEventoCte"]>>(
      `${this.baseUrl}/cte/eventos/${encodeURIComponent(params.id)}`
    );
  }
  /** Auto-generated for /cte/sefaz/status [GET] -> operations["ConsultarStatusSefazCte"] */
  async consultarStatusSefazCte(
    query?: Operations["ConsultarStatusSefazCte"]["parameters"]["query"]
  ): Promise<ResponseOf<Operations["ConsultarStatusSefazCte"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarStatusSefazCte"]>>(
      `${this.baseUrl}/cte/sefaz/status`,
      query
    );
  }
  /** Auto-generated for /cte/simp [POST] -> operations["EmitirCteSimp"] */
  async emitirCteSimp(
    body: Operations["EmitirCteSimp"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["EmitirCteSimp"]>> {
    return this.http.post<ResponseOf<Operations["EmitirCteSimp"]>>(
      `${this.baseUrl}/cte/simp`,
      body
    );
  }
  /** Auto-generated for /cte/{id} [GET] -> operations["ConsultarCte"] */
  async consultarCte(
    params: Operations["ConsultarCte"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarCte"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarCte"]>>(
      `${this.baseUrl}/cte/${encodeURIComponent(params.id)}`
    );
  }
  /** Auto-generated for /cte/{id}/cancelamento [GET] -> operations["ConsultarCancelamentoCte"] */
  async consultarCancelamentoCte(
    params: Operations["ConsultarCancelamentoCte"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarCancelamentoCte"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarCancelamentoCte"]>>(
      `${this.baseUrl}/cte/${encodeURIComponent(params.id)}/cancelamento`
    );
  }
  /** Auto-generated for /cte/{id}/cancelamento [POST] -> operations["CancelarCte"] */
  async cancelarCte(
    params: Operations["CancelarCte"]["parameters"]["path"],
    body: Operations["CancelarCte"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["CancelarCte"]>> {
    return this.http.post<ResponseOf<Operations["CancelarCte"]>>(
      `${this.baseUrl}/cte/${encodeURIComponent(params.id)}/cancelamento`,
      body
    );
  }
  /** Auto-generated for /cte/{id}/carta-correcao [GET] -> operations["ConsultarCartaCorrecaoCte"] */
  async consultarCartaCorrecaoCte(
    params: Operations["ConsultarCartaCorrecaoCte"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarCartaCorrecaoCte"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarCartaCorrecaoCte"]>>(
      `${this.baseUrl}/cte/${encodeURIComponent(params.id)}/carta-correcao`
    );
  }
  /** Auto-generated for /cte/{id}/carta-correcao [POST] -> operations["CriarCartaCorrecaoCte"] */
  async criarCartaCorrecaoCte(
    params: Operations["CriarCartaCorrecaoCte"]["parameters"]["path"],
    body: Operations["CriarCartaCorrecaoCte"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["CriarCartaCorrecaoCte"]>> {
    return this.http.post<ResponseOf<Operations["CriarCartaCorrecaoCte"]>>(
      `${this.baseUrl}/cte/${encodeURIComponent(params.id)}/carta-correcao`,
      body
    );
  }
  /** Auto-generated for /cte/{id}/sincronizar [POST] -> operations["SincronizarCte"] */
  async sincronizarCte(
    params: Operations["SincronizarCte"]["parameters"]["path"],
    body?: any
  ): Promise<ResponseOf<Operations["SincronizarCte"]>> {
    return this.http.post<ResponseOf<Operations["SincronizarCte"]>>(
      `${this.baseUrl}/cte/${encodeURIComponent(params.id)}/sincronizar`,
      body
    );
  }
  /** Auto-generated for /cteos [GET] -> operations["ListarCteOs"] */
  async listarCteOs(
    query?: Operations["ListarCteOs"]["parameters"]["query"]
  ): Promise<ResponseOf<Operations["ListarCteOs"]>> {
    return this.http.get<ResponseOf<Operations["ListarCteOs"]>>(
      `${this.baseUrl}/cteos`,
      query
    );
  }
  /** Auto-generated for /cteos [POST] -> operations["EmitirCteOs"] */
  async emitirCteOs(
    body: Operations["EmitirCteOs"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["EmitirCteOs"]>> {
    return this.http.post<ResponseOf<Operations["EmitirCteOs"]>>(
      `${this.baseUrl}/cteos`,
      body
    );
  }
  /** Auto-generated for /cteos/eventos/{id} [GET] -> operations["ConsultarEventoCteOs"] */
  async consultarEventoCteOs(
    params: Operations["ConsultarEventoCteOs"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarEventoCteOs"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarEventoCteOs"]>>(
      `${this.baseUrl}/cteos/eventos/${encodeURIComponent(params.id)}`
    );
  }
  /** Auto-generated for /cteos/sefaz/status [GET] -> operations["ConsultarStatusSefazCteOs"] */
  async consultarStatusSefazCteOs(
    query?: Operations["ConsultarStatusSefazCteOs"]["parameters"]["query"]
  ): Promise<ResponseOf<Operations["ConsultarStatusSefazCteOs"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarStatusSefazCteOs"]>>(
      `${this.baseUrl}/cteos/sefaz/status`,
      query
    );
  }
  /** Auto-generated for /cteos/{id} [GET] -> operations["ConsultarCteOs"] */
  async consultarCteOs(
    params: Operations["ConsultarCteOs"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarCteOs"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarCteOs"]>>(
      `${this.baseUrl}/cteos/${encodeURIComponent(params.id)}`
    );
  }
  /** Auto-generated for /cteos/{id}/cancelamento [GET] -> operations["ConsultarCancelamentoCteOs"] */
  async consultarCancelamentoCteOs(
    params: Operations["ConsultarCancelamentoCteOs"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarCancelamentoCteOs"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarCancelamentoCteOs"]>>(
      `${this.baseUrl}/cteos/${encodeURIComponent(params.id)}/cancelamento`
    );
  }
  /** Auto-generated for /cteos/{id}/cancelamento [POST] -> operations["CancelarCteOs"] */
  async cancelarCteOs(
    params: Operations["CancelarCteOs"]["parameters"]["path"],
    body: Operations["CancelarCteOs"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["CancelarCteOs"]>> {
    return this.http.post<ResponseOf<Operations["CancelarCteOs"]>>(
      `${this.baseUrl}/cteos/${encodeURIComponent(params.id)}/cancelamento`,
      body
    );
  }
  /** Auto-generated for /cteos/{id}/carta-correcao [GET] -> operations["ConsultarCartaCorrecaoCteOs"] */
  async consultarCartaCorrecaoCteOs(
    params: Operations["ConsultarCartaCorrecaoCteOs"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarCartaCorrecaoCteOs"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarCartaCorrecaoCteOs"]>>(
      `${this.baseUrl}/cteos/${encodeURIComponent(params.id)}/carta-correcao`
    );
  }
  /** Auto-generated for /cteos/{id}/carta-correcao [POST] -> operations["CriarCartaCorrecaoCteOs"] */
  async criarCartaCorrecaoCteOs(
    params: Operations["CriarCartaCorrecaoCteOs"]["parameters"]["path"],
    body: Operations["CriarCartaCorrecaoCteOs"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["CriarCartaCorrecaoCteOs"]>> {
    return this.http.post<ResponseOf<Operations["CriarCartaCorrecaoCteOs"]>>(
      `${this.baseUrl}/cteos/${encodeURIComponent(params.id)}/carta-correcao`,
      body
    );
  }
  /** Auto-generated for /cteos/{id}/sincronizar [POST] -> operations["SincronizarCteOs"] */
  async sincronizarCteOs(
    params: Operations["SincronizarCteOs"]["parameters"]["path"],
    body?: any
  ): Promise<ResponseOf<Operations["SincronizarCteOs"]>> {
    return this.http.post<ResponseOf<Operations["SincronizarCteOs"]>>(
      `${this.baseUrl}/cteos/${encodeURIComponent(params.id)}/sincronizar`,
      body
    );
  }
  /** Auto-generated for /dce [GET] -> operations["ListarDce"] */
  async listarDce(
    query?: Operations["ListarDce"]["parameters"]["query"]
  ): Promise<ResponseOf<Operations["ListarDce"]>> {
    return this.http.get<ResponseOf<Operations["ListarDce"]>>(
      `${this.baseUrl}/dce`,
      query
    );
  }
  /** Auto-generated for /dce [POST] -> operations["EmitirDce"] */
  async emitirDce(
    body: Operations["EmitirDce"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["EmitirDce"]>> {
    return this.http.post<ResponseOf<Operations["EmitirDce"]>>(
      `${this.baseUrl}/dce`,
      body
    );
  }
  /** Auto-generated for /dce/sefaz/status [GET] -> operations["ConsultarStatusSefazDce"] */
  async consultarStatusSefazDce(
    query?: Operations["ConsultarStatusSefazDce"]["parameters"]["query"]
  ): Promise<ResponseOf<Operations["ConsultarStatusSefazDce"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarStatusSefazDce"]>>(
      `${this.baseUrl}/dce/sefaz/status`,
      query
    );
  }
  /** Auto-generated for /dce/{id} [GET] -> operations["ConsultarDce"] */
  async consultarDce(
    params: Operations["ConsultarDce"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarDce"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarDce"]>>(
      `${this.baseUrl}/dce/${encodeURIComponent(params.id)}`
    );
  }
  /** Auto-generated for /dce/{id}/cancelamento [GET] -> operations["ConsultarCancelamentoDce"] */
  async consultarCancelamentoDce(
    params: Operations["ConsultarCancelamentoDce"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarCancelamentoDce"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarCancelamentoDce"]>>(
      `${this.baseUrl}/dce/${encodeURIComponent(params.id)}/cancelamento`
    );
  }
  /** Auto-generated for /dce/{id}/cancelamento [POST] -> operations["CancelarDce"] */
  async cancelarDce(
    params: Operations["CancelarDce"]["parameters"]["path"],
    body: Operations["CancelarDce"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["CancelarDce"]>> {
    return this.http.post<ResponseOf<Operations["CancelarDce"]>>(
      `${this.baseUrl}/dce/${encodeURIComponent(params.id)}/cancelamento`,
      body
    );
  }
  /** Auto-generated for /debug/http-requests/{id}/request-content [GET] -> operations["DebugHttpRequestContent"] */
  async debugHttpRequestContent(
    params: Operations["DebugHttpRequestContent"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["DebugHttpRequestContent"]>> {
    return this.http.get<ResponseOf<Operations["DebugHttpRequestContent"]>>(
      `${this.baseUrl}/debug/http-requests/${encodeURIComponent(
        params.id
      )}/request-content`
    );
  }
  /** Auto-generated for /debug/http-requests/{id}/response-content [GET] -> operations["DebugHttpResponseContent"] */
  async debugHttpResponseContent(
    params: Operations["DebugHttpResponseContent"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["DebugHttpResponseContent"]>> {
    return this.http.get<ResponseOf<Operations["DebugHttpResponseContent"]>>(
      `${this.baseUrl}/debug/http-requests/${encodeURIComponent(
        params.id
      )}/response-content`
    );
  }
  /** Auto-generated for /debug/{id} [GET] -> operations["DebugDfe"] */
  async debugDfe(
    params: Operations["DebugDfe"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["DebugDfe"]>> {
    return this.http.get<ResponseOf<Operations["DebugDfe"]>>(
      `${this.baseUrl}/debug/${encodeURIComponent(params.id)}`
    );
  }
  /** Auto-generated for /debug/{id}/original-payload [GET] -> operations["DebugDfeOriginalPayload"] */
  async debugDfeOriginalPayload(
    params: Operations["DebugDfeOriginalPayload"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["DebugDfeOriginalPayload"]>> {
    return this.http.get<ResponseOf<Operations["DebugDfeOriginalPayload"]>>(
      `${this.baseUrl}/debug/${encodeURIComponent(params.id)}/original-payload`
    );
  }
  /** Auto-generated for /distribuicao/nfe [GET] -> operations["ListarDistribuicaoNfe"] */
  async listarDistribuicaoNfe(
    query?: Operations["ListarDistribuicaoNfe"]["parameters"]["query"]
  ): Promise<ResponseOf<Operations["ListarDistribuicaoNfe"]>> {
    return this.http.get<ResponseOf<Operations["ListarDistribuicaoNfe"]>>(
      `${this.baseUrl}/distribuicao/nfe`,
      query
    );
  }
  /** Auto-generated for /distribuicao/nfe [POST] -> operations["GerarDistribuicaoNfe"] */
  async gerarDistribuicaoNfe(
    body: Operations["GerarDistribuicaoNfe"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["GerarDistribuicaoNfe"]>> {
    return this.http.post<ResponseOf<Operations["GerarDistribuicaoNfe"]>>(
      `${this.baseUrl}/distribuicao/nfe`,
      body
    );
  }
  /** Auto-generated for /distribuicao/nfe/documentos [GET] -> operations["ListarDocumentoDistribuicaoNfe"] */
  async listarDocumentoDistribuicaoNfe(
    query?: Operations["ListarDocumentoDistribuicaoNfe"]["parameters"]["query"]
  ): Promise<ResponseOf<Operations["ListarDocumentoDistribuicaoNfe"]>> {
    return this.http.get<
      ResponseOf<Operations["ListarDocumentoDistribuicaoNfe"]>
    >(`${this.baseUrl}/distribuicao/nfe/documentos`, query);
  }
  /** Auto-generated for /distribuicao/nfe/documentos/{id} [GET] -> operations["ConsultarDocumentoDistribuicaoNfe"] */
  async consultarDocumentoDistribuicaoNfe(
    params: Operations["ConsultarDocumentoDistribuicaoNfe"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarDocumentoDistribuicaoNfe"]>> {
    return this.http.get<
      ResponseOf<Operations["ConsultarDocumentoDistribuicaoNfe"]>
    >(
      `${this.baseUrl}/distribuicao/nfe/documentos/${encodeURIComponent(
        params.id
      )}`
    );
  }
  /** Auto-generated for /distribuicao/nfe/manifestacoes [GET] -> operations["ListarManifestacaoNfe"] */
  async listarManifestacaoNfe(
    query?: Operations["ListarManifestacaoNfe"]["parameters"]["query"]
  ): Promise<ResponseOf<Operations["ListarManifestacaoNfe"]>> {
    return this.http.get<ResponseOf<Operations["ListarManifestacaoNfe"]>>(
      `${this.baseUrl}/distribuicao/nfe/manifestacoes`,
      query
    );
  }
  /** Auto-generated for /distribuicao/nfe/manifestacoes [POST] -> operations["ManifestarNfe"] */
  async manifestarNfe(
    body: Operations["ManifestarNfe"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["ManifestarNfe"]>> {
    return this.http.post<ResponseOf<Operations["ManifestarNfe"]>>(
      `${this.baseUrl}/distribuicao/nfe/manifestacoes`,
      body
    );
  }
  /** Auto-generated for /distribuicao/nfe/manifestacoes/{id} [GET] -> operations["ConsultarManifestacaoNfe"] */
  async consultarManifestacaoNfe(
    params: Operations["ConsultarManifestacaoNfe"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarManifestacaoNfe"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarManifestacaoNfe"]>>(
      `${this.baseUrl}/distribuicao/nfe/manifestacoes/${encodeURIComponent(
        params.id
      )}`
    );
  }
  /** Auto-generated for /distribuicao/nfe/notas-sem-manifestacao [GET] -> operations["ListarNfeSemManifestacao"] */
  async listarNfeSemManifestacao(
    query?: Operations["ListarNfeSemManifestacao"]["parameters"]["query"]
  ): Promise<ResponseOf<Operations["ListarNfeSemManifestacao"]>> {
    return this.http.get<ResponseOf<Operations["ListarNfeSemManifestacao"]>>(
      `${this.baseUrl}/distribuicao/nfe/notas-sem-manifestacao`,
      query
    );
  }
  /** Auto-generated for /distribuicao/nfe/{id} [GET] -> operations["ConsultarDistribuicaoNfe"] */
  async consultarDistribuicaoNfe(
    params: Operations["ConsultarDistribuicaoNfe"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarDistribuicaoNfe"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarDistribuicaoNfe"]>>(
      `${this.baseUrl}/distribuicao/nfe/${encodeURIComponent(params.id)}`
    );
  }
  /** Auto-generated for /emails [GET] -> operations["ListarEmails"] */
  async listarEmails(
    query?: Operations["ListarEmails"]["parameters"]["query"]
  ): Promise<ResponseOf<Operations["ListarEmails"]>> {
    return this.http.get<ResponseOf<Operations["ListarEmails"]>>(
      `${this.baseUrl}/emails`,
      query
    );
  }
  /** Auto-generated for /emails/{id} [GET] -> operations["ConsultarEmail"] */
  async consultarEmail(
    params: Operations["ConsultarEmail"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarEmail"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarEmail"]>>(
      `${this.baseUrl}/emails/${encodeURIComponent(params.id)}`
    );
  }
  /** Auto-generated for /empresas [GET] -> operations["ListarEmpresas"] */
  async listarEmpresas(
    query?: Operations["ListarEmpresas"]["parameters"]["query"]
  ): Promise<ResponseOf<Operations["ListarEmpresas"]>> {
    return this.http.get<ResponseOf<Operations["ListarEmpresas"]>>(
      `${this.baseUrl}/empresas`,
      query
    );
  }
  /** Auto-generated for /empresas [POST] -> operations["CriarEmpresa"] */
  async criarEmpresa(
    body: Operations["CriarEmpresa"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["CriarEmpresa"]>> {
    return this.http.post<ResponseOf<Operations["CriarEmpresa"]>>(
      `${this.baseUrl}/empresas`,
      body
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj} [GET] -> operations["ConsultarEmpresa"] */
  async consultarEmpresa(
    params: Operations["ConsultarEmpresa"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarEmpresa"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarEmpresa"]>>(
      `${this.baseUrl}/empresas/${encodeURIComponent(params.cpf_cnpj)}`
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj} [PUT] -> operations["AtualizarEmpresa"] */
  async atualizarEmpresa(
    params: Operations["AtualizarEmpresa"]["parameters"]["path"],
    body: Operations["AtualizarEmpresa"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["AtualizarEmpresa"]>> {
    return this.http.put<ResponseOf<Operations["AtualizarEmpresa"]>>(
      `${this.baseUrl}/empresas/${encodeURIComponent(params.cpf_cnpj)}`,
      body
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj} [DELETE] -> operations["ExcluirEmpresa"] */
  async excluirEmpresa(
    params: Operations["ExcluirEmpresa"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ExcluirEmpresa"]>> {
    return this.http.delete<ResponseOf<Operations["ExcluirEmpresa"]>>(
      `${this.baseUrl}/empresas/${encodeURIComponent(params.cpf_cnpj)}`
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/certificado [GET] -> operations["ConsultarCertificadoEmpresa"] */
  async consultarCertificadoEmpresa(
    params: Operations["ConsultarCertificadoEmpresa"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarCertificadoEmpresa"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarCertificadoEmpresa"]>>(
      `${this.baseUrl}/empresas/${encodeURIComponent(
        params.cpf_cnpj
      )}/certificado`
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/certificado [PUT] -> operations["CadastrarCertificadoEmpresa"] */
  async cadastrarCertificadoEmpresa(
    params: Operations["CadastrarCertificadoEmpresa"]["parameters"]["path"],
    body: Operations["CadastrarCertificadoEmpresa"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["CadastrarCertificadoEmpresa"]>> {
    return this.http.put<ResponseOf<Operations["CadastrarCertificadoEmpresa"]>>(
      `${this.baseUrl}/empresas/${encodeURIComponent(
        params.cpf_cnpj
      )}/certificado`,
      body
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/certificado [DELETE] -> operations["ExcluirCertificadoEmpresa"] */
  async excluirCertificadoEmpresa(
    params: Operations["ExcluirCertificadoEmpresa"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ExcluirCertificadoEmpresa"]>> {
    return this.http.delete<
      ResponseOf<Operations["ExcluirCertificadoEmpresa"]>
    >(
      `${this.baseUrl}/empresas/${encodeURIComponent(
        params.cpf_cnpj
      )}/certificado`
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/certificado/upload [PUT] -> operations["EnviarCertificadoEmpresa"] */
  async enviarCertificadoEmpresa(
    params: Operations["EnviarCertificadoEmpresa"]["parameters"]["path"],
    body?: any
  ): Promise<ResponseOf<Operations["EnviarCertificadoEmpresa"]>> {
    return this.http.put<ResponseOf<Operations["EnviarCertificadoEmpresa"]>>(
      `${this.baseUrl}/empresas/${encodeURIComponent(
        params.cpf_cnpj
      )}/certificado/upload`,
      body
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/cte [GET] -> operations["ConsultarConfigCte"] */
  async consultarConfigCte(
    params: Operations["ConsultarConfigCte"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarConfigCte"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarConfigCte"]>>(
      `${this.baseUrl}/empresas/${encodeURIComponent(params.cpf_cnpj)}/cte`
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/cte [PUT] -> operations["AlterarConfigCte"] */
  async alterarConfigCte(
    params: Operations["AlterarConfigCte"]["parameters"]["path"],
    body: Operations["AlterarConfigCte"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["AlterarConfigCte"]>> {
    return this.http.put<ResponseOf<Operations["AlterarConfigCte"]>>(
      `${this.baseUrl}/empresas/${encodeURIComponent(params.cpf_cnpj)}/cte`,
      body
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/cteos [GET] -> operations["ConsultarConfigCteOs"] */
  async consultarConfigCteOs(
    params: Operations["ConsultarConfigCteOs"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarConfigCteOs"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarConfigCteOs"]>>(
      `${this.baseUrl}/empresas/${encodeURIComponent(params.cpf_cnpj)}/cteos`
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/cteos [PUT] -> operations["AlterarConfigCteOs"] */
  async alterarConfigCteOs(
    params: Operations["AlterarConfigCteOs"]["parameters"]["path"],
    body: Operations["AlterarConfigCteOs"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["AlterarConfigCteOs"]>> {
    return this.http.put<ResponseOf<Operations["AlterarConfigCteOs"]>>(
      `${this.baseUrl}/empresas/${encodeURIComponent(params.cpf_cnpj)}/cteos`,
      body
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/dce [GET] -> operations["ConsultarConfigDce"] */
  async consultarConfigDce(
    params: Operations["ConsultarConfigDce"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarConfigDce"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarConfigDce"]>>(
      `${this.baseUrl}/empresas/${encodeURIComponent(params.cpf_cnpj)}/dce`
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/dce [PUT] -> operations["AlterarConfigDce"] */
  async alterarConfigDce(
    params: Operations["AlterarConfigDce"]["parameters"]["path"],
    body: Operations["AlterarConfigDce"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["AlterarConfigDce"]>> {
    return this.http.put<ResponseOf<Operations["AlterarConfigDce"]>>(
      `${this.baseUrl}/empresas/${encodeURIComponent(params.cpf_cnpj)}/dce`,
      body
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/distnfe [GET] -> operations["ConsultarConfigDistribuicaoNfe"] */
  async consultarConfigDistribuicaoNfe(
    params: Operations["ConsultarConfigDistribuicaoNfe"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarConfigDistribuicaoNfe"]>> {
    return this.http.get<
      ResponseOf<Operations["ConsultarConfigDistribuicaoNfe"]>
    >(
      `${this.baseUrl}/empresas/${encodeURIComponent(params.cpf_cnpj)}/distnfe`
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/distnfe [PUT] -> operations["AlterarConfigDistribuicaoNfe"] */
  async alterarConfigDistribuicaoNfe(
    params: Operations["AlterarConfigDistribuicaoNfe"]["parameters"]["path"],
    body: Operations["AlterarConfigDistribuicaoNfe"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["AlterarConfigDistribuicaoNfe"]>> {
    return this.http.put<
      ResponseOf<Operations["AlterarConfigDistribuicaoNfe"]>
    >(
      `${this.baseUrl}/empresas/${encodeURIComponent(params.cpf_cnpj)}/distnfe`,
      body
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/logotipo [PUT] -> operations["EnviarLogotipoEmpresa"] */
  async enviarLogotipoEmpresa(
    params: Operations["EnviarLogotipoEmpresa"]["parameters"]["path"],
    body?: any
  ): Promise<ResponseOf<Operations["EnviarLogotipoEmpresa"]>> {
    return this.http.put<ResponseOf<Operations["EnviarLogotipoEmpresa"]>>(
      `${this.baseUrl}/empresas/${encodeURIComponent(
        params.cpf_cnpj
      )}/logotipo`,
      body
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/logotipo [DELETE] -> operations["ExcluirLogotipoEmpresa"] */
  async excluirLogotipoEmpresa(
    params: Operations["ExcluirLogotipoEmpresa"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ExcluirLogotipoEmpresa"]>> {
    return this.http.delete<ResponseOf<Operations["ExcluirLogotipoEmpresa"]>>(
      `${this.baseUrl}/empresas/${encodeURIComponent(params.cpf_cnpj)}/logotipo`
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/mdfe [GET] -> operations["ConsultarConfigMdfe"] */
  async consultarConfigMdfe(
    params: Operations["ConsultarConfigMdfe"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarConfigMdfe"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarConfigMdfe"]>>(
      `${this.baseUrl}/empresas/${encodeURIComponent(params.cpf_cnpj)}/mdfe`
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/mdfe [PUT] -> operations["AlterarConfigMdfe"] */
  async alterarConfigMdfe(
    params: Operations["AlterarConfigMdfe"]["parameters"]["path"],
    body: Operations["AlterarConfigMdfe"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["AlterarConfigMdfe"]>> {
    return this.http.put<ResponseOf<Operations["AlterarConfigMdfe"]>>(
      `${this.baseUrl}/empresas/${encodeURIComponent(params.cpf_cnpj)}/mdfe`,
      body
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/nfce [GET] -> operations["ConsultarConfigNfce"] */
  async consultarConfigNfce(
    params: Operations["ConsultarConfigNfce"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarConfigNfce"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarConfigNfce"]>>(
      `${this.baseUrl}/empresas/${encodeURIComponent(params.cpf_cnpj)}/nfce`
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/nfce [PUT] -> operations["AlterarConfigNfce"] */
  async alterarConfigNfce(
    params: Operations["AlterarConfigNfce"]["parameters"]["path"],
    body: Operations["AlterarConfigNfce"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["AlterarConfigNfce"]>> {
    return this.http.put<ResponseOf<Operations["AlterarConfigNfce"]>>(
      `${this.baseUrl}/empresas/${encodeURIComponent(params.cpf_cnpj)}/nfce`,
      body
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/nfcom [GET] -> operations["ConsultarConfigNfcom"] */
  async consultarConfigNfcom(
    params: Operations["ConsultarConfigNfcom"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarConfigNfcom"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarConfigNfcom"]>>(
      `${this.baseUrl}/empresas/${encodeURIComponent(params.cpf_cnpj)}/nfcom`
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/nfcom [PUT] -> operations["AlterarConfigNfcom"] */
  async alterarConfigNfcom(
    params: Operations["AlterarConfigNfcom"]["parameters"]["path"],
    body: Operations["AlterarConfigNfcom"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["AlterarConfigNfcom"]>> {
    return this.http.put<ResponseOf<Operations["AlterarConfigNfcom"]>>(
      `${this.baseUrl}/empresas/${encodeURIComponent(params.cpf_cnpj)}/nfcom`,
      body
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/nfe [GET] -> operations["ConsultarConfigNfe"] */
  async consultarConfigNfe(
    params: Operations["ConsultarConfigNfe"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarConfigNfe"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarConfigNfe"]>>(
      `${this.baseUrl}/empresas/${encodeURIComponent(params.cpf_cnpj)}/nfe`
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/nfe [PUT] -> operations["AlterarConfigNfe"] */
  async alterarConfigNfe(
    params: Operations["AlterarConfigNfe"]["parameters"]["path"],
    body: Operations["AlterarConfigNfe"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["AlterarConfigNfe"]>> {
    return this.http.put<ResponseOf<Operations["AlterarConfigNfe"]>>(
      `${this.baseUrl}/empresas/${encodeURIComponent(params.cpf_cnpj)}/nfe`,
      body
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/nfse [GET] -> operations["ConsultarConfigNfse"] */
  async consultarConfigNfse(
    params: Operations["ConsultarConfigNfse"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarConfigNfse"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarConfigNfse"]>>(
      `${this.baseUrl}/empresas/${encodeURIComponent(params.cpf_cnpj)}/nfse`
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/nfse [PUT] -> operations["AlterarConfigNfse"] */
  async alterarConfigNfse(
    params: Operations["AlterarConfigNfse"]["parameters"]["path"],
    body: Operations["AlterarConfigNfse"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["AlterarConfigNfse"]>> {
    return this.http.put<ResponseOf<Operations["AlterarConfigNfse"]>>(
      `${this.baseUrl}/empresas/${encodeURIComponent(params.cpf_cnpj)}/nfse`,
      body
    );
  }
  /** Auto-generated for /mdfe [GET] -> operations["ListarMdfe"] */
  async listarMdfe(
    query?: Operations["ListarMdfe"]["parameters"]["query"]
  ): Promise<ResponseOf<Operations["ListarMdfe"]>> {
    return this.http.get<ResponseOf<Operations["ListarMdfe"]>>(
      `${this.baseUrl}/mdfe`,
      query
    );
  }
  /** Auto-generated for /mdfe [POST] -> operations["EmitirMdfe"] */
  async emitirMdfe(
    body: Operations["EmitirMdfe"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["EmitirMdfe"]>> {
    return this.http.post<ResponseOf<Operations["EmitirMdfe"]>>(
      `${this.baseUrl}/mdfe`,
      body
    );
  }
  /** Auto-generated for /mdfe/eventos/{id} [GET] -> operations["ConsultarEventoMdfe"] */
  async consultarEventoMdfe(
    params: Operations["ConsultarEventoMdfe"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarEventoMdfe"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarEventoMdfe"]>>(
      `${this.baseUrl}/mdfe/eventos/${encodeURIComponent(params.id)}`
    );
  }
  /** Auto-generated for /mdfe/lotes [GET] -> operations["ListarLotesMdfe"] */
  async listarLotesMdfe(
    query?: Operations["ListarLotesMdfe"]["parameters"]["query"]
  ): Promise<ResponseOf<Operations["ListarLotesMdfe"]>> {
    return this.http.get<ResponseOf<Operations["ListarLotesMdfe"]>>(
      `${this.baseUrl}/mdfe/lotes`,
      query
    );
  }
  /** Auto-generated for /mdfe/lotes [POST] -> operations["EmitirLoteMdfe"] */
  async emitirLoteMdfe(
    body: Operations["EmitirLoteMdfe"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["EmitirLoteMdfe"]>> {
    return this.http.post<ResponseOf<Operations["EmitirLoteMdfe"]>>(
      `${this.baseUrl}/mdfe/lotes`,
      body
    );
  }
  /** Auto-generated for /mdfe/lotes/{id} [GET] -> operations["ConsultarLoteMdfe"] */
  async consultarLoteMdfe(
    params: Operations["ConsultarLoteMdfe"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarLoteMdfe"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarLoteMdfe"]>>(
      `${this.baseUrl}/mdfe/lotes/${encodeURIComponent(params.id)}`
    );
  }
  /** Auto-generated for /mdfe/nao-encerrados [GET] -> operations["ConsultarMdfeNaoEncerrados"] */
  async consultarMdfeNaoEncerrados(
    query?: Operations["ConsultarMdfeNaoEncerrados"]["parameters"]["query"]
  ): Promise<ResponseOf<Operations["ConsultarMdfeNaoEncerrados"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarMdfeNaoEncerrados"]>>(
      `${this.baseUrl}/mdfe/nao-encerrados`,
      query
    );
  }
  /** Auto-generated for /mdfe/sefaz/status [GET] -> operations["ConsultarStatusSefazMdfe"] */
  async consultarStatusSefazMdfe(
    query?: Operations["ConsultarStatusSefazMdfe"]["parameters"]["query"]
  ): Promise<ResponseOf<Operations["ConsultarStatusSefazMdfe"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarStatusSefazMdfe"]>>(
      `${this.baseUrl}/mdfe/sefaz/status`,
      query
    );
  }
  /** Auto-generated for /mdfe/{id} [GET] -> operations["ConsultarMdfe"] */
  async consultarMdfe(
    params: Operations["ConsultarMdfe"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarMdfe"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarMdfe"]>>(
      `${this.baseUrl}/mdfe/${encodeURIComponent(params.id)}`
    );
  }
  /** Auto-generated for /mdfe/{id}/cancelamento [GET] -> operations["ConsultarCancelamentoMdfe"] */
  async consultarCancelamentoMdfe(
    params: Operations["ConsultarCancelamentoMdfe"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarCancelamentoMdfe"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarCancelamentoMdfe"]>>(
      `${this.baseUrl}/mdfe/${encodeURIComponent(params.id)}/cancelamento`
    );
  }
  /** Auto-generated for /mdfe/{id}/cancelamento [POST] -> operations["CancelarMdfe"] */
  async cancelarMdfe(
    params: Operations["CancelarMdfe"]["parameters"]["path"],
    body: Operations["CancelarMdfe"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["CancelarMdfe"]>> {
    return this.http.post<ResponseOf<Operations["CancelarMdfe"]>>(
      `${this.baseUrl}/mdfe/${encodeURIComponent(params.id)}/cancelamento`,
      body
    );
  }
  /** Auto-generated for /mdfe/{id}/encerramento [GET] -> operations["ConsultarEncerramentoMdfe"] */
  async consultarEncerramentoMdfe(
    params: Operations["ConsultarEncerramentoMdfe"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarEncerramentoMdfe"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarEncerramentoMdfe"]>>(
      `${this.baseUrl}/mdfe/${encodeURIComponent(params.id)}/encerramento`
    );
  }
  /** Auto-generated for /mdfe/{id}/encerramento [POST] -> operations["EncerrarMdfe"] */
  async encerrarMdfe(
    params: Operations["EncerrarMdfe"]["parameters"]["path"],
    body: Operations["EncerrarMdfe"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["EncerrarMdfe"]>> {
    return this.http.post<ResponseOf<Operations["EncerrarMdfe"]>>(
      `${this.baseUrl}/mdfe/${encodeURIComponent(params.id)}/encerramento`,
      body
    );
  }
  /** Auto-generated for /mdfe/{id}/inclusao-condutor [POST] -> operations["IncluirCondutorMdfe"] */
  async incluirCondutorMdfe(
    params: Operations["IncluirCondutorMdfe"]["parameters"]["path"],
    body: Operations["IncluirCondutorMdfe"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["IncluirCondutorMdfe"]>> {
    return this.http.post<ResponseOf<Operations["IncluirCondutorMdfe"]>>(
      `${this.baseUrl}/mdfe/${encodeURIComponent(params.id)}/inclusao-condutor`,
      body
    );
  }
  /** Auto-generated for /mdfe/{id}/inclusao-dfe [POST] -> operations["IncluirDfeMdfe"] */
  async incluirDfeMdfe(
    params: Operations["IncluirDfeMdfe"]["parameters"]["path"],
    body: Operations["IncluirDfeMdfe"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["IncluirDfeMdfe"]>> {
    return this.http.post<ResponseOf<Operations["IncluirDfeMdfe"]>>(
      `${this.baseUrl}/mdfe/${encodeURIComponent(params.id)}/inclusao-dfe`,
      body
    );
  }
  /** Auto-generated for /mdfe/{id}/sincronizar [POST] -> operations["SincronizarMdfe"] */
  async sincronizarMdfe(
    params: Operations["SincronizarMdfe"]["parameters"]["path"],
    body?: any
  ): Promise<ResponseOf<Operations["SincronizarMdfe"]>> {
    return this.http.post<ResponseOf<Operations["SincronizarMdfe"]>>(
      `${this.baseUrl}/mdfe/${encodeURIComponent(params.id)}/sincronizar`,
      body
    );
  }
  /** Auto-generated for /nfce [GET] -> operations["ListarNfce"] */
  async listarNfce(
    query?: Operations["ListarNfce"]["parameters"]["query"]
  ): Promise<ResponseOf<Operations["ListarNfce"]>> {
    return this.http.get<ResponseOf<Operations["ListarNfce"]>>(
      `${this.baseUrl}/nfce`,
      query
    );
  }
  /** Auto-generated for /nfce [POST] -> operations["EmitirNfce"] */
  async emitirNfce(
    body: Operations["EmitirNfce"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["EmitirNfce"]>> {
    return this.http.post<ResponseOf<Operations["EmitirNfce"]>>(
      `${this.baseUrl}/nfce`,
      body
    );
  }
  /** Auto-generated for /nfce/eventos [GET] -> operations["ListarEventosNfce"] */
  async listarEventosNfce(
    query?: Operations["ListarEventosNfce"]["parameters"]["query"]
  ): Promise<ResponseOf<Operations["ListarEventosNfce"]>> {
    return this.http.get<ResponseOf<Operations["ListarEventosNfce"]>>(
      `${this.baseUrl}/nfce/eventos`,
      query
    );
  }
  /** Auto-generated for /nfce/eventos/{id} [GET] -> operations["ConsultarEventoNfce"] */
  async consultarEventoNfce(
    params: Operations["ConsultarEventoNfce"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarEventoNfce"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarEventoNfce"]>>(
      `${this.baseUrl}/nfce/eventos/${encodeURIComponent(params.id)}`
    );
  }
  /** Auto-generated for /nfce/inutilizacoes [POST] -> operations["InutilizarNumeracaoNfce"] */
  async inutilizarNumeracaoNfce(
    body: Operations["InutilizarNumeracaoNfce"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["InutilizarNumeracaoNfce"]>> {
    return this.http.post<ResponseOf<Operations["InutilizarNumeracaoNfce"]>>(
      `${this.baseUrl}/nfce/inutilizacoes`,
      body
    );
  }
  /** Auto-generated for /nfce/inutilizacoes/{id} [GET] -> operations["ConsultarInutilizacaoNfce"] */
  async consultarInutilizacaoNfce(
    params: Operations["ConsultarInutilizacaoNfce"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarInutilizacaoNfce"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarInutilizacaoNfce"]>>(
      `${this.baseUrl}/nfce/inutilizacoes/${encodeURIComponent(params.id)}`
    );
  }
  /** Auto-generated for /nfce/lotes [GET] -> operations["ListarLotesNfce"] */
  async listarLotesNfce(
    query?: Operations["ListarLotesNfce"]["parameters"]["query"]
  ): Promise<ResponseOf<Operations["ListarLotesNfce"]>> {
    return this.http.get<ResponseOf<Operations["ListarLotesNfce"]>>(
      `${this.baseUrl}/nfce/lotes`,
      query
    );
  }
  /** Auto-generated for /nfce/lotes [POST] -> operations["EmitirLoteNfce"] */
  async emitirLoteNfce(
    body: Operations["EmitirLoteNfce"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["EmitirLoteNfce"]>> {
    return this.http.post<ResponseOf<Operations["EmitirLoteNfce"]>>(
      `${this.baseUrl}/nfce/lotes`,
      body
    );
  }
  /** Auto-generated for /nfce/lotes/{id} [GET] -> operations["ConsultarLoteNfce"] */
  async consultarLoteNfce(
    params: Operations["ConsultarLoteNfce"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarLoteNfce"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarLoteNfce"]>>(
      `${this.baseUrl}/nfce/lotes/${encodeURIComponent(params.id)}`
    );
  }
  /** Auto-generated for /nfce/sefaz/status [GET] -> operations["ConsultarStatusSefazNfce"] */
  async consultarStatusSefazNfce(
    query?: Operations["ConsultarStatusSefazNfce"]["parameters"]["query"]
  ): Promise<ResponseOf<Operations["ConsultarStatusSefazNfce"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarStatusSefazNfce"]>>(
      `${this.baseUrl}/nfce/sefaz/status`,
      query
    );
  }
  /** Auto-generated for /nfce/{id} [GET] -> operations["ConsultarNfce"] */
  async consultarNfce(
    params: Operations["ConsultarNfce"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarNfce"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarNfce"]>>(
      `${this.baseUrl}/nfce/${encodeURIComponent(params.id)}`
    );
  }
  /** Auto-generated for /nfce/{id}/cancelamento [GET] -> operations["ConsultarCancelamentoNfce"] */
  async consultarCancelamentoNfce(
    params: Operations["ConsultarCancelamentoNfce"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarCancelamentoNfce"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarCancelamentoNfce"]>>(
      `${this.baseUrl}/nfce/${encodeURIComponent(params.id)}/cancelamento`
    );
  }
  /** Auto-generated for /nfce/{id}/cancelamento [POST] -> operations["CancelarNfce"] */
  async cancelarNfce(
    params: Operations["CancelarNfce"]["parameters"]["path"],
    body: Operations["CancelarNfce"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["CancelarNfce"]>> {
    return this.http.post<ResponseOf<Operations["CancelarNfce"]>>(
      `${this.baseUrl}/nfce/${encodeURIComponent(params.id)}/cancelamento`,
      body
    );
  }
  /** Auto-generated for /nfce/{id}/email [POST] -> operations["EnviarEmailNfce"] */
  async enviarEmailNfce(
    params: Operations["EnviarEmailNfce"]["parameters"]["path"],
    body: Operations["EnviarEmailNfce"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["EnviarEmailNfce"]>> {
    return this.http.post<ResponseOf<Operations["EnviarEmailNfce"]>>(
      `${this.baseUrl}/nfce/${encodeURIComponent(params.id)}/email`,
      body
    );
  }
  /** Auto-generated for /nfce/{id}/sincronizar [POST] -> operations["SincronizarNfce"] */
  async sincronizarNfce(
    params: Operations["SincronizarNfce"]["parameters"]["path"],
    body?: any
  ): Promise<ResponseOf<Operations["SincronizarNfce"]>> {
    return this.http.post<ResponseOf<Operations["SincronizarNfce"]>>(
      `${this.baseUrl}/nfce/${encodeURIComponent(params.id)}/sincronizar`,
      body
    );
  }
  /** Auto-generated for /nfcom [GET] -> operations["ListarNfcom"] */
  async listarNfcom(
    query?: Operations["ListarNfcom"]["parameters"]["query"]
  ): Promise<ResponseOf<Operations["ListarNfcom"]>> {
    return this.http.get<ResponseOf<Operations["ListarNfcom"]>>(
      `${this.baseUrl}/nfcom`,
      query
    );
  }
  /** Auto-generated for /nfcom [POST] -> operations["EmitirNfcom"] */
  async emitirNfcom(
    body: Operations["EmitirNfcom"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["EmitirNfcom"]>> {
    return this.http.post<ResponseOf<Operations["EmitirNfcom"]>>(
      `${this.baseUrl}/nfcom`,
      body
    );
  }
  /** Auto-generated for /nfcom/sefaz/status [GET] -> operations["ConsultarStatusSefazNfcom"] */
  async consultarStatusSefazNfcom(
    query?: Operations["ConsultarStatusSefazNfcom"]["parameters"]["query"]
  ): Promise<ResponseOf<Operations["ConsultarStatusSefazNfcom"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarStatusSefazNfcom"]>>(
      `${this.baseUrl}/nfcom/sefaz/status`,
      query
    );
  }
  /** Auto-generated for /nfcom/{id} [GET] -> operations["ConsultarNfcom"] */
  async consultarNfcom(
    params: Operations["ConsultarNfcom"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarNfcom"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarNfcom"]>>(
      `${this.baseUrl}/nfcom/${encodeURIComponent(params.id)}`
    );
  }
  /** Auto-generated for /nfcom/{id}/cancelamento [GET] -> operations["ConsultarCancelamentoNfcom"] */
  async consultarCancelamentoNfcom(
    params: Operations["ConsultarCancelamentoNfcom"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarCancelamentoNfcom"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarCancelamentoNfcom"]>>(
      `${this.baseUrl}/nfcom/${encodeURIComponent(params.id)}/cancelamento`
    );
  }
  /** Auto-generated for /nfcom/{id}/cancelamento [POST] -> operations["CancelarNfcom"] */
  async cancelarNfcom(
    params: Operations["CancelarNfcom"]["parameters"]["path"],
    body: Operations["CancelarNfcom"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["CancelarNfcom"]>> {
    return this.http.post<ResponseOf<Operations["CancelarNfcom"]>>(
      `${this.baseUrl}/nfcom/${encodeURIComponent(params.id)}/cancelamento`,
      body
    );
  }
  /** Auto-generated for /nfe [GET] -> operations["ListarNfe"] */
  async listarNfe(
    query?: Operations["ListarNfe"]["parameters"]["query"]
  ): Promise<ResponseOf<Operations["ListarNfe"]>> {
    return this.http.get<ResponseOf<Operations["ListarNfe"]>>(
      `${this.baseUrl}/nfe`,
      query
    );
  }
  /** Auto-generated for /nfe [POST] -> operations["EmitirNfe"] */
  async emitirNfe(
    body: Operations["EmitirNfe"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["EmitirNfe"]>> {
    return this.http.post<ResponseOf<Operations["EmitirNfe"]>>(
      `${this.baseUrl}/nfe`,
      body
    );
  }
  /** Auto-generated for /nfe/cadastro-contribuinte [GET] -> operations["ConsultarContribuinteNfe"] */
  async consultarContribuinteNfe(
    query?: Operations["ConsultarContribuinteNfe"]["parameters"]["query"]
  ): Promise<ResponseOf<Operations["ConsultarContribuinteNfe"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarContribuinteNfe"]>>(
      `${this.baseUrl}/nfe/cadastro-contribuinte`,
      query
    );
  }
  /** Auto-generated for /nfe/eventos [GET] -> operations["ListarEventosNfe"] */
  async listarEventosNfe(
    query?: Operations["ListarEventosNfe"]["parameters"]["query"]
  ): Promise<ResponseOf<Operations["ListarEventosNfe"]>> {
    return this.http.get<ResponseOf<Operations["ListarEventosNfe"]>>(
      `${this.baseUrl}/nfe/eventos`,
      query
    );
  }
  /** Auto-generated for /nfe/eventos/{id} [GET] -> operations["ConsultarEventoNfe"] */
  async consultarEventoNfe(
    params: Operations["ConsultarEventoNfe"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarEventoNfe"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarEventoNfe"]>>(
      `${this.baseUrl}/nfe/eventos/${encodeURIComponent(params.id)}`
    );
  }
  /** Auto-generated for /nfe/inutilizacoes [POST] -> operations["InutilizarNumeracaoNfe"] */
  async inutilizarNumeracaoNfe(
    body: Operations["InutilizarNumeracaoNfe"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["InutilizarNumeracaoNfe"]>> {
    return this.http.post<ResponseOf<Operations["InutilizarNumeracaoNfe"]>>(
      `${this.baseUrl}/nfe/inutilizacoes`,
      body
    );
  }
  /** Auto-generated for /nfe/inutilizacoes/{id} [GET] -> operations["ConsultarInutilizacaoNfe"] */
  async consultarInutilizacaoNfe(
    params: Operations["ConsultarInutilizacaoNfe"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarInutilizacaoNfe"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarInutilizacaoNfe"]>>(
      `${this.baseUrl}/nfe/inutilizacoes/${encodeURIComponent(params.id)}`
    );
  }
  /** Auto-generated for /nfe/lotes [GET] -> operations["ListarLotesNfe"] */
  async listarLotesNfe(
    query?: Operations["ListarLotesNfe"]["parameters"]["query"]
  ): Promise<ResponseOf<Operations["ListarLotesNfe"]>> {
    return this.http.get<ResponseOf<Operations["ListarLotesNfe"]>>(
      `${this.baseUrl}/nfe/lotes`,
      query
    );
  }
  /** Auto-generated for /nfe/lotes [POST] -> operations["EmitirLoteNfe"] */
  async emitirLoteNfe(
    body: Operations["EmitirLoteNfe"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["EmitirLoteNfe"]>> {
    return this.http.post<ResponseOf<Operations["EmitirLoteNfe"]>>(
      `${this.baseUrl}/nfe/lotes`,
      body
    );
  }
  /** Auto-generated for /nfe/lotes/{id} [GET] -> operations["ConsultarLoteNfe"] */
  async consultarLoteNfe(
    params: Operations["ConsultarLoteNfe"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarLoteNfe"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarLoteNfe"]>>(
      `${this.baseUrl}/nfe/lotes/${encodeURIComponent(params.id)}`
    );
  }
  /** Auto-generated for /nfe/sefaz/status [GET] -> operations["ConsultarStatusSefazNfe"] */
  async consultarStatusSefazNfe(
    query?: Operations["ConsultarStatusSefazNfe"]["parameters"]["query"]
  ): Promise<ResponseOf<Operations["ConsultarStatusSefazNfe"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarStatusSefazNfe"]>>(
      `${this.baseUrl}/nfe/sefaz/status`,
      query
    );
  }
  /** Auto-generated for /nfe/{id} [GET] -> operations["ConsultarNfe"] */
  async consultarNfe(
    params: Operations["ConsultarNfe"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarNfe"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarNfe"]>>(
      `${this.baseUrl}/nfe/${encodeURIComponent(params.id)}`
    );
  }
  /** Auto-generated for /nfe/{id}/cancelamento [GET] -> operations["ConsultarCancelamentoNfe"] */
  async consultarCancelamentoNfe(
    params: Operations["ConsultarCancelamentoNfe"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarCancelamentoNfe"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarCancelamentoNfe"]>>(
      `${this.baseUrl}/nfe/${encodeURIComponent(params.id)}/cancelamento`
    );
  }
  /** Auto-generated for /nfe/{id}/cancelamento [POST] -> operations["CancelarNfe"] */
  async cancelarNfe(
    params: Operations["CancelarNfe"]["parameters"]["path"],
    body: Operations["CancelarNfe"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["CancelarNfe"]>> {
    return this.http.post<ResponseOf<Operations["CancelarNfe"]>>(
      `${this.baseUrl}/nfe/${encodeURIComponent(params.id)}/cancelamento`,
      body
    );
  }
  /** Auto-generated for /nfe/{id}/carta-correcao [GET] -> operations["ConsultarCartaCorrecaoNfe"] */
  async consultarCartaCorrecaoNfe(
    params: Operations["ConsultarCartaCorrecaoNfe"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarCartaCorrecaoNfe"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarCartaCorrecaoNfe"]>>(
      `${this.baseUrl}/nfe/${encodeURIComponent(params.id)}/carta-correcao`
    );
  }
  /** Auto-generated for /nfe/{id}/carta-correcao [POST] -> operations["CriarCartaCorrecaoNfe"] */
  async criarCartaCorrecaoNfe(
    params: Operations["CriarCartaCorrecaoNfe"]["parameters"]["path"],
    body: Operations["CriarCartaCorrecaoNfe"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["CriarCartaCorrecaoNfe"]>> {
    return this.http.post<ResponseOf<Operations["CriarCartaCorrecaoNfe"]>>(
      `${this.baseUrl}/nfe/${encodeURIComponent(params.id)}/carta-correcao`,
      body
    );
  }
  /** Auto-generated for /nfe/{id}/email [POST] -> operations["EnviarEmailNfe"] */
  async enviarEmailNfe(
    params: Operations["EnviarEmailNfe"]["parameters"]["path"],
    body: Operations["EnviarEmailNfe"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["EnviarEmailNfe"]>> {
    return this.http.post<ResponseOf<Operations["EnviarEmailNfe"]>>(
      `${this.baseUrl}/nfe/${encodeURIComponent(params.id)}/email`,
      body
    );
  }
  /** Auto-generated for /nfe/{id}/sincronizar [POST] -> operations["SincronizarNfe"] */
  async sincronizarNfe(
    params: Operations["SincronizarNfe"]["parameters"]["path"],
    body?: any
  ): Promise<ResponseOf<Operations["SincronizarNfe"]>> {
    return this.http.post<ResponseOf<Operations["SincronizarNfe"]>>(
      `${this.baseUrl}/nfe/${encodeURIComponent(params.id)}/sincronizar`,
      body
    );
  }
  /** Auto-generated for /nfse [GET] -> operations["ListarNfse"] */
  async listarNfse(
    query?: Operations["ListarNfse"]["parameters"]["query"]
  ): Promise<ResponseOf<Operations["ListarNfse"]>> {
    return this.http.get<ResponseOf<Operations["ListarNfse"]>>(
      `${this.baseUrl}/nfse`,
      query
    );
  }
  /** Auto-generated for /nfse [POST] -> operations["EmitirNfse"] */
  async emitirNfse(
    body: Operations["EmitirNfse"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["EmitirNfse"]>> {
    return this.http.post<ResponseOf<Operations["EmitirNfse"]>>(
      `${this.baseUrl}/nfse`,
      body
    );
  }
  /** Auto-generated for /nfse/cidades [GET] -> operations["CidadesAtendidas"] */
  async cidadesAtendidas(): Promise<
    ResponseOf<Operations["CidadesAtendidas"]>
  > {
    return this.http.get<ResponseOf<Operations["CidadesAtendidas"]>>(
      `${this.baseUrl}/nfse/cidades`
    );
  }
  /** Auto-generated for /nfse/cidades/{codigo_ibge} [GET] -> operations["ConsultarMetadados"] */
  async consultarMetadados(
    params: Operations["ConsultarMetadados"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarMetadados"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarMetadados"]>>(
      `${this.baseUrl}/nfse/cidades/${encodeURIComponent(params.codigo_ibge)}`
    );
  }
  /** Auto-generated for /nfse/dps [POST] -> operations["EmitirNfseDps"] */
  async emitirNfseDps(
    body: Operations["EmitirNfseDps"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["EmitirNfseDps"]>> {
    return this.http.post<ResponseOf<Operations["EmitirNfseDps"]>>(
      `${this.baseUrl}/nfse/dps`,
      body
    );
  }
  /** Auto-generated for /nfse/dps/lotes [POST] -> operations["EmitirLoteNfseDps"] */
  async emitirLoteNfseDps(
    body: Operations["EmitirLoteNfseDps"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["EmitirLoteNfseDps"]>> {
    return this.http.post<ResponseOf<Operations["EmitirLoteNfseDps"]>>(
      `${this.baseUrl}/nfse/dps/lotes`,
      body
    );
  }
  /** Auto-generated for /nfse/lotes [GET] -> operations["ListarLotesNfse"] */
  async listarLotesNfse(
    query?: Operations["ListarLotesNfse"]["parameters"]["query"]
  ): Promise<ResponseOf<Operations["ListarLotesNfse"]>> {
    return this.http.get<ResponseOf<Operations["ListarLotesNfse"]>>(
      `${this.baseUrl}/nfse/lotes`,
      query
    );
  }
  /** Auto-generated for /nfse/lotes [POST] -> operations["EmitirLoteNfse"] */
  async emitirLoteNfse(
    body: Operations["EmitirLoteNfse"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["EmitirLoteNfse"]>> {
    return this.http.post<ResponseOf<Operations["EmitirLoteNfse"]>>(
      `${this.baseUrl}/nfse/lotes`,
      body
    );
  }
  /** Auto-generated for /nfse/lotes/{id} [GET] -> operations["ConsultarLoteNfse"] */
  async consultarLoteNfse(
    params: Operations["ConsultarLoteNfse"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarLoteNfse"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarLoteNfse"]>>(
      `${this.baseUrl}/nfse/lotes/${encodeURIComponent(params.id)}`
    );
  }
  /** Auto-generated for /nfse/{id} [GET] -> operations["ConsultarNfse"] */
  async consultarNfse(
    params: Operations["ConsultarNfse"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarNfse"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarNfse"]>>(
      `${this.baseUrl}/nfse/${encodeURIComponent(params.id)}`
    );
  }
  /** Auto-generated for /nfse/{id}/cancelamento [GET] -> operations["ConsultarCancelamentoNfse"] */
  async consultarCancelamentoNfse(
    params: Operations["ConsultarCancelamentoNfse"]["parameters"]["path"]
  ): Promise<ResponseOf<Operations["ConsultarCancelamentoNfse"]>> {
    return this.http.get<ResponseOf<Operations["ConsultarCancelamentoNfse"]>>(
      `${this.baseUrl}/nfse/${encodeURIComponent(params.id)}/cancelamento`
    );
  }
  /** Auto-generated for /nfse/{id}/cancelamento [POST] -> operations["CancelarNfse"] */
  async cancelarNfse(
    params: Operations["CancelarNfse"]["parameters"]["path"],
    body: Operations["CancelarNfse"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["CancelarNfse"]>> {
    return this.http.post<ResponseOf<Operations["CancelarNfse"]>>(
      `${this.baseUrl}/nfse/${encodeURIComponent(params.id)}/cancelamento`,
      body
    );
  }
  /** Auto-generated for /nfse/{id}/sincronizar [POST] -> operations["SincronizarNfse"] */
  async sincronizarNfse(
    params: Operations["SincronizarNfse"]["parameters"]["path"],
    body: Operations["SincronizarNfse"]["parameters"]["body"]
  ): Promise<ResponseOf<Operations["SincronizarNfse"]>> {
    return this.http.post<ResponseOf<Operations["SincronizarNfse"]>>(
      `${this.baseUrl}/nfse/${encodeURIComponent(params.id)}/sincronizar`,
      body
    );
  }

  /* DONWLOAD E UPLOAD DE BINÁRIOS */

  /** Auto-generated for /cte/eventos/{id}/pdf [GET] -> operations["BaixarPdfEventoCte"] */
  async baixarPdfEventoCte(
    params: Operations["BaixarPdfEventoCte"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/cte/eventos/${encodeURIComponent(params.id)}/pdf`
    );
  }

  /** Auto-generated for /cte/eventos/{id}/xml [GET] -> operations["BaixarXmlEventoCte"] */
  async baixarXmlEventoCte(
    params: Operations["BaixarXmlEventoCte"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/cte/eventos/${encodeURIComponent(params.id)}/xml`
    );
  }

  /** Auto-generated for /cte/{id}/cancelamento/pdf [GET] -> operations["BaixarPdfCancelamentoCte"] */
  async baixarPdfCancelamentoCte(
    params: Operations["BaixarPdfCancelamentoCte"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/cte/${encodeURIComponent(params.id)}/cancelamento/pdf`
    );
  }

  /** Auto-generated for /cte/{id}/cancelamento/xml [GET] -> operations["BaixarXmlCancelamentoCte"] */
  async baixarXmlCancelamentoCte(
    params: Operations["BaixarXmlCancelamentoCte"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/cte/${encodeURIComponent(params.id)}/cancelamento/xml`
    );
  }

  /** Auto-generated for /cte/{id}/carta-correcao/pdf [GET] -> operations["BaixarPdfCartaCorrecaoCte"] */
  async baixarPdfCartaCorrecaoCte(
    params: Operations["BaixarPdfCartaCorrecaoCte"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/cte/${encodeURIComponent(params.id)}/carta-correcao/pdf`
    );
  }

  /** Auto-generated for /cte/{id}/carta-correcao/xml [GET] -> operations["BaixarXmlCartaCorrecaoCte"] */
  async baixarXmlCartaCorrecaoCte(
    params: Operations["BaixarXmlCartaCorrecaoCte"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/cte/${encodeURIComponent(params.id)}/carta-correcao/xml`
    );
  }

  /** Auto-generated for /cte/{id}/pdf [GET] -> operations["BaixarPdfCte"] */
  async baixarPdfCte(
    params: Operations["BaixarPdfCte"]["parameters"]["path"],
    query?: Operations["BaixarPdfCte"]["parameters"]["query"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/cte/${encodeURIComponent(params.id)}/pdf`,
      query as any
    );
  }

  /** Auto-generated for /cte/{id}/xml [GET] -> operations["BaixarXmlCte"] */
  async baixarXmlCte(
    params: Operations["BaixarXmlCte"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/cte/${encodeURIComponent(params.id)}/xml`
    );
  }

  /** Auto-generated for /cte/{id}/xml/conhecimento [GET] -> operations["BaixarXmlCteConhecimento"] */
  async baixarXmlCteConhecimento(
    params: Operations["BaixarXmlCteConhecimento"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/cte/${encodeURIComponent(params.id)}/xml/conhecimento`
    );
  }

  /** Auto-generated for /cte/{id}/xml/protocolo [GET] -> operations["BaixarXmlCteProtocolo"] */
  async baixarXmlCteProtocolo(
    params: Operations["BaixarXmlCteProtocolo"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/cte/${encodeURIComponent(params.id)}/xml/protocolo`
    );
  }

  /** Auto-generated for /cteos/eventos/{id}/pdf [GET] -> operations["BaixarPdfEventoCteOs"] */
  async baixarPdfEventoCteOs(
    params: Operations["BaixarPdfEventoCteOs"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/cteos/eventos/${encodeURIComponent(params.id)}/pdf`
    );
  }

  /** Auto-generated for /cteos/eventos/{id}/xml [GET] -> operations["BaixarXmlEventoCteOs"] */
  async baixarXmlEventoCteOs(
    params: Operations["BaixarXmlEventoCteOs"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/cteos/eventos/${encodeURIComponent(params.id)}/xml`
    );
  }

  /** Auto-generated for /cteos/{id}/cancelamento/pdf [GET] -> operations["BaixarPdfCancelamentoCteOs"] */
  async baixarPdfCancelamentoCteOs(
    params: Operations["BaixarPdfCancelamentoCteOs"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/cteos/${encodeURIComponent(params.id)}/cancelamento/pdf`
    );
  }

  /** Auto-generated for /cteos/{id}/cancelamento/xml [GET] -> operations["BaixarXmlCancelamentoCteOs"] */
  async baixarXmlCancelamentoCteOs(
    params: Operations["BaixarXmlCancelamentoCteOs"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/cteos/${encodeURIComponent(params.id)}/cancelamento/xml`
    );
  }

  /** Auto-generated for /cteos/{id}/carta-correcao/pdf [GET] -> operations["BaixarPdfCartaCorrecaoCteOs"] */
  async baixarPdfCartaCorrecaoCteOs(
    params: Operations["BaixarPdfCartaCorrecaoCteOs"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/cteos/${encodeURIComponent(
        params.id
      )}/carta-correcao/pdf`
    );
  }

  /** Auto-generated for /cteos/{id}/carta-correcao/xml [GET] -> operations["BaixarXmlCartaCorrecaoCteOs"] */
  async baixarXmlCartaCorrecaoCteOs(
    params: Operations["BaixarXmlCartaCorrecaoCteOs"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/cteos/${encodeURIComponent(
        params.id
      )}/carta-correcao/xml`
    );
  }

  /** Auto-generated for /cteos/{id}/pdf [GET] -> operations["BaixarPdfCteOs"] */
  async baixarPdfCteOs(
    params: Operations["BaixarPdfCteOs"]["parameters"]["path"],
    query?: Operations["BaixarPdfCteOs"]["parameters"]["query"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/cteos/${encodeURIComponent(params.id)}/pdf`,
      query as any
    );
  }

  /** Auto-generated for /cteos/{id}/xml [GET] -> operations["BaixarXmlCteOs"] */
  async baixarXmlCteOs(
    params: Operations["BaixarXmlCteOs"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/cteos/${encodeURIComponent(params.id)}/xml`
    );
  }

  /** Auto-generated for /cteos/{id}/xml/conhecimento [GET] -> operations["BaixarXmlCteOsConhecimento"] */
  async baixarXmlCteOsConhecimento(
    params: Operations["BaixarXmlCteOsConhecimento"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/cteos/${encodeURIComponent(params.id)}/xml/conhecimento`
    );
  }

  /** Auto-generated for /cteos/{id}/xml/protocolo [GET] -> operations["BaixarXmlCteOsProtocolo"] */
  async baixarXmlCteOsProtocolo(
    params: Operations["BaixarXmlCteOsProtocolo"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/cteos/${encodeURIComponent(params.id)}/xml/protocolo`
    );
  }

  /** Auto-generated for /dce/{id}/cancelamento/xml [GET] -> operations["BaixarXmlCancelamentoDce"] */
  async baixarXmlCancelamentoDce(
    params: Operations["BaixarXmlCancelamentoDce"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/dce/${encodeURIComponent(params.id)}/cancelamento/xml`
    );
  }

  /** Auto-generated for /dce/{id}/pdf [GET] -> operations["BaixarPdfDce"] */
  async baixarPdfDce(
    params: Operations["BaixarPdfDce"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/dce/${encodeURIComponent(params.id)}/pdf`
    );
  }

  /** Auto-generated for /dce/{id}/xml [GET] -> operations["BaixarXmlDce"] */
  async baixarXmlDce(
    params: Operations["BaixarXmlDce"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/dce/${encodeURIComponent(params.id)}/xml`
    );
  }

  /** Auto-generated for /dce/{id}/xml/declaracao [GET] -> operations["BaixarXmlDceDeclaracao"] */
  async baixarXmlDceDeclaracao(
    params: Operations["BaixarXmlDceDeclaracao"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/dce/${encodeURIComponent(params.id)}/xml/declaracao`
    );
  }

  /** Auto-generated for /dce/{id}/xml/protocolo [GET] -> operations["BaixarXmlDceProtocolo"] */
  async baixarXmlDceProtocolo(
    params: Operations["BaixarXmlDceProtocolo"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/dce/${encodeURIComponent(params.id)}/xml/protocolo`
    );
  }

  /** Auto-generated for /distribuicao/nfe/documentos/{id}/pdf [GET] -> operations["BaixarPdfDocumentoDistribuicaoNfe"] */
  async baixarPdfDocumentoDistribuicaoNfe(
    params: Operations["BaixarPdfDocumentoDistribuicaoNfe"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/distribuicao/nfe/documentos/${encodeURIComponent(
        params.id
      )}/pdf`
    );
  }

  /** Auto-generated for /distribuicao/nfe/documentos/{id}/xml [GET] -> operations["BaixarXmlDocumentoDistribuicaoNfe"] */
  async baixarXmlDocumentoDistribuicaoNfe(
    params: Operations["BaixarXmlDocumentoDistribuicaoNfe"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/distribuicao/nfe/documentos/${encodeURIComponent(
        params.id
      )}/xml`
    );
  }

  /** Auto-generated for /empresas/{cpf_cnpj}/logotipo [GET] -> operations["BaixarLogotipoEmpresa"] */
  async baixarLogotipoEmpresa(
    params: Operations["BaixarLogotipoEmpresa"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/empresas/${encodeURIComponent(params.cpf_cnpj)}/logotipo`
    );
  }

  /** Auto-generated for /mdfe/eventos/{id}/pdf [GET] -> operations["BaixarPdfEventoMdfe"] */
  async baixarPdfEventoMdfe(
    params: Operations["BaixarPdfEventoMdfe"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/mdfe/eventos/${encodeURIComponent(params.id)}/pdf`
    );
  }

  /** Auto-generated for /mdfe/eventos/{id}/xml [GET] -> operations["BaixarXmlEventoMdfe"] */
  async baixarXmlEventoMdfe(
    params: Operations["BaixarXmlEventoMdfe"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/mdfe/eventos/${encodeURIComponent(params.id)}/xml`
    );
  }

  /** Auto-generated for /mdfe/{id}/cancelamento/pdf [GET] -> operations["BaixarPdfCancelamentoMdfe"] */
  async baixarPdfCancelamentoMdfe(
    params: Operations["BaixarPdfCancelamentoMdfe"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/mdfe/${encodeURIComponent(params.id)}/cancelamento/pdf`
    );
  }

  /** Auto-generated for /mdfe/{id}/cancelamento/xml [GET] -> operations["BaixarXmlCancelamentoMdfe"] */
  async baixarXmlCancelamentoMdfe(
    params: Operations["BaixarXmlCancelamentoMdfe"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/mdfe/${encodeURIComponent(params.id)}/cancelamento/xml`
    );
  }

  /** Auto-generated for /mdfe/{id}/encerramento/pdf [GET] -> operations["BaixarPdfEncerramentoMdfe"] */
  async baixarPdfEncerramentoMdfe(
    params: Operations["BaixarPdfEncerramentoMdfe"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/mdfe/${encodeURIComponent(params.id)}/encerramento/pdf`
    );
  }

  /** Auto-generated for /mdfe/{id}/encerramento/xml [GET] -> operations["BaixarXmlEncerramentoMdfe"] */
  async baixarXmlEncerramentoMdfe(
    params: Operations["BaixarXmlEncerramentoMdfe"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/mdfe/${encodeURIComponent(params.id)}/encerramento/xml`
    );
  }

  /** Auto-generated for /mdfe/{id}/pdf [GET] -> operations["BaixarPdfMdfe"] */
  async baixarPdfMdfe(
    params: Operations["BaixarPdfMdfe"]["parameters"]["path"],
    query?: Operations["BaixarPdfMdfe"]["parameters"]["query"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/mdfe/${encodeURIComponent(params.id)}/pdf`,
      query as any
    );
  }

  /** Auto-generated for /mdfe/{id}/xml [GET] -> operations["BaixarXmlMdfe"] */
  async baixarXmlMdfe(
    params: Operations["BaixarXmlMdfe"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/mdfe/${encodeURIComponent(params.id)}/xml`
    );
  }

  /** Auto-generated for /mdfe/{id}/xml/manifesto [GET] -> operations["BaixarXmlMdfeManifesto"] */
  async baixarXmlMdfeManifesto(
    params: Operations["BaixarXmlMdfeManifesto"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/mdfe/${encodeURIComponent(params.id)}/xml/manifesto`
    );
  }

  /** Auto-generated for /mdfe/{id}/xml/protocolo [GET] -> operations["BaixarXmlMdfeProtocolo"] */
  async baixarXmlMdfeProtocolo(
    params: Operations["BaixarXmlMdfeProtocolo"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/mdfe/${encodeURIComponent(params.id)}/xml/protocolo`
    );
  }

  /** Auto-generated for /nfce/eventos/{id}/pdf [GET] -> operations["BaixarPdfEventoNfce"] */
  async baixarPdfEventoNfce(
    params: Operations["BaixarPdfEventoNfce"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfce/eventos/${encodeURIComponent(params.id)}/pdf`
    );
  }

  /** Auto-generated for /nfce/eventos/{id}/xml [GET] -> operations["BaixarXmlEventoNfce"] */
  async baixarXmlEventoNfce(
    params: Operations["BaixarXmlEventoNfce"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfce/eventos/${encodeURIComponent(params.id)}/xml`
    );
  }

  /** Auto-generated for /nfce/inutilizacoes/{id}/pdf [GET] -> operations["BaixarPdfInutilizacaoNfce"] */
  async baixarPdfInutilizacaoNfce(
    params: Operations["BaixarPdfInutilizacaoNfce"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfce/inutilizacoes/${encodeURIComponent(params.id)}/pdf`
    );
  }

  /** Auto-generated for /nfce/inutilizacoes/{id}/xml [GET] -> operations["BaixarXmlInutilizacaoNfce"] */
  async baixarXmlInutilizacaoNfce(
    params: Operations["BaixarXmlInutilizacaoNfce"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfce/inutilizacoes/${encodeURIComponent(params.id)}/xml`
    );
  }

  /** Auto-generated for /nfce/previa/pdf [POST] -> operations["BaixarPreviaPdfNfce"] */
  async baixarPreviaPdfNfce(
    body: Operations["BaixarPreviaPdfNfce"]["parameters"]["body"],
    query?: Operations["BaixarPreviaPdfNfce"]["parameters"]["query"]
  ): Promise<ArrayBuffer> {
    return this.http.postArrayBuffer(
      `${this.baseUrl}/nfce/previa/pdf`,
      body // (se precisar de query no POST, adapte seu HttpClient.postArrayBuffer p/ aceitar query)
    );
  }

  /** Auto-generated for /nfce/previa/xml [POST] -> operations["BaixarPreviaXmlNfce"] */
  async baixarPreviaXmlNfce(
    body: Operations["BaixarPreviaXmlNfce"]["parameters"]["body"]
  ): Promise<ArrayBuffer> {
    return this.http.postArrayBuffer(`${this.baseUrl}/nfce/previa/xml`, body);
  }

  /** Auto-generated for /nfce/{id}/cancelamento/pdf [GET] -> operations["BaixarPdfCancelamentoNfce"] */
  async baixarPdfCancelamentoNfce(
    params: Operations["BaixarPdfCancelamentoNfce"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfce/${encodeURIComponent(params.id)}/cancelamento/pdf`
    );
  }

  /** Auto-generated for /nfce/{id}/cancelamento/xml [GET] -> operations["BaixarXmlCancelamentoNfce"] */
  async baixarXmlCancelamentoNfce(
    params: Operations["BaixarXmlCancelamentoNfce"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfce/${encodeURIComponent(params.id)}/cancelamento/xml`
    );
  }

  /** Auto-generated for /nfce/{id}/escpos [GET] -> operations["BaixarEscPosNfce"] */
  async baixarEscPosNfce(
    params: Operations["BaixarEscPosNfce"]["parameters"]["path"],
    query?: Operations["BaixarEscPosNfce"]["parameters"]["query"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfce/${encodeURIComponent(params.id)}/escpos`,
      query as any
    );
  }

  /** Auto-generated for /nfce/{id}/pdf [GET] -> operations["BaixarPdfNfce"] */
  async baixarPdfNfce(
    params: Operations["BaixarPdfNfce"]["parameters"]["path"],
    query?: Operations["BaixarPdfNfce"]["parameters"]["query"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfce/${encodeURIComponent(params.id)}/pdf`,
      query as any
    );
  }

  /** Auto-generated for /nfce/{id}/xml [GET] -> operations["BaixarXmlNfce"] */
  async baixarXmlNfce(
    params: Operations["BaixarXmlNfce"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfce/${encodeURIComponent(params.id)}/xml`
    );
  }

  /** Auto-generated for /nfce/{id}/xml/nota [GET] -> operations["BaixarXmlNfceNota"] */
  async baixarXmlNfceNota(
    params: Operations["BaixarXmlNfceNota"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfce/${encodeURIComponent(params.id)}/xml/nota`
    );
  }

  /** Auto-generated for /nfce/{id}/xml/protocolo [GET] -> operations["BaixarXmlNfceProtocolo"] */
  async baixarXmlNfceProtocolo(
    params: Operations["BaixarXmlNfceProtocolo"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfce/${encodeURIComponent(params.id)}/xml/protocolo`
    );
  }

  /** Auto-generated for /nfcom/{id}/cancelamento/xml [GET] -> operations["BaixarXmlCancelamentoNfcom"] */
  async baixarXmlCancelamentoNfcom(
    params: Operations["BaixarXmlCancelamentoNfcom"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfcom/${encodeURIComponent(params.id)}/cancelamento/xml`
    );
  }

  /** Auto-generated for /nfcom/{id}/pdf [GET] -> operations["BaixarPdfNfcom"] */
  async baixarPdfNfcom(
    params: Operations["BaixarPdfNfcom"]["parameters"]["path"],
    query?: Operations["BaixarPdfNfcom"]["parameters"]["query"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfcom/${encodeURIComponent(params.id)}/pdf`,
      query as any
    );
  }

  /** Auto-generated for /nfcom/{id}/xml [GET] -> operations["BaixarXmlNfcom"] */
  async baixarXmlNfcom(
    params: Operations["BaixarXmlNfcom"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfcom/${encodeURIComponent(params.id)}/xml`
    );
  }

  /** Auto-generated for /nfcom/{id}/xml/nota [GET] -> operations["BaixarXmlNfcomNota"] */
  async baixarXmlNfcomNota(
    params: Operations["BaixarXmlNfcomNota"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfcom/${encodeURIComponent(params.id)}/xml/nota`
    );
  }

  /** Auto-generated for /nfcom/{id}/xml/protocolo [GET] -> operations["BaixarXmlNfcomProtocolo"] */
  async baixarXmlNfcomProtocolo(
    params: Operations["BaixarXmlNfcomProtocolo"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfcom/${encodeURIComponent(params.id)}/xml/protocolo`
    );
  }

  /** Auto-generated for /nfe/eventos/{id}/pdf [GET] -> operations["BaixarPdfEventoNfe"] */
  async baixarPdfEventoNfe(
    params: Operations["BaixarPdfEventoNfe"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfe/eventos/${encodeURIComponent(params.id)}/pdf`
    );
  }

  /** Auto-generated for /nfe/eventos/{id}/xml [GET] -> operations["BaixarXmlEventoNfe"] */
  async baixarXmlEventoNfe(
    params: Operations["BaixarXmlEventoNfe"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfe/eventos/${encodeURIComponent(params.id)}/xml`
    );
  }

  /** Auto-generated for /nfe/inutilizacoes/{id}/pdf [GET] -> operations["BaixarPdfInutilizacaoNfe"] */
  async baixarPdfInutilizacaoNfe(
    params: Operations["BaixarPdfInutilizacaoNfe"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfe/inutilizacoes/${encodeURIComponent(params.id)}/pdf`
    );
  }

  /** Auto-generated for /nfe/inutilizacoes/{id}/xml [GET] -> operations["BaixarXmlInutilizacaoNfe"] */
  async baixarXmlInutilizacaoNfe(
    params: Operations["BaixarXmlInutilizacaoNfe"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfe/inutilizacoes/${encodeURIComponent(params.id)}/xml`
    );
  }

  /** Auto-generated for /nfe/previa/pdf [POST] -> operations["BaixarPreviaPdfNfe"] */
  async baixarPreviaPdfNfe(
    body: Operations["BaixarPreviaPdfNfe"]["parameters"]["body"],
    query?: Operations["BaixarPreviaPdfNfe"]["parameters"]["query"]
  ): Promise<ArrayBuffer> {
    return this.http.postArrayBuffer(`${this.baseUrl}/nfe/previa/pdf`, body);
  }

  /** Auto-generated for /nfe/previa/xml [POST] -> operations["BaixarPreviaXmlNfe"] */
  async baixarPreviaXmlNfe(
    body: Operations["BaixarPreviaXmlNfe"]["parameters"]["body"]
  ): Promise<ArrayBuffer> {
    return this.http.postArrayBuffer(`${this.baseUrl}/nfe/previa/xml`, body);
  }

  /** Auto-generated for /nfe/{id}/cancelamento/pdf [GET] -> operations["BaixarPdfCancelamentoNfe"] */
  async baixarPdfCancelamentoNfe(
    params: Operations["BaixarPdfCancelamentoNfe"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfe/${encodeURIComponent(params.id)}/cancelamento/pdf`
    );
  }

  /** Auto-generated for /nfe/{id}/cancelamento/xml [GET] -> operations["BaixarXmlCancelamentoNfe"] */
  async baixarXmlCancelamentoNfe(
    params: Operations["BaixarXmlCancelamentoNfe"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfe/${encodeURIComponent(params.id)}/cancelamento/xml`
    );
  }

  /** Auto-generated for /nfe/{id}/carta-correcao/pdf [GET] -> operations["BaixarPdfCartaCorrecaoNfe"] */
  async baixarPdfCartaCorrecaoNfe(
    params: Operations["BaixarPdfCartaCorrecaoNfe"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfe/${encodeURIComponent(params.id)}/carta-correcao/pdf`
    );
  }

  /** Auto-generated for /nfe/{id}/carta-correcao/xml [GET] -> operations["BaixarXmlCartaCorrecaoNfe"] */
  async baixarXmlCartaCorrecaoNfe(
    params: Operations["BaixarXmlCartaCorrecaoNfe"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfe/${encodeURIComponent(params.id)}/carta-correcao/xml`
    );
  }

  /** Auto-generated for /nfe/{id}/pdf [GET] -> operations["BaixarPdfNfe"] */
  async baixarPdfNfe(
    params: Operations["BaixarPdfNfe"]["parameters"]["path"],
    query?: Operations["BaixarPdfNfe"]["parameters"]["query"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfe/${encodeURIComponent(params.id)}/pdf`,
      query as any
    );
  }

  /** Auto-generated for /nfe/{id}/xml [GET] -> operations["BaixarXmlNfe"] */
  async baixarXmlNfe(
    params: Operations["BaixarXmlNfe"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfe/${encodeURIComponent(params.id)}/xml`
    );
  }

  /** Auto-generated for /nfe/{id}/xml/nota [GET] -> operations["BaixarXmlNfeNota"] */
  async baixarXmlNfeNota(
    params: Operations["BaixarXmlNfeNota"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfe/${encodeURIComponent(params.id)}/xml/nota`
    );
  }

  /** Auto-generated for /nfe/{id}/xml/protocolo [GET] -> operations["BaixarXmlNfeProtocolo"] */
  async baixarXmlNfeProtocolo(
    params: Operations["BaixarXmlNfeProtocolo"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfe/${encodeURIComponent(params.id)}/xml/protocolo`
    );
  }

  /** Auto-generated for /nfse/{Id}/cancelamento/xml [GET] -> operations["BaixarXmlCancelamentoNfse"] */
  async baixarXmlCancelamentoNfse(
    params: Operations["BaixarXmlCancelamentoNfse"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfse/${encodeURIComponent(params.Id)}/cancelamento/xml`
    );
  }

  /** Auto-generated for /nfse/{id}/pdf [GET] -> operations["BaixarPdfNfse"] */
  async baixarPdfNfse(
    params: Operations["BaixarPdfNfse"]["parameters"]["path"],
    query?: Operations["BaixarPdfNfse"]["parameters"]["query"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfse/${encodeURIComponent(params.id)}/pdf`,
      query as any
    );
  }

  /** Auto-generated for /nfse/{id}/xml [GET] -> operations["BaixarXmlNfse"] */
  async baixarXmlNfse(
    params: Operations["BaixarXmlNfse"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfse/${encodeURIComponent(params.id)}/xml`
    );
  }

  /** Auto-generated for /nfse/{id}/xml/dps [GET] -> operations["BaixarXmlDps"] */
  async baixarXmlDps(
    params: Operations["BaixarXmlDps"]["parameters"]["path"]
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfse/${encodeURIComponent(params.id)}/xml/dps`
    );
  }
}
