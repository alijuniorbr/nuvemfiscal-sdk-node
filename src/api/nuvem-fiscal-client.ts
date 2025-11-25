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

import { NuvemFiscalHttpClient } from "../types/nuvem-fiscal-api.httpclient";
import {
  ConsultarCepResult,
  ListarCnpjResult,
  ConsultarCnpjResult,
  ListarCotasContaResult,
  ConsultarCotaContaResult,
  ListarCteResult,
  EmitirCteResult,
  ConsultarEventoCteResult,
  ConsultarStatusSefazCteResult,
  EmitirCteSimpResult,
  ConsultarCteResult,
  ConsultarCancelamentoCteResult,
  CancelarCteResult,
  ConsultarCartaCorrecaoCteResult,
  CriarCartaCorrecaoCteResult,
  SincronizarCteResult,
  ListarCteOsResult,
  EmitirCteOsResult,
  ConsultarEventoCteOsResult,
  ConsultarStatusSefazCteOsResult,
  ConsultarCteOsResult,
  ConsultarCancelamentoCteOsResult,
  CancelarCteOsResult,
  ConsultarCartaCorrecaoCteOsResult,
  CriarCartaCorrecaoCteOsResult,
  SincronizarCteOsResult,
  ListarDceResult,
  EmitirDceResult,
  ConsultarStatusSefazDceResult,
  ConsultarDceResult,
  ConsultarCancelamentoDceResult,
  CancelarDceResult,
  DebugHttpRequestContentResult,
  DebugHttpResponseContentResult,
  DebugDfeResult,
  DebugDfeOriginalPayloadResult,
  ListarDistribuicaoNfeResult,
  GerarDistribuicaoNfeResult,
  ListarDocumentoDistribuicaoNfeResult,
  ConsultarDocumentoDistribuicaoNfeResult,
  ListarManifestacaoNfeResult,
  ManifestarNfeResult,
  ConsultarManifestacaoNfeResult,
  ListarNfeSemManifestacaoResult,
  ConsultarDistribuicaoNfeResult,
  ListarEmailsResult,
  ConsultarEmailResult,
  ListarEmpresasResult,
  CriarEmpresaResult,
  ConsultarEmpresaResult,
  AtualizarEmpresaResult,
  ExcluirEmpresaResult,
  ConsultarCertificadoEmpresaResult,
  CadastrarCertificadoEmpresaResult,
  ExcluirCertificadoEmpresaResult,
  EnviarCertificadoEmpresaResult,
  ConsultarConfigCteResult,
  AlterarConfigCteResult,
  ConsultarConfigCteOsResult,
  AlterarConfigCteOsResult,
  ConsultarConfigDceResult,
  AlterarConfigDceResult,
  ConsultarConfigDistribuicaoNfeResult,
  AlterarConfigDistribuicaoNfeResult,
  EnviarLogotipoEmpresaResult,
  ExcluirLogotipoEmpresaResult,
  ConsultarConfigMdfeResult,
  AlterarConfigMdfeResult,
  ConsultarConfigNfceResult,
  AlterarConfigNfceResult,
  ConsultarConfigNfcomResult,
  AlterarConfigNfcomResult,
  ConsultarConfigNfeResult,
  AlterarConfigNfeResult,
  ConsultarConfigNfseResult,
  AlterarConfigNfseResult,
  ListarMdfeResult,
  EmitirMdfeResult,
  ConsultarEventoMdfeResult,
  ListarLotesMdfeResult,
  EmitirLoteMdfeResult,
  ConsultarLoteMdfeResult,
  ConsultarMdfeNaoEncerradosResult,
  ConsultarStatusSefazMdfeResult,
  ConsultarMdfeResult,
  ConsultarCancelamentoMdfeResult,
  CancelarMdfeResult,
  ConsultarEncerramentoMdfeResult,
  EncerrarMdfeResult,
  IncluirCondutorMdfeResult,
  IncluirDfeMdfeResult,
  SincronizarMdfeResult,
  ListarNfceResult,
  EmitirNfceResult,
  ListarEventosNfceResult,
  ConsultarEventoNfceResult,
  InutilizarNumeracaoNfceResult,
  ConsultarInutilizacaoNfceResult,
  ListarLotesNfceResult,
  EmitirLoteNfceResult,
  ConsultarLoteNfceResult,
  ConsultarStatusSefazNfceResult,
  ConsultarNfceResult,
  ConsultarCancelamentoNfceResult,
  CancelarNfceResult,
  EnviarEmailNfceResult,
  SincronizarNfceResult,
  ListarNfcomResult,
  EmitirNfcomResult,
  ConsultarStatusSefazNfcomResult,
  ConsultarNfcomResult,
  ConsultarCancelamentoNfcomResult,
  CancelarNfcomResult,
  ListarNfeResult,
  EmitirNfeResult,
  ConsultarContribuinteNfeResult,
  ListarEventosNfeResult,
  ConsultarEventoNfeResult,
  InutilizarNumeracaoNfeResult,
  ConsultarInutilizacaoNfeResult,
  ListarLotesNfeResult,
  EmitirLoteNfeResult,
  ConsultarLoteNfeResult,
  ConsultarStatusSefazNfeResult,
  ConsultarNfeResult,
  ConsultarCancelamentoNfeResult,
  CancelarNfeResult,
  ConsultarCartaCorrecaoNfeResult,
  CriarCartaCorrecaoNfeResult,
  EnviarEmailNfeResult,
  SincronizarNfeResult,
  ListarNfseResult,
  EmitirNfseResult,
  CidadesAtendidasResult,
  ConsultarMetadadosResult,
  EmitirNfseDpsResult,
  EmitirLoteNfseDpsResult,
  ListarLotesNfseResult,
  EmitirLoteNfseResult,
  ConsultarLoteNfseResult,
  ConsultarNfseResult,
  ConsultarCancelamentoNfseResult,
  CancelarNfseResult,
  SincronizarNfseResult,
} from "../types/nuvem-fiscal-interfaces";
import {
  ConsultarCepParams,
  ListarCnpjQuery,
  ConsultarCnpjParams,
  ConsultarCotaContaParams,
  ListarCteQuery,
  EmitirCteBody,
  ConsultarEventoCteParams,
  ConsultarStatusSefazCteQuery,
  EmitirCteSimpBody,
  ConsultarCteParams,
  ConsultarCancelamentoCteParams,
  CancelarCteParams,
  CancelarCteBody,
  ConsultarCartaCorrecaoCteParams,
  CriarCartaCorrecaoCteParams,
  CriarCartaCorrecaoCteBody,
  SincronizarCteParams,
  SincronizarCteBody,
  ListarCteOsQuery,
  EmitirCteOsBody,
  ConsultarEventoCteOsParams,
  ConsultarStatusSefazCteOsQuery,
  ConsultarCteOsParams,
  ConsultarCancelamentoCteOsParams,
  CancelarCteOsParams,
  CancelarCteOsBody,
  ConsultarCartaCorrecaoCteOsParams,
  CriarCartaCorrecaoCteOsParams,
  CriarCartaCorrecaoCteOsBody,
  SincronizarCteOsParams,
  SincronizarCteOsBody,
  ListarDceQuery,
  EmitirDceBody,
  ConsultarStatusSefazDceQuery,
  ConsultarDceParams,
  ConsultarCancelamentoDceParams,
  CancelarDceParams,
  CancelarDceBody,
  DebugHttpRequestContentParams,
  DebugHttpResponseContentParams,
  DebugDfeParams,
  DebugDfeOriginalPayloadParams,
  ListarDistribuicaoNfeQuery,
  GerarDistribuicaoNfeBody,
  ListarDocumentoDistribuicaoNfeQuery,
  ConsultarDocumentoDistribuicaoNfeParams,
  ListarManifestacaoNfeQuery,
  ManifestarNfeBody,
  ConsultarManifestacaoNfeParams,
  ListarNfeSemManifestacaoQuery,
  ConsultarDistribuicaoNfeParams,
  ListarEmailsQuery,
  ConsultarEmailParams,
  ListarEmpresasQuery,
  CriarEmpresaBody,
  ConsultarEmpresaParams,
  AtualizarEmpresaParams,
  AtualizarEmpresaBody,
  ExcluirEmpresaParams,
  ConsultarCertificadoEmpresaParams,
  CadastrarCertificadoEmpresaParams,
  CadastrarCertificadoEmpresaBody,
  ExcluirCertificadoEmpresaParams,
  EnviarCertificadoEmpresaParams,
  EnviarCertificadoEmpresaBody,
  ConsultarConfigCteParams,
  AlterarConfigCteParams,
  AlterarConfigCteBody,
  ConsultarConfigCteOsParams,
  AlterarConfigCteOsParams,
  AlterarConfigCteOsBody,
  ConsultarConfigDceParams,
  AlterarConfigDceParams,
  AlterarConfigDceBody,
  ConsultarConfigDistribuicaoNfeParams,
  AlterarConfigDistribuicaoNfeParams,
  AlterarConfigDistribuicaoNfeBody,
  EnviarLogotipoEmpresaParams,
  EnviarLogotipoEmpresaBody,
  ExcluirLogotipoEmpresaParams,
  ConsultarConfigMdfeParams,
  AlterarConfigMdfeParams,
  AlterarConfigMdfeBody,
  ConsultarConfigNfceParams,
  AlterarConfigNfceParams,
  AlterarConfigNfceBody,
  ConsultarConfigNfcomParams,
  AlterarConfigNfcomParams,
  AlterarConfigNfcomBody,
  ConsultarConfigNfeParams,
  AlterarConfigNfeParams,
  AlterarConfigNfeBody,
  ConsultarConfigNfseParams,
  AlterarConfigNfseParams,
  AlterarConfigNfseBody,
  ListarMdfeQuery,
  EmitirMdfeBody,
  ConsultarEventoMdfeParams,
  ListarLotesMdfeQuery,
  EmitirLoteMdfeBody,
  ConsultarLoteMdfeParams,
  ConsultarMdfeNaoEncerradosQuery,
  ConsultarStatusSefazMdfeQuery,
  ConsultarMdfeParams,
  ConsultarCancelamentoMdfeParams,
  CancelarMdfeParams,
  CancelarMdfeBody,
  ConsultarEncerramentoMdfeParams,
  EncerrarMdfeParams,
  EncerrarMdfeBody,
  IncluirCondutorMdfeParams,
  IncluirCondutorMdfeBody,
  IncluirDfeMdfeParams,
  IncluirDfeMdfeBody,
  SincronizarMdfeParams,
  SincronizarMdfeBody,
  ListarNfceQuery,
  EmitirNfceBody,
  ListarEventosNfceQuery,
  ConsultarEventoNfceParams,
  InutilizarNumeracaoNfceBody,
  ConsultarInutilizacaoNfceParams,
  ListarLotesNfceQuery,
  EmitirLoteNfceBody,
  ConsultarLoteNfceParams,
  ConsultarStatusSefazNfceQuery,
  ConsultarNfceParams,
  ConsultarCancelamentoNfceParams,
  CancelarNfceParams,
  CancelarNfceBody,
  EnviarEmailNfceParams,
  EnviarEmailNfceBody,
  SincronizarNfceParams,
  SincronizarNfceBody,
  ListarNfcomQuery,
  EmitirNfcomBody,
  ConsultarStatusSefazNfcomQuery,
  ConsultarNfcomParams,
  ConsultarCancelamentoNfcomParams,
  CancelarNfcomParams,
  CancelarNfcomBody,
  ListarNfeQuery,
  EmitirNfeBody,
  ConsultarContribuinteNfeQuery,
  ListarEventosNfeQuery,
  ConsultarEventoNfeParams,
  InutilizarNumeracaoNfeBody,
  ConsultarInutilizacaoNfeParams,
  ListarLotesNfeQuery,
  EmitirLoteNfeBody,
  ConsultarLoteNfeParams,
  ConsultarStatusSefazNfeQuery,
  ConsultarNfeParams,
  ConsultarCancelamentoNfeParams,
  CancelarNfeParams,
  CancelarNfeBody,
  ConsultarCartaCorrecaoNfeParams,
  CriarCartaCorrecaoNfeParams,
  CriarCartaCorrecaoNfeBody,
  EnviarEmailNfeParams,
  EnviarEmailNfeBody,
  SincronizarNfeParams,
  SincronizarNfeBody,
  ListarNfseQuery,
  EmitirNfseBody,
  ConsultarMetadadosParams,
  EmitirNfseDpsBody,
  EmitirLoteNfseDpsBody,
  ListarLotesNfseQuery,
  EmitirLoteNfseBody,
  ConsultarLoteNfseParams,
  ConsultarNfseParams,
  ConsultarCancelamentoNfseParams,
  CancelarNfseParams,
  CancelarNfseBody,
  SincronizarNfseParams,
  SincronizarNfseBody,
  BaixarPdfEventoCteParams,
  BaixarXmlEventoCteParams,
  BaixarPdfCancelamentoCteParams,
  BaixarXmlCancelamentoCteParams,
  BaixarPdfCartaCorrecaoCteParams,
  BaixarXmlCartaCorrecaoCteParams,
  BaixarPdfCteParams,
  BaixarPdfCteQuery,
  BaixarXmlCteParams,
  BaixarXmlCteConhecimentoParams,
  BaixarXmlCteProtocoloParams,
  BaixarPdfEventoCteOsParams,
  BaixarXmlEventoCteOsParams,
  BaixarPdfCancelamentoCteOsParams,
  BaixarXmlCancelamentoCteOsParams,
  BaixarPdfCartaCorrecaoCteOsParams,
  BaixarXmlCartaCorrecaoCteOsParams,
  BaixarPdfCteOsParams,
  BaixarPdfCteOsQuery,
  BaixarXmlCteOsParams,
  BaixarXmlCteOsConhecimentoParams,
  BaixarXmlCteOsProtocoloParams,
  BaixarXmlCancelamentoDceParams,
  BaixarPdfDceParams,
  BaixarXmlDceParams,
  BaixarXmlDceDeclaracaoParams,
  BaixarXmlDceProtocoloParams,
  BaixarPdfDocumentoDistribuicaoNfeParams,
  BaixarXmlDocumentoDistribuicaoNfeParams,
  BaixarLogotipoEmpresaParams,
  BaixarPdfEventoMdfeParams,
  BaixarXmlEventoMdfeParams,
  BaixarPdfCancelamentoMdfeParams,
  BaixarXmlCancelamentoMdfeParams,
  BaixarPdfEncerramentoMdfeParams,
  BaixarXmlEncerramentoMdfeParams,
  BaixarPdfMdfeParams,
  BaixarPdfMdfeQuery,
  BaixarXmlMdfeParams,
  BaixarXmlMdfeManifestoParams,
  BaixarXmlMdfeProtocoloParams,
  BaixarPdfEventoNfceParams,
  BaixarXmlEventoNfceParams,
  BaixarPdfInutilizacaoNfceParams,
  BaixarXmlInutilizacaoNfceParams,
  BaixarPreviaPdfNfceBody,
  BaixarPreviaPdfNfceQuery,
  BaixarPreviaXmlNfceBody,
  BaixarPdfCancelamentoNfceParams,
  BaixarXmlCancelamentoNfceParams,
  BaixarEscPosNfceParams,
  BaixarEscPosNfceQuery,
  BaixarPdfNfceParams,
  BaixarPdfNfceQuery,
  BaixarXmlNfceParams,
  BaixarXmlNfceNotaParams,
  BaixarXmlNfceProtocoloParams,
  BaixarXmlCancelamentoNfcomParams,
  BaixarPdfNfcomParams,
  BaixarPdfNfcomQuery,
  BaixarXmlNfcomParams,
  BaixarXmlNfcomNotaParams,
  BaixarXmlNfcomProtocoloParams,
  BaixarPdfEventoNfeParams,
  BaixarXmlEventoNfeParams,
  BaixarPdfInutilizacaoNfeParams,
  BaixarXmlInutilizacaoNfeParams,
  BaixarPreviaPdfNfeBody,
  BaixarPreviaPdfNfeQuery,
  BaixarPreviaXmlNfeBody,
  BaixarPdfCancelamentoNfeParams,
  BaixarXmlCancelamentoNfeParams,
  BaixarPdfCartaCorrecaoNfeParams,
  BaixarXmlCartaCorrecaoNfeParams,
  BaixarPdfNfeParams,
  BaixarPdfNfeQuery,
  BaixarXmlNfeParams,
  BaixarXmlNfeNotaParams,
  BaixarXmlNfeProtocoloParams,
  BaixarXmlCancelamentoNfseParams,
  BaixarPdfNfseParams,
  BaixarPdfNfseQuery,
  BaixarXmlNfseParams,
  BaixarXmlDpsParams,
} from "../types/nuvem-fiscal-payloads";

export class NuvemFiscalClient {
  constructor(private http: NuvemFiscalHttpClient, private baseUrl: string) {}

  /** Auto-generated for /cep/{Cep} [GET] -> operations["ConsultarCep"] */
  async consultarCep(
    params: ConsultarCepParams
  ): Promise<ConsultarCepResult> {
    return this.http.get<ConsultarCepResult>(
      `${this.baseUrl}/cep/${encodeURIComponent(params.Cep)}`
    );
  }
  /** Auto-generated for /cnpj [GET] -> operations["ListarCnpj"] */
  async listarCnpj(
    query?: ListarCnpjQuery
  ): Promise<ListarCnpjResult> {
    return this.http.get<ListarCnpjResult>(
      `${this.baseUrl}/cnpj`,
      query
    );
  }
  /** Auto-generated for /cnpj/{Cnpj} [GET] -> operations["ConsultarCnpj"] */
  async consultarCnpj(
    params: ConsultarCnpjParams
  ): Promise<ConsultarCnpjResult> {
    return this.http.get<ConsultarCnpjResult>(
      `${this.baseUrl}/cnpj/${encodeURIComponent(params.Cnpj)}`
    );
  }
  /** Auto-generated for /conta/cotas [GET] -> operations["ListarCotasConta"] */
  async listarCotasConta(): Promise<ListarCotasContaResult> {
    return this.http.get<ListarCotasContaResult>(
      `${this.baseUrl}/conta/cotas`
    );
  }
  /** Auto-generated for /conta/cotas/{nome} [GET] -> operations["ConsultarCotaConta"] */
  async consultarCotaConta(
    params: ConsultarCotaContaParams
  ): Promise<ConsultarCotaContaResult> {
    return this.http.get<ConsultarCotaContaResult>(
      `${this.baseUrl}/conta/cotas/${encodeURIComponent(params.nome)}`
    );
  }
  /** Auto-generated for /cte [GET] -> operations["ListarCte"] */
  async listarCte(
    query?: ListarCteQuery
  ): Promise<ListarCteResult> {
    return this.http.get<ListarCteResult>(
      `${this.baseUrl}/cte`,
      query
    );
  }
  /** Auto-generated for /cte [POST] -> operations["EmitirCte"] */
  async emitirCte(
    body: EmitirCteBody
  ): Promise<EmitirCteResult> {
    return this.http.post<EmitirCteResult>(
      `${this.baseUrl}/cte`,
      body
    );
  }
  /** Auto-generated for /cte/eventos/{id} [GET] -> operations["ConsultarEventoCte"] */
  async consultarEventoCte(
    params: ConsultarEventoCteParams
  ): Promise<ConsultarEventoCteResult> {
    return this.http.get<ConsultarEventoCteResult>(
      `${this.baseUrl}/cte/eventos/${encodeURIComponent(params.id)}`
    );
  }
  /** Auto-generated for /cte/sefaz/status [GET] -> operations["ConsultarStatusSefazCte"] */
  async consultarStatusSefazCte(
    query?: ConsultarStatusSefazCteQuery
  ): Promise<ConsultarStatusSefazCteResult> {
    return this.http.get<ConsultarStatusSefazCteResult>(
      `${this.baseUrl}/cte/sefaz/status`,
      query
    );
  }
  /** Auto-generated for /cte/simp [POST] -> operations["EmitirCteSimp"] */
  async emitirCteSimp(
    body: EmitirCteSimpBody
  ): Promise<EmitirCteSimpResult> {
    return this.http.post<EmitirCteSimpResult>(
      `${this.baseUrl}/cte/simp`,
      body
    );
  }
  /** Auto-generated for /cte/{id} [GET] -> operations["ConsultarCte"] */
  async consultarCte(
    params: ConsultarCteParams
  ): Promise<ConsultarCteResult> {
    return this.http.get<ConsultarCteResult>(
      `${this.baseUrl}/cte/${encodeURIComponent(params.id)}`
    );
  }
  /** Auto-generated for /cte/{id}/cancelamento [GET] -> operations["ConsultarCancelamentoCte"] */
  async consultarCancelamentoCte(
    params: ConsultarCancelamentoCteParams
  ): Promise<ConsultarCancelamentoCteResult> {
    return this.http.get<ConsultarCancelamentoCteResult>(
      `${this.baseUrl}/cte/${encodeURIComponent(params.id)}/cancelamento`
    );
  }
  /** Auto-generated for /cte/{id}/cancelamento [POST] -> operations["CancelarCte"] */
  async cancelarCte(
    params: CancelarCteParams,
    body: CancelarCteBody
  ): Promise<CancelarCteResult> {
    return this.http.post<CancelarCteResult>(
      `${this.baseUrl}/cte/${encodeURIComponent(params.id)}/cancelamento`,
      body
    );
  }
  /** Auto-generated for /cte/{id}/carta-correcao [GET] -> operations["ConsultarCartaCorrecaoCte"] */
  async consultarCartaCorrecaoCte(
    params: ConsultarCartaCorrecaoCteParams
  ): Promise<ConsultarCartaCorrecaoCteResult> {
    return this.http.get<ConsultarCartaCorrecaoCteResult>(
      `${this.baseUrl}/cte/${encodeURIComponent(params.id)}/carta-correcao`
    );
  }
  /** Auto-generated for /cte/{id}/carta-correcao [POST] -> operations["CriarCartaCorrecaoCte"] */
  async criarCartaCorrecaoCte(
    params: CriarCartaCorrecaoCteParams,
    body: CriarCartaCorrecaoCteBody
  ): Promise<CriarCartaCorrecaoCteResult> {
    return this.http.post<CriarCartaCorrecaoCteResult>(
      `${this.baseUrl}/cte/${encodeURIComponent(params.id)}/carta-correcao`,
      body
    );
  }
  /** Auto-generated for /cte/{id}/sincronizar [POST] -> operations["SincronizarCte"] */
  async sincronizarCte(
    params: SincronizarCteParams,
    body?: any
  ): Promise<SincronizarCteResult> {
    return this.http.post<SincronizarCteResult>(
      `${this.baseUrl}/cte/${encodeURIComponent(params.id)}/sincronizar`,
      body
    );
  }
  /** Auto-generated for /cteos [GET] -> operations["ListarCteOs"] */
  async listarCteOs(
    query?: ListarCteOsQuery
  ): Promise<ListarCteOsResult> {
    return this.http.get<ListarCteOsResult>(
      `${this.baseUrl}/cteos`,
      query
    );
  }
  /** Auto-generated for /cteos [POST] -> operations["EmitirCteOs"] */
  async emitirCteOs(
    body: EmitirCteOsBody
  ): Promise<EmitirCteOsResult> {
    return this.http.post<EmitirCteOsResult>(
      `${this.baseUrl}/cteos`,
      body
    );
  }
  /** Auto-generated for /cteos/eventos/{id} [GET] -> operations["ConsultarEventoCteOs"] */
  async consultarEventoCteOs(
    params: ConsultarEventoCteOsParams
  ): Promise<ConsultarEventoCteOsResult> {
    return this.http.get<ConsultarEventoCteOsResult>(
      `${this.baseUrl}/cteos/eventos/${encodeURIComponent(params.id)}`
    );
  }
  /** Auto-generated for /cteos/sefaz/status [GET] -> operations["ConsultarStatusSefazCteOs"] */
  async consultarStatusSefazCteOs(
    query?: ConsultarStatusSefazCteOsQuery
  ): Promise<ConsultarStatusSefazCteOsResult> {
    return this.http.get<ConsultarStatusSefazCteOsResult>(
      `${this.baseUrl}/cteos/sefaz/status`,
      query
    );
  }
  /** Auto-generated for /cteos/{id} [GET] -> operations["ConsultarCteOs"] */
  async consultarCteOs(
    params: ConsultarCteOsParams
  ): Promise<ConsultarCteOsResult> {
    return this.http.get<ConsultarCteOsResult>(
      `${this.baseUrl}/cteos/${encodeURIComponent(params.id)}`
    );
  }
  /** Auto-generated for /cteos/{id}/cancelamento [GET] -> operations["ConsultarCancelamentoCteOs"] */
  async consultarCancelamentoCteOs(
    params: ConsultarCancelamentoCteOsParams
  ): Promise<ConsultarCancelamentoCteOsResult> {
    return this.http.get<ConsultarCancelamentoCteOsResult>(
      `${this.baseUrl}/cteos/${encodeURIComponent(params.id)}/cancelamento`
    );
  }
  /** Auto-generated for /cteos/{id}/cancelamento [POST] -> operations["CancelarCteOs"] */
  async cancelarCteOs(
    params: CancelarCteOsParams,
    body: CancelarCteOsBody
  ): Promise<CancelarCteOsResult> {
    return this.http.post<CancelarCteOsResult>(
      `${this.baseUrl}/cteos/${encodeURIComponent(params.id)}/cancelamento`,
      body
    );
  }
  /** Auto-generated for /cteos/{id}/carta-correcao [GET] -> operations["ConsultarCartaCorrecaoCteOs"] */
  async consultarCartaCorrecaoCteOs(
    params: ConsultarCartaCorrecaoCteOsParams
  ): Promise<ConsultarCartaCorrecaoCteOsResult> {
    return this.http.get<ConsultarCartaCorrecaoCteOsResult>(
      `${this.baseUrl}/cteos/${encodeURIComponent(params.id)}/carta-correcao`
    );
  }
  /** Auto-generated for /cteos/{id}/carta-correcao [POST] -> operations["CriarCartaCorrecaoCteOs"] */
  async criarCartaCorrecaoCteOs(
    params: CriarCartaCorrecaoCteOsParams,
    body: CriarCartaCorrecaoCteOsBody
  ): Promise<CriarCartaCorrecaoCteOsResult> {
    return this.http.post<CriarCartaCorrecaoCteOsResult>(
      `${this.baseUrl}/cteos/${encodeURIComponent(params.id)}/carta-correcao`,
      body
    );
  }
  /** Auto-generated for /cteos/{id}/sincronizar [POST] -> operations["SincronizarCteOs"] */
  async sincronizarCteOs(
    params: SincronizarCteOsParams,
    body?: any
  ): Promise<SincronizarCteOsResult> {
    return this.http.post<SincronizarCteOsResult>(
      `${this.baseUrl}/cteos/${encodeURIComponent(params.id)}/sincronizar`,
      body
    );
  }
  /** Auto-generated for /dce [GET] -> operations["ListarDce"] */
  async listarDce(
    query?: ListarDceQuery
  ): Promise<ListarDceResult> {
    return this.http.get<ListarDceResult>(
      `${this.baseUrl}/dce`,
      query
    );
  }
  /** Auto-generated for /dce [POST] -> operations["EmitirDce"] */
  async emitirDce(
    body: EmitirDceBody
  ): Promise<EmitirDceResult> {
    return this.http.post<EmitirDceResult>(
      `${this.baseUrl}/dce`,
      body
    );
  }
  /** Auto-generated for /dce/sefaz/status [GET] -> operations["ConsultarStatusSefazDce"] */
  async consultarStatusSefazDce(
    query?: ConsultarStatusSefazDceQuery
  ): Promise<ConsultarStatusSefazDceResult> {
    return this.http.get<ConsultarStatusSefazDceResult>(
      `${this.baseUrl}/dce/sefaz/status`,
      query
    );
  }
  /** Auto-generated for /dce/{id} [GET] -> operations["ConsultarDce"] */
  async consultarDce(
    params: ConsultarDceParams
  ): Promise<ConsultarDceResult> {
    return this.http.get<ConsultarDceResult>(
      `${this.baseUrl}/dce/${encodeURIComponent(params.id)}`
    );
  }
  /** Auto-generated for /dce/{id}/cancelamento [GET] -> operations["ConsultarCancelamentoDce"] */
  async consultarCancelamentoDce(
    params: ConsultarCancelamentoDceParams
  ): Promise<ConsultarCancelamentoDceResult> {
    return this.http.get<ConsultarCancelamentoDceResult>(
      `${this.baseUrl}/dce/${encodeURIComponent(params.id)}/cancelamento`
    );
  }
  /** Auto-generated for /dce/{id}/cancelamento [POST] -> operations["CancelarDce"] */
  async cancelarDce(
    params: CancelarDceParams,
    body: CancelarDceBody
  ): Promise<CancelarDceResult> {
    return this.http.post<CancelarDceResult>(
      `${this.baseUrl}/dce/${encodeURIComponent(params.id)}/cancelamento`,
      body
    );
  }
  /** Auto-generated for /debug/http-requests/{id}/request-content [GET] -> operations["DebugHttpRequestContent"] */
  async debugHttpRequestContent(
    params: DebugHttpRequestContentParams
  ): Promise<DebugHttpRequestContentResult> {
    return this.http.get<DebugHttpRequestContentResult>(
      `${this.baseUrl}/debug/http-requests/${encodeURIComponent(
        params.id
      )}/request-content`
    );
  }
  /** Auto-generated for /debug/http-requests/{id}/response-content [GET] -> operations["DebugHttpResponseContent"] */
  async debugHttpResponseContent(
    params: DebugHttpResponseContentParams
  ): Promise<DebugHttpResponseContentResult> {
    return this.http.get<DebugHttpResponseContentResult>(
      `${this.baseUrl}/debug/http-requests/${encodeURIComponent(
        params.id
      )}/response-content`
    );
  }
  /** Auto-generated for /debug/{id} [GET] -> operations["DebugDfe"] */
  async debugDfe(
    params: DebugDfeParams
  ): Promise<DebugDfeResult> {
    return this.http.get<DebugDfeResult>(
      `${this.baseUrl}/debug/${encodeURIComponent(params.id)}`
    );
  }
  /** Auto-generated for /debug/{id}/original-payload [GET] -> operations["DebugDfeOriginalPayload"] */
  async debugDfeOriginalPayload(
    params: DebugDfeOriginalPayloadParams
  ): Promise<DebugDfeOriginalPayloadResult> {
    return this.http.get<DebugDfeOriginalPayloadResult>(
      `${this.baseUrl}/debug/${encodeURIComponent(params.id)}/original-payload`
    );
  }
  /** Auto-generated for /distribuicao/nfe [GET] -> operations["ListarDistribuicaoNfe"] */
  async listarDistribuicaoNfe(
    query?: ListarDistribuicaoNfeQuery
  ): Promise<ListarDistribuicaoNfeResult> {
    return this.http.get<ListarDistribuicaoNfeResult>(
      `${this.baseUrl}/distribuicao/nfe`,
      query
    );
  }
  /** Auto-generated for /distribuicao/nfe [POST] -> operations["GerarDistribuicaoNfe"] */
  async gerarDistribuicaoNfe(
    body: GerarDistribuicaoNfeBody
  ): Promise<GerarDistribuicaoNfeResult> {
    return this.http.post<GerarDistribuicaoNfeResult>(
      `${this.baseUrl}/distribuicao/nfe`,
      body
    );
  }
  /** Auto-generated for /distribuicao/nfe/documentos [GET] -> operations["ListarDocumentoDistribuicaoNfe"] */
  async listarDocumentoDistribuicaoNfe(
    query?: ListarDocumentoDistribuicaoNfeQuery
  ): Promise<ListarDocumentoDistribuicaoNfeResult> {
    return this.http.get<ListarDocumentoDistribuicaoNfeResult>(`${this.baseUrl}/distribuicao/nfe/documentos`, query);
  }
  /** Auto-generated for /distribuicao/nfe/documentos/{id} [GET] -> operations["ConsultarDocumentoDistribuicaoNfe"] */
  async consultarDocumentoDistribuicaoNfe(
    params: ConsultarDocumentoDistribuicaoNfeParams
  ): Promise<ConsultarDocumentoDistribuicaoNfeResult> {
    return this.http.get<ConsultarDocumentoDistribuicaoNfeResult>(
      `${this.baseUrl}/distribuicao/nfe/documentos/${encodeURIComponent(
        params.id
      )}`
    );
  }
  /** Auto-generated for /distribuicao/nfe/manifestacoes [GET] -> operations["ListarManifestacaoNfe"] */
  async listarManifestacaoNfe(
    query?: ListarManifestacaoNfeQuery
  ): Promise<ListarManifestacaoNfeResult> {
    return this.http.get<ListarManifestacaoNfeResult>(
      `${this.baseUrl}/distribuicao/nfe/manifestacoes`,
      query
    );
  }
  /** Auto-generated for /distribuicao/nfe/manifestacoes [POST] -> operations["ManifestarNfe"] */
  async manifestarNfe(
    body: ManifestarNfeBody
  ): Promise<ManifestarNfeResult> {
    return this.http.post<ManifestarNfeResult>(
      `${this.baseUrl}/distribuicao/nfe/manifestacoes`,
      body
    );
  }
  /** Auto-generated for /distribuicao/nfe/manifestacoes/{id} [GET] -> operations["ConsultarManifestacaoNfe"] */
  async consultarManifestacaoNfe(
    params: ConsultarManifestacaoNfeParams
  ): Promise<ConsultarManifestacaoNfeResult> {
    return this.http.get<ConsultarManifestacaoNfeResult>(
      `${this.baseUrl}/distribuicao/nfe/manifestacoes/${encodeURIComponent(
        params.id
      )}`
    );
  }
  /** Auto-generated for /distribuicao/nfe/notas-sem-manifestacao [GET] -> operations["ListarNfeSemManifestacao"] */
  async listarNfeSemManifestacao(
    query?: ListarNfeSemManifestacaoQuery
  ): Promise<ListarNfeSemManifestacaoResult> {
    return this.http.get<ListarNfeSemManifestacaoResult>(
      `${this.baseUrl}/distribuicao/nfe/notas-sem-manifestacao`,
      query
    );
  }
  /** Auto-generated for /distribuicao/nfe/{id} [GET] -> operations["ConsultarDistribuicaoNfe"] */
  async consultarDistribuicaoNfe(
    params: ConsultarDistribuicaoNfeParams
  ): Promise<ConsultarDistribuicaoNfeResult> {
    return this.http.get<ConsultarDistribuicaoNfeResult>(
      `${this.baseUrl}/distribuicao/nfe/${encodeURIComponent(params.id)}`
    );
  }
  /** Auto-generated for /emails [GET] -> operations["ListarEmails"] */
  async listarEmails(
    query?: ListarEmailsQuery
  ): Promise<ListarEmailsResult> {
    return this.http.get<ListarEmailsResult>(
      `${this.baseUrl}/emails`,
      query
    );
  }
  /** Auto-generated for /emails/{id} [GET] -> operations["ConsultarEmail"] */
  async consultarEmail(
    params: ConsultarEmailParams
  ): Promise<ConsultarEmailResult> {
    return this.http.get<ConsultarEmailResult>(
      `${this.baseUrl}/emails/${encodeURIComponent(params.id)}`
    );
  }
  /** Auto-generated for /empresas [GET] -> operations["ListarEmpresas"] */
  async listarEmpresas(
    query?: ListarEmpresasQuery
  ): Promise<ListarEmpresasResult> {
    return this.http.get<ListarEmpresasResult>(
      `${this.baseUrl}/empresas`,
      query
    );
  }
  /** Auto-generated for /empresas [POST] -> operations["CriarEmpresa"] */
  async criarEmpresa(
    body: CriarEmpresaBody
  ): Promise<CriarEmpresaResult> {
    return this.http.post<CriarEmpresaResult>(
      `${this.baseUrl}/empresas`,
      body
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj} [GET] -> operations["ConsultarEmpresa"] */
  async consultarEmpresa(
    params: ConsultarEmpresaParams
  ): Promise<ConsultarEmpresaResult> {
    return this.http.get<ConsultarEmpresaResult>(
      `${this.baseUrl}/empresas/${encodeURIComponent(params.cpf_cnpj)}`
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj} [PUT] -> operations["AtualizarEmpresa"] */
  async atualizarEmpresa(
    params: AtualizarEmpresaParams,
    body: AtualizarEmpresaBody
  ): Promise<AtualizarEmpresaResult> {
    return this.http.put<AtualizarEmpresaResult>(
      `${this.baseUrl}/empresas/${encodeURIComponent(params.cpf_cnpj)}`,
      body
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj} [DELETE] -> operations["ExcluirEmpresa"] */
  async excluirEmpresa(
    params: ExcluirEmpresaParams
  ): Promise<ExcluirEmpresaResult> {
    return this.http.delete<ExcluirEmpresaResult>(
      `${this.baseUrl}/empresas/${encodeURIComponent(params.cpf_cnpj)}`
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/certificado [GET] -> operations["ConsultarCertificadoEmpresa"] */
  async consultarCertificadoEmpresa(
    params: ConsultarCertificadoEmpresaParams
  ): Promise<ConsultarCertificadoEmpresaResult> {
    return this.http.get<ConsultarCertificadoEmpresaResult>(
      `${this.baseUrl}/empresas/${encodeURIComponent(
        params.cpf_cnpj
      )}/certificado`
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/certificado [PUT] -> operations["CadastrarCertificadoEmpresa"] */
  async cadastrarCertificadoEmpresa(
    params: CadastrarCertificadoEmpresaParams,
    body: CadastrarCertificadoEmpresaBody
  ): Promise<CadastrarCertificadoEmpresaResult> {
    return this.http.put<CadastrarCertificadoEmpresaResult>(
      `${this.baseUrl}/empresas/${encodeURIComponent(
        params.cpf_cnpj
      )}/certificado`,
      body
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/certificado [DELETE] -> operations["ExcluirCertificadoEmpresa"] */
  async excluirCertificadoEmpresa(
    params: ExcluirCertificadoEmpresaParams
  ): Promise<ExcluirCertificadoEmpresaResult> {
    return this.http.delete<ExcluirCertificadoEmpresaResult>(
      `${this.baseUrl}/empresas/${encodeURIComponent(
        params.cpf_cnpj
      )}/certificado`
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/certificado/upload [PUT] -> operations["EnviarCertificadoEmpresa"] */
  async enviarCertificadoEmpresa(
    params: EnviarCertificadoEmpresaParams,
    body?: any
  ): Promise<EnviarCertificadoEmpresaResult> {
    return this.http.put<EnviarCertificadoEmpresaResult>(
      `${this.baseUrl}/empresas/${encodeURIComponent(
        params.cpf_cnpj
      )}/certificado/upload`,
      body
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/cte [GET] -> operations["ConsultarConfigCte"] */
  async consultarConfigCte(
    params: ConsultarConfigCteParams
  ): Promise<ConsultarConfigCteResult> {
    return this.http.get<ConsultarConfigCteResult>(
      `${this.baseUrl}/empresas/${encodeURIComponent(params.cpf_cnpj)}/cte`
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/cte [PUT] -> operations["AlterarConfigCte"] */
  async alterarConfigCte(
    params: AlterarConfigCteParams,
    body: AlterarConfigCteBody
  ): Promise<AlterarConfigCteResult> {
    return this.http.put<AlterarConfigCteResult>(
      `${this.baseUrl}/empresas/${encodeURIComponent(params.cpf_cnpj)}/cte`,
      body
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/cteos [GET] -> operations["ConsultarConfigCteOs"] */
  async consultarConfigCteOs(
    params: ConsultarConfigCteOsParams
  ): Promise<ConsultarConfigCteOsResult> {
    return this.http.get<ConsultarConfigCteOsResult>(
      `${this.baseUrl}/empresas/${encodeURIComponent(params.cpf_cnpj)}/cteos`
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/cteos [PUT] -> operations["AlterarConfigCteOs"] */
  async alterarConfigCteOs(
    params: AlterarConfigCteOsParams,
    body: AlterarConfigCteOsBody
  ): Promise<AlterarConfigCteOsResult> {
    return this.http.put<AlterarConfigCteOsResult>(
      `${this.baseUrl}/empresas/${encodeURIComponent(params.cpf_cnpj)}/cteos`,
      body
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/dce [GET] -> operations["ConsultarConfigDce"] */
  async consultarConfigDce(
    params: ConsultarConfigDceParams
  ): Promise<ConsultarConfigDceResult> {
    return this.http.get<ConsultarConfigDceResult>(
      `${this.baseUrl}/empresas/${encodeURIComponent(params.cpf_cnpj)}/dce`
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/dce [PUT] -> operations["AlterarConfigDce"] */
  async alterarConfigDce(
    params: AlterarConfigDceParams,
    body: AlterarConfigDceBody
  ): Promise<AlterarConfigDceResult> {
    return this.http.put<AlterarConfigDceResult>(
      `${this.baseUrl}/empresas/${encodeURIComponent(params.cpf_cnpj)}/dce`,
      body
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/distnfe [GET] -> operations["ConsultarConfigDistribuicaoNfe"] */
  async consultarConfigDistribuicaoNfe(
    params: ConsultarConfigDistribuicaoNfeParams
  ): Promise<ConsultarConfigDistribuicaoNfeResult> {
    return this.http.get<ConsultarConfigDistribuicaoNfeResult>(
      `${this.baseUrl}/empresas/${encodeURIComponent(params.cpf_cnpj)}/distnfe`
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/distnfe [PUT] -> operations["AlterarConfigDistribuicaoNfe"] */
  async alterarConfigDistribuicaoNfe(
    params: AlterarConfigDistribuicaoNfeParams,
    body: AlterarConfigDistribuicaoNfeBody
  ): Promise<AlterarConfigDistribuicaoNfeResult> {
    return this.http.put<AlterarConfigDistribuicaoNfeResult>(
      `${this.baseUrl}/empresas/${encodeURIComponent(params.cpf_cnpj)}/distnfe`,
      body
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/logotipo [PUT] -> operations["EnviarLogotipoEmpresa"] */
  async enviarLogotipoEmpresa(
    params: EnviarLogotipoEmpresaParams,
    body?: any
  ): Promise<EnviarLogotipoEmpresaResult> {
    return this.http.put<EnviarLogotipoEmpresaResult>(
      `${this.baseUrl}/empresas/${encodeURIComponent(
        params.cpf_cnpj
      )}/logotipo`,
      body
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/logotipo [DELETE] -> operations["ExcluirLogotipoEmpresa"] */
  async excluirLogotipoEmpresa(
    params: ExcluirLogotipoEmpresaParams
  ): Promise<ExcluirLogotipoEmpresaResult> {
    return this.http.delete<ExcluirLogotipoEmpresaResult>(
      `${this.baseUrl}/empresas/${encodeURIComponent(params.cpf_cnpj)}/logotipo`
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/mdfe [GET] -> operations["ConsultarConfigMdfe"] */
  async consultarConfigMdfe(
    params: ConsultarConfigMdfeParams
  ): Promise<ConsultarConfigMdfeResult> {
    return this.http.get<ConsultarConfigMdfeResult>(
      `${this.baseUrl}/empresas/${encodeURIComponent(params.cpf_cnpj)}/mdfe`
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/mdfe [PUT] -> operations["AlterarConfigMdfe"] */
  async alterarConfigMdfe(
    params: AlterarConfigMdfeParams,
    body: AlterarConfigMdfeBody
  ): Promise<AlterarConfigMdfeResult> {
    return this.http.put<AlterarConfigMdfeResult>(
      `${this.baseUrl}/empresas/${encodeURIComponent(params.cpf_cnpj)}/mdfe`,
      body
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/nfce [GET] -> operations["ConsultarConfigNfce"] */
  async consultarConfigNfce(
    params: ConsultarConfigNfceParams
  ): Promise<ConsultarConfigNfceResult> {
    return this.http.get<ConsultarConfigNfceResult>(
      `${this.baseUrl}/empresas/${encodeURIComponent(params.cpf_cnpj)}/nfce`
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/nfce [PUT] -> operations["AlterarConfigNfce"] */
  async alterarConfigNfce(
    params: AlterarConfigNfceParams,
    body: AlterarConfigNfceBody
  ): Promise<AlterarConfigNfceResult> {
    return this.http.put<AlterarConfigNfceResult>(
      `${this.baseUrl}/empresas/${encodeURIComponent(params.cpf_cnpj)}/nfce`,
      body
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/nfcom [GET] -> operations["ConsultarConfigNfcom"] */
  async consultarConfigNfcom(
    params: ConsultarConfigNfcomParams
  ): Promise<ConsultarConfigNfcomResult> {
    return this.http.get<ConsultarConfigNfcomResult>(
      `${this.baseUrl}/empresas/${encodeURIComponent(params.cpf_cnpj)}/nfcom`
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/nfcom [PUT] -> operations["AlterarConfigNfcom"] */
  async alterarConfigNfcom(
    params: AlterarConfigNfcomParams,
    body: AlterarConfigNfcomBody
  ): Promise<AlterarConfigNfcomResult> {
    return this.http.put<AlterarConfigNfcomResult>(
      `${this.baseUrl}/empresas/${encodeURIComponent(params.cpf_cnpj)}/nfcom`,
      body
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/nfe [GET] -> operations["ConsultarConfigNfe"] */
  async consultarConfigNfe(
    params: ConsultarConfigNfeParams
  ): Promise<ConsultarConfigNfeResult> {
    return this.http.get<ConsultarConfigNfeResult>(
      `${this.baseUrl}/empresas/${encodeURIComponent(params.cpf_cnpj)}/nfe`
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/nfe [PUT] -> operations["AlterarConfigNfe"] */
  async alterarConfigNfe(
    params: AlterarConfigNfeParams,
    body: AlterarConfigNfeBody
  ): Promise<AlterarConfigNfeResult> {
    return this.http.put<AlterarConfigNfeResult>(
      `${this.baseUrl}/empresas/${encodeURIComponent(params.cpf_cnpj)}/nfe`,
      body
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/nfse [GET] -> operations["ConsultarConfigNfse"] */
  async consultarConfigNfse(
    params: ConsultarConfigNfseParams
  ): Promise<ConsultarConfigNfseResult> {
    return this.http.get<ConsultarConfigNfseResult>(
      `${this.baseUrl}/empresas/${encodeURIComponent(params.cpf_cnpj)}/nfse`
    );
  }
  /** Auto-generated for /empresas/{cpf_cnpj}/nfse [PUT] -> operations["AlterarConfigNfse"] */
  async alterarConfigNfse(
    params: AlterarConfigNfseParams,
    body: AlterarConfigNfseBody
  ): Promise<AlterarConfigNfseResult> {
    return this.http.put<AlterarConfigNfseResult>(
      `${this.baseUrl}/empresas/${encodeURIComponent(params.cpf_cnpj)}/nfse`,
      body
    );
  }
  /** Auto-generated for /mdfe [GET] -> operations["ListarMdfe"] */
  async listarMdfe(
    query?: ListarMdfeQuery
  ): Promise<ListarMdfeResult> {
    return this.http.get<ListarMdfeResult>(
      `${this.baseUrl}/mdfe`,
      query
    );
  }
  /** Auto-generated for /mdfe [POST] -> operations["EmitirMdfe"] */
  async emitirMdfe(
    body: EmitirMdfeBody
  ): Promise<EmitirMdfeResult> {
    return this.http.post<EmitirMdfeResult>(
      `${this.baseUrl}/mdfe`,
      body
    );
  }
  /** Auto-generated for /mdfe/eventos/{id} [GET] -> operations["ConsultarEventoMdfe"] */
  async consultarEventoMdfe(
    params: ConsultarEventoMdfeParams
  ): Promise<ConsultarEventoMdfeResult> {
    return this.http.get<ConsultarEventoMdfeResult>(
      `${this.baseUrl}/mdfe/eventos/${encodeURIComponent(params.id)}`
    );
  }
  /** Auto-generated for /mdfe/lotes [GET] -> operations["ListarLotesMdfe"] */
  async listarLotesMdfe(
    query?: ListarLotesMdfeQuery
  ): Promise<ListarLotesMdfeResult> {
    return this.http.get<ListarLotesMdfeResult>(
      `${this.baseUrl}/mdfe/lotes`,
      query
    );
  }
  /** Auto-generated for /mdfe/lotes [POST] -> operations["EmitirLoteMdfe"] */
  async emitirLoteMdfe(
    body: EmitirLoteMdfeBody
  ): Promise<EmitirLoteMdfeResult> {
    return this.http.post<EmitirLoteMdfeResult>(
      `${this.baseUrl}/mdfe/lotes`,
      body
    );
  }
  /** Auto-generated for /mdfe/lotes/{id} [GET] -> operations["ConsultarLoteMdfe"] */
  async consultarLoteMdfe(
    params: ConsultarLoteMdfeParams
  ): Promise<ConsultarLoteMdfeResult> {
    return this.http.get<ConsultarLoteMdfeResult>(
      `${this.baseUrl}/mdfe/lotes/${encodeURIComponent(params.id)}`
    );
  }
  /** Auto-generated for /mdfe/nao-encerrados [GET] -> operations["ConsultarMdfeNaoEncerrados"] */
  async consultarMdfeNaoEncerrados(
    query?: ConsultarMdfeNaoEncerradosQuery
  ): Promise<ConsultarMdfeNaoEncerradosResult> {
    return this.http.get<ConsultarMdfeNaoEncerradosResult>(
      `${this.baseUrl}/mdfe/nao-encerrados`,
      query
    );
  }
  /** Auto-generated for /mdfe/sefaz/status [GET] -> operations["ConsultarStatusSefazMdfe"] */
  async consultarStatusSefazMdfe(
    query?: ConsultarStatusSefazMdfeQuery
  ): Promise<ConsultarStatusSefazMdfeResult> {
    return this.http.get<ConsultarStatusSefazMdfeResult>(
      `${this.baseUrl}/mdfe/sefaz/status`,
      query
    );
  }
  /** Auto-generated for /mdfe/{id} [GET] -> operations["ConsultarMdfe"] */
  async consultarMdfe(
    params: ConsultarMdfeParams
  ): Promise<ConsultarMdfeResult> {
    return this.http.get<ConsultarMdfeResult>(
      `${this.baseUrl}/mdfe/${encodeURIComponent(params.id)}`
    );
  }
  /** Auto-generated for /mdfe/{id}/cancelamento [GET] -> operations["ConsultarCancelamentoMdfe"] */
  async consultarCancelamentoMdfe(
    params: ConsultarCancelamentoMdfeParams
  ): Promise<ConsultarCancelamentoMdfeResult> {
    return this.http.get<ConsultarCancelamentoMdfeResult>(
      `${this.baseUrl}/mdfe/${encodeURIComponent(params.id)}/cancelamento`
    );
  }
  /** Auto-generated for /mdfe/{id}/cancelamento [POST] -> operations["CancelarMdfe"] */
  async cancelarMdfe(
    params: CancelarMdfeParams,
    body: CancelarMdfeBody
  ): Promise<CancelarMdfeResult> {
    return this.http.post<CancelarMdfeResult>(
      `${this.baseUrl}/mdfe/${encodeURIComponent(params.id)}/cancelamento`,
      body
    );
  }
  /** Auto-generated for /mdfe/{id}/encerramento [GET] -> operations["ConsultarEncerramentoMdfe"] */
  async consultarEncerramentoMdfe(
    params: ConsultarEncerramentoMdfeParams
  ): Promise<ConsultarEncerramentoMdfeResult> {
    return this.http.get<ConsultarEncerramentoMdfeResult>(
      `${this.baseUrl}/mdfe/${encodeURIComponent(params.id)}/encerramento`
    );
  }
  /** Auto-generated for /mdfe/{id}/encerramento [POST] -> operations["EncerrarMdfe"] */
  async encerrarMdfe(
    params: EncerrarMdfeParams,
    body: EncerrarMdfeBody
  ): Promise<EncerrarMdfeResult> {
    return this.http.post<EncerrarMdfeResult>(
      `${this.baseUrl}/mdfe/${encodeURIComponent(params.id)}/encerramento`,
      body
    );
  }
  /** Auto-generated for /mdfe/{id}/inclusao-condutor [POST] -> operations["IncluirCondutorMdfe"] */
  async incluirCondutorMdfe(
    params: IncluirCondutorMdfeParams,
    body: IncluirCondutorMdfeBody
  ): Promise<IncluirCondutorMdfeResult> {
    return this.http.post<IncluirCondutorMdfeResult>(
      `${this.baseUrl}/mdfe/${encodeURIComponent(params.id)}/inclusao-condutor`,
      body
    );
  }
  /** Auto-generated for /mdfe/{id}/inclusao-dfe [POST] -> operations["IncluirDfeMdfe"] */
  async incluirDfeMdfe(
    params: IncluirDfeMdfeParams,
    body: IncluirDfeMdfeBody
  ): Promise<IncluirDfeMdfeResult> {
    return this.http.post<IncluirDfeMdfeResult>(
      `${this.baseUrl}/mdfe/${encodeURIComponent(params.id)}/inclusao-dfe`,
      body
    );
  }
  /** Auto-generated for /mdfe/{id}/sincronizar [POST] -> operations["SincronizarMdfe"] */
  async sincronizarMdfe(
    params: SincronizarMdfeParams,
    body?: any
  ): Promise<SincronizarMdfeResult> {
    return this.http.post<SincronizarMdfeResult>(
      `${this.baseUrl}/mdfe/${encodeURIComponent(params.id)}/sincronizar`,
      body
    );
  }
  /** Auto-generated for /nfce [GET] -> operations["ListarNfce"] */
  async listarNfce(
    query?: ListarNfceQuery
  ): Promise<ListarNfceResult> {
    return this.http.get<ListarNfceResult>(
      `${this.baseUrl}/nfce`,
      query
    );
  }
  /** Auto-generated for /nfce [POST] -> operations["EmitirNfce"] */
  async emitirNfce(
    body: EmitirNfceBody
  ): Promise<EmitirNfceResult> {
    return this.http.post<EmitirNfceResult>(
      `${this.baseUrl}/nfce`,
      body
    );
  }
  /** Auto-generated for /nfce/eventos [GET] -> operations["ListarEventosNfce"] */
  async listarEventosNfce(
    query?: ListarEventosNfceQuery
  ): Promise<ListarEventosNfceResult> {
    return this.http.get<ListarEventosNfceResult>(
      `${this.baseUrl}/nfce/eventos`,
      query
    );
  }
  /** Auto-generated for /nfce/eventos/{id} [GET] -> operations["ConsultarEventoNfce"] */
  async consultarEventoNfce(
    params: ConsultarEventoNfceParams
  ): Promise<ConsultarEventoNfceResult> {
    return this.http.get<ConsultarEventoNfceResult>(
      `${this.baseUrl}/nfce/eventos/${encodeURIComponent(params.id)}`
    );
  }
  /** Auto-generated for /nfce/inutilizacoes [POST] -> operations["InutilizarNumeracaoNfce"] */
  async inutilizarNumeracaoNfce(
    body: InutilizarNumeracaoNfceBody
  ): Promise<InutilizarNumeracaoNfceResult> {
    return this.http.post<InutilizarNumeracaoNfceResult>(
      `${this.baseUrl}/nfce/inutilizacoes`,
      body
    );
  }
  /** Auto-generated for /nfce/inutilizacoes/{id} [GET] -> operations["ConsultarInutilizacaoNfce"] */
  async consultarInutilizacaoNfce(
    params: ConsultarInutilizacaoNfceParams
  ): Promise<ConsultarInutilizacaoNfceResult> {
    return this.http.get<ConsultarInutilizacaoNfceResult>(
      `${this.baseUrl}/nfce/inutilizacoes/${encodeURIComponent(params.id)}`
    );
  }
  /** Auto-generated for /nfce/lotes [GET] -> operations["ListarLotesNfce"] */
  async listarLotesNfce(
    query?: ListarLotesNfceQuery
  ): Promise<ListarLotesNfceResult> {
    return this.http.get<ListarLotesNfceResult>(
      `${this.baseUrl}/nfce/lotes`,
      query
    );
  }
  /** Auto-generated for /nfce/lotes [POST] -> operations["EmitirLoteNfce"] */
  async emitirLoteNfce(
    body: EmitirLoteNfceBody
  ): Promise<EmitirLoteNfceResult> {
    return this.http.post<EmitirLoteNfceResult>(
      `${this.baseUrl}/nfce/lotes`,
      body
    );
  }
  /** Auto-generated for /nfce/lotes/{id} [GET] -> operations["ConsultarLoteNfce"] */
  async consultarLoteNfce(
    params: ConsultarLoteNfceParams
  ): Promise<ConsultarLoteNfceResult> {
    return this.http.get<ConsultarLoteNfceResult>(
      `${this.baseUrl}/nfce/lotes/${encodeURIComponent(params.id)}`
    );
  }
  /** Auto-generated for /nfce/sefaz/status [GET] -> operations["ConsultarStatusSefazNfce"] */
  async consultarStatusSefazNfce(
    query?: ConsultarStatusSefazNfceQuery
  ): Promise<ConsultarStatusSefazNfceResult> {
    return this.http.get<ConsultarStatusSefazNfceResult>(
      `${this.baseUrl}/nfce/sefaz/status`,
      query
    );
  }
  /** Auto-generated for /nfce/{id} [GET] -> operations["ConsultarNfce"] */
  async consultarNfce(
    params: ConsultarNfceParams
  ): Promise<ConsultarNfceResult> {
    return this.http.get<ConsultarNfceResult>(
      `${this.baseUrl}/nfce/${encodeURIComponent(params.id)}`
    );
  }
  /** Auto-generated for /nfce/{id}/cancelamento [GET] -> operations["ConsultarCancelamentoNfce"] */
  async consultarCancelamentoNfce(
    params: ConsultarCancelamentoNfceParams
  ): Promise<ConsultarCancelamentoNfceResult> {
    return this.http.get<ConsultarCancelamentoNfceResult>(
      `${this.baseUrl}/nfce/${encodeURIComponent(params.id)}/cancelamento`
    );
  }
  /** Auto-generated for /nfce/{id}/cancelamento [POST] -> operations["CancelarNfce"] */
  async cancelarNfce(
    params: CancelarNfceParams,
    body: CancelarNfceBody
  ): Promise<CancelarNfceResult> {
    return this.http.post<CancelarNfceResult>(
      `${this.baseUrl}/nfce/${encodeURIComponent(params.id)}/cancelamento`,
      body
    );
  }
  /** Auto-generated for /nfce/{id}/email [POST] -> operations["EnviarEmailNfce"] */
  async enviarEmailNfce(
    params: EnviarEmailNfceParams,
    body: EnviarEmailNfceBody
  ): Promise<EnviarEmailNfceResult> {
    return this.http.post<EnviarEmailNfceResult>(
      `${this.baseUrl}/nfce/${encodeURIComponent(params.id)}/email`,
      body
    );
  }
  /** Auto-generated for /nfce/{id}/sincronizar [POST] -> operations["SincronizarNfce"] */
  async sincronizarNfce(
    params: SincronizarNfceParams,
    body?: any
  ): Promise<SincronizarNfceResult> {
    return this.http.post<SincronizarNfceResult>(
      `${this.baseUrl}/nfce/${encodeURIComponent(params.id)}/sincronizar`,
      body
    );
  }
  /** Auto-generated for /nfcom [GET] -> operations["ListarNfcom"] */
  async listarNfcom(
    query?: ListarNfcomQuery
  ): Promise<ListarNfcomResult> {
    return this.http.get<ListarNfcomResult>(
      `${this.baseUrl}/nfcom`,
      query
    );
  }
  /** Auto-generated for /nfcom [POST] -> operations["EmitirNfcom"] */
  async emitirNfcom(
    body: EmitirNfcomBody
  ): Promise<EmitirNfcomResult> {
    return this.http.post<EmitirNfcomResult>(
      `${this.baseUrl}/nfcom`,
      body
    );
  }
  /** Auto-generated for /nfcom/sefaz/status [GET] -> operations["ConsultarStatusSefazNfcom"] */
  async consultarStatusSefazNfcom(
    query?: ConsultarStatusSefazNfcomQuery
  ): Promise<ConsultarStatusSefazNfcomResult> {
    return this.http.get<ConsultarStatusSefazNfcomResult>(
      `${this.baseUrl}/nfcom/sefaz/status`,
      query
    );
  }
  /** Auto-generated for /nfcom/{id} [GET] -> operations["ConsultarNfcom"] */
  async consultarNfcom(
    params: ConsultarNfcomParams
  ): Promise<ConsultarNfcomResult> {
    return this.http.get<ConsultarNfcomResult>(
      `${this.baseUrl}/nfcom/${encodeURIComponent(params.id)}`
    );
  }
  /** Auto-generated for /nfcom/{id}/cancelamento [GET] -> operations["ConsultarCancelamentoNfcom"] */
  async consultarCancelamentoNfcom(
    params: ConsultarCancelamentoNfcomParams
  ): Promise<ConsultarCancelamentoNfcomResult> {
    return this.http.get<ConsultarCancelamentoNfcomResult>(
      `${this.baseUrl}/nfcom/${encodeURIComponent(params.id)}/cancelamento`
    );
  }
  /** Auto-generated for /nfcom/{id}/cancelamento [POST] -> operations["CancelarNfcom"] */
  async cancelarNfcom(
    params: CancelarNfcomParams,
    body: CancelarNfcomBody
  ): Promise<CancelarNfcomResult> {
    return this.http.post<CancelarNfcomResult>(
      `${this.baseUrl}/nfcom/${encodeURIComponent(params.id)}/cancelamento`,
      body
    );
  }
  /** Auto-generated for /nfe [GET] -> operations["ListarNfe"] */
  async listarNfe(
    query?: ListarNfeQuery
  ): Promise<ListarNfeResult> {
    return this.http.get<ListarNfeResult>(
      `${this.baseUrl}/nfe`,
      query
    );
  }
  /** Auto-generated for /nfe [POST] -> operations["EmitirNfe"] */
  async emitirNfe(
    body: EmitirNfeBody
  ): Promise<EmitirNfeResult> {
    return this.http.post<EmitirNfeResult>(
      `${this.baseUrl}/nfe`,
      body
    );
  }
  /** Auto-generated for /nfe/cadastro-contribuinte [GET] -> operations["ConsultarContribuinteNfe"] */
  async consultarContribuinteNfe(
    query?: ConsultarContribuinteNfeQuery
  ): Promise<ConsultarContribuinteNfeResult> {
    return this.http.get<ConsultarContribuinteNfeResult>(
      `${this.baseUrl}/nfe/cadastro-contribuinte`,
      query
    );
  }
  /** Auto-generated for /nfe/eventos [GET] -> operations["ListarEventosNfe"] */
  async listarEventosNfe(
    query?: ListarEventosNfeQuery
  ): Promise<ListarEventosNfeResult> {
    return this.http.get<ListarEventosNfeResult>(
      `${this.baseUrl}/nfe/eventos`,
      query
    );
  }
  /** Auto-generated for /nfe/eventos/{id} [GET] -> operations["ConsultarEventoNfe"] */
  async consultarEventoNfe(
    params: ConsultarEventoNfeParams
  ): Promise<ConsultarEventoNfeResult> {
    return this.http.get<ConsultarEventoNfeResult>(
      `${this.baseUrl}/nfe/eventos/${encodeURIComponent(params.id)}`
    );
  }
  /** Auto-generated for /nfe/inutilizacoes [POST] -> operations["InutilizarNumeracaoNfe"] */
  async inutilizarNumeracaoNfe(
    body: InutilizarNumeracaoNfeBody
  ): Promise<InutilizarNumeracaoNfeResult> {
    return this.http.post<InutilizarNumeracaoNfeResult>(
      `${this.baseUrl}/nfe/inutilizacoes`,
      body
    );
  }
  /** Auto-generated for /nfe/inutilizacoes/{id} [GET] -> operations["ConsultarInutilizacaoNfe"] */
  async consultarInutilizacaoNfe(
    params: ConsultarInutilizacaoNfeParams
  ): Promise<ConsultarInutilizacaoNfeResult> {
    return this.http.get<ConsultarInutilizacaoNfeResult>(
      `${this.baseUrl}/nfe/inutilizacoes/${encodeURIComponent(params.id)}`
    );
  }
  /** Auto-generated for /nfe/lotes [GET] -> operations["ListarLotesNfe"] */
  async listarLotesNfe(
    query?: ListarLotesNfeQuery
  ): Promise<ListarLotesNfeResult> {
    return this.http.get<ListarLotesNfeResult>(
      `${this.baseUrl}/nfe/lotes`,
      query
    );
  }
  /** Auto-generated for /nfe/lotes [POST] -> operations["EmitirLoteNfe"] */
  async emitirLoteNfe(
    body: EmitirLoteNfeBody
  ): Promise<EmitirLoteNfeResult> {
    return this.http.post<EmitirLoteNfeResult>(
      `${this.baseUrl}/nfe/lotes`,
      body
    );
  }
  /** Auto-generated for /nfe/lotes/{id} [GET] -> operations["ConsultarLoteNfe"] */
  async consultarLoteNfe(
    params: ConsultarLoteNfeParams
  ): Promise<ConsultarLoteNfeResult> {
    return this.http.get<ConsultarLoteNfeResult>(
      `${this.baseUrl}/nfe/lotes/${encodeURIComponent(params.id)}`
    );
  }
  /** Auto-generated for /nfe/sefaz/status [GET] -> operations["ConsultarStatusSefazNfe"] */
  async consultarStatusSefazNfe(
    query?: ConsultarStatusSefazNfeQuery
  ): Promise<ConsultarStatusSefazNfeResult> {
    return this.http.get<ConsultarStatusSefazNfeResult>(
      `${this.baseUrl}/nfe/sefaz/status`,
      query
    );
  }
  /** Auto-generated for /nfe/{id} [GET] -> operations["ConsultarNfe"] */
  async consultarNfe(
    params: ConsultarNfeParams
  ): Promise<ConsultarNfeResult> {
    return this.http.get<ConsultarNfeResult>(
      `${this.baseUrl}/nfe/${encodeURIComponent(params.id)}`
    );
  }
  /** Auto-generated for /nfe/{id}/cancelamento [GET] -> operations["ConsultarCancelamentoNfe"] */
  async consultarCancelamentoNfe(
    params: ConsultarCancelamentoNfeParams
  ): Promise<ConsultarCancelamentoNfeResult> {
    return this.http.get<ConsultarCancelamentoNfeResult>(
      `${this.baseUrl}/nfe/${encodeURIComponent(params.id)}/cancelamento`
    );
  }
  /** Auto-generated for /nfe/{id}/cancelamento [POST] -> operations["CancelarNfe"] */
  async cancelarNfe(
    params: CancelarNfeParams,
    body: CancelarNfeBody
  ): Promise<CancelarNfeResult> {
    return this.http.post<CancelarNfeResult>(
      `${this.baseUrl}/nfe/${encodeURIComponent(params.id)}/cancelamento`,
      body
    );
  }
  /** Auto-generated for /nfe/{id}/carta-correcao [GET] -> operations["ConsultarCartaCorrecaoNfe"] */
  async consultarCartaCorrecaoNfe(
    params: ConsultarCartaCorrecaoNfeParams
  ): Promise<ConsultarCartaCorrecaoNfeResult> {
    return this.http.get<ConsultarCartaCorrecaoNfeResult>(
      `${this.baseUrl}/nfe/${encodeURIComponent(params.id)}/carta-correcao`
    );
  }
  /** Auto-generated for /nfe/{id}/carta-correcao [POST] -> operations["CriarCartaCorrecaoNfe"] */
  async criarCartaCorrecaoNfe(
    params: CriarCartaCorrecaoNfeParams,
    body: CriarCartaCorrecaoNfeBody
  ): Promise<CriarCartaCorrecaoNfeResult> {
    return this.http.post<CriarCartaCorrecaoNfeResult>(
      `${this.baseUrl}/nfe/${encodeURIComponent(params.id)}/carta-correcao`,
      body
    );
  }
  /** Auto-generated for /nfe/{id}/email [POST] -> operations["EnviarEmailNfe"] */
  async enviarEmailNfe(
    params: EnviarEmailNfeParams,
    body: EnviarEmailNfeBody
  ): Promise<EnviarEmailNfeResult> {
    return this.http.post<EnviarEmailNfeResult>(
      `${this.baseUrl}/nfe/${encodeURIComponent(params.id)}/email`,
      body
    );
  }
  /** Auto-generated for /nfe/{id}/sincronizar [POST] -> operations["SincronizarNfe"] */
  async sincronizarNfe(
    params: SincronizarNfeParams,
    body?: any
  ): Promise<SincronizarNfeResult> {
    return this.http.post<SincronizarNfeResult>(
      `${this.baseUrl}/nfe/${encodeURIComponent(params.id)}/sincronizar`,
      body
    );
  }
  /** Auto-generated for /nfse [GET] -> operations["ListarNfse"] */
  async listarNfse(
    query?: ListarNfseQuery
  ): Promise<ListarNfseResult> {
    return this.http.get<ListarNfseResult>(
      `${this.baseUrl}/nfse`,
      query
    );
  }
  /** Auto-generated for /nfse [POST] -> operations["EmitirNfse"] */
  async emitirNfse(
    body: EmitirNfseBody
  ): Promise<EmitirNfseResult> {
    return this.http.post<EmitirNfseResult>(
      `${this.baseUrl}/nfse`,
      body
    );
  }
  /** Auto-generated for /nfse/cidades [GET] -> operations["CidadesAtendidas"] */
  async cidadesAtendidas(): Promise<CidadesAtendidasResult> {
    return this.http.get<CidadesAtendidasResult>(
      `${this.baseUrl}/nfse/cidades`
    );
  }
  /** Auto-generated for /nfse/cidades/{codigo_ibge} [GET] -> operations["ConsultarMetadados"] */
  async consultarMetadados(
    params: ConsultarMetadadosParams
  ): Promise<ConsultarMetadadosResult> {
    return this.http.get<ConsultarMetadadosResult>(
      `${this.baseUrl}/nfse/cidades/${encodeURIComponent(params.codigo_ibge)}`
    );
  }
  /** Auto-generated for /nfse/dps [POST] -> operations["EmitirNfseDps"] */
  async emitirNfseDps(
    body: EmitirNfseDpsBody
  ): Promise<EmitirNfseDpsResult> {
    return this.http.post<EmitirNfseDpsResult>(
      `${this.baseUrl}/nfse/dps`,
      body
    );
  }
  /** Auto-generated for /nfse/dps/lotes [POST] -> operations["EmitirLoteNfseDps"] */
  async emitirLoteNfseDps(
    body: EmitirLoteNfseDpsBody
  ): Promise<EmitirLoteNfseDpsResult> {
    return this.http.post<EmitirLoteNfseDpsResult>(
      `${this.baseUrl}/nfse/dps/lotes`,
      body
    );
  }
  /** Auto-generated for /nfse/lotes [GET] -> operations["ListarLotesNfse"] */
  async listarLotesNfse(
    query?: ListarLotesNfseQuery
  ): Promise<ListarLotesNfseResult> {
    return this.http.get<ListarLotesNfseResult>(
      `${this.baseUrl}/nfse/lotes`,
      query
    );
  }
  /** Auto-generated for /nfse/lotes [POST] -> operations["EmitirLoteNfse"] */
  async emitirLoteNfse(
    body: EmitirLoteNfseBody
  ): Promise<EmitirLoteNfseResult> {
    return this.http.post<EmitirLoteNfseResult>(
      `${this.baseUrl}/nfse/lotes`,
      body
    );
  }
  /** Auto-generated for /nfse/lotes/{id} [GET] -> operations["ConsultarLoteNfse"] */
  async consultarLoteNfse(
    params: ConsultarLoteNfseParams
  ): Promise<ConsultarLoteNfseResult> {
    return this.http.get<ConsultarLoteNfseResult>(
      `${this.baseUrl}/nfse/lotes/${encodeURIComponent(params.id)}`
    );
  }
  /** Auto-generated for /nfse/{id} [GET] -> operations["ConsultarNfse"] */
  async consultarNfse(
    params: ConsultarNfseParams
  ): Promise<ConsultarNfseResult> {
    return this.http.get<ConsultarNfseResult>(
      `${this.baseUrl}/nfse/${encodeURIComponent(params.id)}`
    );
  }
  /** Auto-generated for /nfse/{id}/cancelamento [GET] -> operations["ConsultarCancelamentoNfse"] */
  async consultarCancelamentoNfse(
    params: ConsultarCancelamentoNfseParams
  ): Promise<ConsultarCancelamentoNfseResult> {
    return this.http.get<ConsultarCancelamentoNfseResult>(
      `${this.baseUrl}/nfse/${encodeURIComponent(params.id)}/cancelamento`
    );
  }
  /** Auto-generated for /nfse/{id}/cancelamento [POST] -> operations["CancelarNfse"] */
  async cancelarNfse(
    params: CancelarNfseParams,
    body: CancelarNfseBody
  ): Promise<CancelarNfseResult> {
    return this.http.post<CancelarNfseResult>(
      `${this.baseUrl}/nfse/${encodeURIComponent(params.id)}/cancelamento`,
      body
    );
  }
  /** Auto-generated for /nfse/{id}/sincronizar [POST] -> operations["SincronizarNfse"] */
  async sincronizarNfse(
    params: SincronizarNfseParams,
    body: SincronizarNfseBody
  ): Promise<SincronizarNfseResult> {
    return this.http.post<SincronizarNfseResult>(
      `${this.baseUrl}/nfse/${encodeURIComponent(params.id)}/sincronizar`,
      body
    );
  }

  /* DONWLOAD E UPLOAD DE BINÁRIOS */

  /** Auto-generated for /cte/eventos/{id}/pdf [GET] -> operations["BaixarPdfEventoCte"] */
  async baixarPdfEventoCte(
    params: BaixarPdfEventoCteParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/cte/eventos/${encodeURIComponent(params.id)}/pdf`
    );
  }

  /** Auto-generated for /cte/eventos/{id}/xml [GET] -> operations["BaixarXmlEventoCte"] */
  async baixarXmlEventoCte(
    params: BaixarXmlEventoCteParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/cte/eventos/${encodeURIComponent(params.id)}/xml`
    );
  }

  /** Auto-generated for /cte/{id}/cancelamento/pdf [GET] -> operations["BaixarPdfCancelamentoCte"] */
  async baixarPdfCancelamentoCte(
    params: BaixarPdfCancelamentoCteParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/cte/${encodeURIComponent(params.id)}/cancelamento/pdf`
    );
  }

  /** Auto-generated for /cte/{id}/cancelamento/xml [GET] -> operations["BaixarXmlCancelamentoCte"] */
  async baixarXmlCancelamentoCte(
    params: BaixarXmlCancelamentoCteParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/cte/${encodeURIComponent(params.id)}/cancelamento/xml`
    );
  }

  /** Auto-generated for /cte/{id}/carta-correcao/pdf [GET] -> operations["BaixarPdfCartaCorrecaoCte"] */
  async baixarPdfCartaCorrecaoCte(
    params: BaixarPdfCartaCorrecaoCteParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/cte/${encodeURIComponent(params.id)}/carta-correcao/pdf`
    );
  }

  /** Auto-generated for /cte/{id}/carta-correcao/xml [GET] -> operations["BaixarXmlCartaCorrecaoCte"] */
  async baixarXmlCartaCorrecaoCte(
    params: BaixarXmlCartaCorrecaoCteParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/cte/${encodeURIComponent(params.id)}/carta-correcao/xml`
    );
  }

  /** Auto-generated for /cte/{id}/pdf [GET] -> operations["BaixarPdfCte"] */
  async baixarPdfCte(
    params: BaixarPdfCteParams,
    query?: BaixarPdfCteQuery
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/cte/${encodeURIComponent(params.id)}/pdf`,
      query as any
    );
  }

  /** Auto-generated for /cte/{id}/xml [GET] -> operations["BaixarXmlCte"] */
  async baixarXmlCte(
    params: BaixarXmlCteParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/cte/${encodeURIComponent(params.id)}/xml`
    );
  }

  /** Auto-generated for /cte/{id}/xml/conhecimento [GET] -> operations["BaixarXmlCteConhecimento"] */
  async baixarXmlCteConhecimento(
    params: BaixarXmlCteConhecimentoParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/cte/${encodeURIComponent(params.id)}/xml/conhecimento`
    );
  }

  /** Auto-generated for /cte/{id}/xml/protocolo [GET] -> operations["BaixarXmlCteProtocolo"] */
  async baixarXmlCteProtocolo(
    params: BaixarXmlCteProtocoloParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/cte/${encodeURIComponent(params.id)}/xml/protocolo`
    );
  }

  /** Auto-generated for /cteos/eventos/{id}/pdf [GET] -> operations["BaixarPdfEventoCteOs"] */
  async baixarPdfEventoCteOs(
    params: BaixarPdfEventoCteOsParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/cteos/eventos/${encodeURIComponent(params.id)}/pdf`
    );
  }

  /** Auto-generated for /cteos/eventos/{id}/xml [GET] -> operations["BaixarXmlEventoCteOs"] */
  async baixarXmlEventoCteOs(
    params: BaixarXmlEventoCteOsParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/cteos/eventos/${encodeURIComponent(params.id)}/xml`
    );
  }

  /** Auto-generated for /cteos/{id}/cancelamento/pdf [GET] -> operations["BaixarPdfCancelamentoCteOs"] */
  async baixarPdfCancelamentoCteOs(
    params: BaixarPdfCancelamentoCteOsParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/cteos/${encodeURIComponent(params.id)}/cancelamento/pdf`
    );
  }

  /** Auto-generated for /cteos/{id}/cancelamento/xml [GET] -> operations["BaixarXmlCancelamentoCteOs"] */
  async baixarXmlCancelamentoCteOs(
    params: BaixarXmlCancelamentoCteOsParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/cteos/${encodeURIComponent(params.id)}/cancelamento/xml`
    );
  }

  /** Auto-generated for /cteos/{id}/carta-correcao/pdf [GET] -> operations["BaixarPdfCartaCorrecaoCteOs"] */
  async baixarPdfCartaCorrecaoCteOs(
    params: BaixarPdfCartaCorrecaoCteOsParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/cteos/${encodeURIComponent(
        params.id
      )}/carta-correcao/pdf`
    );
  }

  /** Auto-generated for /cteos/{id}/carta-correcao/xml [GET] -> operations["BaixarXmlCartaCorrecaoCteOs"] */
  async baixarXmlCartaCorrecaoCteOs(
    params: BaixarXmlCartaCorrecaoCteOsParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/cteos/${encodeURIComponent(
        params.id
      )}/carta-correcao/xml`
    );
  }

  /** Auto-generated for /cteos/{id}/pdf [GET] -> operations["BaixarPdfCteOs"] */
  async baixarPdfCteOs(
    params: BaixarPdfCteOsParams,
    query?: BaixarPdfCteOsQuery
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/cteos/${encodeURIComponent(params.id)}/pdf`,
      query as any
    );
  }

  /** Auto-generated for /cteos/{id}/xml [GET] -> operations["BaixarXmlCteOs"] */
  async baixarXmlCteOs(
    params: BaixarXmlCteOsParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/cteos/${encodeURIComponent(params.id)}/xml`
    );
  }

  /** Auto-generated for /cteos/{id}/xml/conhecimento [GET] -> operations["BaixarXmlCteOsConhecimento"] */
  async baixarXmlCteOsConhecimento(
    params: BaixarXmlCteOsConhecimentoParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/cteos/${encodeURIComponent(params.id)}/xml/conhecimento`
    );
  }

  /** Auto-generated for /cteos/{id}/xml/protocolo [GET] -> operations["BaixarXmlCteOsProtocolo"] */
  async baixarXmlCteOsProtocolo(
    params: BaixarXmlCteOsProtocoloParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/cteos/${encodeURIComponent(params.id)}/xml/protocolo`
    );
  }

  /** Auto-generated for /dce/{id}/cancelamento/xml [GET] -> operations["BaixarXmlCancelamentoDce"] */
  async baixarXmlCancelamentoDce(
    params: BaixarXmlCancelamentoDceParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/dce/${encodeURIComponent(params.id)}/cancelamento/xml`
    );
  }

  /** Auto-generated for /dce/{id}/pdf [GET] -> operations["BaixarPdfDce"] */
  async baixarPdfDce(
    params: BaixarPdfDceParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/dce/${encodeURIComponent(params.id)}/pdf`
    );
  }

  /** Auto-generated for /dce/{id}/xml [GET] -> operations["BaixarXmlDce"] */
  async baixarXmlDce(
    params: BaixarXmlDceParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/dce/${encodeURIComponent(params.id)}/xml`
    );
  }

  /** Auto-generated for /dce/{id}/xml/declaracao [GET] -> operations["BaixarXmlDceDeclaracao"] */
  async baixarXmlDceDeclaracao(
    params: BaixarXmlDceDeclaracaoParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/dce/${encodeURIComponent(params.id)}/xml/declaracao`
    );
  }

  /** Auto-generated for /dce/{id}/xml/protocolo [GET] -> operations["BaixarXmlDceProtocolo"] */
  async baixarXmlDceProtocolo(
    params: BaixarXmlDceProtocoloParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/dce/${encodeURIComponent(params.id)}/xml/protocolo`
    );
  }

  /** Auto-generated for /distribuicao/nfe/documentos/{id}/pdf [GET] -> operations["BaixarPdfDocumentoDistribuicaoNfe"] */
  async baixarPdfDocumentoDistribuicaoNfe(
    params: BaixarPdfDocumentoDistribuicaoNfeParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/distribuicao/nfe/documentos/${encodeURIComponent(
        params.id
      )}/pdf`
    );
  }

  /** Auto-generated for /distribuicao/nfe/documentos/{id}/xml [GET] -> operations["BaixarXmlDocumentoDistribuicaoNfe"] */
  async baixarXmlDocumentoDistribuicaoNfe(
    params: BaixarXmlDocumentoDistribuicaoNfeParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/distribuicao/nfe/documentos/${encodeURIComponent(
        params.id
      )}/xml`
    );
  }

  /** Auto-generated for /empresas/{cpf_cnpj}/logotipo [GET] -> operations["BaixarLogotipoEmpresa"] */
  async baixarLogotipoEmpresa(
    params: BaixarLogotipoEmpresaParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/empresas/${encodeURIComponent(params.cpf_cnpj)}/logotipo`
    );
  }

  /** Auto-generated for /mdfe/eventos/{id}/pdf [GET] -> operations["BaixarPdfEventoMdfe"] */
  async baixarPdfEventoMdfe(
    params: BaixarPdfEventoMdfeParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/mdfe/eventos/${encodeURIComponent(params.id)}/pdf`
    );
  }

  /** Auto-generated for /mdfe/eventos/{id}/xml [GET] -> operations["BaixarXmlEventoMdfe"] */
  async baixarXmlEventoMdfe(
    params: BaixarXmlEventoMdfeParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/mdfe/eventos/${encodeURIComponent(params.id)}/xml`
    );
  }

  /** Auto-generated for /mdfe/{id}/cancelamento/pdf [GET] -> operations["BaixarPdfCancelamentoMdfe"] */
  async baixarPdfCancelamentoMdfe(
    params: BaixarPdfCancelamentoMdfeParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/mdfe/${encodeURIComponent(params.id)}/cancelamento/pdf`
    );
  }

  /** Auto-generated for /mdfe/{id}/cancelamento/xml [GET] -> operations["BaixarXmlCancelamentoMdfe"] */
  async baixarXmlCancelamentoMdfe(
    params: BaixarXmlCancelamentoMdfeParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/mdfe/${encodeURIComponent(params.id)}/cancelamento/xml`
    );
  }

  /** Auto-generated for /mdfe/{id}/encerramento/pdf [GET] -> operations["BaixarPdfEncerramentoMdfe"] */
  async baixarPdfEncerramentoMdfe(
    params: BaixarPdfEncerramentoMdfeParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/mdfe/${encodeURIComponent(params.id)}/encerramento/pdf`
    );
  }

  /** Auto-generated for /mdfe/{id}/encerramento/xml [GET] -> operations["BaixarXmlEncerramentoMdfe"] */
  async baixarXmlEncerramentoMdfe(
    params: BaixarXmlEncerramentoMdfeParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/mdfe/${encodeURIComponent(params.id)}/encerramento/xml`
    );
  }

  /** Auto-generated for /mdfe/{id}/pdf [GET] -> operations["BaixarPdfMdfe"] */
  async baixarPdfMdfe(
    params: BaixarPdfMdfeParams,
    query?: BaixarPdfMdfeQuery
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/mdfe/${encodeURIComponent(params.id)}/pdf`,
      query as any
    );
  }

  /** Auto-generated for /mdfe/{id}/xml [GET] -> operations["BaixarXmlMdfe"] */
  async baixarXmlMdfe(
    params: BaixarXmlMdfeParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/mdfe/${encodeURIComponent(params.id)}/xml`
    );
  }

  /** Auto-generated for /mdfe/{id}/xml/manifesto [GET] -> operations["BaixarXmlMdfeManifesto"] */
  async baixarXmlMdfeManifesto(
    params: BaixarXmlMdfeManifestoParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/mdfe/${encodeURIComponent(params.id)}/xml/manifesto`
    );
  }

  /** Auto-generated for /mdfe/{id}/xml/protocolo [GET] -> operations["BaixarXmlMdfeProtocolo"] */
  async baixarXmlMdfeProtocolo(
    params: BaixarXmlMdfeProtocoloParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/mdfe/${encodeURIComponent(params.id)}/xml/protocolo`
    );
  }

  /** Auto-generated for /nfce/eventos/{id}/pdf [GET] -> operations["BaixarPdfEventoNfce"] */
  async baixarPdfEventoNfce(
    params: BaixarPdfEventoNfceParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfce/eventos/${encodeURIComponent(params.id)}/pdf`
    );
  }

  /** Auto-generated for /nfce/eventos/{id}/xml [GET] -> operations["BaixarXmlEventoNfce"] */
  async baixarXmlEventoNfce(
    params: BaixarXmlEventoNfceParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfce/eventos/${encodeURIComponent(params.id)}/xml`
    );
  }

  /** Auto-generated for /nfce/inutilizacoes/{id}/pdf [GET] -> operations["BaixarPdfInutilizacaoNfce"] */
  async baixarPdfInutilizacaoNfce(
    params: BaixarPdfInutilizacaoNfceParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfce/inutilizacoes/${encodeURIComponent(params.id)}/pdf`
    );
  }

  /** Auto-generated for /nfce/inutilizacoes/{id}/xml [GET] -> operations["BaixarXmlInutilizacaoNfce"] */
  async baixarXmlInutilizacaoNfce(
    params: BaixarXmlInutilizacaoNfceParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfce/inutilizacoes/${encodeURIComponent(params.id)}/xml`
    );
  }

  /** Auto-generated for /nfce/previa/pdf [POST] -> operations["BaixarPreviaPdfNfce"] */
  async baixarPreviaPdfNfce(
    body: BaixarPreviaPdfNfceBody,
    query?: BaixarPreviaPdfNfceQuery
  ): Promise<ArrayBuffer> {
    return this.http.postArrayBuffer(
      `${this.baseUrl}/nfce/previa/pdf`,
      body // (se precisar de query no POST, adapte seu HttpClient.postArrayBuffer p/ aceitar query)
    );
  }

  /** Auto-generated for /nfce/previa/xml [POST] -> operations["BaixarPreviaXmlNfce"] */
  async baixarPreviaXmlNfce(
    body: BaixarPreviaXmlNfceBody
  ): Promise<ArrayBuffer> {
    return this.http.postArrayBuffer(`${this.baseUrl}/nfce/previa/xml`, body);
  }

  /** Auto-generated for /nfce/{id}/cancelamento/pdf [GET] -> operations["BaixarPdfCancelamentoNfce"] */
  async baixarPdfCancelamentoNfce(
    params: BaixarPdfCancelamentoNfceParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfce/${encodeURIComponent(params.id)}/cancelamento/pdf`
    );
  }

  /** Auto-generated for /nfce/{id}/cancelamento/xml [GET] -> operations["BaixarXmlCancelamentoNfce"] */
  async baixarXmlCancelamentoNfce(
    params: BaixarXmlCancelamentoNfceParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfce/${encodeURIComponent(params.id)}/cancelamento/xml`
    );
  }

  /** Auto-generated for /nfce/{id}/escpos [GET] -> operations["BaixarEscPosNfce"] */
  async baixarEscPosNfce(
    params: BaixarEscPosNfceParams,
    query?: BaixarEscPosNfceQuery
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfce/${encodeURIComponent(params.id)}/escpos`,
      query as any
    );
  }

  /** Auto-generated for /nfce/{id}/pdf [GET] -> operations["BaixarPdfNfce"] */
  async baixarPdfNfce(
    params: BaixarPdfNfceParams,
    query?: BaixarPdfNfceQuery
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfce/${encodeURIComponent(params.id)}/pdf`,
      query as any
    );
  }

  /** Auto-generated for /nfce/{id}/xml [GET] -> operations["BaixarXmlNfce"] */
  async baixarXmlNfce(
    params: BaixarXmlNfceParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfce/${encodeURIComponent(params.id)}/xml`
    );
  }

  /** Auto-generated for /nfce/{id}/xml/nota [GET] -> operations["BaixarXmlNfceNota"] */
  async baixarXmlNfceNota(
    params: BaixarXmlNfceNotaParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfce/${encodeURIComponent(params.id)}/xml/nota`
    );
  }

  /** Auto-generated for /nfce/{id}/xml/protocolo [GET] -> operations["BaixarXmlNfceProtocolo"] */
  async baixarXmlNfceProtocolo(
    params: BaixarXmlNfceProtocoloParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfce/${encodeURIComponent(params.id)}/xml/protocolo`
    );
  }

  /** Auto-generated for /nfcom/{id}/cancelamento/xml [GET] -> operations["BaixarXmlCancelamentoNfcom"] */
  async baixarXmlCancelamentoNfcom(
    params: BaixarXmlCancelamentoNfcomParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfcom/${encodeURIComponent(params.id)}/cancelamento/xml`
    );
  }

  /** Auto-generated for /nfcom/{id}/pdf [GET] -> operations["BaixarPdfNfcom"] */
  async baixarPdfNfcom(
    params: BaixarPdfNfcomParams,
    query?: BaixarPdfNfcomQuery
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfcom/${encodeURIComponent(params.id)}/pdf`,
      query as any
    );
  }

  /** Auto-generated for /nfcom/{id}/xml [GET] -> operations["BaixarXmlNfcom"] */
  async baixarXmlNfcom(
    params: BaixarXmlNfcomParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfcom/${encodeURIComponent(params.id)}/xml`
    );
  }

  /** Auto-generated for /nfcom/{id}/xml/nota [GET] -> operations["BaixarXmlNfcomNota"] */
  async baixarXmlNfcomNota(
    params: BaixarXmlNfcomNotaParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfcom/${encodeURIComponent(params.id)}/xml/nota`
    );
  }

  /** Auto-generated for /nfcom/{id}/xml/protocolo [GET] -> operations["BaixarXmlNfcomProtocolo"] */
  async baixarXmlNfcomProtocolo(
    params: BaixarXmlNfcomProtocoloParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfcom/${encodeURIComponent(params.id)}/xml/protocolo`
    );
  }

  /** Auto-generated for /nfe/eventos/{id}/pdf [GET] -> operations["BaixarPdfEventoNfe"] */
  async baixarPdfEventoNfe(
    params: BaixarPdfEventoNfeParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfe/eventos/${encodeURIComponent(params.id)}/pdf`
    );
  }

  /** Auto-generated for /nfe/eventos/{id}/xml [GET] -> operations["BaixarXmlEventoNfe"] */
  async baixarXmlEventoNfe(
    params: BaixarXmlEventoNfeParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfe/eventos/${encodeURIComponent(params.id)}/xml`
    );
  }

  /** Auto-generated for /nfe/inutilizacoes/{id}/pdf [GET] -> operations["BaixarPdfInutilizacaoNfe"] */
  async baixarPdfInutilizacaoNfe(
    params: BaixarPdfInutilizacaoNfeParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfe/inutilizacoes/${encodeURIComponent(params.id)}/pdf`
    );
  }

  /** Auto-generated for /nfe/inutilizacoes/{id}/xml [GET] -> operations["BaixarXmlInutilizacaoNfe"] */
  async baixarXmlInutilizacaoNfe(
    params: BaixarXmlInutilizacaoNfeParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfe/inutilizacoes/${encodeURIComponent(params.id)}/xml`
    );
  }

  /** Auto-generated for /nfe/previa/pdf [POST] -> operations["BaixarPreviaPdfNfe"] */
  async baixarPreviaPdfNfe(
    body: BaixarPreviaPdfNfeBody,
    query?: BaixarPreviaPdfNfeQuery
  ): Promise<ArrayBuffer> {
    return this.http.postArrayBuffer(`${this.baseUrl}/nfe/previa/pdf`, body);
  }

  /** Auto-generated for /nfe/previa/xml [POST] -> operations["BaixarPreviaXmlNfe"] */
  async baixarPreviaXmlNfe(
    body: BaixarPreviaXmlNfeBody
  ): Promise<ArrayBuffer> {
    return this.http.postArrayBuffer(`${this.baseUrl}/nfe/previa/xml`, body);
  }

  /** Auto-generated for /nfe/{id}/cancelamento/pdf [GET] -> operations["BaixarPdfCancelamentoNfe"] */
  async baixarPdfCancelamentoNfe(
    params: BaixarPdfCancelamentoNfeParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfe/${encodeURIComponent(params.id)}/cancelamento/pdf`
    );
  }

  /** Auto-generated for /nfe/{id}/cancelamento/xml [GET] -> operations["BaixarXmlCancelamentoNfe"] */
  async baixarXmlCancelamentoNfe(
    params: BaixarXmlCancelamentoNfeParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfe/${encodeURIComponent(params.id)}/cancelamento/xml`
    );
  }

  /** Auto-generated for /nfe/{id}/carta-correcao/pdf [GET] -> operations["BaixarPdfCartaCorrecaoNfe"] */
  async baixarPdfCartaCorrecaoNfe(
    params: BaixarPdfCartaCorrecaoNfeParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfe/${encodeURIComponent(params.id)}/carta-correcao/pdf`
    );
  }

  /** Auto-generated for /nfe/{id}/carta-correcao/xml [GET] -> operations["BaixarXmlCartaCorrecaoNfe"] */
  async baixarXmlCartaCorrecaoNfe(
    params: BaixarXmlCartaCorrecaoNfeParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfe/${encodeURIComponent(params.id)}/carta-correcao/xml`
    );
  }

  /** Auto-generated for /nfe/{id}/pdf [GET] -> operations["BaixarPdfNfe"] */
  async baixarPdfNfe(
    params: BaixarPdfNfeParams,
    query?: BaixarPdfNfeQuery
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfe/${encodeURIComponent(params.id)}/pdf`,
      query as any
    );
  }

  /** Auto-generated for /nfe/{id}/xml [GET] -> operations["BaixarXmlNfe"] */
  async baixarXmlNfe(
    params: BaixarXmlNfeParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfe/${encodeURIComponent(params.id)}/xml`
    );
  }

  /** Auto-generated for /nfe/{id}/xml/nota [GET] -> operations["BaixarXmlNfeNota"] */
  async baixarXmlNfeNota(
    params: BaixarXmlNfeNotaParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfe/${encodeURIComponent(params.id)}/xml/nota`
    );
  }

  /** Auto-generated for /nfe/{id}/xml/protocolo [GET] -> operations["BaixarXmlNfeProtocolo"] */
  async baixarXmlNfeProtocolo(
    params: BaixarXmlNfeProtocoloParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfe/${encodeURIComponent(params.id)}/xml/protocolo`
    );
  }

  /** Auto-generated for /nfse/{Id}/cancelamento/xml [GET] -> operations["BaixarXmlCancelamentoNfse"] */
  async baixarXmlCancelamentoNfse(
    params: BaixarXmlCancelamentoNfseParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfse/${encodeURIComponent(params.Id)}/cancelamento/xml`
    );
  }

  /** Auto-generated for /nfse/{id}/pdf [GET] -> operations["BaixarPdfNfse"] */
  async baixarPdfNfse(
    params: BaixarPdfNfseParams,
    query?: BaixarPdfNfseQuery
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfse/${encodeURIComponent(params.id)}/pdf`,
      query as any
    );
  }

  /** Auto-generated for /nfse/{id}/xml [GET] -> operations["BaixarXmlNfse"] */
  async baixarXmlNfse(
    params: BaixarXmlNfseParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfse/${encodeURIComponent(params.id)}/xml`
    );
  }

  /** Auto-generated for /nfse/{id}/xml/dps [GET] -> operations["BaixarXmlDps"] */
  async baixarXmlDps(
    params: BaixarXmlDpsParams
  ): Promise<ArrayBuffer> {
    return this.http.getArrayBuffer(
      `${this.baseUrl}/nfse/${encodeURIComponent(params.id)}/xml/dps`
    );
  }
}
