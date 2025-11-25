import * as Defs from "./nuvem-fiscal-interfaces-definitions";

export type ConsultarCepParams = {

  /** CEP sem máscara. */
  Cep: string;
      };

export type ListarCnpjQuery = {

  /** Limite no número de objetos a serem retornados pela API, entre 1 e 100. */
  $top?: number;
  /** Quantidade de objetos que serão ignorados antes da lista começar a ser retornada. */
  $skip?: number;
  /** Inclui no JSON de resposta, na propriedade `@count`, o número total de registros que o filtro retornaria, independente dos filtros de paginação. */
  $inlinecount?: boolean;
  /**
   * Filtro pelo código CNAE da atividade principal do estabelecimento.
   * Utilize o valor sem máscara.
   */
  cnae_principal: string;
  /**
   * Filtro pelo código IBGE ou TOM (Tabela de Órgãos e Municípios) do município do estabelecimento.
   * Utilize o valor sem máscara.
   */
  municipio: string;
  /**
   * Filtro pela natureza jurídica do estabelecimento
   *  Utilize o valor de quatro dígitos sem máscara.
   */
  natureza_juridica: string;
      };

export type ConsultarCnpjParams = {

  /** CNPJ sem máscara. */
  Cnpj: string;
      };

export type ConsultarCotaContaParams = {

  /** Nome da cota a ser consultada. */
  nome: string;
      };

export type ListarCteQuery = {

  /** Limite no número de objetos a serem retornados pela API, entre 1 e 100. */
  $top?: number;
  /** Quantidade de objetos que serão ignorados antes da lista começar a ser retornada. */
  $skip?: number;
  /** Inclui no JSON de resposta, na propriedade `@count`, o número total de registros que o filtro retornaria, independente dos filtros de paginação. */
  $inlinecount?: boolean;
  /**
   * Filtrar pelo CPF ou CNPJ do emitente.
   *
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
  /** Seu identificador único para o documento. */
  referencia?: string;
  /**
   * Identificação do Ambiente.
   *
   * Valores aceitos: homologacao, producao
   */
  ambiente: string;
  /** Chave de acesso do DF-e. */
  chave?: string;
  /** Série do DF-e. */
  serie?: string;
      };

export type EmitirCteBody = Defs.CtePedidoEmissao;

export type ConsultarEventoCteParams = {

  /** ID único do evento gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarPdfEventoCteParams = {

  /** ID único do evento gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarXmlEventoCteParams = {

  /** ID único do evento gerado pela Nuvem Fiscal. */
  id: string;
      };

export type ConsultarStatusSefazCteQuery = {

  /**
   * CPF/CNPJ do emitente.
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
  /**
   * Ambiente Autorizador.
   *
   * Autorizadores disponíveis: `MT`, `MS`, `MG`, `PR`, `RS`, `SP`, `SVRS`, `SVSP`, `AN`.
   *
   * *Caso não seja informado, será utilizado o ambiente autorizador da UF do emitente.*
   */
  autorizador?: string;
      };

export type EmitirCteSimpBody = Defs.CteSimpPedidoEmissao;

export type ConsultarCteParams = {

  /** ID único do CT-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type ConsultarCancelamentoCteParams = {

  /** ID único do CT-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type CancelarCteParams = {

  /** ID único do CT-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type CancelarCteBody = Defs.CtePedidoCancelamento;

export type BaixarPdfCancelamentoCteParams = {

  /** ID único do CT-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarXmlCancelamentoCteParams = {

  /** ID único do CT-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type ConsultarCartaCorrecaoCteParams = {

  /** ID único do CT-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type CriarCartaCorrecaoCteParams = {

  /** ID único do CT-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type CriarCartaCorrecaoCteBody = Defs.CtePedidoCartaCorrecao;

export type BaixarPdfCartaCorrecaoCteParams = {

  /** ID único do CT-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarXmlCartaCorrecaoCteParams = {

  /** ID único do CT-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarPdfCteParams = {

  /** ID único do CT-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarPdfCteQuery = {

  /** Imprime o documento com logotipo, desde que esteja cadastrado na empresa. */
  logotipo?: boolean;
      };

export type SincronizarCteParams = {

  /** ID único do CT-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarXmlCteParams = {

  /** ID único do CT-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarXmlCteConhecimentoParams = {

  /** ID único da CT-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarXmlCteProtocoloParams = {

  /** ID único da CT-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type ListarCteOsQuery = {

  /** Limite no número de objetos a serem retornados pela API, entre 1 e 100. */
  $top?: number;
  /** Quantidade de objetos que serão ignorados antes da lista começar a ser retornada. */
  $skip?: number;
  /** Inclui no JSON de resposta, na propriedade `@count`, o número total de registros que o filtro retornaria, independente dos filtros de paginação. */
  $inlinecount?: boolean;
  /**
   * Filtrar pelo CPF ou CNPJ do emitente.
   *
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
  /** Seu identificador único para o documento. */
  referencia?: string;
  /**
   * Identificação do Ambiente.
   *
   * Valores aceitos: homologacao, producao
   */
  ambiente: string;
  /** Chave de acesso do DF-e. */
  chave?: string;
  /** Série do DF-e. */
  serie?: string;
      };

export type EmitirCteOsBody = Defs.CteOsPedidoEmissao;

export type ConsultarEventoCteOsParams = {

  /** ID único do evento gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarPdfEventoCteOsParams = {

  /** ID único do evento gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarXmlEventoCteOsParams = {

  /** ID único do evento gerado pela Nuvem Fiscal. */
  id: string;
      };

export type ConsultarStatusSefazCteOsQuery = {

  /**
   * CPF/CNPJ do emitente.
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
  /**
   * Ambiente Autorizador.
   *
   * Autorizadores disponíveis: `MT`, `MS`, `MG`, `PR`, `RS`, `SP`, `SVRS`, `SVSP`, `AN`.
   *
   * *Caso não seja informado, será utilizado o ambiente autorizador da UF do emitente.*
   */
  autorizador?: string;
      };

export type ConsultarCteOsParams = {

  /** ID único do CT-e OS gerado pela Nuvem Fiscal. */
  id: string;
      };

export type ConsultarCancelamentoCteOsParams = {

  /** ID único do CT-e OS gerado pela Nuvem Fiscal. */
  id: string;
      };

export type CancelarCteOsParams = {

  /** ID único do CT-e OS gerado pela Nuvem Fiscal. */
  id: string;
      };

export type CancelarCteOsBody = Defs.CteOsPedidoCancelamento;

export type BaixarPdfCancelamentoCteOsParams = {

  /** ID único do CT-e OS gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarXmlCancelamentoCteOsParams = {

  /** ID único do CT-e OS gerado pela Nuvem Fiscal. */
  id: string;
      };

export type ConsultarCartaCorrecaoCteOsParams = {

  /** ID único do CT-e OS gerado pela Nuvem Fiscal. */
  id: string;
      };

export type CriarCartaCorrecaoCteOsParams = {

  /** ID único do CT-e OS gerado pela Nuvem Fiscal. */
  id: string;
      };

export type CriarCartaCorrecaoCteOsBody = Defs.CteOsPedidoCartaCorrecao;

export type BaixarPdfCartaCorrecaoCteOsParams = {

  /** ID único do CT-e OS gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarXmlCartaCorrecaoCteOsParams = {

  /** ID único do CT-e OS gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarPdfCteOsParams = {

  /** ID único do CT-e OS gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarPdfCteOsQuery = {

  /** Imprime o documento com logotipo, desde que esteja cadastrado na empresa. */
  logotipo?: boolean;
      };

export type SincronizarCteOsParams = {

  /** ID único do CT-e OS gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarXmlCteOsParams = {

  /** ID único do CT-e OS gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarXmlCteOsConhecimentoParams = {

  /** ID único da CT-e OS gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarXmlCteOsProtocoloParams = {

  /** ID único da CT-e OS gerado pela Nuvem Fiscal. */
  id: string;
      };

export type ListarDceQuery = {

  /** Limite no número de objetos a serem retornados pela API, entre 1 e 100. */
  $top?: number;
  /** Quantidade de objetos que serão ignorados antes da lista começar a ser retornada. */
  $skip?: number;
  /** Inclui no JSON de resposta, na propriedade `@count`, o número total de registros que o filtro retornaria, independente dos filtros de paginação. */
  $inlinecount?: boolean;
  /**
   * Filtrar pelo CPF ou CNPJ do emitente.
   *
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
  /** Seu identificador único para o documento. */
  referencia?: string;
  /**
   * Identificação do Ambiente.
   *
   * Valores aceitos: homologacao, producao
   */
  ambiente: string;
  /** Chave de acesso do DF-e. */
  chave?: string;
  /** Série do DF-e. */
  serie?: string;
      };

export type EmitirDceBody = Defs.DcePedidoEmissao;

export type ConsultarStatusSefazDceQuery = {

  /**
   * CPF/CNPJ do emitente.
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
  /**
   * Ambiente Autorizador.
   *
   * Autorizadores disponíveis: `AN`.
   *
   * *Caso não seja informado, será utilizado o ambiente autorizador da UF do emitente.*
   */
  autorizador?: string;
      };

export type ConsultarDceParams = {

  /** ID único da DC-e gerada pela Nuvem Fiscal. */
  id: string;
      };

export type ConsultarCancelamentoDceParams = {

  /** ID único da DC-e gerada pela Nuvem Fiscal. */
  id: string;
      };

export type CancelarDceParams = {

  /** ID único da DC-e gerada pela Nuvem Fiscal. */
  id: string;
      };

export type CancelarDceBody = Defs.DcePedidoCancelamento;

export type BaixarXmlCancelamentoDceParams = {

  /** ID único da DC-e gerada pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarPdfDceParams = {

  /** ID único da DC-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarXmlDceParams = {

  /** ID único da DC-e gerada pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarXmlDceDeclaracaoParams = {

  /** ID único da DC-e gerada pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarXmlDceProtocoloParams = {

  /** ID único da DC-e gerada pela Nuvem Fiscal. */
  id: string;
      };

export type DebugHttpRequestContentParams = {

  /** ID da requisição HTTP. */
  id: string;
      };

export type DebugHttpResponseContentParams = {

  /** ID da requisição HTTP. */
  id: string;
      };

export type DebugDfeParams = {

  /** ID único do documento fiscal gerado pela Nuvem Fiscal. */
  id: string;
      };

export type DebugDfeOriginalPayloadParams = {

  /** ID do documento fiscal gerado pela Nuvem Fiscal. */
  id: string;
      };

export type ListarDistribuicaoNfeQuery = {

  /** Limite no número de objetos a serem retornados pela API, entre 1 e 100. */
  $top?: number;
  /** Quantidade de objetos que serão ignorados antes da lista começar a ser retornada. */
  $skip?: number;
  /** Inclui no JSON de resposta, na propriedade `@count`, o número total de registros que o filtro retornaria, independente dos filtros de paginação. */
  $inlinecount?: boolean;
  /**
   * Filtrar pelo CPF ou CNPJ da pessoa ou empresa interessada.
   *
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
  /**
   * Identificação do Ambiente.
   *
   * Valores aceitos: homologacao, producao
   */
  ambiente: string;
      };

export type GerarDistribuicaoNfeBody = Defs.DistribuicaoNfePedido;

export type ListarDocumentoDistribuicaoNfeQuery = {

  /** Limite no número de objetos a serem retornados pela API, entre 1 e 100. */
  $top?: number;
  /** Quantidade de objetos que serão ignorados antes da lista começar a ser retornada. */
  $skip?: number;
  /** Inclui no JSON de resposta, na propriedade `@count`, o número total de registros que o filtro retornaria, independente dos filtros de paginação. */
  $inlinecount?: boolean;
  /**
   * Filtrar pelo CPF ou CNPJ da pessoa ou empresa interessada.
   *
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
  /**
   * Identificação do Ambiente.
   *
   * Valores aceitos: homologacao, producao
   */
  ambiente: string;
  /** Filtrar por documentos a partir do NSU informado. */
  dist_nsu?: number;
  /**
   * Filtrar pelo tipo do documento de interesse da pessoa ou empresa.
   *
   * Valores aceitos: `nota`, `evento`
   */
  tipo_documento?: string;
  /**
   * Filtrar por documentos que foram distribuídos em sua forma resumida ou completa.
   *
   * Valores aceitos: `resumida`, `completa`
   */
  forma_distribuicao?: string;
  /** Filtrar pela chave de acesso da NF-e. */
  chave_acesso?: string;
      };

export type ConsultarDocumentoDistribuicaoNfeParams = {

  /** ID único do documento gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarPdfDocumentoDistribuicaoNfeParams = {

  /** ID único do documento gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarXmlDocumentoDistribuicaoNfeParams = {

  /** ID único do documento gerado pela Nuvem Fiscal. */
  id: string;
      };

export type ListarManifestacaoNfeQuery = {

  /** Limite no número de objetos a serem retornados pela API, entre 1 e 100. */
  $top?: number;
  /** Quantidade de objetos que serão ignorados antes da lista começar a ser retornada. */
  $skip?: number;
  /** Inclui no JSON de resposta, na propriedade `@count`, o número total de registros que o filtro retornaria, independente dos filtros de paginação. */
  $inlinecount?: boolean;
  /**
   * Filtrar pelo CPF ou CNPJ do autor do evento.
   *
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
  /**
   * Identificação do Ambiente.
   *
   * Valores aceitos: homologacao, producao
   */
  ambiente: string;
      };

export type ManifestarNfeBody = Defs.DistribuicaoNfePedidoManifestacao;

export type ConsultarManifestacaoNfeParams = {

  /** ID único da manifestação gerado pela Nuvem Fiscal. */
  id: string;
      };

export type ListarNfeSemManifestacaoQuery = {

  /** Limite no número de objetos a serem retornados pela API, entre 1 e 100. */
  $top?: number;
  /** Quantidade de objetos que serão ignorados antes da lista começar a ser retornada. */
  $skip?: number;
  /** Inclui no JSON de resposta, na propriedade `@count`, o número total de registros que o filtro retornaria, independente dos filtros de paginação. */
  $inlinecount?: boolean;
  /**
   * Filtrar pelo CPF ou CNPJ da pessoa ou empresa interessada.
   *
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
  /**
   * Identificação do Ambiente.
   *
   * Valores aceitos: homologacao, producao
   */
  ambiente: string;
  /**
   * Indica se serão consideradas apenas as manifestações conclusivas.
   *
   * Valores:
   * * `false`: serão retornadas notas que não possuírem qualquer tipo de
   *   manifestação.
   *
   * * `true`: apenas as notas que não possuírem manifestação conclusiva
   *   serão retornadas. Ou seja, notas que tenham sido manifestadas apenas
   *   com Ciência da Operação (210210) continuarão sendo retornadas por
   *   esse endpoint até que recebam uma manifestação conclusiva.
   */
  conclusiva?: boolean;
      };

export type ConsultarDistribuicaoNfeParams = {

  /** ID único da distribuição de NF-e gerada pela Nuvem Fiscal. */
  id: string;
      };

export type ListarEmailsQuery = {

  /** Limite no número de objetos a serem retornados pela API, entre 1 e 100. */
  $top?: number;
  /** Quantidade de objetos que serão ignorados antes da lista começar a ser retornada. */
  $skip?: number;
  /** Inclui no JSON de resposta, na propriedade `@count`, o número total de registros que o filtro retornaria, independente dos filtros de paginação. */
  $inlinecount?: boolean;
  /**
   * Filtra pelo CPF ou CNPJ da empresa.
   *
   * *Utilize o valor sem máscara*.
   */
  cpf_cnpj: string;
  /** Filtra apenas emails com problemas de entrega. */
  undelivered?: boolean;
  /** Filtra pelo endereço de e-mail do destinatário para qual o email foi enviado. */
  email?: string;
      };

export type ConsultarEmailParams = {

  /**
   * ID único do e-mail.
   *
   * Esse parâmetro é obtido após o envio do email por qualquer endpoint da
   * API da Nuvem Fiscal que realize disparos de email.
   *
   * Exemplos:
   * * <a href="#tag/Nfe/operation/EnviarEmailNfe">Envio de XML e PDF de NF-e</a>.
   * * <a href="#tag/Nfce/operation/EnviarEmailNfce">Envio de XML e PDF de NFC-e</a>.
   */
  id: string;
      };

export type ListarEmpresasQuery = {

  /** Limite no número de objetos a serem retornados pela API, entre 1 e 100. */
  $top?: number;
  /** Quantidade de objetos que serão ignorados antes da lista começar a ser retornada. */
  $skip?: number;
  /** Inclui no JSON de resposta, na propriedade `@count`, o número total de registros que o filtro retornaria, independente dos filtros de paginação. */
  $inlinecount?: boolean;
  /**
   * Filtrar pelo CPF ou CNPJ da empresa.
   *
   * *Utilize o valor sem máscara*.
   */
  cpf_cnpj?: string;
      };

export type CriarEmpresaBody = Defs.Empresa;

export type ConsultarEmpresaParams = {

  /**
   * CPF ou CNPJ da empresa.
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
      };

export type AtualizarEmpresaParams = {

  /**
   * CPF ou CNPJ da empresa.
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
      };

export type AtualizarEmpresaBody = Defs.Empresa;

export type ExcluirEmpresaParams = {

  /**
   * CPF ou CNPJ da empresa.
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
      };

export type ConsultarCertificadoEmpresaParams = {

  /**
   * CPF ou CNPJ da empresa.
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
      };

export type CadastrarCertificadoEmpresaParams = {

  /**
   * CPF ou CNPJ da empresa.
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
      };

export type CadastrarCertificadoEmpresaBody = Defs.EmpresaPedidoCadastroCertificado;

export type ExcluirCertificadoEmpresaParams = {

  /**
   * CPF ou CNPJ da empresa.
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
      };

export type EnviarCertificadoEmpresaParams = {

  /**
   * CPF ou CNPJ da empresa.
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
      };

export type ConsultarConfigCteParams = {

  /**
   * CPF ou CNPJ da empresa.
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
      };

export type AlterarConfigCteParams = {

  /**
   * CPF ou CNPJ da empresa.
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
      };

export type AlterarConfigCteBody = Defs.EmpresaConfigCte;

export type ConsultarConfigCteOsParams = {

  /**
   * CPF ou CNPJ da empresa.
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
      };

export type AlterarConfigCteOsParams = {

  /**
   * CPF ou CNPJ da empresa.
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
      };

export type AlterarConfigCteOsBody = Defs.EmpresaConfigCteOs;

export type ConsultarConfigDceParams = {

  /**
   * CPF ou CNPJ da empresa.
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
      };

export type AlterarConfigDceParams = {

  /**
   * CPF ou CNPJ da empresa.
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
      };

export type AlterarConfigDceBody = Defs.EmpresaConfigDce;

export type ConsultarConfigDistribuicaoNfeParams = {

  /**
   * CPF ou CNPJ da empresa.
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
      };

export type AlterarConfigDistribuicaoNfeParams = {

  /**
   * CPF ou CNPJ da empresa.
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
      };

export type AlterarConfigDistribuicaoNfeBody = Defs.EmpresaConfigDistribuicaoNfe;

export type BaixarLogotipoEmpresaParams = {

  /**
   * CPF ou CNPJ da empresa.
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
      };

export type EnviarLogotipoEmpresaParams = {

  /**
   * CPF ou CNPJ da empresa.
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
      };

export type ExcluirLogotipoEmpresaParams = {

  /**
   * CPF ou CNPJ da empresa.
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
      };

export type ConsultarConfigMdfeParams = {

  /**
   * CPF ou CNPJ da empresa.
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
      };

export type AlterarConfigMdfeParams = {

  /**
   * CPF ou CNPJ da empresa.
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
      };

export type AlterarConfigMdfeBody = Defs.EmpresaConfigMdfe;

export type ConsultarConfigNfceParams = {

  /**
   * CPF ou CNPJ da empresa.
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
      };

export type AlterarConfigNfceParams = {

  /**
   * CPF ou CNPJ da empresa.
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
      };

export type AlterarConfigNfceBody = Defs.EmpresaConfigNfce;

export type ConsultarConfigNfcomParams = {

  /**
   * CPF ou CNPJ da empresa.
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
      };

export type AlterarConfigNfcomParams = {

  /**
   * CPF ou CNPJ da empresa.
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
      };

export type AlterarConfigNfcomBody = Defs.EmpresaConfigNfcom;

export type ConsultarConfigNfeParams = {

  /**
   * CPF ou CNPJ da empresa.
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
      };

export type AlterarConfigNfeParams = {

  /**
   * CPF ou CNPJ da empresa.
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
      };

export type AlterarConfigNfeBody = Defs.EmpresaConfigNfe;

export type ConsultarConfigNfseParams = {

  /**
   * CPF ou CNPJ da empresa.
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
      };

export type AlterarConfigNfseParams = {

  /**
   * CPF ou CNPJ da empresa.
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
      };

export type AlterarConfigNfseBody = Defs.EmpresaConfigNfse;

export type ListarMdfeQuery = {

  /** Limite no número de objetos a serem retornados pela API, entre 1 e 100. */
  $top?: number;
  /** Quantidade de objetos que serão ignorados antes da lista começar a ser retornada. */
  $skip?: number;
  /** Inclui no JSON de resposta, na propriedade `@count`, o número total de registros que o filtro retornaria, independente dos filtros de paginação. */
  $inlinecount?: boolean;
  /**
   * Filtrar pelo CPF ou CNPJ do emitente.
   *
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
  /** Seu identificador único para o documento. */
  referencia?: string;
  /**
   * Identificação do Ambiente.
   *
   * Valores aceitos: homologacao, producao
   */
  ambiente: string;
  /** Chave de acesso do DF-e. */
  chave?: string;
  /** Série do DF-e. */
  serie?: string;
      };

export type EmitirMdfeBody = Defs.MdfePedidoEmissao;

export type ConsultarEventoMdfeParams = {

  /** ID único do evento gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarPdfEventoMdfeParams = {

  /** ID único do evento gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarXmlEventoMdfeParams = {

  /** ID único do evento gerado pela Nuvem Fiscal. */
  id: string;
      };

export type ListarLotesMdfeQuery = {

  /** Limite no número de objetos a serem retornados pela API, entre 1 e 100. */
  $top?: number;
  /** Quantidade de objetos que serão ignorados antes da lista começar a ser retornada. */
  $skip?: number;
  /** Inclui no JSON de resposta, na propriedade `@count`, o número total de registros que o filtro retornaria, independente dos filtros de paginação. */
  $inlinecount?: boolean;
  /**
   * Filtrar pelo CPF ou CNPJ do emitente.
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
  referencia?: string;
  /**
   * Identificação do Ambiente.
   *
   * Valores aceitos: homologacao, producao
   */
  ambiente: string;
      };

export type EmitirLoteMdfeBody = Defs.MdfePedidoEmissaoLote;

export type ConsultarLoteMdfeParams = {

  /** ID único do lote gerado pela Nuvem Fiscal. */
  id: string;
      };

export type ConsultarMdfeNaoEncerradosQuery = {

  /**
   * CPF/CNPJ do emitente.
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
      };

export type ConsultarStatusSefazMdfeQuery = {

  /**
   * CPF/CNPJ do emitente.
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
  /**
   * Ambiente Autorizador.
   *
   * Autorizadores disponíveis: `SVRS`.
   *
   * *Caso não seja informado, será utilizado o ambiente autorizador da UF do emitente.*
   */
  autorizador?: string;
      };

export type ConsultarMdfeParams = {

  /** ID único do MDF-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type ConsultarCancelamentoMdfeParams = {

  /** ID único do MDF-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type CancelarMdfeParams = {

  /** ID único do MDF-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type CancelarMdfeBody = Defs.MdfePedidoCancelamento;

export type BaixarPdfCancelamentoMdfeParams = {

  /** ID único do MDF-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarXmlCancelamentoMdfeParams = {

  /** ID único do MDF-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type ConsultarEncerramentoMdfeParams = {

  /** ID único do MDF-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type EncerrarMdfeParams = {

  /** ID único do MDF-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type EncerrarMdfeBody = Defs.MdfePedidoEncerramento;

export type BaixarPdfEncerramentoMdfeParams = {

  /** ID único do MDF-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarXmlEncerramentoMdfeParams = {

  /** ID único do MDF-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type IncluirCondutorMdfeParams = {

  /** ID único do MDF-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type IncluirCondutorMdfeBody = Defs.MdfePedidoInclusaoCondutor;

export type IncluirDfeMdfeParams = {

  /** ID único do MDF-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type IncluirDfeMdfeBody = Defs.MdfePedidoInclusaoDfe;

export type BaixarPdfMdfeParams = {

  /** ID único do MDF-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarPdfMdfeQuery = {

  /** Imprime o documento com logotipo, desde que esteja cadastrado na empresa. */
  logotipo?: boolean;
      };

export type SincronizarMdfeParams = {

  /** ID único do MDF-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarXmlMdfeParams = {

  /** ID único do MDF-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarXmlMdfeManifestoParams = {

  /** ID único da MDF-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarXmlMdfeProtocoloParams = {

  /** ID único da MDF-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type ListarNfceQuery = {

  /** Limite no número de objetos a serem retornados pela API, entre 1 e 100. */
  $top?: number;
  /** Quantidade de objetos que serão ignorados antes da lista começar a ser retornada. */
  $skip?: number;
  /** Inclui no JSON de resposta, na propriedade `@count`, o número total de registros que o filtro retornaria, independente dos filtros de paginação. */
  $inlinecount?: boolean;
  /**
   * Filtrar pelo CPF ou CNPJ do emitente.
   *
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
  /** Seu identificador único para o documento. */
  referencia?: string;
  /**
   * Identificação do Ambiente.
   *
   * Valores aceitos: homologacao, producao
   */
  ambiente: string;
  /** Chave de acesso do DF-e. */
  chave?: string;
  /** Série do DF-e. */
  serie?: string;
      };

export type EmitirNfceBody = Defs.NfePedidoEmissao;

export type ListarEventosNfceQuery = {

  /** Limite no número de objetos a serem retornados pela API, entre 1 e 100. */
  $top?: number;
  /** Quantidade de objetos que serão ignorados antes da lista começar a ser retornada. */
  $skip?: number;
  /** Inclui no JSON de resposta, na propriedade `@count`, o número total de registros que o filtro retornaria, independente dos filtros de paginação. */
  $inlinecount?: boolean;
  /** ID único gerado pela Nuvem Fiscal para o documento fiscal. */
  dfe_id: string;
      };

export type ConsultarEventoNfceParams = {

  /** ID único do evento gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarPdfEventoNfceParams = {

  /** ID único do evento gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarXmlEventoNfceParams = {

  /** ID único do evento gerado pela Nuvem Fiscal. */
  id: string;
      };

export type InutilizarNumeracaoNfceBody = Defs.DfePedidoInutilizacao;

export type ConsultarInutilizacaoNfceParams = {

  /** ID único do evento gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarPdfInutilizacaoNfceParams = {

  /** ID único do evento gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarXmlInutilizacaoNfceParams = {

  /** ID único do evento gerado pela Nuvem Fiscal. */
  id: string;
      };

export type ListarLotesNfceQuery = {

  /** Limite no número de objetos a serem retornados pela API, entre 1 e 100. */
  $top?: number;
  /** Quantidade de objetos que serão ignorados antes da lista começar a ser retornada. */
  $skip?: number;
  /** Inclui no JSON de resposta, na propriedade `@count`, o número total de registros que o filtro retornaria, independente dos filtros de paginação. */
  $inlinecount?: boolean;
  /**
   * Filtrar pelo CPF ou CNPJ do emitente.
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
  referencia?: string;
  /**
   * Identificação do Ambiente.
   *
   * Valores aceitos: homologacao, producao
   */
  ambiente: string;
      };

export type EmitirLoteNfceBody = Defs.NfePedidoEmissaoLote;

export type ConsultarLoteNfceParams = {

  /** ID único do lote gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarPreviaPdfNfceQuery = {

  /** Imprime o documento com logotipo, desde que esteja cadastrado na empresa. */
  logotipo?: boolean;
  /** Exibe o nome fantasia do emitente, desde que esteja presente no XML da nota. */
  nome_fantasia?: boolean;
  /**
   * Imprime mensagem no rodapé do documento.
   *
   * O caractere `|` (pipe) poderá ser utilizado para definir a quantidade e o alinhamento das mensagens.
   *
   * **Exemplos de Uso:**
   * * `"esquerda"`
   * * `"esquerda|centro"`
   * * `"esquerda|centro|direita"`
   * * `"|centro"`, `"|centro|"`
   * * `"|centro|direita"`
   * * `"||direita"`
   * * `"esquerda||direita"`
   */
  mensagem_rodape?: string;
  /** Poderá ser impresso apenas o DANFE NFC-e resumido ou ecológico, sem o detalhamento dos itens da venda, desde que a Unidade Federada permita esta opção em sua legislação e o consumidor assim o solicite. */
  resumido?: boolean;
  /**
   * Imprime o QRCode na lateral do DANFE NFC-e.
   *
   * *Disponível apenas para DANFE com 80 milímetros de largura*.
   */
  qrcode_lateral?: boolean;
  /** Largura do DANFE NFC-e (em milímetros). */
  largura?: number;
  /**
   * Define as margens do DANFE NFC-e (em milímetros).
   *
   * Essa propriedade pode ser especificada usando um, dois, três ou quatro valores (separados por vírgulas). Cada valor deve ser um número entre `0` e `9`.
   * * Quando **um** valor é especificado, a mesma margem é aplicada para **todos os quatro lados**.
   * * Quando **dois** valores são especificados, a primeira margem é aplicada aos **lados esquerdo e direito**, e a segunda aos **lados superior e inferior**.
   * * Quando **três** valores são especificados, a primeira margem é aplicada ao **lado esquerdo**, a segunda aos **lados superior e inferior**, e a terceira ao **lado direito**.
   * * Quando **quatro** valores são especificados, as margens são aplicadas aos lados **esquerdo**, **superior**, **direito** e **inferior**, nesta ordem (sentido horário).
   *
   * **Exemplos de uso**:
   * * `margem=1`
   *   - Margem esquerda: 1mm
   *   - Margem superior: 1mm
   *   - Margem direita: 1mm
   *   - Margem inferior: 1mm
   * * `margem=1,2`
   *   - Margem esquerda: 1mm
   *   - Margem superior: 2mm
   *   - Margem direita: 1mm
   *   - Margem inferior: 2mm
   * * `margem=1,2,3`
   *   - Margem esquerda: 1mm
   *   - Margem superior: 2mm
   *   - Margem direita: 3mm
   *   - Margem inferior: 2mm
   * * `margem=1,2,3,4`
   *   - Margem esquerda: 1mm
   *   - Margem superior: 2mm
   *   - Margem direita: 3mm
   *   - Margem inferior: 4mm
   */
  margem?: string;
      };

export type BaixarPreviaPdfNfceBody = Defs.NfePedidoEmissao;

export type BaixarPreviaXmlNfceBody = Defs.NfePedidoEmissao;

export type ConsultarStatusSefazNfceQuery = {

  /**
   * CPF/CNPJ do emitente.
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
  /**
   * Ambiente Autorizador.
   *
   * Autorizadores disponíveis: `AM`, `BA`, `CE`, `GO`, `MG`, `MS`, `MT`, `PE`, `PR`, `RS`, `SP`, `SVRS`.
   *
   * *Caso não seja informado, será utilizado o ambiente autorizador da UF do emitente.*
   */
  autorizador?: string;
      };

export type ConsultarNfceParams = {

  /** ID único da NFC-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type ConsultarCancelamentoNfceParams = {

  /** ID único da NFC-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type CancelarNfceParams = {

  /** ID único da NFC-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type CancelarNfceBody = Defs.NfePedidoCancelamento;

export type BaixarPdfCancelamentoNfceParams = {

  /** ID único da NFC-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarXmlCancelamentoNfceParams = {

  /** ID único da NFC-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type EnviarEmailNfceParams = {

  /** ID único da NFC-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type EnviarEmailNfceBody = Defs.DfePedidoEnvioEmail;

export type BaixarEscPosNfceParams = {

  /** ID único da NFC-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarEscPosNfceQuery = {

  /**
   * Modelo da impressora:
   * * `0` - Texto
   * * `1` - Epson
   * * `2` - Bematech
   * * `3` - Daruma
   * * `4` - Vox
   * * `5` - Diebold
   * * `6` - Epson P2
   * * `7` - CustomPos
   * * `8` - Star
   * * `9` - Zjiang
   * * `10` - GPrinter
   * * `11` - Datecs
   * * `12` - Sunmi
   * * `13` - Externo
   */
  modelo?: number;
  /**
   * Define o máximo de caracteres, em uma linha, usando a fonte normal.
   *
   * Ex: 40, 42, 48, 58, 80.
   */
  colunas?: number;
  /**
   * Imprime o QRCode na lateral do DANFCe.
   *
   * OBS: não suportado por alguns modelos de impressora.
   */
  qrcode_lateral?: boolean;
      };

export type BaixarPdfNfceParams = {

  /** ID único da NFC-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarPdfNfceQuery = {

  /** Imprime o documento com logotipo, desde que esteja cadastrado na empresa. */
  logotipo?: boolean;
  /** Exibe o nome fantasia do emitente, desde que esteja presente no XML da nota. */
  nome_fantasia?: boolean;
  /**
   * Imprime mensagem no rodapé do documento.
   *
   * O caractere `|` (pipe) poderá ser utilizado para definir a quantidade e o alinhamento das mensagens.
   *
   * **Exemplos de Uso:**
   * * `"esquerda"`
   * * `"esquerda|centro"`
   * * `"esquerda|centro|direita"`
   * * `"|centro"`, `"|centro|"`
   * * `"|centro|direita"`
   * * `"||direita"`
   * * `"esquerda||direita"`
   */
  mensagem_rodape?: string;
  /** Poderá ser impresso apenas o DANFE NFC-e resumido ou ecológico, sem o detalhamento dos itens da venda, desde que a Unidade Federada permita esta opção em sua legislação e o consumidor assim o solicite. */
  resumido?: boolean;
  /**
   * Imprime o QRCode na lateral do DANFE NFC-e.
   *
   * *Disponível apenas para DANFE com 80 milímetros de largura*.
   */
  qrcode_lateral?: boolean;
  /** Largura do DANFE NFC-e (em milímetros). */
  largura?: number;
  /**
   * Define as margens do DANFE NFC-e (em milímetros).
   *
   * Essa propriedade pode ser especificada usando um, dois, três ou quatro valores (separados por vírgulas). Cada valor deve ser um número entre `0` e `9`.
   * * Quando **um** valor é especificado, a mesma margem é aplicada para **todos os quatro lados**.
   * * Quando **dois** valores são especificados, a primeira margem é aplicada aos **lados esquerdo e direito**, e a segunda aos **lados superior e inferior**.
   * * Quando **três** valores são especificados, a primeira margem é aplicada ao **lado esquerdo**, a segunda aos **lados superior e inferior**, e a terceira ao **lado direito**.
   * * Quando **quatro** valores são especificados, as margens são aplicadas aos lados **esquerdo**, **superior**, **direito** e **inferior**, nesta ordem (sentido horário).
   *
   * **Exemplos de uso**:
   * * `margem=1`
   *   - Margem esquerda: 1mm
   *   - Margem superior: 1mm
   *   - Margem direita: 1mm
   *   - Margem inferior: 1mm
   * * `margem=1,2`
   *   - Margem esquerda: 1mm
   *   - Margem superior: 2mm
   *   - Margem direita: 1mm
   *   - Margem inferior: 2mm
   * * `margem=1,2,3`
   *   - Margem esquerda: 1mm
   *   - Margem superior: 2mm
   *   - Margem direita: 3mm
   *   - Margem inferior: 2mm
   * * `margem=1,2,3,4`
   *   - Margem esquerda: 1mm
   *   - Margem superior: 2mm
   *   - Margem direita: 3mm
   *   - Margem inferior: 4mm
   */
  margem?: string;
      };

export type SincronizarNfceParams = {

  /** ID único da NFC-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarXmlNfceParams = {

  /** ID único da NFC-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarXmlNfceNotaParams = {

  /** ID único da NFC-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarXmlNfceProtocoloParams = {

  /** ID único da NFC-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type ListarNfcomQuery = {

  /** Limite no número de objetos a serem retornados pela API, entre 1 e 100. */
  $top?: number;
  /** Quantidade de objetos que serão ignorados antes da lista começar a ser retornada. */
  $skip?: number;
  /** Inclui no JSON de resposta, na propriedade `@count`, o número total de registros que o filtro retornaria, independente dos filtros de paginação. */
  $inlinecount?: boolean;
  /**
   * Filtrar pelo CPF ou CNPJ do emitente.
   *
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
  /** Seu identificador único para o documento. */
  referencia?: string;
  /**
   * Identificação do Ambiente.
   *
   * Valores aceitos: homologacao, producao
   */
  ambiente: string;
  /** Chave de acesso do DF-e. */
  chave?: string;
  /** Série do DF-e. */
  serie?: string;
      };

export type EmitirNfcomBody = Defs.NfcomPedidoEmissao;

export type ConsultarStatusSefazNfcomQuery = {

  /**
   * CPF/CNPJ do emitente.
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
  /**
   * Ambiente Autorizador.
   *
   * Autorizadores disponíveis: `SVRS`.
   *
   * *Caso não seja informado, será utilizado o ambiente autorizador da UF do emitente.*
   */
  autorizador?: string;
      };

export type ConsultarNfcomParams = {

  /** ID único da NFCom gerada pela Nuvem Fiscal. */
  id: string;
      };

export type ConsultarCancelamentoNfcomParams = {

  /** ID único da NFCom gerada pela Nuvem Fiscal. */
  id: string;
      };

export type CancelarNfcomParams = {

  /** ID único da NFCom gerada pela Nuvem Fiscal. */
  id: string;
      };

export type CancelarNfcomBody = Defs.NfcomPedidoCancelamento;

export type BaixarXmlCancelamentoNfcomParams = {

  /** ID único da NFCom gerada pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarPdfNfcomParams = {

  /** ID único da NFCom gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarPdfNfcomQuery = {

  /** Imprime o documento com logotipo, desde que esteja cadastrado na empresa. */
  logotipo?: boolean;
      };

export type BaixarXmlNfcomParams = {

  /** ID único da NFCom gerada pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarXmlNfcomNotaParams = {

  /** ID único da NFCom gerada pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarXmlNfcomProtocoloParams = {

  /** ID único da NFCom gerada pela Nuvem Fiscal. */
  id: string;
      };

export type ListarNfeQuery = {

  /** Limite no número de objetos a serem retornados pela API, entre 1 e 100. */
  $top?: number;
  /** Quantidade de objetos que serão ignorados antes da lista começar a ser retornada. */
  $skip?: number;
  /** Inclui no JSON de resposta, na propriedade `@count`, o número total de registros que o filtro retornaria, independente dos filtros de paginação. */
  $inlinecount?: boolean;
  /**
   * Filtrar pelo CPF ou CNPJ do emitente.
   *
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
  /** Seu identificador único para o documento. */
  referencia?: string;
  /**
   * Identificação do Ambiente.
   *
   * Valores aceitos: homologacao, producao
   */
  ambiente: string;
  /** Chave de acesso do DF-e. */
  chave?: string;
  /** Série do DF-e. */
  serie?: string;
      };

export type EmitirNfeBody = Defs.NfePedidoEmissao;

export type ConsultarContribuinteNfeQuery = {

  /**
   * CPF ou CNPJ da empresa.
   *
   * *Utilize o valor sem máscara*.
   */
  cpf_cnpj: string;
  /**
   * Sigla da UF consultada.
   *
   *  Utilize `SU` para SUFRAMA.
   *
   * *Caso não seja informada, será utilizada a UF da empresa.*
   */
  uf?: string;
  /**
   * Argumento de pesquisa.
   *
   * Valores válidos:
   * * `CNPJ`
   * * `CPF`
   * * `IE`
   */
  argumento: string;
  /** Documento a ser consultado (CNPJ, CPF ou Inscrição Estadual). */
  documento: string;
      };

export type ListarEventosNfeQuery = {

  /** Limite no número de objetos a serem retornados pela API, entre 1 e 100. */
  $top?: number;
  /** Quantidade de objetos que serão ignorados antes da lista começar a ser retornada. */
  $skip?: number;
  /** Inclui no JSON de resposta, na propriedade `@count`, o número total de registros que o filtro retornaria, independente dos filtros de paginação. */
  $inlinecount?: boolean;
  /** ID único gerado pela Nuvem Fiscal para o documento fiscal. */
  dfe_id: string;
      };

export type ConsultarEventoNfeParams = {

  /** ID único do evento gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarPdfEventoNfeParams = {

  /** ID único do evento gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarXmlEventoNfeParams = {

  /** ID único do evento gerado pela Nuvem Fiscal. */
  id: string;
      };

export type InutilizarNumeracaoNfeBody = Defs.DfePedidoInutilizacao;

export type ConsultarInutilizacaoNfeParams = {

  /** ID único do evento gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarPdfInutilizacaoNfeParams = {

  /** ID único do evento gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarXmlInutilizacaoNfeParams = {

  /** ID único do evento gerado pela Nuvem Fiscal. */
  id: string;
      };

export type ListarLotesNfeQuery = {

  /** Limite no número de objetos a serem retornados pela API, entre 1 e 100. */
  $top?: number;
  /** Quantidade de objetos que serão ignorados antes da lista começar a ser retornada. */
  $skip?: number;
  /** Inclui no JSON de resposta, na propriedade `@count`, o número total de registros que o filtro retornaria, independente dos filtros de paginação. */
  $inlinecount?: boolean;
  /**
   * Filtrar pelo CPF ou CNPJ do emitente.
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
  referencia?: string;
  /**
   * Identificação do Ambiente.
   *
   * Valores aceitos: homologacao, producao
   */
  ambiente: string;
      };

export type EmitirLoteNfeBody = Defs.NfePedidoEmissaoLote;

export type ConsultarLoteNfeParams = {

  /** ID único do lote gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarPreviaPdfNfeQuery = {

  /** Imprime o documento com logotipo, desde que esteja cadastrado na empresa. */
  logotipo?: boolean;
  /** Exibe o nome fantasia do emitente, desde que esteja presente no XML da nota. */
  nome_fantasia?: boolean;
  /**
   * Formato de impressão do DANFE.
   *
   * Valores disponíveis:
   * - `padrao`: será utilizado o formato definido no XML da NF-e (tag "tpImp");
   * - `retrato`: tamanho A4 em modo retrato;
   * - `paisagem`: tamanho A4 em modo paisagem;
   * - `simplificado`: formato simplificado utilizado nas operações realizadas fora do estabelecimento (Anexo II do MOC, item 3.11);
   * - `etiqueta`: formato simplificado utilizado nas operações em comércio eletrônico (Anexo II do MOC, item 3.12 e NT 2020.004).
   */
  formato?: string;
  /**
   * Imprime mensagem no rodapé do documento.
   *
   * O caractere `|` (pipe) poderá ser utilizado para definir a quantidade e o alinhamento das mensagens.
   *
   * **Exemplos de Uso:**
   * * `"esquerda"`
   * * `"esquerda|centro"`
   * * `"esquerda|centro|direita"`
   * * `"|centro"`, `"|centro|"`
   * * `"|centro|direita"`
   * * `"||direita"`
   * * `"esquerda||direita"`
   */
  mensagem_rodape?: string;
  /** Imprime o documento com o bloco de canhoto. */
  canhoto?: boolean;
      };

export type BaixarPreviaPdfNfeBody = Defs.NfePedidoEmissao;

export type BaixarPreviaXmlNfeBody = Defs.NfePedidoEmissao;

export type ConsultarStatusSefazNfeQuery = {

  /**
   * CPF/CNPJ do emitente.
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
  /**
   * Ambiente Autorizador.
   *
   * Autorizadores disponíveis: `AM`, `BA`, `GO`, `MG`, `MS`, `MT`, `PE`, `PR`, `RS`, `SP`, `SVAN`, `SVRS`, `SVCAN`, `SVCRS`, `AN`.
   *
   * *Caso não seja informado, será utilizado o ambiente autorizador da UF do emitente.*
   */
  autorizador?: string;
      };

export type ConsultarNfeParams = {

  /** ID único da NF-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type ConsultarCancelamentoNfeParams = {

  /** ID único da NF-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type CancelarNfeParams = {

  /** ID único da NF-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type CancelarNfeBody = Defs.NfePedidoCancelamento;

export type BaixarPdfCancelamentoNfeParams = {

  /** ID único da NF-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarXmlCancelamentoNfeParams = {

  /** ID único da NF-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type ConsultarCartaCorrecaoNfeParams = {

  /** ID único da NF-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type CriarCartaCorrecaoNfeParams = {

  /** ID único da NF-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type CriarCartaCorrecaoNfeBody = Defs.NfePedidoCartaCorrecao;

export type BaixarPdfCartaCorrecaoNfeParams = {

  /** ID único da NF-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarXmlCartaCorrecaoNfeParams = {

  /** ID único da NF-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type EnviarEmailNfeParams = {

  /** ID único da NF-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type EnviarEmailNfeBody = Defs.DfePedidoEnvioEmail;

export type BaixarPdfNfeParams = {

  /** ID único da NF-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarPdfNfeQuery = {

  /** Imprime o documento com logotipo, desde que esteja cadastrado na empresa. */
  logotipo?: boolean;
  /** Exibe o nome fantasia do emitente, desde que esteja presente no XML da nota. */
  nome_fantasia?: boolean;
  /**
   * Formato de impressão do DANFE.
   *
   * Valores disponíveis:
   * - `padrao`: será utilizado o formato definido no XML da NF-e (tag "tpImp");
   * - `retrato`: tamanho A4 em modo retrato;
   * - `paisagem`: tamanho A4 em modo paisagem;
   * - `simplificado`: formato simplificado utilizado nas operações realizadas fora do estabelecimento (Anexo II do MOC, item 3.11);
   * - `etiqueta`: formato simplificado utilizado nas operações em comércio eletrônico (Anexo II do MOC, item 3.12 e NT 2020.004).
   */
  formato?: string;
  /**
   * Imprime mensagem no rodapé do documento.
   *
   * O caractere `|` (pipe) poderá ser utilizado para definir a quantidade e o alinhamento das mensagens.
   *
   * **Exemplos de Uso:**
   * * `"esquerda"`
   * * `"esquerda|centro"`
   * * `"esquerda|centro|direita"`
   * * `"|centro"`, `"|centro|"`
   * * `"|centro|direita"`
   * * `"||direita"`
   * * `"esquerda||direita"`
   */
  mensagem_rodape?: string;
  /** Imprime o documento com o bloco de canhoto. */
  canhoto?: boolean;
      };

export type SincronizarNfeParams = {

  /** ID único da NF-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarXmlNfeParams = {

  /** ID único da NF-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarXmlNfeNotaParams = {

  /** ID único da NF-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarXmlNfeProtocoloParams = {

  /** ID único da NF-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type ListarNfseQuery = {

  /** Limite no número de objetos a serem retornados pela API, entre 1 e 100. */
  $top?: number;
  /** Quantidade de objetos que serão ignorados antes da lista começar a ser retornada. */
  $skip?: number;
  /** Inclui no JSON de resposta, na propriedade `@count`, o número total de registros que o filtro retornaria, independente dos filtros de paginação. */
  $inlinecount?: boolean;
  /**
   * Filtrar pelo CPF ou CNPJ do emitente.
   *
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
  /** Seu identificador único para o documento. */
  referencia?: string;
  /**
   * Identificação do Ambiente.
   *
   * Valores aceitos: homologacao, producao
   */
  ambiente: string;
  /** Chave de acesso do DF-e. */
  chave?: string;
  /** Série do DF-e. */
  serie?: string;
      };

export type EmitirNfseBody = Defs.NfsePedidoEmissao;

export type ConsultarMetadadosParams = {

  /** Código IBGE do município. */
  codigo_ibge: string;
      };

export type EmitirNfseDpsBody = Defs.NfseDpsPedidoEmissao;

export type EmitirLoteNfseDpsBody = Defs.NfseLoteDpsPedidoEmissao;

export type ListarLotesNfseQuery = {

  /** Limite no número de objetos a serem retornados pela API, entre 1 e 100. */
  $top?: number;
  /** Quantidade de objetos que serão ignorados antes da lista começar a ser retornada. */
  $skip?: number;
  /** Inclui no JSON de resposta, na propriedade `@count`, o número total de registros que o filtro retornaria, independente dos filtros de paginação. */
  $inlinecount?: boolean;
  /**
   * Filtrar pelo CPF ou CNPJ do emitente.
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
  referencia?: string;
  /**
   * Identificação do Ambiente.
   *
   * Valores aceitos: homologacao, producao
   */
  ambiente: string;
      };

export type EmitirLoteNfseBody = Defs.RpsPedidoEmissaoLote;

export type ConsultarLoteNfseParams = {

  /** ID único do lote gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarXmlCancelamentoNfseParams = {

  /** ID único da NFS-e gerado pela Nuvem Fiscal. */
  Id: string;
      };

export type ConsultarNfseParams = {

  /** ID único da NFS-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type ConsultarCancelamentoNfseParams = {

  /** ID único da NFS-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type CancelarNfseParams = {

  /** ID único da NFS-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type CancelarNfseBody = Defs.NfsePedidoCancelamento;

export type BaixarPdfNfseParams = {

  /** ID único da NFS-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarPdfNfseQuery = {

  /** Imprime o documento com logotipo, desde que esteja cadastrado na empresa. */
  logotipo?: boolean;
  /**
   * Imprime mensagem no rodapé do documento.
   *
   * O caractere `|` (pipe) poderá ser utilizado para definir a quantidade e o alinhamento das mensagens.
   *
   * **Exemplos de Uso:**
   * * `"esquerda"`
   * * `"esquerda|centro"`
   * * `"esquerda|centro|direita"`
   * * `"|centro"`, `"|centro|"`
   * * `"|centro|direita"`
   * * `"||direita"`
   * * `"esquerda||direita"`
   *
   * Default: `""`
   */
  mensagem_rodape?: string;
      };

export type SincronizarNfseParams = {

  /** ID único da NFS-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type SincronizarNfseBody = Defs.NfsePedidoSincronizacao;

export type BaixarXmlNfseParams = {

  /** ID único da NFS-e gerado pela Nuvem Fiscal. */
  id: string;
      };

export type BaixarXmlDpsParams = {

  /** ID único da NFS-e gerado pela Nuvem Fiscal. */
  id: string;
      };

