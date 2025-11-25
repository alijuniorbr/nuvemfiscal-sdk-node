export type Empresa = {
  /**
   * @description CPF ou CNPJ da empresa.
   *
   * *Utilize o valor sem máscara*.
   */
  cpf_cnpj: string;
  /**
   * Format: date-time
   * @description Data/hora em que o objeto foi criado na Nuvem Fiscal. Representado no formato <a href="https://en.wikipedia.org/wiki/ISO_8601" target="blank">`ISO 8601`</a>.
   *
   * *A Nuvem Fiscal gerencia esse campo automaticamente. Caso algum valor seja enviado, ele será ignorado*.
   */
  created_at?: string;
  /**
   * Format: date-time
   * @description Data e hora que o objeto foi alterado pela última vez na Nuvem Fiscal. Representado no formato <a href="https://en.wikipedia.org/wiki/ISO_8601" target="blank">`ISO 8601`</a>.
   *
   * *A Nuvem Fiscal gerencia esse campo automaticamente. Caso algum valor seja enviado, ele será ignorado*.
   */
  updated_at?: string;
  /** @description Inscrição estadual da empresa. */
  inscricao_estadual?: string;
  /** @description Inscrição municipal da empresa. */
  inscricao_municipal?: string;
  /** @description Razão social da empresa. */
  nome_razao_social: string;
  /** @description Nome fantasia da empresa. */
  nome_fantasia?: string;
  /** @description Telefone da empresa. */
  fone?: string;
  /** @description Email da empresa. */
  email: string;
  endereco: EmpresaEndereco;
};
/** @description Endereço da empresa. */
export type EmpresaEndereco = {
  /** @description Logradouro. */
  logradouro: string;
  /** @description Número. */
  numero: string;
  /** @description Complemento. */
  complemento?: string;
  /** @description Bairro. */
  bairro: string;
  /** @description Código IBGE do município. */
  codigo_municipio: string;
  /** @description Cidade. */
  cidade?: string;
  /** @description Sigla do estado. */
  uf: string;
  /**
   * @description Código do país.
   * @default 1058
   */
  codigo_pais?: string;
  /**
   * @description Nome do país.
   * @default Brasil
   */
  pais?: string;
  /**
   * @description CEP.
   *
   * *Utilize o valor sem máscara*.
   */
  cep: string;
};
export type EmpresaListagem = {
  "@count"?: number;
  data?: Empresa[];
};
export type EmpresaPedidoCadastroCertificado = {
  /**
   * Format: byte
   * @description Binário do certificado digital (.pfx ou .p12) codificado em base64.
   */
  certificado: string;
  /** @description Senha do certificado. */
  password: string;
};
export type EmpresaCertificado = {
  serial_number?: string;
  issuer_name?: string;
  /** Format: date-time */
  not_valid_before?: string;
  /** Format: date-time */
  not_valid_after?: string;
  thumbprint?: string;
  subject_name?: string;
  cpf_cnpj?: string;
  nome_razao_social?: string;
};
export type EmpresaConfigNfe = {
  /**
   * @description Código de Regime Tributário.
   * Este campo será preenchido com:
   * * 1 – Simples Nacional;
   * * 2 – Simples Nacional – excesso de sublimite de receita bruta;
   * * 3 – Regime Normal;
   * * 4 - Simples Nacional - Microempreendedor individual (MEI).
   * @default 3
   */
  CRT?: number;
  /**
   * @description Indica se a empresa irá emitir em produção ou homologação.
   * @enum {string}
   */
  ambiente: "homologacao" | "producao";
};
export type EmpresaConfigNfce = {
  /**
   * @description Código de Regime Tributário.
   * Este campo será preenchido com:
   * * 1 – Simples Nacional;
   * * 2 – Simples Nacional – excesso de sublimite de receita bruta;
   * * 3 – Regime Normal;
   * * 4 - Simples Nacional - Microempreendedor individual (MEI).
   * @default 3
   */
  CRT?: number;
  sefaz: EmpresaConfigNfceSefaz;
  /**
   * @description Indica se a empresa irá emitir em produção ou homologação.
   * @enum {string}
   */
  ambiente: "homologacao" | "producao";
};
export type EmpresaConfigNfceSefaz = {
  /** @description Número de identificação do CSC. */
  id_csc: number;
  /** @description Código do CSC. */
  csc: string;
};
export type EmpresaConfigNfse = {
  regTrib?: EmpresaConfigNfseRegTrib;
  rps: EmpresaConfigRps;
  prefeitura?: EmpresaConfigPrefeitura;
  /**
   * @description Indicador se a empresa possui algum tipo de incentivo fiscal.
   * @default false
   */
  incentivo_fiscal?: boolean;
  /**
   * @description Indica se a empresa irá emitir em produção ou homologação.
   * @enum {string}
   */
  ambiente: "homologacao" | "producao";
};
/** @description Grupo de informações relativas aos regimes de tributação do prestador de serviços. */
export type EmpresaConfigNfseRegTrib = {
  /**
   * @description Situação perante o Simples Nacional:
   * * 1 - Não Optante;
   * * 2 - Optante - Microempreendedor Individual (MEI);
   * * 3 - Optante - Microempresa ou Empresa de Pequeno Porte (ME/EPP).
   * @default 1
   */
  opSimpNac?: number;
  /**
   * @description Opção para que o contribuinte optante pelo Simples Nacional ME/EPP (opSimpNac = 3) possa indicar, ao emitir o documento fiscal, em qual regime de apuração os tributos federais e municipal estão inseridos, caso tenha ultrapassado algum sublimite ou limite definido para o Simples Nacional.
   * * 1 – Regime de apuração dos tributos federais e municipal pelo SN;
   * * 2 – Regime de apuração dos tributos federais pelo SN e ISSQN  por fora do SN conforme respectiva legislação municipal do tributo;
   * * 3 – Regime de apuração dos tributos federais e municipal por fora do SN conforme respectivas legilações federal e municipal de cada tributo.
   */
  regApTribSN?: number;
  /**
   * @description Regime Especial de Tributação (Padrão Nacional):
   * * 0 - Nenhum;
   * * 1 - Ato Cooperado (Cooperativa);
   * * 2 - Estimativa;
   * * 3 - Microempresa Municipal;
   * * 4 - Notário ou Registrador;
   * * 5 - Profissional Autônomo;
   * * 6 - Sociedade de Profissionais.
   *
   * **Comportamento:**
   *  - Quando o envio for feito para o Ambiente Nacional, o valor é utilizado
   *    exatamente como se apresenta, sem qualquer transformação ou mapeamento.
   *  - Quando o envio for feito diretamente para a prefeitura, o valor será
   *    convertido internamente pela Nuvem Fiscal para o código correspondente
   *    esperado pela prefeitura, **se essa conversão for possível**.
   *
   *  **Observação:** Em algumas prefeituras, existem códigos específicos que não têm
   *  correspondência direta no padrão nacional. Para lidar com esses casos, utilize
   *  o campo `prest.regTrib.regEspTrib` diretamente no endpoint de emissão de NFS-e.
   * @default 0
   */
  regEspTrib?: number;
};
/** @description Configuração de numeração de lote, série e RPS. */
export type EmpresaConfigRps = {
  /**
   * Format: int64
   * @description Número do Lote de RPS.
   * Informe o próximo número do lote RPS a ser utilizado. Após isso, a Nuvem
   * Fiscal gerenciará esse campo (a cada novo envio de lote o número é
   * incrementado em + 1). Portanto, basta informá-lo no cadastro da empresa
   * uma única vez.
   */
  lote: number;
  /**
   * @description Série do RPS.
   * A série dos RPS varia de acordo com cada prefeitura, podendo ser
   * número (1, 2 ou 3, por exemplo) ou letras (A, S, NFS, por exemplo).
   * Portanto, consulte-a com o município da empresa antes de iniciar a
   * emissão das notas.
   */
  serie: string;
  /**
   * Format: int64
   * @description Número do RPS.
   * Informe o próximo número de RPS a ser utilizado. Após isso, a Nuvem
   * Fiscal gerenciará esse campo (a cada novo envio de RPS o número é
   * incrementado em + 1). Portanto, basta informá-lo no cadastro da empresa
   * uma única vez.
   */
  numero: number;
};
/**
 * @description Dados adicionais para comunicação com a prefeitura. Essa validação é
 * dinâmica, de acordo com a necessidade de cada município.
 */
export type EmpresaConfigPrefeitura = {
  /** @description Login de autenticação com a prefeitura, caso não utilize certificado digital. */
  login?: string;
  /** @description Senha de autenticação com a prefeitura, caso não utilize certificado digital. */
  senha?: string;
  /** @description Token de autenticação com a prefeitura, caso não utilize certificado digital. */
  token?: string;
};
export type EmpresaConfigMdfe = {
  /**
   * @description Indica se a empresa irá emitir em produção ou homologação.
   * @enum {string}
   */
  ambiente: "homologacao" | "producao";
};
export type EmpresaConfigCte = {
  /**
   * @description Código de Regime Tributário.
   * Este campo será preenchido com:
   * * 1 – Simples Nacional;
   * * 2 – Simples Nacional – excesso de sublimite de receita bruta;
   * * 3 – Regime Normal;
   * * 4 - Simples Nacional - Microempreendedor Individual (MEI).
   * @default 3
   */
  CRT?: number;
  /**
   * @description Indica se a empresa irá emitir em produção ou homologação.
   * @enum {string}
   */
  ambiente: "homologacao" | "producao";
};
export type EmpresaConfigCteOs = {
  /**
   * @description Código de Regime Tributário.
   * Este campo será preenchido com:
   * * 1 – Simples Nacional;
   * * 2 – Simples Nacional – excesso de sublimite de receita bruta;
   * * 3 – Regime Normal;
   * * 4 - Simples Nacional - Microempreendedor Individual (MEI).
   * @default 3
   */
  CRT?: number;
  /**
   * @description Indica se a empresa irá emitir em produção ou homologação.
   * @enum {string}
   */
  ambiente: "homologacao" | "producao";
};
export type EmpresaConfigNfcom = {
  /**
   * @description Código de Regime Tributário.
   * Este campo será preenchido com:
   * * 1 – Simples Nacional;
   * * 2 – Simples Nacional – excesso de sublimite de receita bruta;
   * * 3 – Regime Normal.
   * @default 3
   */
  CRT?: number;
  /**
   * @description Indica se a empresa irá emitir em produção ou homologação.
   * @enum {string}
   */
  ambiente: "homologacao" | "producao";
};
export type EmpresaConfigDce = {
  /**
   * @description Indica se a empresa irá emitir em produção ou homologação.
   * @enum {string}
   */
  ambiente: "homologacao" | "producao";
};
export type EmpresaConfigDistribuicaoNfe = {
  /**
   * @description Indica se a distribuição automática está habilitada.
   *
   * Quando ativada, a API da Nuvem Fiscal realizará automaticamente pedidos de
   * distribuição de notas fiscais eletrônicas (NF-e) utilizando o último NSU.
   *
   * A frequência dessas distribuições é controlada pelo campo `distribuicao_intervalo_horas`,
   * cujo valor padrão é 24 horas (uma vez ao dia).
   * @default false
   */
  distribuicao_automatica?: boolean;
  /**
   * @description Define o intervalo mínimo, em horas, entre distribuições automáticas de documentos.
   *
   * Esse valor determina com que frequência a API da Nuvem Fiscal executará novas
   * requisições automáticas de distribuição de notas fiscais eletrônicas (NF-e).
   *
   * Deve ser um valor entre 1 e 24. Por exemplo, se configurado como 4, uma nova
   * tentativa de distribuição só será feita se pelo menos 4 horas tiverem se passado
   * desde a última requisição.
   *
   * Esse campo só é relevante quando `distribuicao_automatica` estiver habilitado.
   * @default 24
   */
  distribuicao_intervalo_horas?: number;
  /**
   * @description Indica se a manifestação de Ciência da Operação (210210) deve ser feita
   * automaticamente pela API.
   *
   * Caso habilitada, a manifestação de ciência será realizada para notas
   * recebidas por qualquer forma de consulta ou modo de distribuição (manual ou automático).
   * @default false
   */
  ciencia_automatica?: boolean;
  /**
   * @description Indica se a empresa irá emitir em produção ou homologação.
   * @enum {string}
   */
  ambiente: "homologacao" | "producao";
};
export type DfeSefazStatus = {
  /**
   * @description SEFAZ autorizadora responsável.
   * @enum {string}
   */
  autorizador?:
    | "AM"
    | "BA"
    | "CE"
    | "GO"
    | "MG"
    | "MS"
    | "MT"
    | "PE"
    | "PR"
    | "RS"
    | "SP"
    | "SVAN"
    | "SVRS"
    | "SVCAN"
    | "SVCRS"
    | "AN"
    | "SVSP"
    | "SVCSP";
  /**
   * @description Identificação do Ambiente.
   * @enum {string}
   */
  ambiente?: "homologacao" | "producao";
  /**
   * Format: date-time
   * @description Data e hora da consulta.
   */
  data_hora_consulta?: string;
  /** @description Código do status da mensagem enviada. */
  codigo_status?: number;
  /** @description Descrição literal do status do serviço solicitado. */
  motivo_status?: string;
  /** @description Tempo médio de resposta do serviço (em segundos) dos últimos 5 minutos. */
  tempo_medio_resposta?: number;
  /**
   * Format: date-time
   * @description Data e hora prevista para o retorno dos serviços prestados.
   */
  data_hora_retorno?: string;
};
export type CteOsPedidoEmissao = {
  infCte: CteOsSefazInfCteOS;
  infCTeSupl?: CteOsSefazInfCTeSuplOS;
  /**
   * @description Identificação do Ambiente.
   * @enum {string}
   */
  ambiente: "homologacao" | "producao";
  /** @description Seu identificador único para este documento. Opcional, ajuda a evitar o envio duplicado de um mesmo documento. */
  referencia?: string;
};
/** @description Informações do CT-e Outros Serviços. */
export type CteOsSefazInfCteOS = {
  /**
   * @description Versão do leiaute.
   * Ex: "4.00".
   */
  versao: string;
  /**
   * @description Identificador da tag a ser assinada.
   * Informar a chave de acesso do CT-e OS e precedida do literal "CTe".
   *
   * *Geramos automaticamente quando nenhum valor é informado.*
   */
  Id?: string;
  ide: CteOsSefazIdeOS;
  compl?: CteOsSefazComplOS;
  emit: CteOsSefazEmitOS;
  toma?: CteOsSefazTomaOS;
  vPrest: CteOsSefazVPrestOS;
  imp: CteOsSefazInfCte_ImpOS;
  infCTeNorm?: CteOsSefazInfCTeNormOS;
  infCteComp?: CteOsSefazInfCteCompOS[];
  autXML?: CteOsSefazAutXMLOS[];
  infRespTec?: CteOsSefazRespTecOS;
};
/** @description Identificação do CT-e Outros Serviços. */
export type CteOsSefazIdeOS = {
  /**
   * @description Código da UF do emitente do CT-e.
   * Utilizar a Tabela do IBGE.
   */
  cUF: number;
  /**
   * @description Código numérico que compõe a Chave de Acesso.
   * Número aleatório gerado pelo emitente para cada CT-e, com o objetivo de evitar acessos indevidos ao documento.
   *
   * *Geramos automaticamente quando nenhum valor é informado.*
   */
  cCT?: string;
  /** @description Código Fiscal de Operações e Prestações. */
  CFOP: string;
  /** @description Natureza da Operação. */
  natOp: string;
  /**
   * @description Modelo do documento fiscal.
   * Utilizar o código 67 para identificação do CT-e Outros Serviços, emitido em substituição a Nota Fiscal Modelo 7 para transporte de pessoas, valores e excesso de bagagem.
   */
  mod?: number;
  /**
   * @description Série do CT-e OS.
   * Preencher com "0" no caso de série única.
   */
  serie: number;
  /** @description Número do CT-e OS. */
  nCT: number;
  /**
   * Format: date-time
   * @description Data e hora de emissão do CT-e OS.
   * Formato AAAA-MM-DDTHH:MM:DD TZD.
   */
  dhEmi: string;
  /**
   * @description Formato de impressão do DACTE:
   * * 1 - Retrato
   * * 2 - Paisagem
   */
  tpImp: number;
  /**
   * @description Forma de emissão do CT-e.
   * Preencher com:
   * * 1 - Normal
   * * 5 - Contingência FSDA
   * * 7 - Autorização pela SVC-RS
   * * 8 - Autorização pela SVC-SP
   */
  tpEmis: number;
  /**
   * @description Digito Verificador da chave de acesso do CT-e.
   * Informar o dígito  de controle da chave de acesso do CT-e, que deve ser calculado com a aplicação do algoritmo módulo 11 (base 2,9) da chave de acesso.
   *
   * *Geramos automaticamente quando nenhum valor é informado.*
   */
  cDV?: number;
  /**
   * @description Tipo do Ambiente:
   * * 1 - Produção
   * * 2 - Homologação
   */
  tpAmb?: number;
  /**
   * @description Tipo do CT-e OS.
   * Preencher com:
   * * 0 - CT-e Normal
   * * 1 - CT-e Complementar
   * * 3 - CT-e de Substituição
   */
  tpCTe: number;
  /**
   * @description Identificador do processo de emissão do CT-e OS.
   * Preencher com:
   * * 0 - emissão de CT-e com aplicativo do contribuinte
   * * 3 - emissão CT-e pelo contribuinte com aplicativo fornecido pelo Fisco
   */
  procEmi: number;
  /**
   * @description Versão do processo de emissão.
   * Iinformar a versão do aplicativo emissor de CT-e.
   */
  verProc: string;
  /**
   * @description Código do Município de envio do CT-e (de onde o documento foi transmitido).
   * Utilizar a tabela do IBGE. Informar 9999999 para as operações com o exterior.
   */
  cMunEnv: string;
  /**
   * @description Nome do Município de envio do CT-e (de onde o documento foi transmitido).
   * Informar PAIS/Municipio para as operações com o exterior.
   */
  xMunEnv: string;
  /**
   * @description Sigla da UF de envio do CT-e (de onde o documento foi transmitido).
   * Informar 'EX' para operações com o exterior.
   */
  UFEnv: string;
  /**
   * @description Modal. Preencher com:
   * * 01 - Rodoviário
   * * 02 - Aéreo
   * * 03 - Aquaviário
   * * 04 - Ferroviário
   */
  modal: string;
  /**
   * @description Tipo do Serviço.
   * Preencher com:
   * * 6 - Transporte de Pessoas
   * * 7 - Transporte de Valores
   * * 8 - Excesso de Bagagem
   */
  tpServ: number;
  /**
   * @description Indicador da IE do tomador:
   * * 1 - Contribuinte ICMS
   * * 2 - Contribuinte isento de inscrição
   * * 9 - Não Contribuinte
   * Aplica-se ao tomador que for indicado no toma3 ou toma4.
   */
  indIEToma: number;
  /**
   * @description Código do Município de início da prestação.
   * Utilizar a tabela do IBGE. Informar 9999999 para operações com o exterior.
   */
  cMunIni?: string;
  /**
   * @description Nome do Município do início da prestação.
   * Informar 'EXTERIOR' para operações com o exterior.
   */
  xMunIni?: string;
  /**
   * @description UF do início da prestação.
   * Informar 'EX' para operações com o exterior.
   */
  UFIni?: string;
  /**
   * @description Código do Município de término da prestação.
   * Utilizar a tabela do IBGE. Informar 9999999 para operações com o exterior.
   */
  cMunFim?: string;
  /**
   * @description Nome do Município do término da prestação.
   * Informar 'EXTERIOR' para operações com o exterior.
   */
  xMunFim?: string;
  /**
   * @description UF do término da prestação.
   * Informar 'EX' para operações com o exterior.
   */
  UFFim?: string;
  infPercurso?: CteOsSefazInfPercursoOS[];
  /**
   * Format: date-time
   * @description Data e Hora da entrada em contingência.
   * Informar a data e hora no formato AAAA-MM-DDTHH:MM:SS.
   */
  dhCont?: string;
  /** @description Justificativa da entrada em contingência. */
  xJust?: string;
  gCompraGov?: CteOsSefazCompraGovReduzidoOS;
};
/** @description Informações do Percurso do CT-e Outros Serviços. */
export type CteOsSefazInfPercursoOS = {
  /**
   * @description Sigla das Unidades da Federação do percurso do veículo.
   * Não é necessário repetir as UF de Início e Fim.
   */
  UFPer: string;
};
/** @description Grupo de Compras Governamentais. */
export type CteOsSefazCompraGovReduzidoOS = {
  /**
   * @description Para administração pública direta e suas autarquias e fundações:
   * * 1 - União
   * * 2 - Estados
   * * 3 - Distrito Federal
   * * 4 - Municípios
   */
  tpEnteGov: number;
  /** @description Percentual de redução de aliquota em compra goverrnamental. */
  pRedutor: number;
};
/** @description Dados complementares do CT-e para fins operacionais ou comerciais. */
export type CteOsSefazComplOS = {
  /**
   * @description Característica adicional do transporte.
   * Texto livre:
   * REENTREGA
   * DEVOLUÇÃO
   * REFATURAMENTO
   * etc.
   */
  xCaracAd?: string;
  /**
   * @description Característica adicional do serviço.
   * Texto livre:
   * ENTREGA EXPRESSA
   * LOGÍSTICA REVERSA
   * CONVENCIONAL
   * EMERGENCIAL
   * etc.
   */
  xCaracSer?: string;
  /** @description Funcionário emissor do CTe. */
  xEmi?: string;
  /** @description Observações Gerais. */
  xObs?: string;
  ObsCont?: CteOsSefazObsContOS[];
  ObsFisco?: CteOsSefazObsFiscoOS[];
};
/**
 * @description Campo de uso livre do contribuinte.
 * Informar o nome do campo no atributo xCampo e o conteúdo do campo no XTexto.
 */
export type CteOsSefazObsContOS = {
  /** @description Identificação do campo. */
  xCampo: string;
  /** @description Conteúdo do campo. */
  xTexto: string;
};
/**
 * @description Campo de uso livre do contribuinte.
 * Informar o nome do campo no atributo xCampo e o conteúdo do campo no XTexto.
 */
export type CteOsSefazObsFiscoOS = {
  /** @description Identificação do campo. */
  xCampo: string;
  /** @description Conteúdo do campo. */
  xTexto: string;
};
/** @description Identificação do Emitente do CT-e OS. */
export type CteOsSefazEmitOS = {
  /**
   * @description CNPJ do emitente.
   * Informar zeros não significativos.
   *
   * ***Obrigatório caso o emitente seja pessoa jurídica***.
   */
  CNPJ?: string;
  /**
   * @description Inscrição Estadual do Emitente.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  IE?: string;
  /** @description Inscrição Estadual do Substituto Tributário. */
  IEST?: string;
  /**
   * @description Razão social ou Nome do emitente.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  xNome?: string;
  /**
   * @description Nome fantasia.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  xFant?: string;
  enderEmit?: CteOsSefazEndeEmiOS;
  /**
   * @description Código do Regime Tributário. Informar:
   * * 1 - Simples Nacional;
   * * 2 - Simples Nacional, excesso sublimite de receita bruta;
   * * 3 - Regime Normal;
   * * 4 - Simples Nacional - Microempreendedor Individual (MEI).
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  CRT?: number;
};
/**
 * @description Endereço do emitente.
 *
 * *Caso não seja informado, será utilizado o do cadastro da empresa.*
 */
export type CteOsSefazEndeEmiOS = {
  /**
   * @description Logradouro.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  xLgr?: string;
  /**
   * @description Número.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  nro?: string;
  /**
   * @description Complemento.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  xCpl?: string;
  /**
   * @description Bairro.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  xBairro?: string;
  /**
   * @description Código do município (utilizar a tabela do IBGE).
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  cMun?: string;
  /**
   * @description Nome do município.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  xMun?: string;
  /**
   * @description CEP.
   * Informar zeros não significativos.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  CEP?: string;
  /**
   * @description Sigla da UF.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  UF?: string;
  /**
   * @description Telefone.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  fone?: string;
};
/**
 * @description Informações do Tomador/Usuário do Serviço.
 * Opcional para Excesso de Bagagem.
 */
export type CteOsSefazTomaOS = {
  /**
   * @description Número do CNPJ.
   * Em caso de empresa não estabelecida no Brasil, será informado o CNPJ com zeros.
   * Informar os zeros não significativos.
   */
  CNPJ?: string;
  /**
   * @description Número do CPF.
   * Informar os zeros não significativos.
   */
  CPF?: string;
  /**
   * @description Inscrição Estadual.
   * Informar a IE do tomador ou ISENTO se tomador é contribuinte do ICMS isento de inscrição no cadastro de contribuintes do ICMS. Caso o tomador não seja contribuinte do ICMS não informar o conteúdo.
   */
  IE?: string;
  /** @description Razão social ou nome do tomador. */
  xNome: string;
  /** @description Nome fantasia. */
  xFant?: string;
  /** @description Telefone. */
  fone?: string;
  enderToma: CteOsSefazEnderecoOS;
  /** @description Endereço de email. */
  email?: string;
};
/** @description Dados do endereço. */
export type CteOsSefazEnderecoOS = {
  /** @description Logradouro. */
  xLgr: string;
  /** @description Número. */
  nro: string;
  /** @description Complemento. */
  xCpl?: string;
  /** @description Bairro. */
  xBairro: string;
  /**
   * @description Código do município (utilizar a tabela do IBGE).
   * Informar 9999999 para operações com o exterior.
   */
  cMun: string;
  /**
   * @description Nome do município.
   * Informar EXTERIOR para operações com o exterior.
   */
  xMun: string;
  /**
   * @description CEP.
   * Informar os zeros não significativos.
   */
  CEP?: string;
  /**
   * @description Sigla da UF.
   * Informar EX para operações com o exterior.
   */
  UF: string;
  /**
   * @description Código do país.
   * Utilizar a tabela do BACEN.
   */
  cPais?: string;
  /** @description Nome do país. */
  xPais?: string;
};
/** @description Valores da Prestação de Serviço. */
export type CteOsSefazVPrestOS = {
  /**
   * @description Valor Total da Prestação do Serviço.
   * Pode conter zeros quando o CT-e for de complemento de ICMS.
   */
  vTPrest: number;
  /** @description Valor a Receber. */
  vRec: number;
  Comp?: CteOsSefazCompOS[];
};
/** @description Componentes do Valor da Prestação. */
export type CteOsSefazCompOS = {
  /**
   * @description Nome do componente.
   * Exxemplos: FRETE PESO, FRETE VALOR, SEC/CAT, ADEME, AGENDAMENTO, etc.
   */
  xNome: string;
  /** @description Valor do componente. */
  vComp: number;
};
/** @description Informações relativas aos Impostos. */
export type CteOsSefazInfCte_ImpOS = {
  ICMS: CteOsSefazImpOS;
  /** @description Valor Total dos Tributos. */
  vTotTrib?: number;
  /**
   * @description Informações adicionais de interesse do Fisco.
   * Norma referenciada, informações complementares, etc.
   */
  infAdFisco?: string;
  ICMSUFFim?: CteOsSefazICMSUFFimOS;
  infTribFed?: CteOsSefazInfTribFedOS;
  IBSCBS?: CteOsSefazTribCTeOS;
  /**
   * @description Valor total do documento fiscal
   * (vTPrest + total do IBS + total da CBS).
   */
  vTotDFe?: number;
};
/** @description Informações relativas ao ICMS. */
export type CteOsSefazImpOS = {
  ICMS00?: CteOsSefazICMS00OS;
  ICMS20?: CteOsSefazICMS20OS;
  ICMS45?: CteOsSefazICMS45OS;
  ICMS90?: CteOsSefazICMS90OS;
  ICMSOutraUF?: CteOsSefazICMSOutraUFOS;
  ICMSSN?: CteOsSefazICMSSNOS;
};
/** @description Prestação sujeito à tributação normal do ICMS. */
export type CteOsSefazICMS00OS = {
  /**
   * @description classificação Tributária do Serviço.
   * * 00 - tributação normal ICMS
   */
  CST: string;
  /** @description Valor da BC do ICMS. */
  vBC: number;
  /** @description Alíquota do ICMS. */
  pICMS: number;
  /** @description Valor do ICMS. */
  vICMS: number;
};
/** @description Prestação sujeito à tributação com redução de BC do ICMS. */
export type CteOsSefazICMS20OS = {
  /**
   * @description Classificação Tributária do serviço.
   * * 20 - tributação com BC reduzida do ICMS
   */
  CST: string;
  /** @description Percentual de redução da BC. */
  pRedBC: number;
  /** @description Valor da BC do ICMS. */
  vBC: number;
  /** @description Alíquota do ICMS. */
  pICMS: number;
  /** @description Valor do ICMS. */
  vICMS: number;
  /** @description Valor do ICMS de desoneração. */
  vICMSDeson?: number;
  /**
   * @description Código de Benefício Fiscal na UF.
   * Código de Benefício Fiscal utilizado pela UF.
   */
  cBenef?: string;
};
/** @description ICMS  Isento, não Tributado ou diferido. */
export type CteOsSefazICMS45OS = {
  /**
   * @description Classificação Tributária do Serviço.
   * Preencher com:
   * * 40 - ICMS isenção
   * * 41 - ICMS não tributada
   * * 51 - ICMS diferido
   */
  CST: string;
  /** @description Valor do ICMS de desoneração. */
  vICMSDeson?: number;
  /**
   * @description Código de Benefício Fiscal na UF.
   * Código de Benefício Fiscal utilizado pela UF.
   */
  cBenef?: string;
};
/** @description ICMS Outros. */
export type CteOsSefazICMS90OS = {
  /**
   * @description Classificação Tributária do Serviço.
   * * 90 - Outros
   */
  CST: string;
  /** @description Percentual de redução da BC. */
  pRedBC?: number;
  /** @description Valor da BC do ICMS. */
  vBC: number;
  /** @description Alíquota do ICMS. */
  pICMS: number;
  /** @description Valor do ICMS. */
  vICMS: number;
  /** @description Valor do Crédito Outorgado/Presumido. */
  vCred?: number;
  /** @description Valor do ICMS de desoneração. */
  vICMSDeson?: number;
  /**
   * @description Código de Benefício Fiscal na UF.
   * Código de Benefício Fiscal utilizado pela UF.
   */
  cBenef?: string;
};
/** @description ICMS devido à UF de origem da prestação, quando  diferente da UF do emitente. */
export type CteOsSefazICMSOutraUFOS = {
  /**
   * @description Classificação Tributária do Serviço.
   * * 90 - ICMS Outra UF
   */
  CST: string;
  /** @description Percentual de redução da BC. */
  pRedBCOutraUF?: number;
  /** @description Valor da BC do ICMS. */
  vBCOutraUF: number;
  /** @description Alíquota do ICMS. */
  pICMSOutraUF: number;
  /** @description Valor do ICMS devido outra UF. */
  vICMSOutraUF: number;
  /** @description Valor do ICMS de desoneração. */
  vICMSDeson?: number;
  /**
   * @description Código de Benefício Fiscal na UF.
   * Código de Benefício Fiscal utilizado pela UF.
   */
  cBenef?: string;
};
/** @description Simples Nacional. */
export type CteOsSefazICMSSNOS = {
  /**
   * @description Classificação Tributária do Serviço.
   * * 90 - ICMS Simples Nacional
   */
  CST: string;
  /** @description Indica se o contribuinte é Simples Nacional			1=Sim. */
  indSN: number;
};
/**
 * @description Informações do ICMS de partilha com a UF de término do serviço de transporte na operação interestadual.
 * Grupo a ser informado nas prestações interestaduais para consumidor final, não contribuinte do ICMS.
 */
export type CteOsSefazICMSUFFimOS = {
  /** @description Valor da BC do ICMS na UF de término da prestação do serviço de transporte. */
  vBCUFFim: number;
  /**
   * @description Percentual do ICMS relativo ao Fundo de Combate à pobreza (FCP) na UF de término da prestação do serviço de transporte.
   * Alíquota adotada nas operações internas na UF do destinatário.
   */
  pFCPUFFim: number;
  /**
   * @description Alíquota interna da UF de término da prestação do serviço de transporte.
   * Alíquota adotada nas operações internas na UF do destinatário.
   */
  pICMSUFFim: number;
  /**
   * @description Alíquota interestadual das UF envolvidas.
   * Alíquota interestadual das UF envolvidas.
   */
  pICMSInter: number;
  /** @description Valor do ICMS relativo ao Fundo de Combate á Pobreza (FCP) da UF de término da prestação. */
  vFCPUFFim: number;
  /** @description Valor do ICMS de partilha para a UF de término da prestação do serviço de transporte. */
  vICMSUFFim: number;
  /** @description Valor do ICMS de partilha para a UF de início da prestação do serviço de transporte. */
  vICMSUFIni: number;
};
/**
 * @description Informações dos tributos federais.
 * Grupo a ser informado nas prestações interestaduais para consumidor final, não contribuinte do ICMS.
 */
export type CteOsSefazInfTribFedOS = {
  /** @description Valor do PIS. */
  vPIS?: number;
  /** @description Valor COFINS. */
  vCOFINS?: number;
  /** @description Valor de Imposto de Renda. */
  vIR?: number;
  /** @description Valor do INSS. */
  vINSS?: number;
  /** @description Valor do CSLL. */
  vCSLL?: number;
};
/** @description Grupo de informações do IBS e CBS. */
export type CteOsSefazTribCTeOS = {
  /** @description Código Situação Tributária do IBS/CBS. */
  CST: string;
  cClassTrib?: string;
  gIBSCBS?: CteOsSefazCIBSOS;
};
export type CteOsSefazCIBSOS = {
  /** @description Valor do BC. */
  vBC: number;
  gIBSUF: CteOsSefazGIBSUFOS;
  gIBSMun: CteOsSefazGIBSMunOS;
  /** @description Valor do IBS (soma de vIBSUF e vIBSMun). */
  vIBS: number;
  gCBS: CteOsSefazGCBSOS;
  gTribRegular?: CteOsSefazTribRegularOS;
  gIBSCredPres?: CteOsSefazCredPresOS;
  gCBSCredPres?: CteOsSefazCredPresOS;
  gTribCompraGov?: CteOsSefazTribCompraGovOS;
};
/** @description Grupo de informações do IBS na UF. */
export type CteOsSefazGIBSUFOS = {
  /** @description Aliquota do IBS de competência das UF. */
  pIBSUF: number;
  gDif?: CteOsSefazDifOS;
  gDevTrib?: CteOsSefazDevTribOS;
  gRed?: CteOsSefazRedOS;
  /** @description Valor do IBS de competência das UF. */
  vIBSUF: number;
};
/** @description Grupo de campos do Diferimento. */
export type CteOsSefazDifOS = {
  /** @description Percentual do diferimento. */
  pDif: number;
  /** @description Valor do diferimento. */
  vDif: number;
};
/** @description Grupo de Informações da devolução de tributos. */
export type CteOsSefazDevTribOS = {
  /**
   * @description Valor do tributo devolvido. No fornecimento de energia elétrica, água, esgoto e
   * gás natural e em outras hipóteses definidas no regulamento.
   */
  vDevTrib: number;
};
/** @description Grupo de campos da redução de aliquota. */
export type CteOsSefazRedOS = {
  /** @description Percentual de redução de aliquota do cClassTrib. */
  pRedAliq: number;
  /** @description Aliquota Efetiva que será aplicada a Base de Calculo. */
  pAliqEfet: number;
};
/** @description Grupo de Informações do IBS no Município. */
export type CteOsSefazGIBSMunOS = {
  /** @description Aliquota do IBS Municipal. */
  pIBSMun: number;
  gDif?: CteOsSefazDifOS;
  gDevTrib?: CteOsSefazDevTribOS;
  gRed?: CteOsSefazRedOS;
  /** @description Valor do IBS Municipal. */
  vIBSMun: number;
};
/** @description Grupo de Tributação da CBS. */
export type CteOsSefazGCBSOS = {
  /** @description Aliquota da CBS. */
  pCBS: number;
  gDif?: CteOsSefazDifOS;
  gDevTrib?: CteOsSefazDevTribOS;
  gRed?: CteOsSefazRedOS;
  /** @description Valor da CBS. */
  vCBS: number;
};
/** @description Grupo de informações da Tributação Regular. Informar como seria a tributação caso não cumprida a condição resolutória/suspensiva. Exemplo 1: Art. 442, §4. Operações com ZFM e ALC. Exemplo 2: Operações com suspensão do tributo. */
export type CteOsSefazTribRegularOS = {
  /**
   * @description Código da Situação Tributária do IBS e CBS.
   * Informar qual seria o CST caso não cumprida a condição resolutória/suspensiva.
   */
  CSTReg: string;
  /** @description Informar qual seria o cClassTrib caso não cumprida a condição resolutória/suspensiva. */
  cClassTribReg: string;
  /**
   * @description Alíquota do IBS da UF.
   * Informar como seria a Alíquota caso não cumprida a condição resolutória/suspensiva.
   */
  pAliqEfetRegIBSUF: number;
  /**
   * @description Valor do IBS da UF.
   * Informar como seria o valor do Tributo caso não cumprida a condição resolutória/suspensiva.
   */
  vTribRegIBSUF: number;
  /**
   * @description Alíquota do IBS do Município.
   * Informar como seria a Alíquota caso não cumprida a condição resolutória/suspensiva.
   */
  pAliqEfetRegIBSMun: number;
  /**
   * @description Valor do IBS do Município.
   * Informar como seria o valor do Tributo caso não cumprida a condição resolutória/suspensiva.
   */
  vTribRegIBSMun: number;
  /**
   * @description Alíquota da CBS.
   * Informar como seria a Alíquota caso não cumprida a condição resolutória/suspensiva.
   */
  pAliqEfetRegCBS: number;
  /**
   * @description Valor da CBS.
   * Informar como seria o valor do Tributo caso não cumprida a condição resolutória/suspensiva.
   */
  vTribRegCBS: number;
};
/** @description Grupo de Informações do Crédito Presumido referente ao IBS, quando aproveitado pelo emitente do documento. */
export type CteOsSefazCredPresOS = {
  /** @description Usar tabela Cred Presumido, para o emitente da nota. */
  cCredPres: string;
  /** @description Percentual do Crédito Presumido. */
  pCredPres: number;
  /** @description Valor do Crédito Presumido. */
  vCredPres?: number;
  /** @description Valor do Crédito Presumido Condição Suspensiva, preencher apenas para cCredPres que possui indicação de Condição Suspensiva. */
  vCredPresCondSus?: number;
};
/** @description Grupo de informações da composição do valor do IBS e da CBS em compras governamental. */
export type CteOsSefazTribCompraGovOS = {
  pAliqIBSUF?: number;
  /** @description Valor que seria devido a UF, sem aplicação do Art. 473. da LC 214/2025. */
  vTribIBSUF: number;
  pAliqIBSMun?: number;
  /** @description Valor que seria devido ao município, sem aplicação do Art. 473. da LC 214/2025. */
  vTribIBSMun: number;
  pAliqCBS?: number;
  /** @description Valor que seria devido a CBS, sem aplicação do Art. 473. da LC 214/2025. */
  vTribCBS: number;
};
/** @description Grupo de informações do CT-e OS Normal. */
export type CteOsSefazInfCTeNormOS = {
  infServico: CteOsSefazInfServicoOS;
  infDocRef?: CteOsSefazInfDocRefOS[];
  seg?: CteOsSefazSegOS[];
  infModal?: CteOsSefazInfModalOS;
  infCteSub?: CteOsSefazInfCteSubOS;
  /**
   * @description Chave de acesso do CT-e Cancelado
   * Somente para Transporte de Valores.
   */
  refCTeCanc?: string;
  cobr?: CteOsSefazCobrOS;
  infGTVe?: CteOsSefazInfGTVeOS[];
};
/** @description Informações da Prestação do Serviço. */
export type CteOsSefazInfServicoOS = {
  /** @description Descrição do Serviço prestado. */
  xDescServ: string;
  infQ?: CteOsSefazInfQOS;
};
/**
 * @description Informações de quantidades da Carga do CT-e.
 * Para Transporte de Pessoas indicar número de passageiros, para excesso de bagagem e transporte de valores indicar número de Volumes/Malotes.
 */
export type CteOsSefazInfQOS = {
  /** @description Quantidade. */
  qCarga: number;
};
/** @description Informações dos documentos referenciados. */
export type CteOsSefazInfDocRefOS = {
  /** @description Número. */
  nDoc?: string;
  /** @description Série. */
  serie?: string;
  /** @description Subsérie. */
  subserie?: string;
  /**
   * Format: date
   * @description Data de Emissão.
   * Formato AAAA-MM-DD.
   */
  dEmi?: string;
  /** @description Valor Transportado. */
  vDoc?: number;
  /** @description Chave de acesso do BP-e que possui eventos excesso de bagagem. */
  chBPe?: string;
};
/** @description Informações de Seguro da Carga. */
export type CteOsSefazSegOS = {
  /**
   * @description Responsável pelo seguro.
   * Preencher com:
   * * 4 - Emitente do CT-e
   * * 5 - Tomador de Serviço
   */
  respSeg: number;
  /** @description Nome da Seguradora. */
  xSeg?: string;
  /**
   * @description Número da Apólice.
   * Obrigatório pela lei 11.442/07 (RCTRC).
   */
  nApol?: string;
};
/**
 * @description Informações do modal
 * Obrigatório para Pessoas e Bagagem.
 */
export type CteOsSefazInfModalOS = {
  /** @description Versão do leiaute específico para o Modal. */
  versaoModal: string;
  rodoOS?: CteOsSefazRodoOS;
};
/** @description Informações do modal Rodoviário. */
export type CteOsSefazRodoOS = {
  /**
   * @description Termo de Autorização de Fretamento - TAF.
   * Registro obrigatório do emitente do CT-e OS junto à ANTT, de acordo com a Resolução ANTT nº 4.777/2015.
   */
  TAF?: string;
  /**
   * @description Número do Registro Estadual.
   * Registro obrigatório do emitente do CT-e OS junto à Agência Reguladora  Estadual.
   */
  NroRegEstadual?: string;
  veic?: CteOsSefazVeicOS;
  infFretamento?: CteOsSefazInfFretamentoOS;
};
/** @description Dados do Veículo. */
export type CteOsSefazVeicOS = {
  /** @description Placa do veículo. */
  placa: string;
  /** @description RENAVAM do veículo. */
  RENAVAM?: string;
  prop?: CteOsSefazPropOS;
  /**
   * @description UF em que veículo está licenciado.
   * Sigla da UF de licenciamento do veículo.
   */
  UF?: string;
};
/**
 * @description Proprietário ou possuidor do Veículo.
 * Só preenchido quando o veículo não pertencer à empresa emitente do CT-e OS.
 */
export type CteOsSefazPropOS = {
  /**
   * @description Número do CPF.
   * Informar os zeros não significativos.
   */
  CPF?: string;
  /**
   * @description Número do CNPJ.
   * Informar os zeros não significativos.
   */
  CNPJ?: string;
  /**
   * @description Termo de Autorização de Fretamento - TAF.
   * De acordo com a Resolução ANTT nº 4.777/2015.
   */
  TAF?: string;
  /**
   * @description Número do Registro Estadual.
   * Registro obrigatório do emitente do CT-e OS junto à Agência Reguladora  Estadual.
   */
  NroRegEstadual?: string;
  /** @description Razão Social ou Nome do proprietário. */
  xNome: string;
  /** @description Inscrição Estadual. */
  IE?: string;
  /** @description UF. */
  UF?: string;
  /**
   * @description Tipo Proprietário ou possuidor.
   * Preencher com:
   * * 0 - TAC - Agregado
   * * 1 - TAC Independente
   * ou
   * * 2 - Outros
   */
  tpProp: number;
};
/** @description Dados do fretamento (apenas para Transporte de Pessoas). */
export type CteOsSefazInfFretamentoOS = {
  /**
   * @description Tipo Fretamento.
   * Preencher com:
   * * 1 - Eventual 2 - Continuo
   */
  tpFretamento: number;
  /**
   * Format: date-time
   * @description Data e hora da viagem (Apenas para fretamento eventual).
   * Formato AAAA-MM-DDTHH:MM:DD TZD.
   */
  dhViagem?: string;
};
/** @description Informações do CT-e de substituição. */
export type CteOsSefazInfCteSubOS = {
  /** @description Chave de acesso do CT-e a ser substituído (original). */
  chCte: string;
};
/** @description Dados da cobrança do CT-e. */
export type CteOsSefazCobrOS = {
  fat?: CteOsSefazFatOS;
  dup?: CteOsSefazDupOS[];
};
/** @description Dados da fatura. */
export type CteOsSefazFatOS = {
  /** @description Número da fatura. */
  nFat?: string;
  /** @description Valor original da fatura. */
  vOrig?: number;
  /** @description Valor do desconto da fatura. */
  vDesc?: number;
  /** @description Valor líquido da fatura. */
  vLiq?: number;
};
/** @description Dados das duplicatas. */
export type CteOsSefazDupOS = {
  /** @description Número da duplicata. */
  nDup?: string;
  /**
   * Format: date
   * @description Data de vencimento da duplicata (AAAA-MM-DD).
   */
  dVenc?: string;
  /** @description Valor da duplicata. */
  vDup?: number;
};
/** @description Informações das GTV-e relacionadas ao CT-e OS. */
export type CteOsSefazInfGTVeOS = {
  /** @description Chave de acesso da GTV-e. */
  chCTe: string;
  Comp: CteOsSefazInfGTVe_CompOS[];
};
/** @description Componentes do Valor da GTVe. */
export type CteOsSefazInfGTVe_CompOS = {
  /**
   * @description Tipo do Componente.
   * * 1 - Custodia
   * * 2 - Embarque
   * * 3 - Tempo de espera
   * * 4 - Malote
   * * 5 - Ad Valorem
   * * 6 - Outros
   */
  tpComp: number;
  /** @description Valor do componente. */
  vComp: number;
  /**
   * @description Nome do componente (informar apenas para outros).
   * Exemplos: FRETE PESO, FRETE VALOR, SEC/CAT, ADEME, AGENDAMENTO, etc.
   */
  xComp?: string;
};
/** @description Detalhamento do CT-e complementado. */
export type CteOsSefazInfCteCompOS = {
  /** @description Chave do CT-e complementado. */
  chCTe: string;
};
/**
 * @description Autorizados para download do XML do DF-e.
 * Informar CNPJ ou CPF. Preencher os zeros não significativos.
 */
export type CteOsSefazAutXMLOS = {
  /**
   * @description CNPJ do autorizado.
   * Informar zeros não significativos.
   */
  CNPJ?: string;
  /**
   * @description CPF do autorizado.
   * Informar zeros não significativos.
   */
  CPF?: string;
};
/** @description Informações do Responsável Técnico pela emissão do DF-e. */
export type CteOsSefazRespTecOS = {
  /**
   * @description CNPJ da pessoa jurídica responsável técnica pelo sistema utilizado na emissão do documento fiscal eletrônico.
   * Informar o CNPJ da pessoa jurídica desenvolvedora do sistema utilizado na emissão do documento fiscal eletrônico.
   */
  CNPJ: string;
  /**
   * @description Nome da pessoa a ser contatada.
   * Informar o nome da pessoa a ser contatada na empresa desenvolvedora do sistema utilizado na emissão do documento fiscal eletrônico. No caso de pessoa física, informar o respectivo nome.
   */
  xContato: string;
  /** @description Email da pessoa jurídica a ser contatada. */
  email: string;
  /**
   * @description Telefone da pessoa jurídica a ser contatada.
   * Preencher com o Código DDD + número do telefone.
   */
  fone: string;
  /**
   * @description Identificador do código de segurança do responsável técnico.
   * Identificador do CSRT utilizado para geração do hash.
   */
  idCSRT?: number;
  /** @description Código de Segurança do Responsável Técnico utilizado para montar o hash do CSRT. */
  CSRT?: string;
  /**
   * @description Hash do token do código de segurança do responsável técnico.
   * O hashCSRT é o resultado das funções SHA-1 e base64 do token CSRT fornecido pelo fisco + chave de acesso do DF-e. (Implementação em futura NT)
   * Observação: 28 caracteres são representados no schema como 20 bytes do tipo base64Binary.
   *
   * *Se não informado, será calculado automaticamente, desde que os campos `idCSRT` e `CSRT` sejam fornecidos.*
   */
  hashCSRT?: string;
};
/** @description Informações suplementares do CT-e. */
export type CteOsSefazInfCTeSuplOS = {
  /**
   * @description Texto com o QR-Code impresso no DACTE.
   *
   * *Geramos automaticamente quando nenhum valor é informado.*
   */
  qrCodCTe?: string;
};
export type Dfe = {
  /** @description ID único gerado pela Nuvem Fiscal para este documento. */
  id?: string;
  /** @enum {string} */
  ambiente?: "homologacao" | "producao";
  /**
   * Format: date-time
   * @description Data/hora em que o documento foi criado na Nuvem Fiscal. Representado no formato <a href="https://en.wikipedia.org/wiki/ISO_8601" target="blank">`ISO 8601`</a>.
   */
  created_at?: string;
  /**
   * @description * `pendente`: o pedido de emissão do documento foi recebido pela Nuvem Fiscal e está na fila de processamento.
   * * `autorizado`, `rejeitado` ou `denegado`: o documento foi transmitido para a SEFAZ, que retornou um desses status.
   * * `cancelado`: um evento de cancelamento foi homologado pela SEFAZ e associado ao documento.
   * * `encerrado`: um evento de encerramento foi homologado pela SEFAZ e associado a um MDF-e.
   * * `erro`: status próprio da Nuvem Fiscal que significa, na maioria das vezes, que houve algum erro que impediu a transmissão do documento para a SEFAZ (erros de validação, erros interno do servidor, timeouts, etc).
   * @enum {string}
   */
  status?:
    | "pendente"
    | "autorizado"
    | "rejeitado"
    | "denegado"
    | "encerrado"
    | "cancelado"
    | "erro";
  /** @description Seu identificador único para este documento. Opcional, ajuda a evitar o envio duplicado de um mesmo documento. */
  referencia?: string;
  /** Format: date-time */
  data_emissao?: string;
  modelo?: number;
  serie?: number;
  numero?: number;
  tipo_emissao?: number;
  valor_total?: number;
  /** @description Chave de acesso do DF-e. */
  chave?: string;
  /** @description Protocolo de status resultado do processamento do DF-e. */
  autorizacao?: DfeAutorizacao;
};
export type DfeAutorizacao = {
  /** @description Digest Value do DF-e processado. Utilizado para conferir a integridade do DF-e original. */
  digest_value?: string;
  /** @description ID único gerado pela Nuvem Fiscal para este evento. */
  id?: string;
  /**
   * @description Identificação do ambiente.
   * @enum {string}
   */
  ambiente?: "homologacao" | "producao";
  /**
   * @description Status do Evento.
   * @enum {string}
   */
  status?: "pendente" | "registrado" | "rejeitado" | "erro";
  /** @description Identificação do autor do evento. */
  autor?: DfeAutorEvento;
  /** @description Chave de Acesso do documento vinculado ao evento. */
  chave_acesso?: string;
  /**
   * Format: date-time
   * @description Data e hora do Evento.
   */
  data_evento?: string;
  /** @description Sequencial do evento para o mesmo tipo de evento. */
  numero_sequencial?: number;
  /**
   * Format: date-time
   * @description Data e hora do recebimento do Evento pela SEFAZ.
   */
  data_recebimento?: string;
  /** @description Código do status de registro do Evento. */
  codigo_status?: number;
  /** @description Descrição literal do status do registro do Evento. */
  motivo_status?: string;
  /** @description Número do Protocolo de registro do Evento. */
  numero_protocolo?: string;
  /** @description Código da Mensagem. */
  codigo_mensagem?: number;
  /** @description Mensagem da SEFAZ para o emissor. */
  mensagem?: string;
  tipo_evento?: string;
};
export type DfeAutorEvento = {
  /** @description CPF/CNPJ do Autor. */
  cpf_cnpj?: string;
};
export type DfeListagem = {
  "@count"?: number;
  data?: Dfe[];
};
export type CteOsPedidoCancelamento = {
  /** @description Justificativa para o cancelamento. Preencheremos automaticamente, caso esteja em branco. */
  justificativa?: string;
};
export type DfeCancelamento = {
  /** @description Justificativa do cancelamento. */
  justificativa?: string;
  /** @description ID único gerado pela Nuvem Fiscal para este evento. */
  id?: string;
  /**
   * @description Identificação do ambiente.
   * @enum {string}
   */
  ambiente?: "homologacao" | "producao";
  /**
   * @description Status do Evento.
   * @enum {string}
   */
  status?: "pendente" | "registrado" | "rejeitado" | "erro";
  /** @description Identificação do autor do evento. */
  autor?: DfeAutorEvento;
  /** @description Chave de Acesso do documento vinculado ao evento. */
  chave_acesso?: string;
  /**
   * Format: date-time
   * @description Data e hora do Evento.
   */
  data_evento?: string;
  /** @description Sequencial do evento para o mesmo tipo de evento. */
  numero_sequencial?: number;
  /**
   * Format: date-time
   * @description Data e hora do recebimento do Evento pela SEFAZ.
   */
  data_recebimento?: string;
  /** @description Código do status de registro do Evento. */
  codigo_status?: number;
  /** @description Descrição literal do status do registro do Evento. */
  motivo_status?: string;
  /** @description Número do Protocolo de registro do Evento. */
  numero_protocolo?: string;
  /** @description Código da Mensagem. */
  codigo_mensagem?: number;
  /** @description Mensagem da SEFAZ para o emissor. */
  mensagem?: string;
  tipo_evento?: string;
};
export type CteOsPedidoCartaCorrecao = {
  /** @description Grupo de Informações de Correção. */
  correcoes: CteOsInfCorrecao[];
};
export type CteOsInfCorrecao = {
  /** @description Indicar o grupo de informações que pertence o "campo_alterado". Ex: ide. */
  grupo_alterado: string;
  /** @description Nome do campo modificado do CT-e OS Original. */
  campo_alterado: string;
  /** @description Valor correspondente à alteração. */
  valor_alterado: string;
  /**
   * @description Preencher com o indice do item alterado caso a alteração ocorra em uma lista.
   * OBS: O indice inicia sempre em 1.
   */
  numero_item_alterado?: number;
};
export type CteOsCartaCorrecao = {
  /** @description Grupo de Informações de Correção. */
  correcoes: CteOsInfCorrecao[];
  /** @description ID único gerado pela Nuvem Fiscal para este evento. */
  id?: string;
  /**
   * @description Identificação do ambiente.
   * @enum {string}
   */
  ambiente?: "homologacao" | "producao";
  /**
   * @description Status do Evento.
   * @enum {string}
   */
  status?: "pendente" | "registrado" | "rejeitado" | "erro";
  /** @description Identificação do autor do evento. */
  autor?: DfeAutorEvento;
  /** @description Chave de Acesso do documento vinculado ao evento. */
  chave_acesso?: string;
  /**
   * Format: date-time
   * @description Data e hora do Evento.
   */
  data_evento?: string;
  /** @description Sequencial do evento para o mesmo tipo de evento. */
  numero_sequencial?: number;
  /**
   * Format: date-time
   * @description Data e hora do recebimento do Evento pela SEFAZ.
   */
  data_recebimento?: string;
  /** @description Código do status de registro do Evento. */
  codigo_status?: number;
  /** @description Descrição literal do status do registro do Evento. */
  motivo_status?: string;
  /** @description Número do Protocolo de registro do Evento. */
  numero_protocolo?: string;
  /** @description Código da Mensagem. */
  codigo_mensagem?: number;
  /** @description Mensagem da SEFAZ para o emissor. */
  mensagem?: string;
  tipo_evento?: string;
};
export type DfeEvento = {
  /** @description ID único gerado pela Nuvem Fiscal para este evento. */
  id?: string;
  /**
   * @description Identificação do ambiente.
   * @enum {string}
   */
  ambiente?: "homologacao" | "producao";
  /**
   * @description Status do Evento.
   * @enum {string}
   */
  status?: "pendente" | "registrado" | "rejeitado" | "erro";
  /** @description Identificação do autor do evento. */
  autor?: DfeAutorEvento;
  /** @description Chave de Acesso do documento vinculado ao evento. */
  chave_acesso?: string;
  /**
   * Format: date-time
   * @description Data e hora do Evento.
   */
  data_evento?: string;
  /** @description Sequencial do evento para o mesmo tipo de evento. */
  numero_sequencial?: number;
  /**
   * Format: date-time
   * @description Data e hora do recebimento do Evento pela SEFAZ.
   */
  data_recebimento?: string;
  /** @description Código do status de registro do Evento. */
  codigo_status?: number;
  /** @description Descrição literal do status do registro do Evento. */
  motivo_status?: string;
  /** @description Número do Protocolo de registro do Evento. */
  numero_protocolo?: string;
  /** @description Código da Mensagem. */
  codigo_mensagem?: number;
  /** @description Mensagem da SEFAZ para o emissor. */
  mensagem?: string;
  tipo_evento?: string;
};
export type DfeSincronizacao = {
  /**
   * @description Situação atual da sincronização.
   * @enum {string}
   */
  status?: "pendente" | "sincronizado" | "erro";
  /** @description Código da situação atual do DF-e. */
  codigo_status?: number;
  /** @description Descrição literal da situação atual do DF-e. */
  motivo_status?: string;
  /**
   * Format: date-time
   * @description Data e hora de processamento.
   */
  data_recebimento?: string;
  /** @description Chave de Acesso do DF-e consultado. */
  chave?: string;
};
export type NfseCidadesAtendidas = {
  /** @description Quantidade de cidades atendidas pela Nuvem Fiscal. */
  "@count"?: number;
  /** @description Lista com os códigos IBGE das cidades atendidas pela Nuvem Fiscal. */
  data?: string[];
};
export type NfseCidadeMetadados = {
  /** @description Código IBGE do município. */
  codigo_ibge?: string;
  /** @description UF do município. */
  uf?: string;
  /** @description Nome do município. */
  municipio?: string;
  /** @description Provedor do município. */
  provedor?: string;
  /** @description Ambientes disponíveis no provedor. */
  ambientes?: ("homologacao" | "producao")[];
  /** @description Credenciais requeridas para autenticação no provedor. */
  credenciais?: ("certificado" | "login_senha" | "token")[];
};
export type RpsPedidoEmissaoLote = {
  /**
   * @description Identificação do Ambiente.
   * @enum {string}
   */
  ambiente: "homologacao" | "producao";
  /** @description Seu identificador único para este documento. Opcional, ajuda a evitar o envio duplicado de um mesmo documento. */
  referencia?: string;
  lista_rps?: RpsPedidoEmissao[];
};
export type RpsPedidoEmissao = {
  /** @description Seu identificador único para este documento. Opcional, ajuda a evitar o envio duplicado de um mesmo documento. */
  referencia?: string;
  /**
   * Format: date-time
   * @description Data e Hora de Emissão do RPS, no formato AAAA-MM-DDTHH:MM:SSTZD.
   * Caso não informado, será considerada a data/hora da requisição à API da Nuvem Fiscal.
   */
  data_emissao?: string;
  /**
   * Format: date-time
   * @description Competência do RPS, no formato AAAA-MM-DD.
   * Caso não informado, será considerada a data da requisição à API da Nuvem Fiscal.
   */
  competencia?: string;
  /**
   * @description Natureza da tributação:
   * * 1 - Simples Nacional;
   * * 2 - Fixo;
   * * 3 - Depósito em juízo;
   * * 4 - Exigibilidade suspensa por decisão judicial;
   * * 5 - Exigibilidade suspensa por procedimento administrativo;
   * * 6 - Isenção parcial.
   */
  natureza_tributacao?: number;
  /** @description Dados da empresa emitente. */
  prestador: RpsIdentificacaoPrestador;
  /** @description Dados do tomador/destinatário. */
  tomador: RpsDadosTomador;
  /** @description Dados do íntermediário. */
  intermediario?: RpsDadosIntermediario;
  construcao_civil?: RpsDadosConstrucaoCivil;
  servicos: RpsDadosServico[];
  /** @description Informações adicionais ao documento. */
  outras_informacoes?: string;
};
export type RpsIdentificacaoPrestador = {
  /**
   * @description CPF ou CNPJ do prestador.
   * Utilize o valor sem máscara.
   */
  cpf_cnpj: string;
};
export type RpsDadosTomador = {
  /** @description CPF ou CNPJ do tomador/destinatário. */
  cpf_cnpj?: string;
  /** @description Inscrição Municipal do tomador/destinatário. */
  inscricao_municipal?: string;
  /** @description Nome ou Razão Social do tomador/destinatário. */
  nome_razao_social: string;
  /** @description Telefone do tomador/destinatário. */
  fone?: string;
  /** @description Email do tomador/destinatário. */
  email?: string;
  /** @description Endereço do tomador/destinatário. */
  endereco?: RpsDadosTomadorEndereco;
};
export type RpsDadosTomadorEndereco = {
  /** @description Logradouro. */
  logradouro?: string;
  /** @description Número. */
  numero?: string;
  /** @description Complemento. */
  complemento?: string;
  /** @description Bairro. */
  bairro?: string;
  /** @description Código IBGE do município. */
  codigo_municipio?: string;
  /** @description Cidade. */
  cidade?: string;
  /** @description Sigla do estado. */
  uf?: string;
  /** @default 1058 */
  codigo_pais?: string;
  /** @description Nome do país. */
  pais?: string;
  /**
   * @description CEP.
   * Utilize o valor sem máscara.
   */
  cep?: string;
};
export type RpsDadosIntermediario = {
  cpf_cnpj?: string;
  nome_razao_social?: string;
  inscricao_municipal?: string;
};
export type RpsDadosConstrucaoCivil = {
  codigo_obra?: string;
  art?: string;
};
export type RpsDadosServico = {
  /**
   * @description Reter ISSQN.
   * @default false
   */
  iss_retido?: boolean;
  /**
   * @description Responsável pela retenção:
   * * 0 - Prestador;
   * * 1 - Tomador;
   * * 2 - Intermediário.
   * @default 0
   */
  responsavel_retencao?: number;
  /**
   * @description Código do item da lista de serviço, geralmente segue a LC116, podendo variar de acordo com a prefeitura.
   *
   * Você pode encontrar esse dado no portal da prefeitura, em uma nota emitida ou junto ao contador.
   */
  item_lista_servico: string;
  /** @description Código CNAE (Classificação Nacional de Atividades Econômicas). */
  codigo_cnae?: string;
  /** @description Código de tributação do município. */
  codigo_tributacao_municipio?: string;
  /** @description Detalhamento do serviço prestado. */
  discriminacao: string;
  /**
   * @description Código IBGE do município de prestação do serviço.
   * Caso não informado, será considerado o município do prestador.
   */
  codigo_municipio?: string;
  /** @description Código do país de prestação do serviço. */
  codigo_pais?: string;
  /**
   * @description Tipo de Tributação do Serviço:
   * * 1 - Isento de ISS
   * * 2 - Imune
   * * 3 - Não Incidência no Município
   * * 4 - Não Tributável
   * * 5 - Retido
   * * 6 - Tributável Dentro do Município
   * * 7 - Tributável Fora do Município
   * * 8 - Tributável Dentro do Município pelo tomador
   * @default 6
   */
  tipo_tributacao?: number;
  /**
   * @description Exigibilidade do ISS:
   * * 1 - Exigível
   * * 2 - Não Incidência
   * * 3 - Isenção
   * * 4 - Exportação
   * * 5 - Imunidade
   * * 6 - Suspenso por Decisão Judicial
   * * 7 - Suspenso por Processo Administrativo
   * @default 1
   */
  exigibilidade_iss?: number;
  /** @description Código IBGE do município de incidência do ISSQN. */
  codigo_municipio_incidencia?: string;
  /** @description Número do Processo de Suspensão da Exigibilidade. */
  numero_processo?: string;
  /** @description Unidade do serviço prestado. */
  unidade?: string;
  /**
   * @description Quantidade dos serviços prestados.
   * @default 1
   */
  quantidade?: number;
  valores: RpsServicoValores;
};
export type RpsServicoValores = {
  /** @description Valor unitário do serviço. */
  valor_unitario: number;
  /** @description Valor total do serviço. */
  valor_servicos?: number;
  valor_deducoes?: number;
  valor_pis?: number;
  valor_cofins?: number;
  valor_inss?: number;
  valor_ir?: number;
  valor_csll?: number;
  valor_outras_retencoes?: number;
  valor_iss?: number;
  valor_iss_retido?: number;
  valor_liquido?: number;
  aliquota_iss?: number;
  aliquota_pis?: number;
  aliquota_cofins?: number;
  aliquota_inss?: number;
  aliquota_ir?: number;
  aliquota_csll?: number;
  desconto_incondicionado?: number;
  desconto_condicionado?: number;
};
export type RpsLote = {
  /** @description ID único do lote gerado automaticamente pela Nuvem Fiscal. */
  id?: string;
  /** Format: date-time */
  created_at?: string;
  /** @enum {string} */
  status?: "novo" | "fila_envio" | "fila_consulta" | "processado" | "erro";
  numero?: string;
  /** @enum {string} */
  ambiente?: "homologacao" | "producao";
  referencia?: string;
  notas?: Nfse[];
};
export type Nfse = {
  /** @description ID único da nota gerado automaticamente pela Nuvem Fiscal. */
  id?: string;
  /** Format: date-time */
  created_at?: string;
  /** @enum {string} */
  status?:
    | "processando"
    | "autorizada"
    | "negada"
    | "cancelada"
    | "substituida"
    | "erro";
  numero?: string;
  codigo_verificacao?: string;
  link_url?: string;
  /** Format: date-time */
  data_emissao?: string;
  /** @enum {string} */
  ambiente?: "homologacao" | "producao";
  referencia?: string;
  DPS?: DPS;
  cancelamento?: NfseCancelamento;
  mensagens?: NfseMensagemRetorno[];
  declaracao_prestacao_servico?: Rps;
};
/** @description Grupo de informações da DPS relativas ao serviço prestado. */
export type DPS = {
  /** @description Série do DPS. */
  serie?: string;
  /** @description Número do DPS. */
  nDPS?: string;
};
export type NfseCancelamento = {
  /** @description ID único do cancelamento gerado automaticamente pela Nuvem Fiscal. */
  id?: string;
  /** @enum {string} */
  status?: "pendente" | "concluido" | "rejeitado" | "erro";
  codigo?: string;
  motivo?: string;
  /** Format: date-time */
  data_hora?: string;
  mensagens?: NfseMensagemRetorno[];
};
export type NfseMensagemRetorno = {
  codigo?: string;
  descricao?: string;
  correcao?: string;
};
/** @description *Propriedade obsoleta. Não é mais retornada pela API.* */
export type Rps = {
  rps?: RpsDados;
  /** Format: date-time */
  competencia?: string;
  /**
   * @description Natureza da tributação
   * 1 - Simples Nacional;
   * 2 - Fixo;
   * 3 - Depósito em juízo;
   * 4 - Exigibilidade suspensa por decisão judicial;
   * 5 - Exigibilidade suspensa por procedimento administrativo;
   * 6 - Isenção parcial.
   */
  natureza_tributacao?: number;
  prestador?: RpsDadosPrestador;
  tomador?: RpsDadosTomador;
  intermediario?: RpsDadosIntermediario;
  construcao_civil?: RpsDadosConstrucaoCivil;
  servicos: RpsDadosServico[];
  /** @description Informações adicionais ao documento. */
  outras_informacoes?: string;
};
export type RpsDados = {
  identificacao_rps?: RpsIdentificacao;
  /** Format: date-time */
  data_emissao?: string;
};
export type RpsIdentificacao = {
  numero?: string;
  serie?: string;
  tipo?: string;
};
export type RpsDadosPrestador = {
  cpf_cnpj?: string;
  inscricao_municipal?: string;
  nome_razao_social?: string;
  nome_fantasia?: string;
  fone?: string;
  email?: string;
  endereco?: EmpresaEndereco;
  optante_simples_nacional?: boolean;
  regime_tributacao?: number;
  regime_especial_tributacao?: number;
  incentivo_fiscal?: boolean;
  incentivador_cultural?: boolean;
};
export type NfseLoteDpsPedidoEmissao = {
  /**
   * @description Default: `"padrao"`
   *
   * Identificação do provedor para transmissão da DPS:
   *  * `"padrao"`: Provedor padrão da prefeitura.
   *  * `"nacional"`: Ambiente de Dados Nacional (ADN) do <a href="https://www.gov.br/nfse/pt-br" target="blank">Sistema Nacional NFS-e</a>.
   * @enum {string}
   */
  provedor?: "padrao" | "nacional";
  /**
   * @description Identificação do Ambiente.
   * @enum {string}
   */
  ambiente: "homologacao" | "producao";
  /** @description Seu identificador único para este documento. Opcional, ajuda a evitar o envio duplicado de um mesmo documento. */
  referencia?: string;
  /** @description Lista com as informações das DPS relativas aos serviços prestados. */
  documentos?: NfseDpsPedidoEmissao[];
};
export type NfseDpsPedidoEmissao = {
  /**
   * @description Default: `"padrao"`
   *
   * Identificação do provedor para transmissão da DPS:
   *  * `"padrao"`: Provedor padrão da prefeitura.
   *  * `"nacional"`: Ambiente de Dados Nacional (ADN) do <a href="https://www.gov.br/nfse/pt-br" target="blank">Sistema Nacional NFS-e</a>.
   * @enum {string}
   */
  provedor?: "padrao" | "nacional";
  /**
   * @description Identificação do Ambiente.
   * @enum {string}
   */
  ambiente: "homologacao" | "producao";
  /** @description Seu identificador único para este documento. Opcional, ajuda a evitar o envio duplicado de um mesmo documento. */
  referencia?: string;
  infDPS: InfDPS;
};
/** @description Grupo de informações da DPS relativas ao serviço prestado. */
export type InfDPS = {
  /**
   * @description Identificação do Ambiente:
   * * 1 - Produção
   * * 2 - Homologação
   */
  tpAmb?: number;
  /**
   * Format: date-time
   * @description Data e hora da emissão do DPS. Data e hora no formato UTC (Universal Coordinated Time): AAAA-MM-DDThh:mm:ssTZD.
   */
  dhEmi: string;
  /** @description Versão do aplicativo que gerou o DPS. */
  verAplic?: string;
  /**
   * Format: date
   * @description Data em que se iniciou a prestação do serviço: Dia, mês e ano (AAAAMMDD). (AAAA-MM-DDThh:mm:ssTZD).
   *
   *
   * *Geramos automaticamente quando nenhum valor é informado.*
   */
  dCompet?: string;
  subst?: Substituicao;
  prest: InfoPrestador;
  toma?: InfoTomador;
  interm?: InfoIntermediario;
  serv: Serv;
  valores: InfoValores;
};
/** @description Dados da NFS-e a ser substituída. */
export type Substituicao = {
  /** @description Chave de acesso da NFS-e a ser substituída. */
  chSubstda: string;
  /**
   * @description Código de justificativa para substituição de NFS-e:
   * * 01 - Desenquadramento de NFS-e do Simples Nacional
   * * 02 - Enquadramento de NFS-e no Simples Nacional
   * * 03 - Inclusão Retroativa de Imunidade/Isenção para NFS-e
   * * 04 - Exclusão Retroativa de Imunidade/Isenção para NFS-e
   * * 05 - Rejeição de NFS-e pelo tomador ou pelo intermediário se responsável pelo recolhimento do tributo
   * * 99 - Outros
   */
  cMotivo: string;
  /** @description Descrição do motivo da substituição da NFS-e. */
  xMotivo?: string;
};
/** @description Grupo de informações do DPS relativas ao Prestador de Serviços. */
export type InfoPrestador = {
  /**
   * @description Número do CNPJ.
   * Obrigatório caso o emitente seja pessoa jurídica.
   */
  CNPJ?: string;
  /**
   * @description Número do CPF.
   * Obrigatorio caso o emitente seja pessoa física.
   */
  CPF?: string;
  regTrib?: RegTrib;
};
/** @description Grupo de informações relativas aos regimes de tributação do prestador de serviços. */
export type RegTrib = {
  /**
   * @description Regime Especial de Tributação da Prefeitura.
   *
   * Campo opcional utilizado no momento da emissão da NFS-e para informar
   * diretamente o código de regime especial de tributação esperado pela
   * prefeitura.
   *
   * **Comportamento:**
   * - Ao preencher este campo, o valor será inserido diretamente no XML
   *   da NFS-e, sem qualquer conversão pela Nuvem Fiscal.
   * - Esse campo sobrescreve o valor configurado previamente nas
   *   configurações de NFS-e da empresa.
   * - É especialmente útil quando a prefeitura utiliza códigos próprios que
   *   não existem no padrão nacional (como valores diferentes dos listados
   *   de 0 a 6).
   *
   * **Cenários de uso:**
   * - Quando a prefeitura exige um código que não pode ser representado
   *   pelos valores do padrão nacional.
   * - Quando houver necessidade de enviar o código exato esperado pela
   *   prefeitura, sem depender da lógica de conversão automática da Nuvem Fiscal.
   *
   * **Atenção**: Para emissões pelo Sistema Nacional NFS-e, esse campo é ignorado.
   */
  regEspTrib?: number;
};
/** @description Grupo de informações do DPS relativas ao Tomador de Serviços. */
export type InfoTomador = {
  /**
   * @description Indica se o tomador do serviço é um orgão público.
   *
   * **Atenção**: Para emissões pelo Sistema Nacional NFS-e, esse campo é ignorado.
   * @default false
   */
  orgaoPublico?: boolean;
  /** @description Número do CNPJ. */
  CNPJ?: string;
  /** @description Número do CPF. */
  CPF?: string;
  /** @description Número de Identificação Fiscal fornecido por órgão de administração tributária no exterior. */
  NIF?: string;
  /**
   * @description Motivo para não informação do NIF:
   * * 0 - Não informado na nota de origem
   * * 1 - Dispensado do NIF
   * * 2 - Não exigência do NIF
   */
  cNaoNIF?: number;
  /** @description Número do Cadastro de Atividade Econômica da Pessoa Física (CAEPF). */
  CAEPF?: string;
  /** @description Número da inscrição municipal. */
  IM?: string;
  /**
   * @description Número da inscrição estadual.
   *
   * **Atenção**: Para emissões pelo Sistema Nacional NFS-e, esse campo é ignorado.
   */
  IE?: string;
  /** @description Nome/Nome Empresarial. */
  xNome: string;
  end?: Endereco;
  /**
   * @description Número do telefone do prestador:
   * Preencher com o Código DDD + número do telefone.
   * Nas operações com exterior é permitido informar o código do país + código da localidade + número do telefone).
   */
  fone?: string;
  /** @description * E-mail */
  email?: string;
};
/** @description Dados de endereço do prestador. */
export type Endereco = {
  endNac?: EnderNac;
  endExt?: EnderExt;
  /** @description Tipo e nome do logradouro da localização do imóvel. */
  xLgr?: string;
  /**
   * @description Tipo do Logradouro.
   *
   * **Atenção**: Para emissões pelo Sistema Nacional NFS-e, esse campo é ignorado.
   */
  tpLgr?: string;
  /** @description Número do imóvel. */
  nro?: string;
  /** @description Complemento do endereço. */
  xCpl?: string;
  /** @description Bairro. */
  xBairro?: string;
};
/** @description Grupo de informações específicas de endereço nacional. */
export type EnderNac = {
  /** @description Código do município, conforme Tabela do IBGE. */
  cMun?: string;
  /** @description Número do CEP. */
  CEP?: string;
};
/** @description Grupo de informações específicas de endereço no exterior. */
export type EnderExt = {
  /** @description Código do país (Tabela de Países ISO). */
  cPais: string;
  /** @description Código alfanumérico do Endereçamento Postal no exterior do prestador do serviço. */
  cEndPost: string;
  /** @description Nome da cidade no exterior do prestador do serviço. */
  xCidade: string;
  /** @description Estado, província ou região da cidade no exterior do prestador do serviço. */
  xEstProvReg: string;
};
/** @description Grupo de informações do DPS relativas ao Intermediário de Serviços. */
export type InfoIntermediario = {
  /** @description Número do CNPJ. */
  CNPJ?: string;
  /** @description Número do CPF. */
  CPF?: string;
  /** @description Número de Identificação Fiscal fornecido por órgão de administração tributária no exterior. */
  NIF?: string;
  /**
   * @description Motivo para não informação do NIF:
   * * 0 - Não informado na nota de origem
   * * 1 - Dispensado do NIF
   * * 2 - Não exigência do NIF
   */
  cNaoNIF?: number;
  /** @description Número do Cadastro de Atividade Econômica da Pessoa Física (CAEPF). */
  CAEPF?: string;
  /** @description Número da inscrição municipal. */
  IM?: string;
  /**
   * @description Número da inscrição estadual.
   *
   * **Atenção**: Para emissões pelo Sistema Nacional NFS-e, esse campo é ignorado.
   */
  IE?: string;
  /** @description Nome/Nome Empresarial. */
  xNome: string;
  end?: Endereco;
  /**
   * @description Número do telefone do prestador:
   * Preencher com o Código DDD + número do telefone.
   * Nas operações com exterior é permitido informar o código do país + código da localidade + número do telefone).
   */
  fone?: string;
  /** @description * E-mail */
  email?: string;
};
/** @description Grupo de informações do DPS relativas ao Serviço Prestado. */
export type Serv = {
  locPrest?: LocPrest;
  cServ: CServ;
  comExt?: ComExterior;
  lsadppu?: LocacaoSublocacao;
  obra?: InfoObra;
  atvEvento?: AtvEvento;
  explRod?: ExploracaoRodoviaria;
  infoCompl?: InfoCompl;
};
/** @description Grupo de informações relativas ao local da prestação do serviço. */
export type LocPrest = {
  /**
   * @description Código do município onde o serviço foi prestado (tabela do IBGE).
   *
   * Caso não seja informado, será considerado o município do Prestador do serviço.
   */
  cLocPrestacao?: string;
  /** @description Código do país onde o serviço foi prestado (Tabela de Países ISO). */
  cPaisPrestacao?: string;
};
/** @description Grupo de informações relativas ao código do serviço prestado. */
export type CServ = {
  /**
   * @description Código de tributação nacional do ISSQN.
   * **Ambiente Nacional**: O código deve conter exatamente 6 dígitos numéricos, sendo 2 para Item (LC 116/2003), 2 para Subitem (LC 116/2003) e 2 para Desdobro Nacional. Exemplo: `010701`.
   * **Envio direto para a Prefeitura**: Em muitos municípios, continua sendo exigido apenas o código conforme a LC 116/2003, totalizando 4 dígitos numéricos (2 para Item e 2 para Subitem). Exemplo: `0107`.
   */
  cTribNac: string;
  /** @description Código de tributação municipal do ISSQN. */
  cTribMun?: string;
  /** @description Código CNAE (Classificação Nacional de Atividades Econômicas). */
  CNAE?: string;
  /**
   * @description Descrição completa do serviço prestado.
   *
   * Os caracteres acentuados poderão ser alterados para caracteres sem acentuação.
   */
  xDescServ: string;
  /** @description Código NBS (Nomenclatura Brasileira de Serviços, Intangíveis e outras Operações que produzam Variações no Patrimônio) correspondente ao serviço prestado. */
  cNBS?: string;
  /**
   * @description Código de natureza da operação.
   *
   * **Atenção**: Para emissões pelo Sistema Nacional NFS-e, esse campo é ignorado.
   */
  cNatOp?: string;
  /**
   * @description Código de situação tributária.
   *
   * **Atenção**: Para emissões pelo Sistema Nacional NFS-e, esse campo é ignorado.
   */
  cSitTrib?: string;
};
/** @description Grupo de informações relativas à exportação/importação de serviço prestado. */
export type ComExterior = {
  /**
   * @description Modo de Prestação:
   * * 0 - Desconhecido (tipo não informado na nota de origem)
   * * 1 - Transfronteiriço
   * * 2 - Consumo no Brasil
   * * 3 - Presença Comercial no Exterior
   * * 4 - Movimento Temporário de Pessoas Físicas
   */
  mdPrestacao: number;
  /**
   * @description Vínculo entre as partes no negócio:
   * * 0 - Sem vínculo com o tomador/ Prestador
   * * 1 - Controlada
   * * 2 - Controladora
   * * 3 - Coligada
   * * 4 - Matriz
   * * 5 - Filial ou sucursal
   * * 6 - Outro vínculo
   */
  vincPrest: number;
  /** @description Identifica a moeda da transação comercial. */
  tpMoeda: string;
  /** @description Valor do serviço prestado expresso em moeda estrangeira especificada em tpmoeda. */
  vServMoeda: number;
  /**
   * @description Mecanismo de apoio/fomento ao Comércio Exterior utilizado pelo prestador do serviço:
   * * 00 - Desconhecido (tipo não informado na nota de origem)
   * * 01 - Nenhum
   * * 02 - ACC - Adiantamento sobre Contrato de Câmbio - Redução a Zero do IR e do IOF
   * * 03 - ACE - Adiantamento sobre Cambiais Entregues - Redução a Zero do IR e do IOF
   * * 04 - BNDES-Exim Pós-Embarque - Serviços
   * * 05 - BNDES-Exim Pré-Embarque - Serviços
   * * 06 - FGE - Fundo de Garantia à Exportação
   * * 07 - PROEX - EQUALIZAÇÃO
   * * 08 - PROEX - Financiamento
   */
  mecAFComexP: string;
  /**
   * @description Mecanismo de apoio/fomento ao Comércio Exterior utilizado pelo tomador do serviço:
   * * 00 - Desconhecido (tipo não informado na nota de origem)
   * * 01 - Nenhum
   * * 02 - Adm. Pública e Repr. Internacional
   * * 03 - Alugueis e Arrend. Mercantil de maquinas, equip., embarc. e aeronaves
   * * 04 - Arrendamento Mercantil de aeronave para empresa de transporte aéreo público
   * * 05 - Comissão a agentes externos na exportação
   * * 06 - Despesas de armazenagem, mov. e transporte de carga no exterior
   * * 07 - Eventos FIFA (subsidiária)
   * * 08 - Eventos FIFA
   * * 09 - Fretes, arrendamentos de embarcações ou aeronaves e outros
   * * 10 - Material Aeronáutico
   * * 11 - Promoção de Bens no Exterior
   * * 12 - Promoção de Dest. Turísticos Brasileiros
   * * 13 - Promoção do Brasil no Exterior
   * * 14 - Promoção Serviços no Exterior
   * * 15 - RECINE
   * * 16 - RECOPA
   * * 17 - Registro e Manutenção de marcas, patentes e cultivares
   * * 18 - REICOMP
   * * 19 - REIDI
   * * 20 - REPENEC
   * * 21 - REPES
   * * 22 - RETAERO
   * * 23 - RETID
   * * 24 - Royalties, Assistência Técnica, Científica e Assemelhados
   * * 25 - Serviços de avaliação da conformidade vinculados aos Acordos da OMC
   * * 26 - ZPE
   */
  mecAFComexT: string;
  /**
   * @description Operação está vinculada à Movimentação Temporária de Bens:
   * * 0 - Desconhecido (tipo não informado na nota de origem)
   * * 1 - Não
   * * 2 - Vinculada - Declaração de Importação
   * * 3 - Vinculada - Declaração de Exportação
   */
  movTempBens: number;
  /** @description Número da Declaração de Importação (DI/DSI/DA/DRI-E) averbado. */
  nDI?: string;
  /** @description Número do Registro de Exportação (RE) averbado. */
  nRE?: string;
  /**
   * @description Compartilhar as informações da NFS-e gerada a partir desta DPS com a Secretaria de Comércio Exterior:
   * * 0 - Não enviar para o MDIC
   * * 1 - Enviar para o MDIC
   */
  mdic: number;
};
/** @description Grupo de informações relativas a atividades de Locação, sublocação, arrendamento, direito de passagem ou permissão de uso, compartilhado ou não, de ferrovia, rodovia, postes, cabos, dutos e condutos de qualquer natureza. */
export type LocacaoSublocacao = {
  /** @description Categoria do serviço. */
  categ: number;
  /** @description Tipo de objetos da locação, sublocação, arrendamento, direito de passagem ou permissão de uso. */
  objeto: number;
  /** @description Extensão total da ferrovia, rodovia, cabos, dutos ou condutos. */
  extensao: string;
  /** @description Número total de postes. */
  nPostes: string;
};
/** @description Grupo de informações do DPS relativas à serviço de obra. */
export type InfoObra = {
  /**
   * @description Número de identificação da obra.
   * Cadastro Nacional de Obras (CNO) ou Cadastro Específico do INSS (CEI).
   */
  cObra?: string;
  /** @description Inscrição imobiliária fiscal (código fornecido pela Prefeitura Municipal para a identificação da obra ou para fins de recolhimento do IPTU). */
  inscImobFisc?: string;
  end?: EnderecoSimples;
};
/** @description Grupo de informações do endereço da obra do serviço prestado. */
export type EnderecoSimples = {
  /** @description Número do CEP. */
  CEP?: string;
  endExt?: EnderExtSimples;
  /** @description Tipo e nome do logradouro da localização do imóvel. */
  xLgr: string;
  /**
   * @description Tipo do Logradouro.
   *
   * **Atenção**: Para emissões pelo Sistema Nacional NFS-e, esse campo é ignorado.
   */
  tpLgr?: string;
  /** @description Número do imóvel. */
  nro: string;
  /** @description Complemento do endereço. */
  xCpl?: string;
  /** @description Bairro. */
  xBairro: string;
};
/** @description Grupo de informações específicas de endereço no exterior. */
export type EnderExtSimples = {
  /** @description Código alfanumérico do Endereçamento Postal no exterior do prestador do serviço. */
  cEndPost: string;
  /** @description Nome da cidade no exterior do prestador do serviço. */
  xCidade: string;
  /** @description Estado, província ou região da cidade no exterior do prestador do serviço. */
  xEstProvReg: string;
};
/** @description Grupo de informações do DPS relativas à Evento. */
export type AtvEvento = {
  /** @description Nome do evento Artístico, Cultural, Esportivo, etc. */
  xNome?: string;
  /**
   * @description `Deprecated`
   *
   * **Propriedade depreciada**.
   *
   * *Utilize `xNome`*.
   */
  desc?: string;
  /**
   * Format: date
   * @description Data de início da atividade de evento. Ano, Mês e Dia (AAAA-MM-DD).
   */
  dtIni: string;
  /**
   * Format: date
   * @description Data de fim da atividade de evento. Ano, Mês e Dia (AAAA-MM-DD).
   */
  dtFim: string;
  /** @description Identificação da Atividade de Evento (código identificador de evento determinado pela Administração Tributária Municipal). */
  idAtvEvt?: string;
  /**
   * @description `Deprecated`
   *
   * **Propriedade depreciada**.
   *
   * *Utilize `idAtvEvt`*.
   */
  id?: string;
  end?: EnderecoSimples;
};
/** @description Grupo de informações relativas a pedágio. */
export type ExploracaoRodoviaria = {
  /**
   * @description Categorias de veículos para cobrança:
   * * 00 - Categoria de veículos (tipo não informado na nota de origem)
   * * 01 - Automóvel, caminhonete e furgão
   * * 02 - Caminhão leve, ônibus, caminhão trator e furgão
   * * 03 - Automóvel e caminhonete com semireboque
   * * 04 - Caminhão, caminhão-trator, caminhão-trator com semi-reboque e ônibus
   * * 05 - Automóvel e caminhonete com reboque
   * * 06 - Caminhão com reboque
   * * 07 - Caminhão trator com semi-reboque
   * * 08 - Motocicletas, motonetas e bicicletas motorizadas
   * * 09 - Veículo especial
   * * 10 - Veículo Isento
   */
  categVeic: string;
  /** @description Número de eixos para fins de cobrança. */
  nEixos: string;
  /** @description Tipo de rodagem. */
  rodagem: number;
  /** @description Placa do veículo. */
  sentido: string;
  /** @description Placa do veículo. */
  placa: string;
  /** @description Código de acesso gerado automaticamente pelo sistema emissor da concessionária. */
  codAcessoPed: string;
  /** @description Código de contrato gerado automaticamente pelo sistema nacional no cadastro da concessionária. */
  codContrato: string;
};
/** @description Grupo de informações complementares disponível para todos os serviços prestados. */
export type InfoCompl = {
  /** @description Identificador de Documento de Responsabilidade Técnica: ART, RRT, DRT, Outros. */
  idDocTec?: string;
  /** @description Chave da nota, número identificador da nota, número do contrato ou outro identificador de documento emitido pelo prestador de serviços, que subsidia a emissão dessa nota pelo tomador do serviço ou intermediário (preenchimento obrigatório caso a nota esteja sendo emitida pelo Tomador ou intermediário do serviço). */
  docRef?: string;
  /** @description Informações complementares. */
  xInfComp?: string;
};
/** @description Grupo de informações relativas à valores do serviço prestado. */
export type InfoValores = {
  vServPrest: VServPrest;
  vDescCondIncond?: VDescCondIncond;
  vDedRed?: InfoDedRed;
  trib: InfoTributacao;
};
/** @description Grupo de informações relativas aos valores do serviço prestado. */
export type VServPrest = {
  /** @description Valor monetário recebido pelo intermediário do serviço (R$). */
  vReceb?: number;
  /** @description Valor dos serviços em R$. */
  vServ: number;
};
/** @description Grupo de informações relativas aos descontos condicionados e incondicionados. */
export type VDescCondIncond = {
  /** @description Valor monetário do desconto incondicionado (R$). */
  vDescIncond?: number;
  /** @description Valor monetário do desconto condicionado (R$). */
  vDescCond?: number;
};
/** @description Grupo de informações relativas ao valores para dedução/redução do valor da base de cálculo (valor do serviço). */
export type InfoDedRed = {
  /** @description Valor percentual padrão para dedução/redução do valor do serviço. */
  pDR?: number;
  /** @description Valor monetário padrão para dedução/redução do valor do serviço. */
  vDR?: number;
  documentos?: ListaDocDedRed;
};
/** @description Grupo de informações de documento utilizado para Dedução/Redução do valor do serviço. */
export type ListaDocDedRed = {
  docDedRed: DocDedRed[];
};
/** @description Grupo de informações de documento utilizado para Dedução/Redução do valor do serviço. */
export type DocDedRed = {
  /** @description Chave de Acesso da NFS-e (Padrão Nacional). */
  chNFSe?: string;
  /** @description Chave de Acesso da NF-e. */
  chNFe?: string;
  NFSeMun?: DocOutNFSe;
  NFNFS?: DocNFNFS;
  /** @description Número de documento fiscal. */
  nDocFisc?: string;
  /** @description Número de documento não fiscal. */
  nDoc?: string;
  /**
   * @description Identificação da Dedução/Redução:
   * * 1 - Alimentação e bebidas/frigobar
   * * 2 - Materiais
   * * 3 - Produção externa
   * * 4 - Reembolso de despesas
   * * 5 - Repasse consorciado
   * * 6 - Repasse plano de saúde
   * * 7 - Serviços
   * * 8 - Subempreitada de mão de obra
   * * 99 - Outras deduções
   */
  tpDedRed: number;
  /** @description Descrição da Dedução/Redução quando a opção é "99 - Outras Deduções". */
  xDescOutDed?: string;
  /**
   * Format: date
   * @description Data da emissão do documento dedutível. Ano, mês e dia (AAAA-MM-DD).
   */
  dtEmiDoc: string;
  /**
   * @description Valor monetário total dedutível/redutível no documento informado (R$).
   * Este é o valor total no documento informado que é passível de dedução/redução.
   */
  vDedutivelRedutivel: number;
  /**
   * @description Valor monetário utilizado para dedução/redução do valor do serviço da NFS-e que está sendo emitida (R$).
   * Deve ser menor ou igual ao valor deduzível/redutível (vDedutivelRedutivel).
   */
  vDeducaoReducao: number;
  fornec?: InfoFornecDocDedRed;
};
/** @description Grupo de informações de Outras NFS-e (Padrão anterior de NFS-e). */
export type DocOutNFSe = {
  /** @description Código Município emissor da nota eletrônica municipal (Tabela do IBGE). */
  cMunNFSeMun: string;
  /**
   * Format: int64
   * @description Número da nota eletrônica municipal.
   */
  nNFSeMun: number;
  /** @description Código de Verificação da nota eletrônica municipal. */
  cVerifNFSeMun: string;
};
/** @description Grupo de informações de NF ou NFS (Modelo não eletrônico). */
export type DocNFNFS = {
  /** @description Número da Nota Fiscal NF ou NFS. */
  nNFS: number;
  /**
   * Format: int64
   * @description Modelo da Nota Fiscal NF ou NFS.
   */
  modNFS: number;
  /** @description Série Nota Fiscal NF ou NFS. */
  serieNFS: string;
};
/** @description Grupo de informações do Fornecedor em Deduções de Serviços. */
export type InfoFornecDocDedRed = {
  /** @description Número do CNPJ. */
  CNPJ?: string;
  /** @description Número do CPF. */
  CPF?: string;
  /** @description Número de Identificação Fiscal fornecido por órgão de administração tributária no exterior. */
  NIF?: string;
  /**
   * @description Motivo para não informação do NIF:
   * * 0 - Não informado na nota de origem
   * * 1 - Dispensado do NIF
   * * 2 - Não exigência do NIF
   */
  cNaoNIF?: number;
  /** @description Número do Cadastro de Atividade Econômica da Pessoa Física (CAEPF). */
  CAEPF?: string;
  /** @description Número da inscrição municipal. */
  IM?: string;
  /**
   * @description Número da inscrição estadual.
   *
   * **Atenção**: Para emissões pelo Sistema Nacional NFS-e, esse campo é ignorado.
   */
  IE?: string;
  /** @description Nome/Nome Empresarial. */
  xNome: string;
  end?: Endereco;
  /**
   * @description Número do telefone do prestador:
   * Preencher com o Código DDD + número do telefone.
   * Nas operações com exterior é permitido informar o código do país + código da localidade + número do telefone).
   */
  fone?: string;
  /** @description * E-mail */
  email?: string;
};
/** @description Grupo de informações relacionados aos tributos relacionados ao serviço prestado. */
export type InfoTributacao = {
  tribMun: TribMunicipal;
  tribFed?: TribFederal;
  totTrib?: TribTotal;
};
/** @description Grupo de informações relacionados ao Imposto Sobre Serviços de Qualquer Natureza - ISSQN. */
export type TribMunicipal = {
  /**
   * @description Tributação do ISSQN sobre o serviço prestado:
   * * 1 - Operação tributável
   * * 2 - Imunidade
   * * 3 - Exportação de serviço
   * * 4 - Não Incidência
   */
  tribISSQN: number;
  /**
   * @description Código do município de incidência do ISSQN (tabela do IBGE).
   *
   * Caso o envio seja pelo Sistema Nacional NFS-e, essa propriedade é ignorada e o município de incidência do ISSQN é determinado automaticamente pela SEFIN nacional, conforme regras do aspecto espacial da lei complementar federal (LC 116/03) que são válidas para todos os municípios.
   */
  cLocIncid?: string;
  /** @description Código do país onde se verficou o resultado da prestação do serviço para o caso de Exportação de Serviço.(Tabela de Países ISO). */
  cPaisResult?: string;
  BM?: BeneficioMunicipal;
  exigSusp?: ExigSuspensa;
  /**
   * @description Identificação da Imunidade do ISSQN - somente para o caso de Imunidade:
   * * 0 - Imunidade (tipo não informado na nota de origem)
   * * 1 - Patrimônio, renda ou serviços, uns dos outros (CF88, Art 150, VI, a)
   * * 2 - Templos de qualquer culto (CF88, Art 150, VI, b)
   * * 3 - Patrimônio, renda ou serviços dos partidos políticos, inclusive suas fundações, das entidades sindicais dos trabalhadores, das instituições de educação e de assistência social, sem fins lucrativos, atendidos os requisitos da lei (CF88, Art 150, VI, c)
   * * 4 - Livros, jornais, periódicos e o papel destinado a sua impressão (CF88, Art 150, VI, d)
   */
  tpImunidade?: number;
  /**
   * @description Valor da Base de Cálculo do ISSQN (R$).
   *
   * Caso você não informe esse campo, vamos calculá-lo automaticamente.
   *
   * **Atenção**: Para emissões pelo Sistema Nacional NFS-e, esse campo é ignorado e o valor é determinado automaticamente pela SEFIN nacional.
   */
  vBC?: number;
  /**
   * @description Valor da alíquota (%%) do serviço prestado relativo ao município sujeito ativo (município de incidência) do ISSQN.
   *
   * **Observações**:
   * * Se o município de incidência pertence ao Sistema Nacional NFS-e a alíquota estará parametrizada e, portanto, será fornecida pelo sistema.
   * * Se o município de incidência não pertence ao Sistema Nacional NFS-e a alíquota não estará parametrizada e, por isso, deverá ser fornecida pelo emitente.
   */
  pAliq?: number;
  /**
   * @description Valor do ISSQN (R$).
   *
   * Caso você não informe esse campo, vamos calculá-lo automaticamente.
   *
   * **Atenção**: Para emissões pelo Sistema Nacional NFS-e, esse campo é ignorado e o valor é determinado automaticamente pela SEFIN nacional.
   */
  vISSQN?: number;
  /**
   * @description Tipo de retencao do ISSQN:
   * * 1 - Não Retido
   * * 2 - Retido pelo Tomador
   * * 3 - Retido pelo Intermediario
   * @default 1
   */
  tpRetISSQN?: number;
  /**
   * @description Valor Líquido (R$).
   *
   * Caso você não informe esse campo, vamos calculá-lo automaticamente.
   *
   * **Atenção**: Para emissões pelo Sistema Nacional NFS-e, esse campo é ignorado e o valor é determinado automaticamente pela SEFIN nacional.
   */
  vLiq?: number;
};
/** @description Benefício Municipal */
export type BeneficioMunicipal = {
  /**
   * @description Tipo do Benefício Municipal:
   * * 1 - Alíquota Diferenciada
   * * 2 - Redução da BC
   * * 3 - Isenção
   */
  tpBM: number;
  /** @description Identificador do benefício municipal parametrizado pelo município. */
  nBM: string;
  /** @description Valor monetário informado pelo emitente para redução da base de cálculo (BC) do ISSQN devido a um Benefício Municipal (BM). */
  vRedBCBM?: number;
  /** @description Valor percentual informado pelo emitente para redução da base de cálculo (BC) do ISSQN devido a um Benefício Municipal (BM). */
  pRedBCBM?: number;
};
/** @description Informações para a suspensão da Exigibilidade do ISSQN. */
export type ExigSuspensa = {
  /**
   * @description Opção para Exigibilidade Suspensa:
   * * 1 - Exigibilidade Suspensa por Decisão Judicial
   * * 2 - Exigibilidade Suspensa por Processo Administrativo
   */
  tpSusp: number;
  /** @description Número do processo judicial ou administrativo de suspensão da exigibilidade. */
  nProcesso: string;
};
/** @description Grupo de informações de outros tributos relacionados ao serviço prestado. */
export type TribFederal = {
  piscofins?: TribOutrosPisCofins;
  /** @description Valor monetário do CP(R$). */
  vRetCP?: number;
  /** @description Valor monetário do IRRF (R$). */
  vRetIRRF?: number;
  /** @description Valor monetário do CSLL (R$). */
  vRetCSLL?: number;
};
/** @description Grupo de informações dos tributos PIS/COFINS. */
export type TribOutrosPisCofins = {
  /**
   * @description Código de Situação Tributária do PIS/COFINS (CST):
   * * 00 - Nenhum
   * * 01 - Operação Tributável com Alíquota Básica
   * * 02 - Operação Tributável com Alíquota Diferenciada
   * * 03 - Operação Tributável com Alíquota por Unidade de Medida de Produto
   * * 04 - Operação Tributável monofásica - Revenda a Alíquota Zero
   * * 05 - Operação Tributável por Substituição Tributária
   * * 06 - Operação Tributável a Alíquota Zero
   * * 07 - Operação Tributável da Contribuição
   * * 08 - Operação sem Incidência da Contribuição
   * * 09 - Operação com Suspensão da Contribuição
   */
  CST: string;
  /** @description Valor da Base de Cálculo do PIS/COFINS (R$). */
  vBCPisCofins?: number;
  /** @description Valor da Alíquota do PIS (%%). */
  pAliqPis?: number;
  /** @description Valor da Alíquota da COFINS (%%). */
  pAliqCofins?: number;
  /** @description Valor monetário do PIS (R$). */
  vPis?: number;
  /** @description Valor monetário do COFINS (R$). */
  vCofins?: number;
  /**
   * @description Tipo de retencao do Pis/Cofins:
   * * 1 - Retido
   * * 2 - Não Retido
   */
  tpRetPisCofins?: number;
};
/** @description Grupo de informações para totais aproximados dos tributos relacionados ao serviço prestado. */
export type TribTotal = {
  vTotTrib?: TribTotalMonet;
  pTotTrib?: TribTotalPercent;
  /**
   * @description Indicador de informação de valor total de tributos. Possui valor fixo igual a zero (indTotTrib=0).
   * Não informar nenhum valor estimado para os Tributos (Decreto 8.264/2014).
   * * 0 - Não
   */
  indTotTrib?: number;
  /** @description Valor percentual aproximado do total dos tributos da alíquota do Simples Nacional (%%). */
  pTotTribSN?: number;
};
/** @description Valor monetário total aproximado dos tributos, em conformidade com o artigo 1o da Lei no 12.741/2012. */
export type TribTotalMonet = {
  /** @description Valor monetário total aproximado dos tributos federais (R$). */
  vTotTribFed: number;
  /** @description Valor monetário total aproximado dos tributos estaduais (R$). */
  vTotTribEst: number;
  /** @description Valor monetário total aproximado dos tributos municipais (R$). */
  vTotTribMun: number;
};
/** @description Valor percentual total aproximado dos tributos, em conformidade com o artigo 1o da Lei no 12.741/2012. */
export type TribTotalPercent = {
  /** @description Valor percentual total aproximado dos tributos federais (%%). */
  pTotTribFed: number;
  /** @description Valor percentual total aproximado dos tributos estaduais (%%). */
  pTotTribEst: number;
  /** @description Valor percentual total aproximado dos tributos municipais (%%). */
  pTotTribMun: number;
};
export type RpsLoteListagem = {
  "@count"?: number;
  data?: RpsLote[];
};
export type NfsePedidoEmissao = {
  /**
   * @description Identificação do Ambiente.
   * @enum {string}
   */
  ambiente: "homologacao" | "producao";
  rps: RpsPedidoEmissao;
};
export type NfseListagem = {
  "@count"?: number;
  data?: Nfse[];
};
export type NfsePedidoCancelamento = {
  /**
   * @description Código de cancelamento, exigido por algumas prefeituras.
   * Para saber quais valores são aceitos, consulte o manual da prefeitura.
   */
  codigo?: string;
  /** @description Motivo de cancelamento, exigido por algumas prefeituras. */
  motivo?: string;
};
export type NfsePedidoSincronizacao = {
  /**
   * @description Identificador utilizado na consulta da situação atual da NFS-e.
   *
   * O valor desse campo é opcional para as prefeituras que suportem consultas por número e série do RPS.
   * Para as demais, esse campo torna-se obrigatório e o seu valor pode ser a chave de acesso, número da NFS-e, chave de verificação, protocolo ou outro identificador da nota a depender da prefeitura.
   */
  identificador?: string;
};
export type NfseSincronizacao = {
  /**
   * @description Situação atual da sincronização.
   * @enum {string}
   */
  status?: "pendente" | "sincronizado" | "erro";
  mensagens?: NfseMensagemRetorno[];
};
export type DfeDebug = {
  /** @description Identificador do documento fiscal. */
  id?: string;
  /** @description Tipo do documento: nfe, nfce, mdfe, nfse, etc. */
  tipo?: string;
  /**
   * Format: date-time
   * @description Data e hora da criação do documento, representada no formato UTC (Tempo Universal Coordenado).
   * O valor é retornado no padrão ISO 8601, incluindo o deslocamento de fuso horário 'Z' no final.
   *
   * Exemplo: "2025-04-15T14:16:47.775Z"
   */
  created_at?: string;
  /** @description Lista de requisições feitas ao autorizador durante o processamento. */
  requisicoes?: DfeRequisicaoDebug[];
};
export type DfeRequisicaoDebug = {
  /**
   * Format: date-time
   * @description Data e hora da criação da requisição, representada no formato UTC (Tempo Universal Coordenado).
   * O valor é retornado no padrão ISO 8601, incluindo o deslocamento de fuso horário 'Z' no final.
   *
   * Exemplo: "2025-04-15T14:16:47.775Z"
   */
  created_at?: string;
  /**
   * @description Tipo da operação realizada na requisição para o autorizador.
   * Pode assumir um dos seguintes valores:
   * - 'envio_lote'      : envio do lote de documentos fiscais para autorização;
   * - 'consulta_lote'   : consulta do processamento do lote;
   * - 'cons_sit_dfe'    : consulta de situação individual de um DFe.
   *
   * Esse campo indica a natureza da interação com a SEFAZ ou prefeitura,
   * e é útil para fins de rastreamento e diagnóstico do fluxo.
   */
  tipo?: string;
  /** @description Identificador do lote vinculado à requisição. */
  lote_id?: string;
  /** @description Código de status retornado pela SEFAZ/prefeitura. */
  codigo_status?: number;
  /** @description Motivo associado ao status retornado. */
  motivo_status?: string;
  http_request?: HttpRequestDebug;
};
/** @description Detalhes técnicos da requisição HTTP realizada ao autorizador. */
export type HttpRequestDebug = {
  /**
   * @description Identificador interno da requisição HTTP.
   *
   * Esse identificador pode ser utilizado no endpoint
   * <a href="#tag/Debug/operation/DebugHttpRequestContent">Corpo da Requisição HTTP</a> ou <a href="#tag/Debug/operation/DebugHttpResponseContent">Corpo da Resposta HTTP</a>
   * para obter o conteúdo enviado ou recebido na comunicação com o autorizador.
   */
  id?: string;
  /** @description Método HTTP utilizado (ex: 'POST'). */
  method?: string;
  /** @description URI do serviço externo (SEFAZ, prefeitura, etc.). */
  uri?: string;
  /** @description Cabeçalhos HTTP enviados na requisição, no formato bruto. */
  headers?: string;
  /** @description Código de status HTTP retornado (ex: 200, 403). */
  response_status_code?: number;
  /** @description Motivo ou descrição do status HTTP retornado. */
  response_status_reason?: string;
  /** @description Cabeçalhos retornados na resposta, no formato bruto. */
  response_headers?: string;
  /** @description Tempo de resposta do serviço externo, em milissegundos. */
  response_time?: number;
};
export type DcePedidoEmissao = {
  infDCe: DceSefazInfDCe;
  infSolicDCe: DceSefazInfSolicDCe;
  /**
   * @description Identificação do Ambiente.
   * @enum {string}
   */
  ambiente: "homologacao" | "producao";
  /** @description Seu identificador único para este documento. Opcional, ajuda a evitar o envio duplicado de um mesmo documento. */
  referencia?: string;
};
/** @description Informações da DCe. */
export type DceSefazInfDCe = {
  /** @description Versão do leiaute. */
  versao: string;
  /**
   * @description Identificador da tag a ser assinada.
   * Informar a chave de acesso precedida do literal "DCe".
   *
   * *Geramos automaticamente quando nenhum valor é informado.*
   */
  Id?: string;
  ide: DceSefazIde;
  emit: DceSefazEmit;
  Fisco?: DceSefazFisco;
  Marketplace?: DceSefazMarketplace;
  Transportadora?: DceSefazTransportadora;
  ECT?: DceSefazECT;
  dest: DceSefazDest;
  autXML?: DceSefazAutXML[];
  det: DceSefazDet[];
  total: DceSefazTotal;
  transp: DceSefazTransp;
  infAdic?: DceSefazInfAdic;
  infDec?: DceSefazInfDec;
};
/** @description Identificação da DCe. */
export type DceSefazIde = {
  /**
   * @description Código da UF de emissão e autorização da DCe.
   * Código da UF de emissão e autorização do Documento Fiscal. Utilizar a
   * Tabela do IBGE de código de unidades da federação.
   */
  cUF: number;
  /**
   * @description Código numérico que compõe a Chave de Acesso.
   * Código aleatório gerado pelo emitente, com o objetivo de evitar acessos indevidos ao documento.
   *
   * *Geramos automaticamente quando nenhum valor é informado.*
   */
  cDC?: string;
  /**
   * @description Modelo da DCe.
   * Utilizar o código 99 para identificação da DCe.
   */
  mod?: number;
  /**
   * @description Série do documento fiscal.
   * Informar a série do documento fiscal (informar zero para série única).
   */
  serie: number;
  /**
   * @description Número do documento fiscal.
   * Número que identifica o documento fiscal 1 a 999999999.
   */
  nDC: number;
  /**
   * Format: date-time
   * @description Data e hora de emissão do documento fiscal.
   * Formato UTC (AAAA-MM-DDThh:mm:ssTZD, onde TZD = +hh:mm ou -hh:mm).
   */
  dhEmi: string;
  /**
   * @description Forma de emissão do Documento Fiscal.
   * * 1 - Normal (não contingência)
   * * 9 - Contingência off-line da DCe
   */
  tpEmis: number;
  /**
   * @description Tipo do Emitente da DCe.
   * * 0 - App Fisco
   * * 1 - Marketplace
   * * 2 - Emissor próprio
   * * 3 - Transportadora
   * * 4 - ECT
   */
  tpEmit: number;
  /**
   * @description Identificação do número do Site do Autorizador de recepção da DCe.
   * Se o autorizador da DCe possuir apenas um site deverá ser informado com Zero (0), em caso de Autorizador trabalhar com múltiplos sites indicar o número do site para qual foi endereçada a DCE (1 a 9).
   * Observação: o ambiente autorizador que trabalhar com mais de um Site deverá divulgar para cada endereço de site qual número correspondente de nSiteAutoriz o contribuinte pode usar.
   */
  nSiteAutoriz: number;
  /**
   * @description Digito verificador da chave de acesso.
   * Informar o dígito de controle da chave de acesso documento fiscal, que deve ser calculado com a aplicação do algoritmo módulo 11 (base 2,9) da chave de acesso.
   *
   * *Geramos automaticamente quando nenhum valor é informado.*
   */
  cDV?: number;
  /**
   * @description Tipo do Ambiente:
   * * 1 - Produção
   * * 2 - Homologação
   */
  tpAmb?: number;
  /**
   * @description Versão do processo de emissão.
   * Informar a versão do aplicativo emissor de DCe.
   */
  verProc: string;
};
/** @description Identificação da DCe. */
export type DceSefazEmit = {
  /** @description Número do CNPJ do emitente. */
  CNPJ?: string;
  /**
   * @description Número do CPF do emitente.
   * Informar os zeros não significativos.
   */
  CPF?: string;
  /**
   * @description Razão social ou Nome do emitente.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  xNome?: string;
  enderEmit?: DceSefazEndeEmi;
};
/**
 * @description Endereço do emitente.
 *
 * *Caso não seja informado, será utilizado o do cadastro da empresa.*
 */
export type DceSefazEndeEmi = {
  /**
   * @description Logradouro.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  xLgr?: string;
  /**
   * @description Número.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  nro?: string;
  /**
   * @description Complemento.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  xCpl?: string;
  /**
   * @description Bairro.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  xBairro?: string;
  /**
   * @description Código do município (utilizar a tabela do IBGE).
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  cMun?: string;
  /**
   * @description Nome do município.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  xMun?: string;
  /**
   * @description Sigla da UF.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  UF?: string;
  /**
   * @description CEP.
   * Informar zeros não significativos.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  CEP?: string;
  /**
   * @description Código do País.
   * * 1058=Brasil
   */
  cPais: string;
  /** @description Nome do País exemplo: Brasil ou BRASIL. */
  xPais: string;
  /**
   * @description Telefone.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  fone?: string;
};
/** @description Identificação do Fisco (uso exclusivo fisco). */
export type DceSefazFisco = {
  /** @description Número do CNPJ do órgão. */
  CNPJ: string;
  /** @description Nome do órgão. */
  xOrgao: string;
  /** @description Sigla da UF. */
  UF: string;
};
/** @description Identificação do Marketplace (uso exclusivo Marketplace). */
export type DceSefazMarketplace = {
  /** @description Número do CNPJ do Marketplace. */
  CNPJ: string;
  /** @description Razão Social ou Nome do Marketplace. */
  xNome: string;
  /** @description Endereço ou site do Marketplace. */
  Site: string;
};
/** @description Identificação da Transportadora (uso exclusivo Transportadora). */
export type DceSefazTransportadora = {
  /** @description Número do CNPJ da Transportadora. */
  CNPJ: string;
  /** @description Razão Social ou Nome da Transportadora. */
  xNome: string;
};
/** @description Identificação dos correios. */
export type DceSefazECT = {
  /** @description Número do CNPJ dos correios. */
  CNPJ: string;
  /** @description Razão Social ou Nome dos correios. */
  xNome: string;
};
/** @description Identificação do destinatário da DCe. */
export type DceSefazDest = {
  /**
   * @description Número do CNPJ.
   * Em caso de empresa não estabelecida no Brasil, será informado o CNPJ com zeros.
   * Informar os zeros não significativos.
   */
  CNPJ?: string;
  /**
   * @description Número do CPF.
   * Informar os zeros não significativos.
   */
  CPF?: string;
  /**
   * @description Identificação do destinatário outros.
   * Identificação do destinatário não obrigado a inscrição do CPF tais como estrangeiro, indígena e quilombola
   * Em caso de não contar CPF do assinante, informar o RG.
   */
  idOutros?: string;
  /** @description Razão social ou Nome do destinatário. */
  xNome: string;
  enderDest: DceSefazEndeDest;
};
/** @description Endereço do destinatário / assinante. */
export type DceSefazEndeDest = {
  /** @description Logradouro. */
  xLgr: string;
  /** @description Número. */
  nro: string;
  /** @description Complemento. */
  xCpl?: string;
  /** @description Bairro. */
  xBairro: string;
  /** @description Código do município (utilizar a tabela do IBGE). */
  cMun: string;
  /** @description Nome do município. */
  xMun: string;
  /** @description Sigla da UF. */
  UF: string;
  /**
   * @description CEP.
   * Informar zeros não significativos.
   */
  CEP: string;
  /**
   * @description Código do país.
   * Utilizar a tabela do BACEN.
   */
  cPais: string;
  /** @description Nome do país. */
  xPais: string;
  /** @description Telefone. */
  fone?: string;
  /** @description Endereço de E-mail. */
  email?: string;
};
/**
 * @description Autorizados para acessar o XML da DCe.
 * Informar CNPJ ou CPF. Preencher os zeros não significativos.
 */
export type DceSefazAutXML = {
  /**
   * @description CNPJ do autorizado.
   * Informar zeros não significativos.
   */
  CNPJ?: string;
  /**
   * @description CPF do autorizado.
   * Informar zeros não significativos.
   */
  CPF?: string;
};
/** @description Detalhamento de itens da DCe. */
export type DceSefazDet = {
  /** @description Número do item da DCe. */
  nItem: number;
  prod: DceSefazProd;
  /** @description Informações adicionais do item. */
  infAdProd?: string;
};
/** @description Dados do Produto ou Serviço. */
export type DceSefazProd = {
  /** @description Descrição do produto, bem ou mercadoria. */
  xProd: string;
  /**
   * @description Código NCM.
   * Capítulo do Código NCM com 2 dígitos ou NCM completo.
   */
  NCM: string;
  /** @description Quantidade. */
  qCom: number;
  /** @description Valor unitário do item. */
  vUnCom: number;
  /** @description Valor total brutp do item. */
  vProd: number;
};
/** @description Dados dos totais da DCe. */
export type DceSefazTotal = {
  /** @description Valor Total da DCe. */
  vDC: number;
};
/** @description Dados dos transportes da DCe. */
export type DceSefazTransp = {
  /**
   * @description Modalidade do transporte.
   * * 0 - Transporte pelos correios
   * * 1 - Transporte por contra própria
   * * 2 - Transporte por empresa transportadora
   */
  modTrans: number;
  /** @description Número do CNPJ da Transportadora. */
  CNPJTransp: string;
};
/** @description Informações Adicionais. */
export type DceSefazInfAdic = {
  /**
   * @description Informações adicionais de interesse do Fisco.
   * Norma referenciada, informações complementares, etc.
   */
  infAdFisco?: string;
  /** @description Informações complementares de interesse do Emitente. */
  infCpl?: string;
  /** @description Informações Adicionais do MarketPlace. */
  infAdMarketplace?: string;
  /** @description Informações Adicionais do Correio. */
  infAdECT?: string;
  obsEmit?: DceSefazObsEmit[];
  obsFisco?: DceSefazObsFisco[];
  obsMarketplace?: DceSefazObsMarketplace[];
  obsECT?: DceSefazObsECT[];
};
/**
 * @description Grupo Campo de uso livre do Emitente.
 * Informar o nome do campo no atributo xCampo e o conteúdo do campo no xTexto.
 */
export type DceSefazObsEmit = {
  xCampo?: string;
  /** @description Conteúdo do Campo. */
  xTexto: string;
};
/**
 * @description Grupo Campo de uso livre do Fisco.
 * Informar o nome do campo no atributo xCampo e o conteúdo do campo no xTexto.
 */
export type DceSefazObsFisco = {
  xCampo?: string;
  /** @description Conteúdo do Campo. */
  xTexto: string;
};
/**
 * @description Grupo Campo de uso livre do MarketPlace.
 * Informar o nome do campo no atributo xCampo e o conteúdo do campo no xTexto.
 */
export type DceSefazObsMarketplace = {
  xCampo?: string;
  /** @description Conteúdo do Campo. */
  xTexto: string;
};
/**
 * @description Grupo Campo de uso livre dos Correios.
 * Informar o nome do campo no atributo xCampo e o conteúdo do campo no xTexto.
 */
export type DceSefazObsECT = {
  xCampo?: string;
  /** @description Conteúdo do Campo. */
  xTexto: string;
};
/** @description Grupo para Declaraçao do usuário emitente. */
export type DceSefazInfDec = {
  /**
   * @description Observação 1 ao usuário emitente.
   * Deverá conter o texto fixo “É contribuinte de ICMS qualquer pessoa física ou jurídica, que realize, com habitualidade ou em volume que caracterize intuito comercial, operações de circulação de mercadoria ou prestações de serviços de transportes interestadual e intermunicipal e de comunicação, ainda que as operações e prestações de iniciem no exterior (Lei Complementar nº 87/96, Art. 4º)”.
   *
   * *Geramos automaticamente quando nenhum valor é informado.*
   */
  xObs1?: string;
  /**
   * @description Observação 2 ao usuário emitente.
   * Deverá conter o texto fixo “Constitui crime contra a ordem tributária suprimir ou reduzir tributo, ou contribuição social e qualquer acessório: quando negar ou deixar de fornecer, quando obrigatório, nota fiscal ou documento equivalente, relativa a venda de mercadoria ou prestação de serviço, efetivamente realizada ou fornece-la em desacordo com a legislação. Sob pena de reclusão de 2 (dois) e 5 (cinco) anos, e multa (Lei 8.137/90, Art 1ª, V)”.
   *
   * *Geramos automaticamente quando nenhum valor é informado.*
   */
  xObs2?: string;
};
/** @description Informações de solicitação da DCe pelo Fisco. */
export type DceSefazInfSolicDCe = {
  /** @description Solicitação do pedido de emissão da DCe. */
  xSolic: string;
};
export type DcePedidoCancelamento = {
  /** @description Justificativa para o cancelamento. Preencheremos automaticamente, caso esteja em branco. */
  justificativa?: string;
};
export type EmailListagem = {
  "@count"?: number;
  data?: EmailResumo[];
};
export type EmailResumo = {
  /**
   * @description ID único gerado pela Nuvem Fiscal para este email.
   *
   * Utilize-o no endpoint de <a href="#tag/Email/operation/ConsultarEmail">consulta de email</a>
   * para obter informações detalhadas sobre o envio do email e
   * rastrear todos os eventos relacionados, como envio, entrega, falhas e outros
   * eventos relevantes.
   */
  id: string;
  /** @enum {string} */
  status?:
    | "pending"
    | "sending"
    | "sent"
    | "delivered"
    | "delivery_delayed"
    | "bounced"
    | "complained"
    | "rejected"
    | "cancelled"
    | "failed";
  /** Format: date-time */
  sent_at?: string;
  recipients?: string[];
  subject?: string;
};
export type Email = {
  /**
   * @description ID único gerado pela Nuvem Fiscal para este email.
   *
   * Utilize-o no endpoint de <a href="#tag/Email/operation/ConsultarEmail">consulta de email</a>
   * para obter informações detalhadas sobre o envio do email e
   * rastrear todos os eventos relacionados, como envio, entrega, falhas e outros
   * eventos relevantes.
   */
  id: string;
  /** @enum {string} */
  status?:
    | "pending"
    | "sending"
    | "sent"
    | "delivered"
    | "delivery_delayed"
    | "bounced"
    | "complained"
    | "rejected"
    | "cancelled"
    | "failed";
  /** Format: date-time */
  sent_at?: string;
  to?: string[];
  cc?: string[];
  reply_to?: string;
  subject?: string;
  attachments?: EmailAttachment[];
  events?: EmailEvent[];
};
export type EmailAttachment = {
  content_type?: string;
  filename?: string;
};
export type EmailEvent = {
  id?: string;
  event_type?: string;
  /** Format: date-time */
  timestamp?: string;
  message?: string;
};
export type DistribuicaoNfeListagem = {
  "@count"?: number;
  data?: DistribuicaoNfe[];
};
export type DistribuicaoNfe = {
  /** @description ID único gerado pela Nuvem Fiscal para o pedido de distribuição. */
  id: string;
  /**
   * Format: date-time
   * @description Data/hora em que o pedido foi criado na Nuvem Fiscal. Representado no formato <a href="https://en.wikipedia.org/wiki/ISO_8601" target="blank">`ISO 8601`</a>.
   */
  created_at?: string;
  /**
   * @description Indica o status da distribuição.
   * @enum {string}
   */
  status: "processando" | "concluido" | "erro";
  /**
   * @description Identificação do Ambiente.
   * @enum {string}
   */
  ambiente: "homologacao" | "producao";
  /** @description Sigla da UF do autor. */
  uf_autor?: string;
  /** @enum {string} */
  tipo_consulta: "dist-nsu" | "cons-nsu" | "cons-chave";
  /**
   * Format: int64
   * @description Distribuição de conjunto de DF-e a partir do NSU informado.
   *
   * *Obrigatório quando `tipo_consulta` for `distNSU`.*
   */
  dist_nsu?: number;
  /**
   * Format: int64
   * @description Consulta DF-e vinculado ao NSU informado.
   *
   * *Obrigatório quando `tipo_consulta` for `consNSU`.*
   */
  cons_nsu?: number;
  /**
   * @description Consulta de NF-e por chave de acesso informada.
   *
   * *Obrigatório quando `tipo_consulta` for `consChNFe`.*
   */
  cons_chave?: string;
  /** @description Código do status de processamento da requisição. */
  codigo_status: number;
  /** @description Descrição do status de processamento da requisição. */
  motivo_status?: string;
  /**
   * Format: date-time
   * @description Data e Hora de processamento da requisição.
   */
  data_hora_resposta: string;
  /**
   * Format: int64
   * @description Último NSU pesquisado no Ambiente Nacional. Se for o caso, o solicitante pode continuar a consulta a partir deste NSU para obter novos resultados.
   */
  ultimo_nsu: number;
  /**
   * Format: int64
   * @description Maior NSU existente no Ambiente Nacional para o CNPJ/CPF informado.
   */
  max_nsu: number;
  /** @description Conjunto de informações resumidas e documentos fiscais eletrônicos de interesse da pessoa ou empresa. */
  documentos?: DistribuicaoNfeDocumento[];
};
export type DistribuicaoNfeDocumento = {
  /** @description ID único gerado pela Nuvem Fiscal para identificar o documento. */
  id: string;
  /**
   * Format: date-time
   * @description Data/hora em que o documento foi criado na Nuvem Fiscal. Representado no formato <a href="https://en.wikipedia.org/wiki/ISO_8601" target="blank">`ISO 8601`</a>.
   */
  created_at?: string;
  /**
   * Format: int64
   * @description NSU do documento fiscal.
   */
  nsu?: number;
  /** @description Identificação do Schema XML que será utilizado para validar o XML existente no conteúdo da tag docZip. Vai identificar o tipo do documento e sua versão. Exemplos: resNFe_v1.00.xsd, procNFe_v3.10.xsd, resEvento_1.00.xsd, procEventoNFe_v1.00.xsd. */
  schema: string;
  /**
   * @description Tipo do documento de interesse da pessoa ou empresa.
   * @enum {string}
   */
  tipo_documento?: "nota" | "evento";
  /** @description Chave de Acesso da NF-e. */
  chave_acesso?: string;
  /** @description Indica se o documento distribuído está em sua forma resumida. */
  resumo?: boolean;
  /** @description Tipo do evento. */
  tipo_evento?: string;
  /** @description Número sequencial do evento para o mesmo tipo de evento. */
  numero_sequencial?: number;
  /**
   * Format: date-time
   * @description Data e hora do evento.
   */
  data_evento?: string;
  /**
   * Format: date-time
   * @description Data e hora de autorização do evento.
   */
  data_recebimento?: string;
  /** @description Número do protocolo de autorização. */
  numero_protocolo?: string;
  /** @description Tipo da NF-e (0 - entrada; 1 - saída). */
  tipo_nfe?: number;
  /** @description Valor total da NF-e. */
  valor_nfe?: number;
  /** @description Digest Value da NF-e processada. Utilizado para conferir a integridade da NF-e original. */
  digest_value?: string;
  /** @description CPF/CNPJ do emitente. */
  emitente_cpf_cnpj?: string;
  /** @description Nome ou Razão Social do emitente. */
  emitente_nome_razao_social?: string;
  /** @description Inscrição Estadual do emitente. */
  emitente_inscricao_estadual?: string;
};
export type DistribuicaoNfePedido = {
  /**
   * @description CPF ou CNPJ da empresa.
   *
   * *Utilize o valor sem máscara*.
   */
  cpf_cnpj: string;
  /**
   * @description Identificação do Ambiente.
   * @enum {string}
   */
  ambiente: "homologacao" | "producao";
  /** @description Sigla da UF do autor. */
  uf_autor?: string;
  /**
   * @description Tipo de consulta.
   *
   * Valores possíveis:
   * * `dist-nsu` - Consulta pelo último NSU recebido.
   * * `cons-nsu` - Consulta por um NSU específico.
   * * `cons-chave` - Consulta pela chave de acesso da NF-e.
   * @enum {string}
   */
  tipo_consulta: "dist-nsu" | "cons-nsu" | "cons-chave";
  /**
   * Format: int64
   * @description Distribuição de conjunto de DF-e a partir do NSU informado.
   *
   * *Obrigatório quando "tipo_consulta" for "dist-nsu".*
   */
  dist_nsu?: number;
  /**
   * Format: int64
   * @description Consulta DF-e vinculado ao NSU informado.
   *
   * *Obrigatório quando "tipo_consulta" for "cons-nsu".*
   */
  cons_nsu?: number;
  /**
   * @description Consulta de NF-e por chave de acesso informada.
   *
   * *Obrigatório quando "tipo_consulta" for "cons-chave".*
   */
  cons_chave?: string;
  /**
   * @description Deve ser utilizado em situações em que o cliente
   * deseja ignorar o intervalo mínimo de 1 hora entre pedidos de distribuição
   * de NF-e. Quando habilitado, o cliente reconhece os riscos associados,
   * incluindo o bloqueio do CNPJ no Ambiente Nacional da SEFAZ, caso seja
   * caracterizado consumo indevido.
   *
   * Valores:
   * * `false`: Respeita a regra de intervalo mínimo de 1 hora entre consultas
   *   quando não há mais documentos disponíveis.
   *
   * * `true`: Ignora o tempo de espera e força a requisição.
   * @default false
   */
  ignorar_tempo_espera?: boolean;
};
export type DistribuicaoNfeDocumentoListagem = {
  "@count"?: number;
  data?: DistribuicaoNfeDocumento[];
};
export type DistribuicaoNfeNotaListagem = {
  "@count"?: number;
  data?: DistribuicaoNfeNota[];
};
export type DistribuicaoNfeNota = {
  /** @description Chave de Acesso da NF-e. */
  chave_acesso?: string;
  /** @description Número do protocolo de autorização. */
  numero_protocolo?: string;
  /** @description Tipo da NF-e (0 - entrada; 1 - saída). */
  tipo_nfe?: number;
  /**
   * Format: date-time
   * @description Data e hora da emissão do documento fiscal.
   */
  data_emissao?: string;
  /** @description Valor total da NF-e. */
  valor_nfe?: number;
  /** @description Digest Value da NF-e processada. Utilizado para conferir a integridade da NF-e original. */
  digest_value?: string;
  /** @description CPF/CNPJ do emitente. */
  emitente_cpf_cnpj?: string;
  /** @description Nome ou Razão Social do emitente. */
  emitente_nome_razao_social?: string;
  /** @description Inscrição Estadual do emitente. */
  emitente_inscricao_estadual?: string;
};
export type ManifestacaoNfeListagem = {
  "@count"?: number;
  data?: DistribuicaoNfeEvento[];
};
export type DistribuicaoNfeEvento = {
  /** @description ID único gerado pela Nuvem Fiscal para este evento. */
  id?: string;
  /**
   * Format: date-time
   * @description Data/hora em que o evento foi criado na Nuvem Fiscal. Representado no formato <a href="https://en.wikipedia.org/wiki/ISO_8601" target="blank">`ISO 8601`</a>.
   */
  created_at?: string;
  /**
   * @description Identificação do ambiente.
   * @enum {string}
   */
  ambiente?: "homologacao" | "producao";
  /**
   * @description Status do Evento.
   * @enum {string}
   */
  status?: "pendente" | "registrado" | "rejeitado" | "erro";
  /** @description CPF/CNPJ do autor do evento. */
  cpf_cnpj_autor?: string;
  /** @description Chave de Acesso do documento vinculado ao evento. */
  chave_acesso?: string;
  /** @description Tipo do evento vinculado. */
  tipo_evento?: string;
  /**
   * Format: date-time
   * @description Data e hora do Evento.
   */
  data_evento?: string;
  /** @description Sequencial do evento para o mesmo tipo de evento. */
  numero_sequencial?: number;
  /** @description Justificativa para o desconhecimento ou não-realização da operação. */
  justificativa?: string;
  /**
   * Format: date-time
   * @description Data e hora do registro do evento pela SEFAZ.
   */
  data_registro?: string;
  /** @description Código do status de registro do evento. */
  codigo_status?: number;
  /** @description Descrição literal do status do registro do evento. */
  motivo_status?: string;
  /** @description Número do Protocolo de registro do evento. */
  numero_protocolo?: string;
};
export type DistribuicaoNfePedidoManifestacao = {
  /**
   * @description CPF ou CNPJ do autor do evento.
   *
   * *Utilize o valor sem máscara*.
   */
  cpf_cnpj: string;
  /**
   * @description Identificação do Ambiente.
   * @enum {string}
   */
  ambiente: "homologacao" | "producao";
  /** @description Chave de Acesso da NF-e. */
  chave_acesso: string;
  /**
   * @description Tipo do evento de manifestação do destinatário.
   *
   * Valores disponíveis:
   * * `210200` - Confirmação da operação;
   * * `210210` - Ciência da operação;
   * * `210220` - Desconhecimento da operação;
   * * `210240` - Operação não realizada.
   */
  tipo_evento: string;
  /**
   * @description Justificativa para o desconhecimento ou não-realização da operação.
   *
   * **Nota**: Campo obrigatório para o evento `210240` (operação não realizada).
   */
  justificativa?: string;
};
export type NfcomPedidoEmissao = {
  infNFCom: NfcomSefazInfNFCom;
  /**
   * @description Identificação do Ambiente.
   * @enum {string}
   */
  ambiente: "homologacao" | "producao";
  /** @description Seu identificador único para este documento. Opcional, ajuda a evitar o envio duplicado de um mesmo documento. */
  referencia?: string;
};
/** @description Informações da NFCom. */
export type NfcomSefazInfNFCom = {
  /** @description Versão do leiaute. */
  versao: string;
  /**
   * @description Identificador da tag a ser assinada.
   * Informar a chave de acesso da NFCom e precedida do literal "NFCom".
   *
   * *Geramos automaticamente quando nenhum valor é informado.*
   */
  Id?: string;
  ide: NfcomSefazIde;
  emit: NfcomSefazEmit;
  dest: NfcomSefazDest;
  assinante: NfcomSefazAssinante;
  gSub?: NfcomSefazGSub;
  gCofat?: NfcomSefazGCofat;
  det: NfcomSefazDet[];
  total: NfcomSefazTotal;
  gFidelidade?: NfcomSefazGFidelidade;
  gFat?: NfcomSefazGFat;
  gFatCentral?: NfcomSefazGFatCentral;
  autXML?: NfcomSefazAutXML[];
  infAdic?: NfcomSefazInfAdic;
  gRespTec?: NfcomSefazRespTec;
};
/** @description Identificação da NFCom. */
export type NfcomSefazIde = {
  /**
   * @description Código da UF de emissão e autorização da NFCom.
   * Código da UF de emissão e autorização do Documento Fiscal. Utilizar a
   * Tabela do IBGE de código de unidades da federação.
   */
  cUF: number;
  /**
   * @description Tipo do Ambiente:
   * * 1 - Produção
   * * 2 - Homologação
   */
  tpAmb?: number;
  /**
   * @description Modelo da NFCom.
   * Utilizar o código 62 para identificação da NFCom.
   */
  mod?: number;
  /**
   * @description Série do documento fiscal.
   * Informar a série do documento fiscal (informar zero para série única).
   */
  serie: number;
  /**
   * @description Número do documento fiscal.
   * Número que identifica o documento fiscal 1 a 999999999.
   */
  nNF: number;
  /**
   * @description Código numérico que compõe a Chave de Acesso.
   * Código aleatório gerado pelo emitente, com o objetivo de evitar acessos indevidos ao documento.
   *
   * *Geramos automaticamente quando nenhum valor é informado.*
   */
  cNF?: string;
  /**
   * @description Digito verificador da chave de acesso.
   * Informar o dígito  de controle da chave de acesso documento fiscal, que deve ser calculado com a aplicação do algoritmo módulo 11 (base 2,9) da chave de acesso.
   *
   * *Geramos automaticamente quando nenhum valor é informado.*
   */
  cDV?: number;
  /**
   * Format: date-time
   * @description Data e hora de emissão do documento fiscal.
   * Formato AAAA-MM-DDTHH:MM:DD TZD.
   */
  dhEmi: string;
  /**
   * @description Forma de emissão do Documento Fiscal.
   * * 1 - Normal
   * * 2 - Contingência
   */
  tpEmis: number;
  /**
   * @description Identificação do número do Site do Autorizador de recepção da NFCom.
   * Se o autorizador da NFCom possuir apenas um site deverá ser informado com Zero (0), em caso de Autorizador trabalhar com múltiplos sites indicar o número do site para qual foi endereçada a NFCOM (1 a 9).
   * Observação: o ambiente autorizador que trabalhar com mais de um Site deverá divulgar para cada endereço de site qual número correspondente de nSiteAutoriz o contribuinte pode usar.
   */
  nSiteAutoriz: number;
  /** @description Código do município de ocorrência do fato gerador. */
  cMunFG: string;
  /**
   * @description Finalidade de emissão da NFCom.
   * * 0 - NFCom Normal
   * * 3 - NFCom de Substituição
   * * 4 - NFCom de Ajuste
   */
  finNFCom: number;
  /**
   * @description Tipo de Faturamento da NFCom.
   * * 0 - Faturamento Normal
   * * 1 - Faturamento centralizado
   * * 2 - Cofaturamento
   */
  tpFat: number;
  /**
   * @description Versão do processo de emissão.
   * Informar a versão do aplicativo emissor de NFCom.
   */
  verProc: string;
  /**
   * @description Indicador de serviço pré-pago.
   * * 1 - Serviço pré-pago (informar a tag somente se a nota for referente a um serviço exclusivamente pré-pago)
   */
  indPrePago?: number;
  /**
   * @description Indicador de Sessão de Meios de Rede.
   * Uma vez informado (valor = 1), essa tag dispensa geração do grupo Fatura.
   * Apenas para notas dos tipos Normal e Substituição com tipo de faturamento normal.
   */
  indCessaoMeiosRede?: number;
  /**
   * @description Indicador de nota de entrada.
   * * 1 - Informar quando for nota de ajuste e possuir itens com CFOP de entrada
   */
  indNotaEntrada?: number;
  /**
   * Format: date-time
   * @description Data e Hora da entrada em contingência.
   * Informar a data e hora no formato AAAA-MM-DDTHH:MM:SS.
   */
  dhCont?: string;
  /** @description Justificativa da entrada em contingência. */
  xJust?: string;
  gCompraGov?: NfcomSefazCompraGovReduzido;
};
/** @description Grupo de Compras Governamentais. */
export type NfcomSefazCompraGovReduzido = {
  /**
   * @description Para administração pública direta e suas autarquias e fundações:
   * * 1 - União
   * * 2 - Estados
   * * 3 - Distrito Federal
   * * 4 - Municípios
   */
  tpEnteGov: number;
  /** @description Percentual de redução de aliquota em compra goverrnamental. */
  pRedutor: number;
};
/** @description Identificação do Emitente do documento fiscal. */
export type NfcomSefazEmit = {
  /**
   * @description CNPJ do emitente.
   * Informar zeros não significativos.
   */
  CNPJ: string;
  /**
   * @description Inscrição Estadual do emitente.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  IE?: string;
  /** @description Inscrição Estadual Virtual do emitente na UF de Destino da partilha (IE Virtual). */
  IEUFDest?: string;
  /**
   * @description Código do Regime Tributário. Informar:
   * * 1 - Simples Nacional;
   * * 2 - Simples Nacional, excesso sublimite de receita bruta;
   * * 3 - Regime Normal.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  CRT?: number;
  /**
   * @description Razão social ou Nome do emitente.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  xNome?: string;
  /**
   * @description Nome fantasia do emitente.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  xFant?: string;
  enderEmit?: NfcomSefazEndeEmi;
};
/**
 * @description Endereço do emitente.
 *
 * *Caso não seja informado, será utilizado o do cadastro da empresa.*
 */
export type NfcomSefazEndeEmi = {
  /**
   * @description Logradouro.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  xLgr?: string;
  /**
   * @description Número.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  nro?: string;
  /**
   * @description Complemento.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  xCpl?: string;
  /**
   * @description Bairro.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  xBairro?: string;
  /**
   * @description Código do município (utilizar a tabela do IBGE).
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  cMun?: string;
  /**
   * @description Nome do município.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  xMun?: string;
  /**
   * @description CEP.
   * Informar zeros não significativos.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  CEP?: string;
  /**
   * @description Sigla da UF.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  UF?: string;
  /**
   * @description Telefone.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  fone?: string;
  /** @description Endereço de E-mail. */
  email?: string;
};
/** @description Identificação do destinatário / assinante. */
export type NfcomSefazDest = {
  /** @description Razão social ou Nome do destinatário. */
  xNome: string;
  /**
   * @description Número do CNPJ.
   * Informar os zeros não significativos.
   */
  CNPJ?: string;
  /**
   * @description Número do CPF.
   * Informar os zeros não significativos.
   */
  CPF?: string;
  /**
   * @description Identificação do destinatário outros.
   * Identificação do destinatário não obrigado a inscrição do CPF tais como estrangeiro, indígena e quilombola
   * Em caso de não contar CPF do assinante, informar o RG.
   */
  idOutros?: string;
  /**
   * @description Indicador da IE do Destinatário.
   * * 1 - Contribuinte ICMS (informar a IE do destinatário)
   * * 2 - Contribuinte isento de Inscrição no cadastro de Contribuintes do ICMS
   * * 9 - Não Contribuinte, que pode ou não possuir Inscrição Estadual no Cadastro de Contribuintes do ICMS
   * Nota: No caso de Contribuinte Isento de Inscrição (indIEDest=2) informar a tag IE do destinatário com o literal ISENTO.
   */
  indIEDest: number;
  /** @description Inscrição Estadual do destinatário. */
  IE?: string;
  /** @description Inscrição Municipal. */
  IM?: string;
  enderDest: NfcomSefazEndeDest;
};
/** @description Endereço do destinatário / assinante. */
export type NfcomSefazEndeDest = {
  /** @description Logradouro. */
  xLgr: string;
  /** @description Número. */
  nro: string;
  /** @description Complemento. */
  xCpl?: string;
  /** @description Bairro. */
  xBairro: string;
  /** @description Código do município (utilizar a tabela do IBGE). */
  cMun: string;
  /** @description Nome do município. */
  xMun: string;
  /**
   * @description CEP.
   * Informar zeros não significativos.
   */
  CEP: string;
  /** @description Sigla da UF. */
  UF: string;
  /**
   * @description Código do país.
   * Utilizar a tabela do BACEN.
   */
  cPais?: string;
  /** @description Nome do país. */
  xPais?: string;
  /** @description Telefone. */
  fone?: string;
  /** @description Endereço de E-mail. */
  email?: string;
};
/** @description Dados do assinante. */
export type NfcomSefazAssinante = {
  /** @description Código único de Identificação do assinante. */
  iCodAssinante: string;
  /**
   * @description Tipo de assinante.
   * * 1 - Comercial
   * * 2 - Industrial
   * * 3 - Residencial/Pessoa Física
   * * 4 - Produtor Rural
   * * 5 - Órgão da administração pública estadual direta e suas fundações e autarquias, quando mantidas pelo poder público estadual e regidas por normas de direito público, nos termos do Convênio ICMS 107/95
   * * 6 - Prestador de serviço de telecomunicação responsável pelo recolhimento do imposto incidente sobre a cessão dos meios de rede do prestador do serviço ao usuário final, nos termos do Convênio ICMS 17/13
   * * 7 - Missões Diplomáticas, Repartições Consulares e Organismos Internacionais, nos termos do Convênio ICMS 158/94
   * * 8 - Igrejas e Templos de qualquer natureza
   * * 99 - Outros não especificados anteriormente
   */
  tpAssinante: number;
  /**
   * @description Tipo de serviço utilizado.
   * * 1 - Telefonia
   * * 2 - Comunicação de dados
   * * 3 - TV por Assinatura
   * * 4 - Provimento de acesso à Internet
   * * 5 - Multimídia
   * * 6 - Outros
   * * 7 - Varios
   */
  tpServUtil: number;
  /** @description Número do Contrato do assinante. */
  nContrato?: string;
  /**
   * Format: date
   * @description Data de início do contrato.
   * Formato AAAA-MM-DD.
   */
  dContratoIni?: string;
  /**
   * Format: date
   * @description Data de término do contrato.
   * Formato AAAA-MM-DD.
   */
  dContratoFim?: string;
  /**
   * @description Número do Terminal Principal do serviço contratado.
   * Em se tratando de plano de prestação de serviço telefônico corporativo, familiar ou similares, informar o número do terminal telefônico principal do plano.
   */
  NroTermPrinc?: string;
  /**
   * @description Código da UF de habilitação do terminal.
   * Utilizar a
   * Tabela do IBGE de código de unidades da federação.
   */
  cUFPrinc?: number;
  /** @description Número dos Terminais adicionais do serviço contratado. */
  NroTermAdic?: string;
  /** @description Código da UF de habilitação do terminal. */
  cUFAdic?: number;
};
/** @description Grupo de informações da substituição. */
export type NfcomSefazGSub = {
  /** @description Chave de acesso da NFCom original. */
  chNFCom?: string;
  gNF?: NfcomSefazGNF;
  /**
   * @description Motivo da substituição.
   * * 01 - Erro de Preço
   * * 02 - Erro Cadastral
   * * 03 - Decisão Judicial
   * * 04 - Erro de Tributação
   * * 05 - Descontinuidade do Serviço
   */
  motSub: string;
};
/** @description Informação da NF modelo 21/22 referenciada. */
export type NfcomSefazGNF = {
  /**
   * @description CNPJ do Emitente.
   * Informar o CNPJ do emitente do Documento Fiscal.
   */
  CNPJ: string;
  /**
   * @description Modelo do documento.
   * 21 ou 22.
   */
  mod: number;
  /** @description Serie do documento fiscal. */
  serie: string;
  /** @description Número do documento fiscal. */
  nNF: number;
  /** @description Ano e mês da emissão da NF (AAAAMM). */
  CompetEmis: string;
  /**
   * @description Hash do registro no arquivo do convênio 115.
   * Campo poderá ser exigido a critério da UF - campo 36 do arquivo MESTRE DE DOCUMENTO FISCAL (Anexo Único, item 5 do Conv. 115/03).
   */
  hash115?: string;
};
/** @description Grupo de Informações do Cofaturamento. */
export type NfcomSefazGCofat = {
  /** @description Chave de acesso da NFCom emitida pela Operadora Local. */
  chNFComLocal?: string;
  gNF?: NfcomSefazGCofat_GNF;
};
/** @description Informação da NF modelo 21/22 referenciada. */
export type NfcomSefazGCofat_GNF = {
  /**
   * @description CNPJ do Emitente.
   * Informar o CNPJ do emitente do Documento Fiscal.
   */
  CNPJ: string;
  /**
   * @description Modelo do documento.
   * 21 ou 22.
   */
  mod: number;
  /** @description Serie do documento fiscal. */
  serie: string;
  /** @description Número do documento fiscal. */
  nNF: number;
  /** @description Ano e mês da emissão da NF (AAAAMM). */
  CompetEmis: string;
  /**
   * @description Hash do registro no arquivo do convênio 115.
   * Campo poderá ser exigido a critério da UF - campo 36 do arquivo MESTRE DE DOCUMENTO FISCAL (Anexo Único, item 5 do Conv. 115/03).
   */
  hash115?: string;
};
/** @description Detalhamento de Produtos e Serviços. */
export type NfcomSefazDet = {
  /** @description Número do item da NFCom. */
  nItem: number;
  /**
   * @description Chave de Acesso da NFCom anterior.
   * Informar chave de acesso de referencia anterior
   * TAG OPCIONAL, DEVE SER INFORMADA APENAS NOS CASOS PREVISTOS DE NOTA ANTERIOR REFERENCIADA.
   */
  chNFComAnt?: string;
  /**
   * @description Número do item da NFCom anterior.
   * Informar nro do item da chave de acesso de referencia anterior
   * TAG OPCIONAL, DEVE SER INFORMADA APENAS NOS CASOS PREVISTOS DE NOTA ANTERIOR REFERENCIADA.
   */
  nItemAnt?: string;
  /**
   * @description Indicador de Nota anterior em papel no faturamento centralizado.
   * Informa que a NFCom Anterior de Faturamento centralizado não é eletrônica.
   */
  indNFComAntPapelFatCentral?: number;
  prod: NfcomSefazProd;
  imposto: NfcomSefazImposto;
  gProcRef?: NfcomSefazGProcRef;
  gRessarc?: NfcomSefazGRessarc;
  /** @description Informações adicionais do produto (norma referenciada, informações complementares, etc). */
  infAdProd?: string;
};
/** @description Dados do Produto ou Serviço. */
export type NfcomSefazProd = {
  /** @description Código do produto ou serviço. */
  cProd: string;
  /** @description Descrição do produto ou serviço. */
  xProd: string;
  /**
   * @description Código de classificação.
   * Tabela de Classificação de Item da NFCom (validar por RV).
   */
  cClass: string;
  /**
   * @description CFOP.
   * Utilizar Tabela de CFOP.
   */
  CFOP?: string;
  /**
   * @description CNPJ da operadora LD.
   * Informar o CNPJ da operadora LD que irá lançar o item de cofaturamento em nota do tipo faturamento 2.
   */
  CNPJLD?: string;
  /**
   * @description Unidade Básica de Medida.
   * * 1 - Minuto
   * * 2 - MB
   * * 3 - GB
   * * 4 - UN
   */
  uMed: number;
  /**
   * @description Quantidade Faturada.
   * Informar a quantidade de comercialização do produto .
   */
  qFaturada: number;
  /** @description Valor unitário do item. */
  vItem: number;
  /** @description Valor do Desconto. */
  vDesc?: number;
  /** @description Outras despesas acessórias. */
  vOutro?: number;
  /** @description Valor total do item. */
  vProd: number;
  /**
   * Format: date
   * @description Data de expiração de crédito.
   * Formato AAAA-MM-DD.
   */
  dExpiracao?: string;
  /**
   * @description Indicador de devolução do valor do item.
   * * 1 - Devolução do valor do item
   */
  indDevolucao?: number;
};
/** @description Tributos incidentes no Produto ou Serviço. */
export type NfcomSefazImposto = {
  ICMS00?: NfcomSefazICMS00;
  ICMS20?: NfcomSefazICMS20;
  ICMS40?: NfcomSefazICMS40;
  ICMS51?: NfcomSefazICMS51;
  ICMS90?: NfcomSefazICMS90;
  ICMSSN?: NfcomSefazICMSSN;
  ICMSUFDest?: NfcomSefazICMSUFDest[];
  /**
   * @description Sem Situação Tributária para o ICMS.
   * Informar para itens que não tenham nenhuma relação com o ICMS.
   * Quando informado o item NÃO PODE ter CFOP informado
   * Se informado esse grupo o schema não permite informar nenhum dos grupos de ICMSXX.
   */
  indSemCST?: number;
  PIS?: NfcomSefazPIS;
  COFINS?: NfcomSefazCOFINS;
  FUST?: NfcomSefazFUST;
  FUNTTEL?: NfcomSefazFUNTTEL;
  retTrib?: NfcomSefazRetTrib;
  IBSCBS?: NfcomSefazTribNFCom;
};
/**
 * @description Prestação sujeito à tributação normal do ICMS.
 * Tributada integralmente.
 */
export type NfcomSefazICMS00 = {
  /**
   * @description classificação Tributária do Serviço.
   * * 00 - tributação normal ICMS
   */
  CST: string;
  /** @description Valor da BC do ICMS. */
  vBC: number;
  /** @description Alíquota do ICMS. */
  pICMS: number;
  /** @description Valor do ICMS. */
  vICMS: number;
  /** @description Percentual de ICMS relativo ao Fundo de Combate à Pobreza (FCP). */
  pFCP?: number;
  /** @description Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP). */
  vFCP?: number;
};
/** @description Prestação sujeito à tributação com redução de BC do ICMS. */
export type NfcomSefazICMS20 = {
  /**
   * @description Classificação Tributária do serviço.
   * * 20 - tributação com BC reduzida do ICMS
   */
  CST: string;
  /** @description Percentual de redução da BC. */
  pRedBC: number;
  /** @description Valor da BC do ICMS. */
  vBC: number;
  /** @description Alíquota do ICMS. */
  pICMS: number;
  /** @description Valor do ICMS. */
  vICMS: number;
  /** @description Valor do ICMS de desoneração. */
  vICMSDeson?: number;
  /**
   * @description Código de Benefício Fiscal na UF aplicado ao item.
   * Código de Benefício Fiscal utilizado pela UF, aplicado ao
   * item.
   */
  cBenef?: string;
  /** @description Percentual de ICMS relativo ao Fundo de Combate à Pobreza (FCP). */
  pFCP?: number;
  /** @description Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP). */
  vFCP?: number;
};
/** @description Tributação Isenta, Não tributada. */
export type NfcomSefazICMS40 = {
  /**
   * @description Classificação Tributária do serviço.
   * * 40 - Isenta
   * * 41 - Não tributada
   */
  CST: string;
  /** @description Valor do ICMS de desoneração. */
  vICMSDeson?: number;
  /**
   * @description Código de Benefício Fiscal na UF aplicado ao item.
   * Código de Benefício Fiscal utilizado pela UF, aplicado ao
   * item.
   */
  cBenef?: string;
};
/**
 * @description Tributação com Diferimento.
 * A exigência do preenchimento das informações do ICMS diferido fica a critério de cada UF.
 */
export type NfcomSefazICMS51 = {
  /**
   * @description Classificação Tributária do serviço.
   * Tributação pelo ICMS 51 - Diferimento.
   */
  CST: string;
  /** @description Valor do ICMS de desoneração. */
  vICMSDeson?: number;
  /**
   * @description Código de Benefício Fiscal na UF aplicado ao item.
   * Código de Benefício Fiscal utilizado pela UF, aplicado ao
   * item.
   */
  cBenef?: string;
};
/** @description ICMS Outros. */
export type NfcomSefazICMS90 = {
  /**
   * @description Classificação Tributária do Serviço.
   * * 90 - ICMS outros
   */
  CST: string;
  /** @description Valor da BC do ICMS. */
  vBC?: number;
  /** @description Alíquota do ICMS. */
  pICMS?: number;
  /** @description Valor do ICMS. */
  vICMS?: number;
  /** @description Valor do ICMS de desoneração. */
  vICMSDeson?: number;
  /**
   * @description Código de Benefício Fiscal na UF aplicado ao item.
   * Código de Benefício Fiscal utilizado pela UF, aplicado ao
   * item.
   */
  cBenef?: string;
  /** @description Percentual de ICMS relativo ao Fundo de Combate à Pobreza (FCP). */
  pFCP?: number;
  /** @description Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP). */
  vFCP?: number;
};
/** @description Simples Nacional. */
export type NfcomSefazICMSSN = {
  /**
   * @description Classificação Tributária do Serviço.
   * * 90 - Outros SN
   */
  CST: string;
  /** @description Indica se o contribuinte é Simples Nacional			1=Sim. */
  indSN: number;
};
/** @description Informações do ICMS de partilha com a UF destinatária. */
export type NfcomSefazICMSUFDest = {
  cUFDest?: number;
  /** @description Valor da BC do ICMS na UF de destino. */
  vBCUFDest: number;
  /**
   * @description Percentual do ICMS relativo ao Fundo de Combate à pobreza (FCP) na UF de destino.
   * Alíquota adotada nas operações internas na UF do destinatário.
   */
  pFCPUFDest: number;
  /**
   * @description Alíquota interna da UF de destino.
   * Alíquota adotada nas operações internas na UF do destinatário.
   */
  pICMSUFDest: number;
  /** @description Valor do ICMS relativo ao Fundo de Combate á Pobreza (FCP) da UF de destino. */
  vFCPUFDest: number;
  /** @description Valor do ICMS de partilha para a UF de destino. */
  vICMSUFDest: number;
  /** @description Valor do ICMS de partilha para a UF de emissão. */
  vICMSUFEmi: number;
  /**
   * @description Código de Benefício Fiscal na UF destino aplicado ao item.
   * Código de Benefício Fiscal utilizado pela UF, aplicado ao
   * item.
   */
  cBenefUFDest?: string;
};
/** @description Dados do PIS. */
export type NfcomSefazPIS = {
  /**
   * @description classificação Tributária do PIS.
   * * 01 - Tributável com alíquota básica
   * * 02 - Tributável com alíquota diferenciada
   * * 06 - Tributável com alíquota zero
   * * 07 - Operação isenta de contribuição
   * * 08 - Operação sem incidência da contribuição
   * * 09 - Operação com suspensão da contribuição
   * * 49 - Outras operações de saída
   */
  CST: string;
  /** @description Valor da BC do PIS. */
  vBC: number;
  /** @description Alíquota do PIS (em percentual). */
  pPIS: number;
  /** @description Valor do PIS. */
  vPIS: number;
};
/** @description Dados do COFINS. */
export type NfcomSefazCOFINS = {
  /**
   * @description classificação Tributária do COFINS.
   * * 01 - Tributável com alíquota básica
   * * 02 - Tributável com alíquota diferenciada
   * * 06 - Tributável com alíquota zero
   * * 07 - Operação isenta de contribuição
   * * 08 - Operação sem incidência da contribuição
   * * 09 - Operação com suspensão da contribuição
   * * 49 - Outras operações de saída
   */
  CST: string;
  /** @description Valor da BC do COFINS. */
  vBC: number;
  /** @description Alíquota do COFINS (em percentual). */
  pCOFINS: number;
  /** @description Valor do COFINS. */
  vCOFINS: number;
};
/** @description Dados do FUST. */
export type NfcomSefazFUST = {
  /** @description Valor da BC do FUST. */
  vBC: number;
  /** @description Alíquota do FUST (em percentual). */
  pFUST: number;
  /** @description Valor do FUST. */
  vFUST: number;
};
/** @description Dados do FUNTTEL. */
export type NfcomSefazFUNTTEL = {
  /** @description Valor da BC do FUNTTEL. */
  vBC: number;
  /** @description Alíquota do FUNTTEL (em percentual). */
  pFUNTTEL: number;
  /** @description Valor do FUNTEL. */
  vFUNTTEL: number;
};
/** @description Grupo de informações de retenção de tributos federais. */
export type NfcomSefazRetTrib = {
  /** @description Valor do PIS retido. */
  vRetPIS: number;
  /** @description Valor do COFNS retido. */
  vRetCofins: number;
  /** @description Valor da CSLL retida. */
  vRetCSLL: number;
  /** @description Base de cálculo do IRRF. */
  vBCIRRF: number;
  /** @description Valor do IRRF retido. */
  vIRRF: number;
};
/** @description Grupo de informações do IBS e CBS. */
export type NfcomSefazTribNFCom = {
  /** @description Código Situação Tributária do IBS/CBS. */
  CST: string;
  cClassTrib?: string;
  gIBSCBS?: NfcomSefazCIBS;
};
export type NfcomSefazCIBS = {
  /** @description Valor do BC. */
  vBC: number;
  gIBSUF: NfcomSefazGIBSUF;
  gIBSMun: NfcomSefazGIBSMun;
  /** @description Valor do IBS (soma de vIBSUF e vIBSMun). */
  vIBS: number;
  gCBS: NfcomSefazGCBS;
  gTribRegular?: NfcomSefazTribRegular;
  gIBSCredPres?: NfcomSefazCredPres;
  gCBSCredPres?: NfcomSefazCredPres;
  gTribCompraGov?: NfcomSefazTribCompraGov;
};
/** @description Grupo de informações do IBS na UF. */
export type NfcomSefazGIBSUF = {
  /** @description Aliquota do IBS de competência das UF. */
  pIBSUF: number;
  gDif?: NfcomSefazDif;
  gDevTrib?: NfcomSefazDevTrib;
  gRed?: NfcomSefazRed;
  /** @description Valor do IBS de competência das UF. */
  vIBSUF: number;
};
/** @description Grupo de campos do Diferimento. */
export type NfcomSefazDif = {
  /** @description Percentual do diferimento. */
  pDif: number;
  /** @description Valor do diferimento. */
  vDif: number;
};
/** @description Grupo de Informações da devolução de tributos. */
export type NfcomSefazDevTrib = {
  /**
   * @description Valor do tributo devolvido. No fornecimento de energia elétrica, água, esgoto e
   * gás natural e em outras hipóteses definidas no regulamento.
   */
  vDevTrib: number;
};
/** @description Grupo de campos da redução de aliquota. */
export type NfcomSefazRed = {
  /** @description Percentual de redução de aliquota do cClassTrib. */
  pRedAliq: number;
  /** @description Aliquota Efetiva que será aplicada a Base de Calculo. */
  pAliqEfet: number;
};
/** @description Grupo de Informações do IBS no Município. */
export type NfcomSefazGIBSMun = {
  /** @description Aliquota do IBS Municipal. */
  pIBSMun: number;
  gDif?: NfcomSefazDif;
  gDevTrib?: NfcomSefazDevTrib;
  gRed?: NfcomSefazRed;
  /** @description Valor do IBS Municipal. */
  vIBSMun: number;
};
/** @description Grupo de Tributação da CBS. */
export type NfcomSefazGCBS = {
  /** @description Aliquota da CBS. */
  pCBS: number;
  gDif?: NfcomSefazDif;
  gDevTrib?: NfcomSefazDevTrib;
  gRed?: NfcomSefazRed;
  /** @description Valor da CBS. */
  vCBS: number;
};
/** @description Grupo de informações da Tributação Regular. Informar como seria a tributação caso não cumprida a condição resolutória/suspensiva. Exemplo 1: Art. 442, §4. Operações com ZFM e ALC. Exemplo 2: Operações com suspensão do tributo. */
export type NfcomSefazTribRegular = {
  /**
   * @description Código da Situação Tributária do IBS e CBS.
   * Informar qual seria o CST caso não cumprida a condição resolutória/suspensiva.
   */
  CSTReg: string;
  /** @description Informar qual seria o cClassTrib caso não cumprida a condição resolutória/suspensiva. */
  cClassTribReg: string;
  /**
   * @description Alíquota do IBS da UF.
   * Informar como seria a Alíquota caso não cumprida a condição resolutória/suspensiva.
   */
  pAliqEfetRegIBSUF: number;
  /**
   * @description Valor do IBS da UF.
   * Informar como seria o valor do Tributo caso não cumprida a condição resolutória/suspensiva.
   */
  vTribRegIBSUF: number;
  /**
   * @description Alíquota do IBS do Município.
   * Informar como seria a Alíquota caso não cumprida a condição resolutória/suspensiva.
   */
  pAliqEfetRegIBSMun: number;
  /**
   * @description Valor do IBS do Município.
   * Informar como seria o valor do Tributo caso não cumprida a condição resolutória/suspensiva.
   */
  vTribRegIBSMun: number;
  /**
   * @description Alíquota da CBS.
   * Informar como seria a Alíquota caso não cumprida a condição resolutória/suspensiva.
   */
  pAliqEfetRegCBS: number;
  /**
   * @description Valor da CBS.
   * Informar como seria o valor do Tributo caso não cumprida a condição resolutória/suspensiva.
   */
  vTribRegCBS: number;
};
/** @description Grupo de Informações do Crédito Presumido referente ao IBS, quando aproveitado pelo emitente do documento. */
export type NfcomSefazCredPres = {
  /** @description Usar tabela Cred Presumido, para o emitente da nota. */
  cCredPres: string;
  /** @description Percentual do Crédito Presumido. */
  pCredPres: number;
  /** @description Valor do Crédito Presumido. */
  vCredPres?: number;
  /** @description Valor do Crédito Presumido Condição Suspensiva, preencher apenas para cCredPres que possui indicação de Condição Suspensiva. */
  vCredPresCondSus?: number;
};
/** @description Grupo de informações da composição do valor do IBS e da CBS em compras governamental. */
export type NfcomSefazTribCompraGov = {
  pAliqIBSUF?: number;
  /** @description Valor que seria devido a UF, sem aplicação do Art. 473. da LC 214/2025. */
  vTribIBSUF: number;
  pAliqIBSMun?: number;
  /** @description Valor que seria devido ao município, sem aplicação do Art. 473. da LC 214/2025. */
  vTribIBSMun: number;
  pAliqCBS?: number;
  /** @description Valor que seria devido a CBS, sem aplicação do Art. 473. da LC 214/2025. */
  vTribCBS: number;
};
/**
 * @description Grupo Processo referenciado.
 * Este grupo somente deverá ser preenchido quando houver processo judicial ou administrativo que altere valores.
 */
export type NfcomSefazGProcRef = {
  /**
   * @description Valor unitário do item.
   * Informar o valor sem a influência da decisão judicial/administrativa.
   */
  vItem: number;
  /**
   * @description Quantidade Faturada.
   * Informar a quantidade de comercialização do produto .
   */
  qFaturada: number;
  /** @description Valor total do item. */
  vProd: number;
  /** @description Valor do Desconto. */
  vDesc?: number;
  /** @description Outras despesas acessórias. */
  vOutro?: number;
  /**
   * @description Indicador de devolução do valor do item.
   * * 1 - Devolução do valor do item
   */
  indDevolucao?: number;
  /** @description Valor da BC do ICMS. */
  vBC?: number;
  /** @description Alíquota do ICMS. */
  pICMS?: number;
  /** @description Valor do ICMS. */
  vICMS?: number;
  /** @description Valor do PIS. */
  vPIS?: number;
  /** @description Valor do COFINS. */
  vCOFINS?: number;
  /** @description Valor do Fundo de Combate à Pobreza (FCP). */
  vFCP?: number;
  gProc: NfcomSefazGProc[];
};
/** @description Grupo identificador do Processo. */
export type NfcomSefazGProc = {
  /**
   * @description Tipo de Processo.
   * * 0 - SEFAZ
   * * 1 - Justiça Federal
   * * 2 - Justiça Estadual
   */
  tpProc: number;
  /** @description Número do Processo. */
  nProcesso: string;
};
/** @description Grupo de Informações detalhadas de item de cClass de Ressarcimento. */
export type NfcomSefazGRessarc = {
  /**
   * @description Tipo de Ressarcimento.
   * * 1 - Cobrança Indevida
   * * 2 - Interrupção
   * * 99 - Outros
   */
  tpRessarc: number;
  /**
   * Format: date
   * @description Data de referencia.
   * Formato AAAA-MM-DD.
   */
  dRef: string;
  /** @description Número do Processo. */
  nProcesso?: string;
  /** @description Número do protocolo de reclamação. */
  nProtReclama?: string;
  /** @description Observações sobre o processo de ressarcimento. */
  xObs?: string;
};
/** @description Dados dos totais da NFCom. */
export type NfcomSefazTotal = {
  /** @description Valor Total dos produtos e serviços. */
  vProd: number;
  ICMSTot: NfcomSefazICMSTot;
  /** @description Valor do COFINS. */
  vCOFINS: number;
  /** @description Valor do PIS. */
  vPIS: number;
  /** @description Valor do FUNTTEL. */
  vFUNTTEL: number;
  /** @description Valor do FUST. */
  vFUST: number;
  vRetTribTot: NfcomSefazVRetTribTot;
  /** @description Valor Total do Desconto. */
  vDesc: number;
  /** @description Outras Despesas acessórias. */
  vOutro: number;
  /** @description Valor Total da NFCom. */
  vNF: number;
  IBSCBSTot?: NfcomSefazIBSCBSTot;
  /**
   * @description Valor total do documento fiscal
   * (vNF + total do IBS + total da CBS).
   */
  vTotDFe?: number;
};
/** @description Totais referentes ao ICMS. */
export type NfcomSefazICMSTot = {
  /** @description BC do ICMS. */
  vBC: number;
  /** @description Valor Total do ICMS. */
  vICMS: number;
  /** @description Valor Total do ICMS desonerado. */
  vICMSDeson: number;
  /** @description Valor Total do FCP (Fundo de Combate à Pobreza). */
  vFCP: number;
};
/** @description Total da retenção de tributos federais. */
export type NfcomSefazVRetTribTot = {
  /** @description Valor do PIS retido. */
  vRetPIS: number;
  /** @description Valor do COFNS retido. */
  vRetCofins: number;
  /** @description Valor da CSLL retida. */
  vRetCSLL: number;
  /** @description Valor do IRRF retido. */
  vIRRF: number;
};
/** @description Totais de IBS e CBS. */
export type NfcomSefazIBSCBSTot = {
  /** @description Total Base de Calculo. */
  vBCIBSCBS: number;
  gIBS: NfcomSefazGIBS;
  gCBS: NfcomSefazIBSCBSTot_GCBS;
};
/** @description Totalização do IBS. */
export type NfcomSefazGIBS = {
  gIBSUF: NfcomSefazGIBS_GIBSUF;
  gIBSMun: NfcomSefazGIBS_GIBSMun;
  /** @description Valor total do IBS. */
  vIBS: number;
  /** @description Total do Crédito Presumido. */
  vCredPres: number;
  /** @description Total do Crédito Presumido Condição Suspensiva. */
  vCredPresCondSus: number;
};
/** @description Totalização do IBS de competência da UF. */
export type NfcomSefazGIBS_GIBSUF = {
  /** @description Total do Diferimento. */
  vDif: number;
  /** @description Total de devoluções de tributos. */
  vDevTrib: number;
  /** @description Valor total do IBS Estadual. */
  vIBSUF: number;
};
/** @description Totalização do IBS de competência Municipal. */
export type NfcomSefazGIBS_GIBSMun = {
  /** @description Total do Diferimento. */
  vDif: number;
  /** @description Total de devoluções de tributos. */
  vDevTrib: number;
  /** @description Valor total do IBS Municipal. */
  vIBSMun: number;
};
/** @description Totalização da CBS. */
export type NfcomSefazIBSCBSTot_GCBS = {
  /** @description Total do Diferimento. */
  vDif: number;
  /** @description Total de devoluções de tributos. */
  vDevTrib: number;
  /** @description Valor total da CBS. */
  vCBS: number;
  /** @description Total do Crédito Presumido. */
  vCredPres: number;
  /** @description Total do Crédito Presumido Condição Suspensiva. */
  vCredPresCondSus: number;
};
/** @description Grupo de informações do programa de fidelidade do assinante. */
export type NfcomSefazGFidelidade = {
  /** @description Saldo de pontos do cliente na  data de referência. */
  qtdSaldoPts: string;
  /**
   * Format: date
   * @description Data de aferição do saldo de pontos.
   * Formato AAAA-MM-DD.
   */
  dRefSaldoPts: string;
  /** @description Qtd de pontos resgatados na  data de referência. */
  qtdPtsResg: string;
  /**
   * Format: date
   * @description Data de resgate dos pontos.
   * Formato AAAA-MM-DD.
   */
  dRefResgPts: string;
};
/** @description Grupo de informações de controle da Fatura. */
export type NfcomSefazGFat = {
  /** @description Ano e mês referência do faturamento (AAAAMM). */
  CompetFat: string;
  /**
   * Format: date
   * @description Data de vencimento da fatura.
   * Formato AAAA-MM-DD.
   */
  dVencFat: string;
  /**
   * Format: date
   * @description Período de uso inicial.
   * Formato AAAA-MM-DD.
   */
  dPerUsoIni?: string;
  /**
   * Format: date
   * @description Período de uso final.
   * Formato AAAA-MM-DD.
   */
  dPerUsoFim?: string;
  /** @description Linha digitável do código de barras. */
  codBarras: string;
  /** @description Código de autorização débito em conta. */
  codDebAuto?: string;
  /** @description Número do banco para débito em conta. */
  codBanco?: string;
  /** @description Número da agência bancária para débito em conta. */
  codAgencia?: string;
  enderCorresp?: NfcomSefazEndeEmi;
  gPIX?: NfcomSefazGPIX;
};
/** @description Grupo de informações do PIX. */
export type NfcomSefazGPIX = {
  /** @description URL do QRCode do PIX que será apresentado na fatura. */
  urlQRCodePIX: string;
};
/** @description Grupo de informações do Faturamento Centralizado. */
export type NfcomSefazGFatCentral = {
  /**
   * @description CNPJ do Emitente centralizador.
   * Informar o CNPJ do emitente do Documento Fiscal.
   */
  CNPJ: string;
  /**
   * @description Código da UF do emitente centralizador.
   * Código da UF do emitente do Documento Fiscal. Utilizar a
   * Tabela do IBGE de código de unidades da federação.
   */
  cUF: number;
};
/**
 * @description Autorizados para download do XML do DF-e.
 * Informar CNPJ ou CPF. Preencher os zeros não significativos.
 */
export type NfcomSefazAutXML = {
  /**
   * @description CNPJ do autorizado.
   * Informar zeros não significativos.
   */
  CNPJ?: string;
  /**
   * @description CPF do autorizado.
   * Informar zeros não significativos.
   */
  CPF?: string;
};
/** @description Informações Adicionais. */
export type NfcomSefazInfAdic = {
  /**
   * @description Informações adicionais de interesse do Fisco.
   * Norma referenciada, informações complementares, etc.
   */
  infAdFisco?: string;
  /** @description Informações complementares de interesse do Contribuinte. */
  infCpl?: string[];
};
/** @description Informações do Responsável Técnico pela emissão do DF-e. */
export type NfcomSefazRespTec = {
  /**
   * @description CNPJ da pessoa jurídica responsável técnica pelo sistema utilizado na emissão do documento fiscal eletrônico.
   * Informar o CNPJ da pessoa jurídica desenvolvedora do sistema utilizado na emissão do documento fiscal eletrônico.
   */
  CNPJ: string;
  /**
   * @description Nome da pessoa a ser contatada.
   * Informar o nome da pessoa a ser contatada na empresa desenvolvedora do sistema utilizado na emissão do documento fiscal eletrônico. No caso de pessoa física, informar o respectivo nome.
   */
  xContato: string;
  /** @description Email da pessoa jurídica a ser contatada. */
  email: string;
  /**
   * @description Telefone da pessoa jurídica a ser contatada.
   * Preencher com o Código DDD + número do telefone.
   */
  fone: string;
  /**
   * @description Identificador do código de segurança do responsável técnico.
   * Identificador do CSRT utilizado para geração do hash.
   */
  idCSRT?: number;
  /** @description Código de Segurança do Responsável Técnico utilizado para montar o hash do CSRT. */
  CSRT?: string;
  /**
   * @description Hash do token do código de segurança do responsável técnico.
   * O hashCSRT é o resultado das funções SHA-1 e base64 do token CSRT fornecido pelo fisco + chave de acesso do DF-e. (Implementação em futura NT)
   * Observação: 28 caracteres são representados no schema como 20 bytes do tipo base64Binary.
   *
   * *Se não informado, será calculado automaticamente, desde que os campos `idCSRT` e `CSRT` sejam fornecidos.*
   */
  hashCSRT?: string;
};
export type NfcomPedidoCancelamento = {
  /** @description Justificativa para o cancelamento. Preencheremos automaticamente, caso esteja em branco. */
  justificativa?: string;
};
export type ContaCota = {
  nome?: string;
  consumo?: number;
  limite?: number;
};
export type ContaCotaListagem = {
  "@count"?: number;
  data?: ContaCota[];
};
export type CtePedidoEmissao = {
  infCte: CteSefazInfCte;
  infCTeSupl?: CteSefazInfCTeSupl;
  /**
   * @description Identificação do Ambiente.
   * @enum {string}
   */
  ambiente: "homologacao" | "producao";
  /** @description Seu identificador único para este documento. Opcional, ajuda a evitar o envio duplicado de um mesmo documento. */
  referencia?: string;
};
/** @description Informações do CT-e. */
export type CteSefazInfCte = {
  /**
   * @description Versão do leiaute.
   * Ex: "4.00".
   */
  versao: string;
  /**
   * @description Identificador da tag a ser assinada.
   * Informar a chave de acesso do CT-e e precedida do literal "CTe".
   *
   * *Geramos automaticamente quando nenhum valor é informado.*
   */
  Id?: string;
  ide: CteSefazIde;
  compl?: CteSefazCompl;
  emit: CteSefazEmit;
  rem?: CteSefazRem;
  exped?: CteSefazExped;
  receb?: CteSefazReceb;
  dest?: CteSefazDest;
  vPrest: CteSefazVPrest;
  imp: CteSefazInfCte_Imp;
  infCTeNorm?: CteSefazInfCTeNorm;
  infCteComp?: CteSefazInfCteComp[];
  autXML?: CteSefazAutXML[];
  infRespTec?: CteSefazRespTec;
  infSolicNFF?: CteSefazInfSolicNFF;
};
/** @description Identificação do CT-e. */
export type CteSefazIde = {
  /**
   * @description Código da UF do emitente do CT-e.
   * Utilizar a Tabela do IBGE.
   */
  cUF: number;
  /**
   * @description Código numérico que compõe a Chave de Acesso.
   * Número aleatório gerado pelo emitente para cada CT-e, com o objetivo de evitar acessos indevidos ao documento.
   *
   * *Geramos automaticamente quando nenhum valor é informado.*
   */
  cCT?: string;
  /** @description Código Fiscal de Operações e Prestações. */
  CFOP: string;
  /** @description Natureza da Operação. */
  natOp: string;
  /**
   * @description Modelo do documento fiscal.
   * Utilizar o código 57 para identificação do CT-e, emitido em substituição aos modelos de conhecimentos em papel.
   */
  mod?: number;
  /**
   * @description Série do CT-e.
   * Preencher com "0" no caso de série única.
   */
  serie: number;
  /** @description Número do CT-e. */
  nCT: number;
  /**
   * Format: date-time
   * @description Data e hora de emissão do CT-e.
   * Formato AAAA-MM-DDTHH:MM:DD TZD.
   */
  dhEmi: string;
  /**
   * @description Formato de impressão do DACTE:
   * * 1 - Retrato
   * * 2 - Paisagem
   */
  tpImp: number;
  /**
   * @description Forma de emissão do CT-e.
   * Preencher com:
   * * 1 - Normal
   * * 3 - Regime Especial NFF
   * * 4 - EPEC pela SVC
   * * 5 - Contingência FSDA
   * * 7 - Autorização pela SVC-RS
   * * 8 - Autorização pela SVC-SP
   */
  tpEmis: number;
  /**
   * @description Digito Verificador da chave de acesso do CT-e.
   * Informar o dígito  de controle da chave de acesso do CT-e, que deve ser calculado com a aplicação do algoritmo módulo 11 (base 2,9) da chave de acesso.
   *
   * *Geramos automaticamente quando nenhum valor é informado.*
   */
  cDV?: number;
  /**
   * @description Tipo do Ambiente:
   * * 1 - Produção
   * * 2 - Homologação
   */
  tpAmb?: number;
  /**
   * @description Tipo do CT-e.
   * Preencher com:
   * * 0 - CT-e Normal
   * * 1 - CT-e de Complemento de Valores
   * * 3 - CT-e de Substituição
   */
  tpCTe: number;
  /**
   * @description Identificador do processo de emissão do CT-e.
   * Preencher com:
   * * 0 - emissão de CT-e com aplicativo do contribuinte
   * * 3 - emissão CT-e pelo contribuinte com aplicativo fornecido pelo SEBRAE
   */
  procEmi: number;
  /**
   * @description Versão do processo de emissão.
   * Iinformar a versão do aplicativo emissor de CT-e.
   */
  verProc: string;
  /**
   * @description Indicador de CT-e Globalizado.
   * Informar valor 1 quando for Globalizado e não informar a tag quando não tratar de CT-e Globalizado.
   */
  indGlobalizado?: number;
  /**
   * @description Código do Município de envio do CT-e (de onde o documento foi transmitido).
   * Utilizar a tabela do IBGE. Informar 9999999 para as operações com o exterior.
   */
  cMunEnv: string;
  /**
   * @description Nome do Município de envio do CT-e (de onde o documento foi transmitido).
   * Informar PAIS/Municipio para as operações com o exterior.
   */
  xMunEnv: string;
  /**
   * @description Sigla da UF de envio do CT-e (de onde o documento foi transmitido).
   * Informar 'EX' para operações com o exterior.
   */
  UFEnv: string;
  /**
   * @description Modal. Preencher com:
   * * 01 - Rodoviário
   * * 02 - Aéreo
   * * 03 - Aquaviário
   * * 04 - Ferroviário
   * * 05 - Dutoviário
   * * 06 - Multimodal
   */
  modal: string;
  /**
   * @description Tipo do Serviço.
   * Preencher com:
   * * 0 - Normal
   * * 1 - Subcontratação
   * * 2 - Redespacho
   * * 3 - Redespacho Intermediário
   * * 4 - Serviço Vinculado a Multimodal
   */
  tpServ: number;
  /**
   * @description Código do Município de início da prestação.
   * Utilizar a tabela do IBGE. Informar 9999999 para operações com o exterior.
   */
  cMunIni: string;
  /**
   * @description Nome do Município do início da prestação.
   * Informar 'EXTERIOR' para operações com o exterior.
   */
  xMunIni: string;
  /**
   * @description UF do início da prestação.
   * Informar 'EX' para operações com o exterior.
   */
  UFIni: string;
  /**
   * @description Código do Município de término da prestação.
   * Utilizar a tabela do IBGE. Informar 9999999 para operações com o exterior.
   */
  cMunFim: string;
  /**
   * @description Nome do Município do término da prestação.
   * Informar 'EXTERIOR' para operações com o exterior.
   */
  xMunFim: string;
  /**
   * @description UF do término da prestação.
   * Informar 'EX' para operações com o exterior.
   */
  UFFim: string;
  /**
   * @description Indicador se o Recebedor retira no Aeroporto, Filial, Porto ou Estação de Destino? Preencher com:
   * * 0 - Sim
   * * 1 - Não
   */
  retira: number;
  /** @description Detalhes do retira. */
  xDetRetira?: string;
  /**
   * @description Indicador do papel do tomador na prestação do serviço:
   * * 1 - Contribuinte ICMS
   * * 2 - Contribuinte isento de inscrição
   * * 9 - Não Contribuinte
   * Aplica-se ao tomador que for indicado no toma3 ou toma4.
   */
  indIEToma: number;
  toma3?: CteSefazToma3;
  toma4?: CteSefazToma4;
  /**
   * Format: date-time
   * @description Data e Hora da entrada em contingência.
   * Informar a data e hora no formato AAAA-MM-DDTHH:MM:SS.
   */
  dhCont?: string;
  /** @description Justificativa da entrada em contingência. */
  xJust?: string;
  gCompraGov?: CteSefazCompraGovReduzido;
};
/** @description Indicador do "papel" do tomador do serviço no CT-e. */
export type CteSefazToma3 = {
  /**
   * @description Tomador do Serviço.
   * Preencher com:
   * * 0 - Remetente
   * * 1 - Expedidor
   * * 2 - Recebedor
   * * 3 - Destinatário
   * Serão utilizadas as informações contidas no respectivo grupo, conforme indicado pelo conteúdo deste campo.
   */
  toma: number;
};
/** @description Indicador do "papel" do tomador do serviço no CT-e. */
export type CteSefazToma4 = {
  /**
   * @description Tomador do Serviço.
   * Preencher com:
   * * 4 - Outros
   * Obs: Informar os dados cadastrais do tomador do serviço.
   */
  toma: number;
  /**
   * @description Número do CNPJ.
   * Em caso de empresa não estabelecida no Brasil, será informado o CNPJ com zeros.
   * Informar os zeros não significativos.
   */
  CNPJ?: string;
  /**
   * @description Número do CPF.
   * Informar os zeros não significativos.
   */
  CPF?: string;
  /**
   * @description Inscrição Estadual.
   * Informar a IE do tomador ou ISENTO se tomador é contribuinte do ICMS isento de inscrição no cadastro de contribuintes do ICMS. Caso o tomador não seja contribuinte do ICMS não informar o conteúdo.
   */
  IE?: string;
  /** @description Razão Social ou Nome. */
  xNome: string;
  /** @description Nome Fantasia. */
  xFant?: string;
  /** @description Telefone. */
  fone?: string;
  enderToma: CteSefazEndereco;
  /** @description Endereço de email. */
  email?: string;
};
/** @description Dados do endereço. */
export type CteSefazEndereco = {
  /** @description Logradouro. */
  xLgr: string;
  /** @description Número. */
  nro: string;
  /** @description Complemento. */
  xCpl?: string;
  /** @description Bairro. */
  xBairro: string;
  /**
   * @description Código do município (utilizar a tabela do IBGE).
   * Informar 9999999 para operações com o exterior.
   */
  cMun: string;
  /**
   * @description Nome do município.
   * Informar EXTERIOR para operações com o exterior.
   */
  xMun: string;
  /**
   * @description CEP.
   * Informar os zeros não significativos.
   */
  CEP?: string;
  /**
   * @description Sigla da UF.
   * Informar EX para operações com o exterior.
   */
  UF: string;
  /**
   * @description Código do país.
   * Utilizar a tabela do BACEN.
   */
  cPais?: string;
  /** @description Nome do país. */
  xPais?: string;
};
/** @description Grupo de Compras Governamentais. */
export type CteSefazCompraGovReduzido = {
  /**
   * @description Para administração pública direta e suas autarquias e fundações:
   * * 1 - União
   * * 2 - Estados
   * * 3 - Distrito Federal
   * * 4 - Municípios
   */
  tpEnteGov: number;
  /** @description Percentual de redução de aliquota em compra goverrnamental. */
  pRedutor: number;
};
/** @description Dados complementares do CT-e para fins operacionais ou comerciais. */
export type CteSefazCompl = {
  /**
   * @description Característica adicional do transporte.
   * Texto livre:
   * REENTREGA
   * DEVOLUÇÃO
   * REFATURAMENTO
   * etc.
   */
  xCaracAd?: string;
  /**
   * @description Característica adicional do serviço.
   * Texto livre:
   * ENTREGA EXPRESSA
   * LOGÍSTICA REVERSA
   * CONVENCIONAL
   * EMERGENCIAL
   * etc.
   */
  xCaracSer?: string;
  /** @description Funcionário emissor do CTe. */
  xEmi?: string;
  fluxo?: CteSefazFluxo;
  Entrega?: CteSefazEntrega;
  /** @description Município de origem para efeito de cálculo do frete. */
  origCalc?: string;
  /** @description Município de destino para efeito de cálculo do frete. */
  destCalc?: string;
  /** @description Observações Gerais. */
  xObs?: string;
  ObsCont?: CteSefazObsCont[];
  ObsFisco?: CteSefazObsFisco[];
};
/**
 * @description Previsão do fluxo da carga.
 * Preenchimento obrigatório para o modal aéreo.
 */
export type CteSefazFluxo = {
  /**
   * @description Sigla ou código interno da Filial/Porto/Estação/ Aeroporto de Origem.
   * Observações para o modal aéreo:
   * * Preenchimento obrigatório para o modal aéreo.
   */
  xOrig?: string;
  pass?: CteSefazPass[];
  /**
   * @description Sigla ou código interno da Filial/Porto/Estação/Aeroporto de Destino.
   * Observações para o modal aéreo:
   * * Preenchimento obrigatório para o modal aéreo.
   */
  xDest?: string;
  /** @description Código da Rota de Entrega. */
  xRota?: string;
};
export type CteSefazPass = {
  /**
   * @description Sigla ou código interno da Filial/Porto/Estação/Aeroporto de Passagem.
   * Observação para o modal aéreo:
   * * O código de três letras IATA, referente ao aeroporto de transferência, deverá ser incluído, quando for o caso. Quando não for possível,  utilizar a sigla OACI. Qualquer solicitação de itinerário deverá ser incluída.
   */
  xPass?: string;
};
/** @description Informações ref. a previsão de entrega. */
export type CteSefazEntrega = {
  semData?: CteSefazSemData;
  comData?: CteSefazComData;
  noPeriodo?: CteSefazNoPeriodo;
  semHora?: CteSefazSemHora;
  comHora?: CteSefazComHora;
  noInter?: CteSefazNoInter;
};
/**
 * @description Entrega sem data definida.
 * Esta opção é proibida para o modal aéreo.
 */
export type CteSefazSemData = {
  /**
   * @description Tipo de data/período programado para entrega.
   * * 0 - Sem data definida
   */
  tpPer: number;
};
/** @description Entrega com data definida. */
export type CteSefazComData = {
  /**
   * @description Tipo de data/período programado para entrega.
   * Preencher com:
   * * 1 - Na data
   * * 2 - Até a data
   * * 3 - A partir da data
   */
  tpPer: number;
  /**
   * Format: date
   * @description Data programada.
   * Formato AAAA-MM-DD.
   */
  dProg: string;
};
/** @description Entrega no período definido. */
export type CteSefazNoPeriodo = {
  /**
   * @description Tipo período.
   * * 4 - no período
   */
  tpPer: number;
  /**
   * Format: date
   * @description Data inicial.
   * Formato AAAA-MM-DD.
   */
  dIni: string;
  /**
   * Format: date
   * @description Data final.
   * Formato AAAA-MM-DD.
   */
  dFim: string;
};
/** @description Entrega sem hora definida. */
export type CteSefazSemHora = {
  /**
   * @description Tipo de hora.
   * * 0 - Sem hora definida
   */
  tpHor: number;
};
/** @description Entrega com hora definida. */
export type CteSefazComHora = {
  /**
   * @description Tipo de hora.
   * Preencher com:
   * * 1 - No horário
   * * 2 - Até o horário
   * * 3 - A partir do horário
   */
  tpHor: number;
  /**
   * @description Hora programada.
   * Formato HH:MM:SS.
   */
  hProg: string;
};
/** @description Entrega no intervalo de horário definido. */
export type CteSefazNoInter = {
  /**
   * @description Tipo de hora.
   * * 4 - No intervalo de tempo
   */
  tpHor: number;
  /**
   * @description Hora inicial.
   * Formato HH:MM:SS.
   */
  hIni: string;
  /**
   * @description Hora final.
   * Formato HH:MM:SS.
   */
  hFim: string;
};
/**
 * @description Campo de uso livre do contribuinte.
 * Informar o nome do campo no atributo xCampo e o conteúdo do campo no XTexto.
 */
export type CteSefazObsCont = {
  /** @description Identificação do campo. */
  xCampo: string;
  /** @description Conteúdo do campo. */
  xTexto: string;
};
/**
 * @description Campo de uso livre do contribuinte.
 * Informar o nome do campo no atributo xCampo e o conteúdo do campo no XTexto.
 */
export type CteSefazObsFisco = {
  /** @description Identificação do campo. */
  xCampo: string;
  /** @description Conteúdo do campo. */
  xTexto: string;
};
/** @description Identificação do Emitente do CT-e. */
export type CteSefazEmit = {
  /**
   * @description CNPJ do emitente.
   * Informar zeros não significativos.
   *
   * ***Obrigatório caso o emitente seja pessoa jurídica***.
   */
  CNPJ?: string;
  /**
   * @description CPF do emitente.
   * Informar zeros não significativos.
   * Usar com série específica 920-969 para emitente pessoa física com inscrição estadual.
   *
   * ***Obrigatorio caso o emitente seja pessoa física***.
   */
  CPF?: string;
  /**
   * @description Inscrição Estadual do Emitente.
   * A IE do emitente somente ficará sem informação para o caso do Regime Especial da NFF (tpEmis=3).
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  IE?: string;
  /** @description Inscrição Estadual do Substituto Tributário. */
  IEST?: string;
  /**
   * @description Razão social ou Nome do emitente.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  xNome?: string;
  /**
   * @description Nome fantasia.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  xFant?: string;
  enderEmit?: CteSefazEndeEmi;
  /**
   * @description Código do Regime Tributário. Informar:
   * * 1 - Simples Nacional;
   * * 2 - Simples Nacional, excesso sublimite de receita bruta;
   * * 3 - Regime Normal;
   * * 4 - Simples Nacional - Microempreendedor Individual (MEI).
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  CRT?: number;
};
/**
 * @description Endereço do emitente.
 *
 * *Caso não seja informado, será utilizado o do cadastro da empresa.*
 */
export type CteSefazEndeEmi = {
  /**
   * @description Logradouro.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  xLgr?: string;
  /**
   * @description Número.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  nro?: string;
  /**
   * @description Complemento.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  xCpl?: string;
  /**
   * @description Bairro.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  xBairro?: string;
  /**
   * @description Código do município (utilizar a tabela do IBGE).
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  cMun?: string;
  /**
   * @description Nome do município.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  xMun?: string;
  /**
   * @description CEP.
   * Informar zeros não significativos.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  CEP?: string;
  /**
   * @description Sigla da UF.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  UF?: string;
  /**
   * @description Telefone.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  fone?: string;
};
/**
 * @description Informações do Remetente das mercadorias transportadas pelo CT-e.
 * Poderá não ser informado para os CT-e de redespacho intermediário e serviço vinculado a multimodal. Nos demais casos deverá sempre ser informado.
 */
export type CteSefazRem = {
  /**
   * @description Número do CNPJ.
   * Em caso de empresa não estabelecida no Brasil, será informado o CNPJ com zeros.
   * Informar os zeros não significativos.
   */
  CNPJ?: string;
  /**
   * @description Número do CPF.
   * Informar os zeros não significativos.
   */
  CPF?: string;
  /**
   * @description Inscrição Estadual.
   * Informar a IE do remetente ou ISENTO se remetente é contribuinte do ICMS isento de inscrição no cadastro de contribuintes do ICMS. Caso o remetente não seja contribuinte do ICMS não informar a tag.
   */
  IE?: string;
  /** @description Razão social ou nome do remetente. */
  xNome: string;
  /** @description Nome fantasia. */
  xFant?: string;
  /** @description Telefone. */
  fone?: string;
  enderReme: CteSefazEndereco;
  /** @description Endereço de email. */
  email?: string;
};
/** @description Informações do Expedidor da Carga. */
export type CteSefazExped = {
  /**
   * @description Número do CNPJ.
   * Em caso de empresa não estabelecida no Brasil, será informado o CNPJ com zeros.
   * Informar os zeros não significativos.
   */
  CNPJ?: string;
  /**
   * @description Número do CPF.
   * Informar os zeros não significativos.
   */
  CPF?: string;
  /**
   * @description Inscrição Estadual.
   * Informar a IE do expedidor ou ISENTO se expedidor é contribuinte do ICMS isento de inscrição no cadastro de contribuintes do ICMS. Caso o expedidor não seja contribuinte do ICMS não informar a tag.
   */
  IE?: string;
  /** @description Razão Social ou Nome. */
  xNome: string;
  /** @description Telefone. */
  fone?: string;
  enderExped: CteSefazEndereco;
  /** @description Endereço de email. */
  email?: string;
};
/** @description Informações do Recebedor da Carga. */
export type CteSefazReceb = {
  /**
   * @description Número do CNPJ.
   * Em caso de empresa não estabelecida no Brasil, será informado o CNPJ com zeros.
   * Informar os zeros não significativos.
   */
  CNPJ?: string;
  /**
   * @description Número do CPF.
   * Informar os zeros não significativos.
   */
  CPF?: string;
  /**
   * @description Inscrição Estadual.
   * Informar a IE do recebedor ou ISENTO se recebedor é contribuinte do ICMS isento de inscrição no cadastro de contribuintes do ICMS. Caso o recebedor não seja contribuinte do ICMS não informar o conteúdo.
   */
  IE?: string;
  /** @description Razão Social ou Nome. */
  xNome: string;
  /** @description Telefone. */
  fone?: string;
  enderReceb: CteSefazEndereco;
  /** @description Endereço de email. */
  email?: string;
};
/**
 * @description Informações do Destinatário do CT-e.
 * Poderá não ser informado para os CT-e de redespacho intermediário e serviço vinculado a multimodal. Nos demais casos deverá sempre ser informado.
 */
export type CteSefazDest = {
  /**
   * @description Número do CNPJ.
   * Em caso de empresa não estabelecida no Brasil, será informado o CNPJ com zeros.
   * Informar os zeros não significativos.
   */
  CNPJ?: string;
  /**
   * @description Número do CPF.
   * Informar os zeros não significativos.
   */
  CPF?: string;
  /**
   * @description Inscrição Estadual.
   * Informar a IE do destinatário ou ISENTO se destinatário é contribuinte do ICMS isento de inscrição no cadastro de contribuintes do ICMS. Caso o destinatário não seja contribuinte do ICMS não informar o conteúdo.
   */
  IE?: string;
  /** @description Razão Social ou Nome do destinatário. */
  xNome: string;
  /** @description Telefone. */
  fone?: string;
  /**
   * @description Inscrição na SUFRAMA.
   * (Obrigatório nas operações com as áreas com benefícios de incentivos fiscais sob controle da SUFRAMA).
   */
  ISUF?: string;
  enderDest: CteSefazEndereco;
  /** @description Endereço de email. */
  email?: string;
};
/** @description Valores da Prestação de Serviço. */
export type CteSefazVPrest = {
  /**
   * @description Valor Total da Prestação do Serviço.
   * Pode conter zeros quando o CT-e for de complemento de ICMS.
   */
  vTPrest: number;
  /** @description Valor a Receber. */
  vRec: number;
  Comp?: CteSefazComp[];
};
/** @description Componentes do Valor da Prestação. */
export type CteSefazComp = {
  /**
   * @description Nome do componente.
   * Exxemplos: FRETE PESO, FRETE VALOR, SEC/CAT, ADEME, AGENDAMENTO, etc.
   */
  xNome: string;
  /** @description Valor do componente. */
  vComp: number;
};
/** @description Informações relativas aos Impostos. */
export type CteSefazInfCte_Imp = {
  ICMS: CteSefazImp;
  /** @description Valor Total dos Tributos. */
  vTotTrib?: number;
  /**
   * @description Informações adicionais de interesse do Fisco.
   * Norma referenciada, informações complementares, etc.
   */
  infAdFisco?: string;
  ICMSUFFim?: CteSefazICMSUFFim;
  IBSCBS?: CteSefazTribCTe;
  /**
   * @description Valor total do documento fiscal
   * (vTPrest + total do IBS + total da CBS).
   */
  vTotDFe?: number;
};
/** @description Informações relativas ao ICMS. */
export type CteSefazImp = {
  ICMS00?: CteSefazICMS00;
  ICMS20?: CteSefazICMS20;
  ICMS45?: CteSefazICMS45;
  ICMS60?: CteSefazICMS60;
  ICMS90?: CteSefazICMS90;
  ICMSOutraUF?: CteSefazICMSOutraUF;
  ICMSSN?: CteSefazICMSSN;
};
/** @description Prestação sujeito à tributação normal do ICMS. */
export type CteSefazICMS00 = {
  /**
   * @description classificação Tributária do Serviço.
   * * 00 - tributação normal ICMS
   */
  CST: string;
  /** @description Valor da BC do ICMS. */
  vBC: number;
  /** @description Alíquota do ICMS. */
  pICMS: number;
  /** @description Valor do ICMS. */
  vICMS: number;
};
/** @description Prestação sujeito à tributação com redução de BC do ICMS. */
export type CteSefazICMS20 = {
  /**
   * @description Classificação Tributária do serviço.
   * * 20 - tributação com BC reduzida do ICMS
   */
  CST: string;
  /** @description Percentual de redução da BC. */
  pRedBC: number;
  /** @description Valor da BC do ICMS. */
  vBC: number;
  /** @description Alíquota do ICMS. */
  pICMS: number;
  /** @description Valor do ICMS. */
  vICMS: number;
  /** @description Valor do ICMS de desoneração. */
  vICMSDeson?: number;
  /**
   * @description Código de Benefício Fiscal na UF.
   * Código de Benefício Fiscal utilizado pela UF.
   */
  cBenef?: string;
};
/** @description ICMS  Isento, não Tributado ou diferido. */
export type CteSefazICMS45 = {
  /**
   * @description Classificação Tributária do Serviço.
   * Preencher com:
   * * 40 - ICMS isenção
   * * 41 - ICMS não tributada
   * * 51 - ICMS diferido
   */
  CST: string;
  /** @description Valor do ICMS de desoneração. */
  vICMSDeson?: number;
  /**
   * @description Código de Benefício Fiscal na UF.
   * Código de Benefício Fiscal utilizado pela UF.
   */
  cBenef?: string;
};
/** @description Tributação pelo ICMS60 - ICMS cobrado por substituição tributária.Responsabilidade do recolhimento do ICMS atribuído ao tomador ou 3º por ST. */
export type CteSefazICMS60 = {
  /**
   * @description Classificação Tributária do Serviço.
   * * 60 - ICMS cobrado por substituição tributária
   */
  CST: string;
  /**
   * @description Valor da BC do ICMS ST retido.
   * Valor do frete sobre o qual será calculado o ICMS a ser substituído na Prestação.
   */
  vBCSTRet: number;
  /**
   * @description Valor do ICMS ST retido.
   * Resultado da multiplicação do “vBCSTRet” x “pICMSSTRet” - que será valor do ICMS a ser retido pelo Substituto. Podendo o valor do ICMS a ser retido efetivamente, sofrer ajustes conforme a opção tributaria do transportador substituído.
   */
  vICMSSTRet: number;
  /**
   * @description Alíquota do ICMS.
   * Percentual de Alíquota incidente na prestação de serviço de transporte.
   */
  pICMSSTRet: number;
  /**
   * @description Valor do Crédito outorgado/Presumido.
   * Preencher somente quando o transportador substituído, for optante pelo crédito outorgado previsto no Convênio 106/96 e corresponde ao percentual de 20%% do valor do ICMS ST retido.
   */
  vCred?: number;
  /** @description Valor do ICMS de desoneração. */
  vICMSDeson?: number;
  /**
   * @description Código de Benefício Fiscal na UF.
   * Código de Benefício Fiscal utilizado pela UF.
   */
  cBenef?: string;
};
/** @description ICMS Outros. */
export type CteSefazICMS90 = {
  /**
   * @description Classificação Tributária do Serviço.
   * * 90 - ICMS outros
   */
  CST: string;
  /** @description Percentual de redução da BC. */
  pRedBC?: number;
  /** @description Valor da BC do ICMS. */
  vBC: number;
  /** @description Alíquota do ICMS. */
  pICMS: number;
  /** @description Valor do ICMS. */
  vICMS: number;
  /** @description Valor do Crédito Outorgado/Presumido. */
  vCred?: number;
  /** @description Valor do ICMS de desoneração. */
  vICMSDeson?: number;
  /**
   * @description Código de Benefício Fiscal na UF.
   * Código de Benefício Fiscal utilizado pela UF.
   */
  cBenef?: string;
};
/** @description ICMS devido à UF de origem da prestação, quando  diferente da UF do emitente. */
export type CteSefazICMSOutraUF = {
  /**
   * @description Classificação Tributária do Serviço.
   * * 90 - ICMS Outra UF
   */
  CST: string;
  /** @description Percentual de redução da BC. */
  pRedBCOutraUF?: number;
  /** @description Valor da BC do ICMS. */
  vBCOutraUF: number;
  /** @description Alíquota do ICMS. */
  pICMSOutraUF: number;
  /** @description Valor do ICMS devido outra UF. */
  vICMSOutraUF: number;
  /** @description Valor do ICMS de desoneração. */
  vICMSDeson?: number;
  /**
   * @description Código de Benefício Fiscal na UF.
   * Código de Benefício Fiscal utilizado pela UF.
   */
  cBenef?: string;
};
/** @description Simples Nacional. */
export type CteSefazICMSSN = {
  /**
   * @description Classificação Tributária do Serviço.
   * * 90 - ICMS Simples Nacional
   */
  CST: string;
  /** @description Indica se o contribuinte é Simples Nacional			1=Sim. */
  indSN: number;
};
/**
 * @description Informações do ICMS de partilha com a UF de término do serviço de transporte na operação interestadual.
 * Grupo a ser informado nas prestações interestaduais para consumidor final, não contribuinte do ICMS.
 */
export type CteSefazICMSUFFim = {
  /** @description Valor da BC do ICMS na UF de término da prestação do serviço de transporte. */
  vBCUFFim: number;
  /**
   * @description Percentual do ICMS relativo ao Fundo de Combate à pobreza (FCP) na UF de término da prestação do serviço de transporte.
   * Alíquota adotada nas operações internas na UF do destinatário.
   */
  pFCPUFFim: number;
  /**
   * @description Alíquota interna da UF de término da prestação do serviço de transporte.
   * Alíquota adotada nas operações internas na UF do destinatário.
   */
  pICMSUFFim: number;
  /**
   * @description Alíquota interestadual das UF envolvidas.
   * Alíquota interestadual das UF envolvidas.
   */
  pICMSInter: number;
  /** @description Valor do ICMS relativo ao Fundo de Combate á Pobreza (FCP) da UF de término da prestação. */
  vFCPUFFim: number;
  /** @description Valor do ICMS de partilha para a UF de término da prestação do serviço de transporte. */
  vICMSUFFim: number;
  /** @description Valor do ICMS de partilha para a UF de início da prestação do serviço de transporte. */
  vICMSUFIni: number;
};
/** @description Grupo de informações do IBS e CBS. */
export type CteSefazTribCTe = {
  /** @description Código Situação Tributária do IBS/CBS. */
  CST: string;
  cClassTrib?: string;
  gIBSCBS?: CteSefazCIBS;
};
export type CteSefazCIBS = {
  /** @description Valor do BC. */
  vBC: number;
  gIBSUF: CteSefazGIBSUF;
  gIBSMun: CteSefazGIBSMun;
  /** @description Valor do IBS (soma de vIBSUF e vIBSMun). */
  vIBS: number;
  gCBS: CteSefazGCBS;
  gTribRegular?: CteSefazTribRegular;
  gIBSCredPres?: CteSefazCredPres;
  gCBSCredPres?: CteSefazCredPres;
  gTribCompraGov?: CteSefazTribCompraGov;
};
/** @description Grupo de informações do IBS na UF. */
export type CteSefazGIBSUF = {
  /** @description Aliquota do IBS de competência das UF. */
  pIBSUF: number;
  gDif?: CteSefazDif;
  gDevTrib?: CteSefazDevTrib;
  gRed?: CteSefazRed;
  /** @description Valor do IBS de competência das UF. */
  vIBSUF: number;
};
/** @description Grupo de campos do Diferimento. */
export type CteSefazDif = {
  /** @description Percentual do diferimento. */
  pDif: number;
  /** @description Valor do diferimento. */
  vDif: number;
};
/** @description Grupo de Informações da devolução de tributos. */
export type CteSefazDevTrib = {
  /**
   * @description Valor do tributo devolvido. No fornecimento de energia elétrica, água, esgoto e
   * gás natural e em outras hipóteses definidas no regulamento.
   */
  vDevTrib: number;
};
/** @description Grupo de campos da redução de aliquota. */
export type CteSefazRed = {
  /** @description Percentual de redução de aliquota do cClassTrib. */
  pRedAliq: number;
  /** @description Aliquota Efetiva que será aplicada a Base de Calculo. */
  pAliqEfet: number;
};
/** @description Grupo de Informações do IBS no Município. */
export type CteSefazGIBSMun = {
  /** @description Aliquota do IBS Municipal. */
  pIBSMun: number;
  gDif?: CteSefazDif;
  gDevTrib?: CteSefazDevTrib;
  gRed?: CteSefazRed;
  /** @description Valor do IBS Municipal. */
  vIBSMun: number;
};
/** @description Grupo de Tributação da CBS. */
export type CteSefazGCBS = {
  /** @description Aliquota da CBS. */
  pCBS: number;
  gDif?: CteSefazDif;
  gDevTrib?: CteSefazDevTrib;
  gRed?: CteSefazRed;
  /** @description Valor da CBS. */
  vCBS: number;
};
/** @description Grupo de informações da Tributação Regular. Informar como seria a tributação caso não cumprida a condição resolutória/suspensiva. Exemplo 1: Art. 442, §4. Operações com ZFM e ALC. Exemplo 2: Operações com suspensão do tributo. */
export type CteSefazTribRegular = {
  /**
   * @description Código da Situação Tributária do IBS e CBS.
   * Informar qual seria o CST caso não cumprida a condição resolutória/suspensiva.
   */
  CSTReg: string;
  /** @description Informar qual seria o cClassTrib caso não cumprida a condição resolutória/suspensiva. */
  cClassTribReg: string;
  /**
   * @description Alíquota do IBS da UF.
   * Informar como seria a Alíquota caso não cumprida a condição resolutória/suspensiva.
   */
  pAliqEfetRegIBSUF: number;
  /**
   * @description Valor do IBS da UF.
   * Informar como seria o valor do Tributo caso não cumprida a condição resolutória/suspensiva.
   */
  vTribRegIBSUF: number;
  /**
   * @description Alíquota do IBS do Município.
   * Informar como seria a Alíquota caso não cumprida a condição resolutória/suspensiva.
   */
  pAliqEfetRegIBSMun: number;
  /**
   * @description Valor do IBS do Município.
   * Informar como seria o valor do Tributo caso não cumprida a condição resolutória/suspensiva.
   */
  vTribRegIBSMun: number;
  /**
   * @description Alíquota da CBS.
   * Informar como seria a Alíquota caso não cumprida a condição resolutória/suspensiva.
   */
  pAliqEfetRegCBS: number;
  /**
   * @description Valor da CBS.
   * Informar como seria o valor do Tributo caso não cumprida a condição resolutória/suspensiva.
   */
  vTribRegCBS: number;
};
/** @description Grupo de Informações do Crédito Presumido referente ao IBS, quando aproveitado pelo emitente do documento. */
export type CteSefazCredPres = {
  /** @description Usar tabela Cred Presumido, para o emitente da nota. */
  cCredPres: string;
  /** @description Percentual do Crédito Presumido. */
  pCredPres: number;
  /** @description Valor do Crédito Presumido. */
  vCredPres?: number;
  /** @description Valor do Crédito Presumido Condição Suspensiva, preencher apenas para cCredPres que possui indicação de Condição Suspensiva. */
  vCredPresCondSus?: number;
};
/** @description Grupo de informações da composição do valor do IBS e da CBS em compras governamental. */
export type CteSefazTribCompraGov = {
  pAliqIBSUF?: number;
  /** @description Valor que seria devido a UF, sem aplicação do Art. 473. da LC 214/2025. */
  vTribIBSUF: number;
  pAliqIBSMun?: number;
  /** @description Valor que seria devido ao município, sem aplicação do Art. 473. da LC 214/2025. */
  vTribIBSMun: number;
  pAliqCBS?: number;
  /** @description Valor que seria devido a CBS, sem aplicação do Art. 473. da LC 214/2025. */
  vTribCBS: number;
};
/** @description Grupo de informações do CT-e Normal e Substituto. */
export type CteSefazInfCTeNorm = {
  infCarga: CteSefazInfCarga;
  infDoc?: CteSefazInfDoc;
  docAnt?: CteSefazDocAnt;
  infModal: CteSefazInfModal;
  veicNovos?: CteSefazVeicNovos[];
  cobr?: CteSefazCobr;
  infCteSub?: CteSefazInfCteSub;
  infGlobalizado?: CteSefazInfGlobalizado;
  infServVinc?: CteSefazInfServVinc;
};
/** @description Informações da Carga do CT-e. */
export type CteSefazInfCarga = {
  /**
   * @description Valor total da carga.
   * Dever ser informado para todos os modais, com exceção para o Dutoviário.
   */
  vCarga?: number;
  /**
   * @description Produto predominante.
   * Informar a descrição do produto predominante.
   */
  proPred: string;
  /**
   * @description Outras características da carga.
   * "FRIA", "GRANEL", "REFRIGERADA", "Medidas: 12X12X12".
   */
  xOutCat?: string;
  infQ: CteSefazInfQ[];
  /**
   * @description Valor da Carga para efeito de averbação.
   * Normalmente igual ao valor declarado da mercadoria, diferente por exemplo, quando a mercadoria transportada é isenta de tributos nacionais para exportação, onde é preciso averbar um valor maior, pois no caso de indenização, o valor a ser pago será maior.
   */
  vCargaAverb?: number;
};
/**
 * @description Informações de quantidades da Carga do CT-e.
 * Para o Aéreo é obrigatório o preenchimento desse campo da seguinte forma.
 * * 1 - Peso Bruto, sempre em quilogramas (obrigatório)
 * * 2 - Peso Cubado
 * sempre em quilogramas
 * * 3 - Quantidade de volumes, sempre em unidades (obrigatório)
 * * 4 - Cubagem, sempre em metros cúbicos (obrigatório apenas quando for impossível preencher as dimensões da(s) embalagem(ens) na tag xDime do leiaute do Aéreo)
 */
export type CteSefazInfQ = {
  /**
   * @description Código da Unidade de Medida.
   * Preencher com:
   * * 00 - M3
   * * 01 - KG
   * * 02 - TON
   * * 03 - UNIDADE
   * * 04 - LITROS
   * * 05 - MMBTU
   */
  cUnid: string;
  /**
   * @description Tipo da Medida.
   * Exemplos:
   * PESO BRUTO, PESO DECLARADO, PESO CUBADO, PESO AFORADO, PESO AFERIDO, PESO BASE DE CÁLCULO, LITRAGEM, CAIXAS e etc.
   */
  tpMed: string;
  /** @description Quantidade. */
  qCarga: number;
};
/**
 * @description Informações dos documentos transportados pelo CT-e
 * Opcional para Redespacho Intermediario e Serviço vinculado a multimodal.
 * Poderá não ser informado para os CT-e de redespacho intermediário e serviço vinculado a multimodal. Nos demais casos deverá sempre ser informado.
 */
export type CteSefazInfDoc = {
  infNF?: CteSefazInfNF[];
  infNFe?: CteSefazInfNFe[];
  infOutros?: CteSefazInfOutros[];
  infDCe?: CteSefazInfDCe[];
};
/**
 * @description Informações das NF.
 * Este grupo deve ser informado quando o documento originário for NF.
 */
export type CteSefazInfNF = {
  /** @description Número do Romaneio da NF. */
  nRoma?: string;
  /** @description Número do Pedido da NF. */
  nPed?: string;
  /**
   * @description Modelo da Nota Fiscal.
   * Preencher com:
   * * 01 - NF Modelo 01/1A e Avulsa
   * * 04 - NF de Produtor
   */
  mod: string;
  /** @description Série. */
  serie: string;
  /** @description Número. */
  nDoc: string;
  /**
   * Format: date
   * @description Data de Emissão.
   * Formato AAAA-MM-DD.
   */
  dEmi: string;
  /** @description Valor da Base de Cálculo do ICMS. */
  vBC: number;
  /** @description Valor Total do ICMS. */
  vICMS: number;
  /** @description Valor da Base de Cálculo do ICMS ST. */
  vBCST: number;
  /** @description Valor Total do ICMS ST. */
  vST: number;
  /** @description Valor Total dos Produtos. */
  vProd: number;
  /** @description Valor Total da NF. */
  vNF: number;
  /**
   * @description CFOP Predominante.
   * CFOP da NF ou, na existência de mais de um, predominância pelo critério de valor econômico.
   */
  nCFOP: string;
  /** @description Peso total em Kg. */
  nPeso?: number;
  /**
   * @description PIN SUFRAMA.
   * PIN atribuído pela SUFRAMA para a operação.
   */
  PIN?: string;
  /**
   * Format: date
   * @description Data prevista de entrega.
   * Formato AAAA-MM-DD.
   */
  dPrev?: string;
  infUnidCarga?: CteSefazUnidCarga[];
  infUnidTransp?: CteSefazUnidadeTransp[];
};
/**
 * @description Informações das Unidades de Carga (Containeres/ULD/Outros).
 * Dispositivo de carga utilizada (Unit Load Device - ULD) significa todo tipo de contêiner de carga, vagão, contêiner de avião, palete de aeronave com rede ou palete de aeronave com rede sobre um iglu.
 */
export type CteSefazUnidCarga = {
  /**
   * @description Tipo da Unidade de Carga.
   * * 1 - Container
   * * 2 - ULD
   * * 3 - Pallet
   * * 4 - Outros
   */
  tpUnidCarga: number;
  /**
   * @description Identificação da Unidade de Carga.
   * Informar a identificação da unidade de carga, por exemplo: número do container.
   */
  idUnidCarga: string;
  lacUnidCarga?: CteSefazLacUnidCarga[];
  /** @description Quantidade rateada (Peso,Volume). */
  qtdRat?: number;
};
/** @description Lacres das Unidades de Carga. */
export type CteSefazLacUnidCarga = {
  /** @description Número do lacre. */
  nLacre: string;
};
/**
 * @description Informações das Unidades de Transporte (Carreta/Reboque/Vagão).
 * Deve ser preenchido com as informações das unidades de transporte utilizadas.
 */
export type CteSefazUnidadeTransp = {
  /**
   * @description Tipo da Unidade de Transporte.
   * * 1 - Rodoviário Tração
   * * 2 - Rodoviário Reboque
   * * 3 - Navio
   * * 4 - Balsa
   * * 5 - Aeronave
   * * 6 - Vagão
   * * 7 - Outros
   */
  tpUnidTransp: number;
  /**
   * @description Identificação da Unidade de Transporte.
   * Informar a identificação conforme o tipo de unidade de transporte.
   * Por exemplo: para rodoviário tração ou reboque deverá preencher com a placa do veículo.
   */
  idUnidTransp: string;
  lacUnidTransp?: CteSefazLacUnidTransp[];
  infUnidCarga?: CteSefazUnidCarga[];
  /** @description Quantidade rateada (Peso,Volume). */
  qtdRat?: number;
};
/** @description Lacres das Unidades de Transporte. */
export type CteSefazLacUnidTransp = {
  /** @description Número do lacre. */
  nLacre: string;
};
/** @description Informações das NF-e. */
export type CteSefazInfNFe = {
  /** @description Chave de acesso da NF-e. */
  chave: string;
  /**
   * @description PIN SUFRAMA.
   * PIN atribuído pela SUFRAMA para a operação.
   */
  PIN?: string;
  /**
   * Format: date
   * @description Data prevista de entrega.
   * Formato AAAA-MM-DD.
   */
  dPrev?: string;
  infUnidCarga?: CteSefazUnidCarga[];
  infUnidTransp?: CteSefazUnidadeTransp[];
};
/** @description Informações dos demais documentos. */
export type CteSefazInfOutros = {
  /**
   * @description Tipo de documento originário.
   * Preencher com:
   * * 00 - Declaração
   * * 10 - Dutoviário
   * * 59 - CF-e SAT
   * * 65 - NFC-e
   * * 99 - Outros
   */
  tpDoc: string;
  /** @description Descrição do documento. */
  descOutros?: string;
  /** @description Número. */
  nDoc?: string;
  /**
   * Format: date
   * @description Data de Emissão.
   * Formato AAAA-MM-DD.
   */
  dEmi?: string;
  /** @description Valor do documento. */
  vDocFisc?: number;
  /**
   * Format: date
   * @description Data prevista de entrega.
   * Formato AAAA-MM-DD.
   */
  dPrev?: string;
  infUnidCarga?: CteSefazUnidCarga[];
  infUnidTransp?: CteSefazUnidadeTransp[];
};
/** @description Informações das DCe. */
export type CteSefazInfDCe = {
  /** @description Chave de acesso da DCe. */
  chave: string;
};
/** @description Documentos de Transporte Anterior. */
export type CteSefazDocAnt = {
  emiDocAnt: CteSefazEmiDocAnt[];
};
/** @description Emissor do documento anterior. */
export type CteSefazEmiDocAnt = {
  /**
   * @description Número do CNPJ.
   * Em caso de empresa não estabelecida no Brasil, será informado o CNPJ com zeros.
   * Informar os zeros não significativos.
   */
  CNPJ?: string;
  /**
   * @description Número do CPF.
   * Informar os zeros não significativos.
   */
  CPF?: string;
  /** @description Inscrição Estadual. */
  IE?: string;
  /**
   * @description Sigla da UF.
   * Informar EX para operações com o exterior.
   */
  UF?: string;
  /** @description Razão Social ou Nome do expedidor. */
  xNome: string;
  idDocAnt: CteSefazIdDocAnt[];
};
/** @description Informações de identificação dos documentos de Transporte Anterior. */
export type CteSefazIdDocAnt = {
  idDocAntPap?: CteSefazIdDocAntPap[];
  idDocAntEle?: CteSefazIdDocAntEle[];
};
/** @description Documentos de transporte anterior em papel. */
export type CteSefazIdDocAntPap = {
  /**
   * @description Tipo do Documento de Transporte Anterior.
   * Preencher com:
   * * 07 - ATRE
   * * 08 - DTA (Despacho de Transito Aduaneiro)
   * * 09 - Conhecimento Aéreo Internacional
   * * 10 - Conhecimento - Carta de Porte Internacional
   * * 11 - Conhecimento Avulso
   * * 12 - TIF (Transporte Internacional Ferroviário)
   * * 13 - BL (Bill of Lading)
   */
  tpDoc: string;
  /** @description Série do Documento Fiscal. */
  serie: string;
  /** @description Série do Documento Fiscal. */
  subser?: string;
  /** @description Número do Documento Fiscal. */
  nDoc: string;
  /**
   * Format: date
   * @description Data de emissão (AAAA-MM-DD).
   */
  dEmi: string;
};
/** @description Documentos de transporte anterior eletrônicos. */
export type CteSefazIdDocAntEle = {
  /** @description Chave de acesso do CT-e. */
  chCTe: string;
};
/** @description Informações do modal. */
export type CteSefazInfModal = {
  /** @description Versão do leiaute específico para o Modal. */
  versaoModal: string;
  rodo?: CteSefazRodo;
  aereo?: CteSefazAereo;
  ferrov?: CteSefazFerrov;
  aquav?: CteSefazAquav;
  duto?: CteSefazDuto;
  multimodal?: CteSefazMultimodal;
};
/** @description Informações do modal Rodoviário. */
export type CteSefazRodo = {
  /**
   * @description Registro Nacional de Transportadores Rodoviários de Carga.
   * Registro obrigatório do emitente do CT-e junto à ANTT para exercer a atividade de transportador rodoviário de cargas por conta de terceiros e mediante remuneração.
   */
  RNTRC: string;
  occ?: CteSefazOcc[];
};
/** @description Ordens de Coleta associados. */
export type CteSefazOcc = {
  /** @description Série da OCC. */
  serie?: string;
  /** @description Número da Ordem de coleta. */
  nOcc: number;
  /**
   * Format: date
   * @description Data de emissão da ordem de coleta.
   * Formato AAAA-MM-DD.
   */
  dEmi: string;
  emiOcc?: CteSefazEmiOcc;
};
export type CteSefazEmiOcc = {
  /**
   * @description Número do CNPJ.
   * Informar os zeros não significativos.
   */
  CNPJ: string;
  /**
   * @description Código interno de uso da transportadora.
   * Uso intermo das transportadoras.
   */
  cInt?: string;
  /** @description Inscrição Estadual. */
  IE: string;
  /**
   * @description Sigla da UF.
   * Informar EX para operações com o exterior.
   */
  UF: string;
  /** @description Telefone. */
  fone?: string;
};
/** @description Informações do modal Aéreo. */
export type CteSefazAereo = {
  /**
   * @description Número da Minuta.
   * Documento que precede o CT-e, assinado pelo expedidor, espécie de pedido de serviço.
   */
  nMinu?: number;
  /**
   * @description Número Operacional do Conhecimento Aéreo.
   * Representa o número de controle comumente utilizado pelo conhecimento aéreo composto por uma sequência numérica de onze dígitos. Os três primeiros dígitos representam um código que os operadores de transporte aéreo associados à IATA possuem. Em seguida um número de série de sete dígitos determinados pelo operador de transporte aéreo. Para finalizar, um dígito verificador, que é um sistema de módulo sete imponderado o qual divide o número de série do conhecimento aéreo por sete e usa o resto como dígito de verificação.
   */
  nOCA?: string;
  /**
   * Format: date
   * @description Data prevista da entrega.
   * Formato AAAA-MM-DD.
   */
  dPrevAereo: string;
  natCarga: CteSefazNatCarga;
  tarifa: CteSefazTarifa;
  peri?: CteSefazPeri[];
};
/** @description Natureza da carga. */
export type CteSefazNatCarga = {
  /**
   * @description Dimensão.
   * Formato:1234X1234X1234 (cm). Esse campo deve sempre que possível ser preenchido. Entretanto, quando for impossível o preenchimento das dimensões, fica obrigatório o preenchimento da cubagem em metro cúbico do leiaute do CT-e da estrutura genérica (infQ).
   */
  xDime?: string;
  /**
   * @description Informações de manuseio.
   * * 01 - certificado do expedidor para embarque de animal vivo
   * * 02 - artigo perigoso conforme Declaração do Expedidor anexa
   * * 03 - somente em aeronave cargueira
   * * 04 - artigo perigoso - declaração do expedidor não requerida
   * * 05 - artigo perigoso em quantidade isenta
   * * 06 - gelo seco para refrigeração (especificar no campo observações a quantidade)
   * * 07 - não restrito (especificar a Disposição Especial no campo observações)
   * * 08 - artigo perigoso em carga consolidada (especificar a quantidade no campo observações)
   * * 09 - autorização da autoridade governamental anexa (especificar no campo observações)
   * * 10 - baterias de íons de lítio em conformidade com a Seção II da PI965 - CAO
   * * 11 - baterias de íons de lítio em conformidade com a Seção II da PI966
   * * 12 - baterias de íons de lítio em conformidade com a Seção II da PI967
   * * 13 - baterias de metal lítio em conformidade com a Seção II da PI968 — CAO
   * * 14 - baterias de metal lítio em conformidade com a Seção II da PI969
   * * 15 - baterias de metal lítio em conformidade com a Seção II da PI970
   * * 99 - outro (especificar no campo observações)
   */
  cInfManu?: string[];
};
/** @description Informações de tarifa. */
export type CteSefazTarifa = {
  /**
   * @description Classe.
   * Preencher com:
   * * M - Tarifa Mínima
   * * G - Tarifa Geral
   * * E - Tarifa Específica
   */
  CL: string;
  /**
   * @description Código da Tarifa.
   * Deverão ser incluídos os códigos de três dígitos, correspondentes à tarifa.
   */
  cTar?: string;
  /**
   * @description Valor da Tarifa.
   * Valor da tarifa por kg quando for o caso.
   */
  vTar: number;
};
/**
 * @description Preenchido quando for  transporte de produtos classificados pela ONU como perigosos.
 * O preenchimento desses campos não desobriga a empresa aérea de emitir os demais documentos que constam na legislação vigente.
 */
export type CteSefazPeri = {
  /**
   * @description Número ONU/UN.
   * Ver a legislação de transporte de produtos perigosos aplicadas ao modal.
   */
  nONU: string;
  /**
   * @description Quantidade total de volumes contendo artigos perigosos.
   * Preencher com o número de volumes (unidades) de artigos perigosos, ou seja, cada embalagem devidamente marcada e etiquetada (por ex.: número de caixas, de tambores, de bombonas, dentre outros). Não deve ser preenchido com o número de ULD, pallets ou containers.
   */
  qTotEmb: string;
  infTotAP: CteSefazInfTotAP;
};
/**
 * @description Grupo de informações das quantidades totais de artigos perigosos.
 * Preencher conforme a legislação de transporte de produtos perigosos aplicada ao modal.
 */
export type CteSefazInfTotAP = {
  /**
   * @description Quantidade total de artigos perigosos.
   * 15 posições, sendo 11 inteiras e 4 decimais.
   * Deve indicar a quantidade total do artigo perigoso, tendo como base a unidade referenciada na Tabela 3-1 do Doc 9284, por exemplo: litros
   * quilogramas
   * quilograma bruto etc. O preenchimento não deve, entretanto, incluir a unidade de medida. No caso de transporte de material radioativo, deve-se indicar o somatório dos Índices de Transporte (TI). Não indicar a quantidade do artigo perigoso por embalagem.
   */
  qTotProd: number;
  /**
   * @description Unidade de medida.
   * * 1 - KG
   * * 2 - KG G (quilograma bruto)
   * * 3 - LITROS
   * * 4 - TI (índice de transporte para radioativos)
   * * 5 - Unidades (apenas para artigos perigosos medidos em unidades que não se enquadram nos itens acima. Exemplo: baterias, celulares, equipamentos, veículos, dentre outros)
   */
  uniAP: number;
};
/** @description Informações do modal Ferroviário. */
export type CteSefazFerrov = {
  /**
   * @description Tipo de Tráfego.
   * Preencher com:
   * * 0 - Próprio
   * * 1 - Mútuo
   * * 2 - Rodoferroviário
   * * 3 - Rodoviário
   */
  tpTraf: number;
  trafMut?: CteSefazTrafMut;
  /**
   * @description Fluxo Ferroviário.
   * Trata-se de um número identificador do contrato firmado com o cliente.
   */
  fluxo: string;
};
/** @description Detalhamento de informações para o tráfego mútuo. */
export type CteSefazTrafMut = {
  /**
   * @description Responsável pelo Faturamento.
   * Preencher com:
   * * 1 - Ferrovia de origem
   * * 2 - Ferrovia de destino
   */
  respFat: number;
  /**
   * @description Ferrovia Emitente do CTe.
   * Preencher com:
   * * 1 - Ferrovia de origem
   * * 2 - Ferrovia de destino
   */
  ferrEmi: number;
  /** @description Valor do Frete do Tráfego Mútuo. */
  vFrete: number;
  /** @description Chave de acesso do CT-e emitido pelo ferrovia de origem. */
  chCTeFerroOrigem?: string;
  ferroEnv?: CteSefazFerroEnv[];
};
/** @description Informações das Ferrovias Envolvidas. */
export type CteSefazFerroEnv = {
  /**
   * @description Número do CNPJ.
   * Informar o CNPJ da Ferrovia Envolvida. Caso a Ferrovia envolvida não seja inscrita no CNPJ o campo deverá preenchido com zeros.
   * Informar os zeros não significativos.
   */
  CNPJ: string;
  /**
   * @description Código interno da Ferrovia envolvida.
   * Uso da transportadora.
   */
  cInt?: string;
  /** @description Inscrição Estadual. */
  IE?: string;
  /** @description Razão Social ou Nome. */
  xNome: string;
  enderFerro: CteSefazEnderFer;
};
/** @description Dados do endereço da ferrovia envolvida. */
export type CteSefazEnderFer = {
  /** @description Logradouro. */
  xLgr: string;
  /** @description Número. */
  nro?: string;
  /** @description Complemento. */
  xCpl?: string;
  /** @description Bairro. */
  xBairro?: string;
  /**
   * @description Código do município.
   * Utilizar a tabela do IBGE
   * Informar 9999999 para operações com o exterior.
   */
  cMun: string;
  /**
   * @description Nome do município.
   * Informar EXTERIOR para operações com o exterior.
   */
  xMun: string;
  /** @description CEP. */
  CEP: string;
  /**
   * @description Sigla da UF.
   * Informar EX para operações com o exterior.
   */
  UF: string;
};
/** @description Informações do modal Aquaviário. */
export type CteSefazAquav = {
  /** @description Valor da Prestação Base de Cálculo do AFRMM. */
  vPrest: number;
  /** @description AFRMM (Adicional de Frete para Renovação da Marinha Mercante). */
  vAFRMM: number;
  /** @description Identificação do Navio. */
  xNavio: string;
  balsa?: CteSefazBalsa[];
  /** @description Número da Viagem. */
  nViag?: string;
  /**
   * @description Direção.
   * Preencher com: N-Norte, L-Leste, S-Sul, O-Oeste.
   */
  direc: string;
  /** @description Irin do navio sempre deverá ser informado. */
  irin: string;
  detCont?: CteSefazDetCont[];
  /**
   * @description Tipo de Navegação.
   * Preencher com:
   * * 0 - Interior
   * * 1 - Cabotagem
   */
  tpNav?: number;
};
/** @description Grupo de informações das balsas. */
export type CteSefazBalsa = {
  /** @description Identificador da Balsa. */
  xBalsa: string;
};
/**
 * @description Grupo de informações de detalhamento dos conteiners
 * (Somente para Redespacho Intermediário e Serviço Vinculado a Multimodal).
 */
export type CteSefazDetCont = {
  /** @description Identificação do Container. */
  nCont: string;
  lacre?: CteSefazLacre[];
  infDoc?: CteSefazDetCont_InfDoc;
};
/** @description Grupo de informações dos lacres dos cointainers da qtde da carga. */
export type CteSefazLacre = {
  /** @description Lacre. */
  nLacre: string;
};
/** @description Informações dos documentos dos conteiners. */
export type CteSefazDetCont_InfDoc = {
  infNF?: CteSefazDetCont_InfDoc_InfNF[];
  infNFe?: CteSefazDetCont_InfDoc_InfNFe[];
};
/** @description Informações das NF. */
export type CteSefazDetCont_InfDoc_InfNF = {
  /** @description Série. */
  serie: string;
  /** @description Número. */
  nDoc: string;
  /** @description Unidade de medida rateada (Peso,Volume). */
  unidRat?: number;
};
/** @description Informações das NFe. */
export type CteSefazDetCont_InfDoc_InfNFe = {
  /** @description Chave de acesso da NF-e. */
  chave: string;
  /** @description Unidade de medida rateada (Peso,Volume). */
  unidRat?: number;
};
/** @description Informações do modal Dutoviário. */
export type CteSefazDuto = {
  /** @description Valor da tarifa. */
  vTar?: number;
  /**
   * Format: date
   * @description Data de Início da prestação do serviço.
   */
  dIni: string;
  /**
   * Format: date
   * @description Data de Fim da prestação do serviço.
   */
  dFim: string;
  /**
   * @description Classificação do Dutoviário.
   * Informar: 1 - Gasoduto 2 - Mineroduto 3 - Oleoduto.
   */
  classDuto?: number;
  /**
   * @description Tipo de contratação do serviço de transporte (apenas para gasoduto).
   * Informar:
   * * 0 - Ponta a ponto
   * * 1 - Capacidade de Entrada
   * * 2 - Capacidade de Saida
   */
  tpContratacao?: number;
  /** @description Código do Ponto de Entrada. */
  codPontoEntrada?: string;
  /** @description Código do Ponto de Saída. */
  codPontoSaida?: string;
  /** @description Número do Contrato de Capacidade. */
  nContrato?: string;
};
/** @description Informações do Multimodal. */
export type CteSefazMultimodal = {
  /** @description Número do Certificado do Operador de Transporte Multimodal. */
  COTM: string;
  /**
   * @description Indicador Negociável
   * Preencher com: 0 - Não Negociável
   * * 1 - Negociável
   */
  indNegociavel: number;
  seg?: CteSefazSeg;
};
/** @description Informações de Seguro do Multimodal. */
export type CteSefazSeg = {
  infSeg: CteSefazInfSeg;
  /**
   * @description Número da Apólice.
   * Obrigatório pela lei 11.442/07 (RCTRC).
   */
  nApol: string;
  /**
   * @description Número da Averbação.
   * Não é obrigatório, pois muitas averbações ocorrem aapós a emissão do CT, mensalmente, por exemplo.
   */
  nAver: string;
};
/** @description Informações da seguradora. */
export type CteSefazInfSeg = {
  /** @description Nome da Seguradora. */
  xSeg: string;
  /**
   * @description Número do CNPJ da seguradora.
   * Obrigatório apenas se responsável pelo seguro for (2) responsável pela contratação do transporte - pessoa jurídica.
   */
  CNPJ: string;
};
/** @description informações dos veículos transportados. */
export type CteSefazVeicNovos = {
  /** @description Chassi do veículo. */
  chassi: string;
  /**
   * @description Cor do veículo.
   * Código de cada montadora.
   */
  cCor: string;
  /** @description Descrição da cor. */
  xCor: string;
  /**
   * @description Código Marca Modelo.
   * Utilizar tabela RENAVAM.
   */
  cMod: string;
  /** @description Valor Unitário do Veículo. */
  vUnit: number;
  /** @description Frete Unitário. */
  vFrete: number;
};
/** @description Dados da cobrança do CT-e. */
export type CteSefazCobr = {
  fat?: CteSefazFat;
  dup?: CteSefazDup[];
};
/** @description Dados da fatura. */
export type CteSefazFat = {
  /** @description Número da fatura. */
  nFat?: string;
  /** @description Valor original da fatura. */
  vOrig?: number;
  /** @description Valor do desconto da fatura. */
  vDesc?: number;
  /** @description Valor líquido da fatura. */
  vLiq?: number;
};
/** @description Dados das duplicatas. */
export type CteSefazDup = {
  /** @description Número da duplicata. */
  nDup?: string;
  /**
   * Format: date
   * @description Data de vencimento da duplicata (AAAA-MM-DD).
   */
  dVenc?: string;
  /** @description Valor da duplicata. */
  vDup?: number;
};
/** @description Informações do CT-e de substituição. */
export type CteSefazInfCteSub = {
  /** @description Chave de acesso do CT-e a ser substituído (original). */
  chCte: string;
  /** @description Indicador de CT-e Alteração de Tomador. */
  indAlteraToma?: number;
};
/** @description Informações do CT-e Globalizado. */
export type CteSefazInfGlobalizado = {
  /** @description Preencher com informações adicionais, legislação do regime especial, etc. */
  xObs: string;
};
/** @description Informações do Serviço Vinculado a Multimodal. */
export type CteSefazInfServVinc = {
  infCTeMultimodal: CteSefazInfCTeMultimodal[];
};
/** @description informações do CT-e multimodal vinculado. */
export type CteSefazInfCTeMultimodal = {
  /** @description Chave de acesso do CT-e Multimodal. */
  chCTeMultimodal: string;
};
/** @description Detalhamento do CT-e complementado. */
export type CteSefazInfCteComp = {
  /** @description Chave do CT-e complementado. */
  chCTe: string;
};
/**
 * @description Autorizados para download do XML do DF-e.
 * Informar CNPJ ou CPF. Preencher os zeros não significativos.
 */
export type CteSefazAutXML = {
  /**
   * @description CNPJ do autorizado.
   * Informar zeros não significativos.
   */
  CNPJ?: string;
  /**
   * @description CPF do autorizado.
   * Informar zeros não significativos.
   */
  CPF?: string;
};
/** @description Informações do Responsável Técnico pela emissão do DF-e. */
export type CteSefazRespTec = {
  /**
   * @description CNPJ da pessoa jurídica responsável técnica pelo sistema utilizado na emissão do documento fiscal eletrônico.
   * Informar o CNPJ da pessoa jurídica desenvolvedora do sistema utilizado na emissão do documento fiscal eletrônico.
   */
  CNPJ: string;
  /**
   * @description Nome da pessoa a ser contatada.
   * Informar o nome da pessoa a ser contatada na empresa desenvolvedora do sistema utilizado na emissão do documento fiscal eletrônico. No caso de pessoa física, informar o respectivo nome.
   */
  xContato: string;
  /** @description Email da pessoa jurídica a ser contatada. */
  email: string;
  /**
   * @description Telefone da pessoa jurídica a ser contatada.
   * Preencher com o Código DDD + número do telefone.
   */
  fone: string;
  /**
   * @description Identificador do código de segurança do responsável técnico.
   * Identificador do CSRT utilizado para geração do hash.
   */
  idCSRT?: number;
  /** @description Código de Segurança do Responsável Técnico utilizado para montar o hash do CSRT. */
  CSRT?: string;
  /**
   * @description Hash do token do código de segurança do responsável técnico.
   * O hashCSRT é o resultado das funções SHA-1 e base64 do token CSRT fornecido pelo fisco + chave de acesso do DF-e. (Implementação em futura NT)
   * Observação: 28 caracteres são representados no schema como 20 bytes do tipo base64Binary.
   *
   * *Se não informado, será calculado automaticamente, desde que os campos `idCSRT` e `CSRT` sejam fornecidos.*
   */
  hashCSRT?: string;
};
/** @description Grupo de informações do pedido de emissão da Nota Fiscal Fácil. */
export type CteSefazInfSolicNFF = {
  /**
   * @description Solicitação do pedido de emissão da NFF.
   * Será preenchido com a totalidade de campos informados no aplicativo emissor serializado.
   */
  xSolic: string;
};
/** @description Informações suplementares do CT-e. */
export type CteSefazInfCTeSupl = {
  /**
   * @description Texto com o QR-Code impresso no DACTE.
   *
   * *Geramos automaticamente quando nenhum valor é informado.*
   */
  qrCodCTe?: string;
};
export type CteSimpPedidoEmissao = {
  infCte: CteSimpSefazInfCteSimp;
  infCTeSupl?: CteSimpSefazInfCTeSuplSimp;
  /**
   * @description Identificação do Ambiente.
   * @enum {string}
   */
  ambiente: "homologacao" | "producao";
  /** @description Seu identificador único para este documento. Opcional, ajuda a evitar o envio duplicado de um mesmo documento. */
  referencia?: string;
};
/** @description Informações do CT-e. */
export type CteSimpSefazInfCteSimp = {
  /**
   * @description Versão do leiaute.
   * Ex: "4.00".
   */
  versao: string;
  /**
   * @description Identificador da tag a ser assinada.
   * Informar a chave de acesso do CT-e e precedida do literal "CTe".
   *
   * *Geramos automaticamente quando nenhum valor é informado.*
   */
  Id?: string;
  ide: CteSimpSefazIdeSimp;
  compl?: CteSimpSefazComplSimp;
  emit: CteSimpSefazEmitSimp;
  toma: CteSimpSefazTomaSimp;
  infCarga: CteSimpSefazInfCargaSimp;
  det: CteSimpSefazDetSimp[];
  infModal: CteSimpSefazInfModalSimp;
  cobr?: CteSimpSefazCobrSimp;
  infCteSub?: CteSimpSefazInfCteSubSimp;
  imp: CteSimpSefazInfCte_ImpSimp;
  total: CteSimpSefazTotalSimp;
  autXML?: CteSimpSefazAutXMLSimp[];
  infRespTec?: CteSimpSefazRespTecSimp;
  infSolicNFF?: CteSimpSefazInfSolicNFFSimp;
};
/** @description Identificação do CT-e. */
export type CteSimpSefazIdeSimp = {
  /**
   * @description Código da UF do emitente do CT-e.
   * Utilizar a Tabela do IBGE.
   */
  cUF: number;
  /**
   * @description Código numérico que compõe a Chave de Acesso.
   * Número aleatório gerado pelo emitente para cada CT-e, com o objetivo de evitar acessos indevidos ao documento.
   *
   * *Geramos automaticamente quando nenhum valor é informado.*
   */
  cCT?: string;
  /** @description Código Fiscal de Operações e Prestações. */
  CFOP: string;
  /** @description Natureza da Operação. */
  natOp: string;
  /**
   * @description Modelo do documento fiscal.
   * Utilizar o código 57 para identificação do CT-e, emitido em substituição aos modelos de conhecimentos em papel.
   */
  mod?: number;
  /**
   * @description Série do CT-e.
   * Preencher com "0" no caso de série única.
   */
  serie: number;
  /** @description Número do CT-e. */
  nCT: number;
  /**
   * Format: date-time
   * @description Data e hora de emissão do CT-e.
   * Formato AAAA-MM-DDTHH:MM:DD TZD.
   */
  dhEmi: string;
  /**
   * @description Formato de impressão do DACTE:
   * * 1 - Retrato
   * * 2 - Paisagem
   */
  tpImp: number;
  /**
   * @description Forma de emissão do CT-e.
   * Preencher com:
   * * 1 - Normal
   * * 3 - Regime Especial NFF
   * * 4 - EPEC pela SVC
   * * 7 - Autorização pela SVC-RS
   * * 8 - Autorização pela SVC-SP
   */
  tpEmis: number;
  /**
   * @description Digito Verificador da chave de acesso do CT-e.
   * Informar o dígito  de controle da chave de acesso do CT-e, que deve ser calculado com a aplicação do algoritmo módulo 11 (base 2,9) da chave de acesso.
   *
   * *Geramos automaticamente quando nenhum valor é informado.*
   */
  cDV?: number;
  /**
   * @description Tipo do Ambiente:
   * * 1 - Produção
   * * 2 - Homologação
   */
  tpAmb?: number;
  /**
   * @description Tipo do CT-e Simplificado.
   * Preencher com:
   * * 5 - CTe Simplificado
   * * 6 - Substituição CTe Simplificado
   */
  tpCTe: number;
  /**
   * @description Identificador do processo de emissão do CT-e.
   * Preencher com:
   * * 0 - emissão de CT-e com aplicativo do contribuinte
   * * 3 - emissão CT-e pelo contribuinte com aplicativo fornecido pelo SEBRAE
   */
  procEmi: number;
  /**
   * @description Versão do processo de emissão.
   * Informar a versão do aplicativo emissor de CT-e.
   */
  verProc: string;
  /**
   * @description Código do Município de envio do CT-e (de onde o documento foi transmitido).
   * Utilizar a tabela do IBGE. Informar 9999999 para as operações com o exterior.
   */
  cMunEnv: string;
  /**
   * @description Nome do Município de envio do CT-e (de onde o documento foi transmitido).
   * Informar PAIS/Municipio para as operações com o exterior.
   */
  xMunEnv: string;
  /**
   * @description Sigla da UF de envio do CT-e (de onde o documento foi transmitido).
   * Informar 'EX' para operações com o exterior.
   */
  UFEnv: string;
  /**
   * @description Modal. Preencher com:
   * * 01 - Rodoviário
   * * 02 - Aéreo
   * * 03 - Aquaviário
   * * 04 - Ferroviário
   * * 05 - Dutoviário
   * * 06 - Multimodal
   */
  modal: string;
  /**
   * @description Tipo do Serviço.
   * Preencher com:
   * * 0 - Normal
   * * 1 - Subcontratação
   * * 2 - Redespacho
   */
  tpServ: number;
  /**
   * @description UF do início da prestação.
   * Informar 'EX' para operações com o exterior.
   */
  UFIni: string;
  /**
   * @description UF do término da prestação.
   * Informar 'EX' para operações com o exterior.
   */
  UFFim: string;
  /**
   * @description Indicador se o Recebedor retira no Aeroporto, Filial, Porto ou Estação de Destino? Preencher com:
   * * 0 - Sim
   * * 1 - Não
   */
  retira: number;
  /** @description Detalhes do retira. */
  xDetRetira?: string;
  /**
   * Format: date-time
   * @description Data e Hora da entrada em contingência.
   * Informar a data e hora no formato AAAA-MM-DDTHH:MM:SS.
   */
  dhCont?: string;
  /** @description Justificativa da entrada em contingência. */
  xJust?: string;
  gCompraGov?: CteSimpSefazCompraGovReduzidoSimp;
};
/** @description Grupo de Compras Governamentais. */
export type CteSimpSefazCompraGovReduzidoSimp = {
  /**
   * @description Para administração pública direta e suas autarquias e fundações:
   * * 1 - União
   * * 2 - Estados
   * * 3 - Distrito Federal
   * * 4 - Municípios
   */
  tpEnteGov: number;
  /** @description Percentual de redução de aliquota em compra goverrnamental. */
  pRedutor: number;
};
/** @description Dados complementares do CT-e para fins operacionais ou comerciais. */
export type CteSimpSefazComplSimp = {
  /**
   * @description Característica adicional do transporte.
   * Texto livre:
   * REENTREGA
   * DEVOLUÇÃO
   * REFATURAMENTO
   * etc.
   */
  xCaracAd?: string;
  /**
   * @description Característica adicional do serviço.
   * Texto livre:
   * ENTREGA EXPRESSA
   * LOGÍSTICA REVERSA
   * CONVENCIONAL
   * EMERGENCIAL
   * etc.
   */
  xCaracSer?: string;
  fluxo?: CteSimpSefazFluxoSimp;
  /** @description Observações Gerais. */
  xObs?: string;
  ObsCont?: CteSimpSefazObsContSimp[];
  ObsFisco?: CteSimpSefazObsFiscoSimp[];
};
/**
 * @description Previsão do fluxo da carga.
 * Preenchimento obrigatório para o modal aéreo.
 */
export type CteSimpSefazFluxoSimp = {
  /**
   * @description Sigla ou código interno da Filial/Porto/Estação/ Aeroporto de Origem.
   * Observações para o modal aéreo:
   * * Preenchimento obrigatório para o modal aéreo.
   */
  xOrig?: string;
  pass?: CteSimpSefazPassSimp[];
  /**
   * @description Sigla ou código interno da Filial/Porto/Estação/Aeroporto de Destino.
   * Observações para o modal aéreo:
   * * Preenchimento obrigatório para o modal aéreo.
   */
  xDest?: string;
  /** @description Código da Rota de Entrega. */
  xRota?: string;
};
export type CteSimpSefazPassSimp = {
  /**
   * @description Sigla ou código interno da Filial/Porto/Estação/Aeroporto de Passagem.
   * Observação para o modal aéreo:
   * * O código de três letras IATA, referente ao aeroporto de transferência, deverá ser incluído, quando for o caso. Quando não for possível,  utilizar a sigla OACI. Qualquer solicitação de itinerário deverá ser incluída.
   */
  xPass?: string;
};
/**
 * @description Campo de uso livre do contribuinte.
 * Informar o nome do campo no atributo xCampo e o conteúdo do campo no XTexto.
 */
export type CteSimpSefazObsContSimp = {
  /** @description Identificação do campo. */
  xCampo: string;
  /** @description Conteúdo do campo. */
  xTexto: string;
};
/**
 * @description Campo de uso livre do contribuinte.
 * Informar o nome do campo no atributo xCampo e o conteúdo do campo no XTexto.
 */
export type CteSimpSefazObsFiscoSimp = {
  /** @description Identificação do campo. */
  xCampo: string;
  /** @description Conteúdo do campo. */
  xTexto: string;
};
/** @description Identificação do Emitente do CT-e. */
export type CteSimpSefazEmitSimp = {
  /**
   * @description CNPJ do emitente.
   * Informar zeros não significativos.
   *
   * ***Obrigatório caso o emitente seja pessoa jurídica***.
   */
  CNPJ?: string;
  /**
   * @description CPF do emitente.
   * Informar zeros não significativos.
   * Usar com série específica 920-969 para emitente pessoa física com inscrição estadual.
   *
   * ***Obrigatorio caso o emitente seja pessoa física***.
   */
  CPF?: string;
  /**
   * @description Inscrição Estadual do Emitente.
   * A IE do emitente somente ficará sem informação para o caso do Regime Especial da NFF (tpEmis=3).
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  IE?: string;
  /** @description Inscrição Estadual do Substituto Tributário. */
  IEST?: string;
  /**
   * @description Razão social ou Nome do emitente.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  xNome?: string;
  /**
   * @description Nome fantasia.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  xFant?: string;
  enderEmit?: CteSimpSefazEndeEmiSimp;
  /**
   * @description Código do Regime Tributário. Informar:
   * * 1 - Simples Nacional;
   * * 2 - Simples Nacional, excesso sublimite de receita bruta;
   * * 3 - Regime Normal;
   * * 4 - Simples Nacional - Microempreendedor Individual (MEI).
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  CRT?: number;
};
/**
 * @description Endereço do emitente.
 *
 * *Caso não seja informado, será utilizado o do cadastro da empresa.*
 */
export type CteSimpSefazEndeEmiSimp = {
  /**
   * @description Logradouro.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  xLgr?: string;
  /**
   * @description Número.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  nro?: string;
  /**
   * @description Complemento.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  xCpl?: string;
  /**
   * @description Bairro.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  xBairro?: string;
  /**
   * @description Código do município (utilizar a tabela do IBGE).
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  cMun?: string;
  /**
   * @description Nome do município.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  xMun?: string;
  /**
   * @description CEP.
   * Informar zeros não significativos.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  CEP?: string;
  /**
   * @description Sigla da UF.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  UF?: string;
  /**
   * @description Telefone.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  fone?: string;
};
/** @description Identificação do tomador do serviço no CT-e. */
export type CteSimpSefazTomaSimp = {
  /**
   * @description Tomador do Serviço.
   * Preencher com:
   * * 0 - Remetente
   * * 1 - Expedidor
   * * 2 - Recebedor
   * * 3 - Destinatário
   * * 4 - Terceiro
   */
  toma: number;
  /**
   * @description Indicador do papel do tomador na prestação do serviço:
   * * 1 - Contribuinte ICMS
   * * 2 - Contribuinte isento de inscrição
   * * 9 - Não Contribuinte
   * Aplica-se ao tomador que for indicado no toma.
   */
  indIEToma: number;
  /**
   * @description Número do CNPJ.
   * Em caso de empresa não estabelecida no Brasil, será informado o CNPJ com zeros.
   * Informar os zeros não significativos.
   */
  CNPJ?: string;
  /**
   * @description Número do CPF.
   * Informar os zeros não significativos.
   */
  CPF?: string;
  /**
   * @description Inscrição Estadual.
   * Informar a IE do tomador ou ISENTO se tomador é contribuinte do ICMS isento de inscrição no cadastro de contribuintes do ICMS. Caso o tomador não seja contribuinte do ICMS não informar o conteúdo.
   */
  IE?: string;
  /** @description Razão Social ou Nome. */
  xNome: string;
  /**
   * @description Inscrição na SUFRAMA.
   * (Obrigatório nas operações com as áreas com benefícios de incentivos fiscais sob controle da SUFRAMA).
   */
  ISUF?: string;
  /** @description Telefone. */
  fone?: string;
  enderToma: CteSimpSefazEnderecoSimp;
  /** @description Endereço de email. */
  email?: string;
};
/** @description Dados do endereço. */
export type CteSimpSefazEnderecoSimp = {
  /** @description Logradouro. */
  xLgr: string;
  /** @description Número. */
  nro: string;
  /** @description Complemento. */
  xCpl?: string;
  /** @description Bairro. */
  xBairro: string;
  /**
   * @description Código do município (utilizar a tabela do IBGE).
   * Informar 9999999 para operações com o exterior.
   */
  cMun: string;
  /**
   * @description Nome do município.
   * Informar EXTERIOR para operações com o exterior.
   */
  xMun: string;
  /**
   * @description CEP.
   * Informar os zeros não significativos.
   */
  CEP?: string;
  /**
   * @description Sigla da UF.
   * Informar EX para operações com o exterior.
   */
  UF: string;
  /**
   * @description Código do país.
   * Utilizar a tabela do BACEN.
   */
  cPais?: string;
  /** @description Nome do país. */
  xPais?: string;
};
/** @description Informações da Carga do CT-e. */
export type CteSimpSefazInfCargaSimp = {
  /** @description Valor total da carga. */
  vCarga: number;
  /**
   * @description Produto predominante.
   * Informar a descrição do produto predominante.
   */
  proPred: string;
  /**
   * @description Outras características da carga.
   * "FRIA", "GRANEL", "REFRIGERADA", "Medidas: 12X12X12".
   */
  xOutCat?: string;
  infQ: CteSimpSefazInfQSimp[];
  /**
   * @description Valor da Carga para efeito de averbação.
   * Normalmente igual ao valor declarado da mercadoria, diferente por exemplo, quando a mercadoria transportada é isenta de tributos nacionais para exportação, onde é preciso averbar um valor maior, pois no caso de indenização, o valor a ser pago será maior.
   */
  vCargaAverb?: number;
};
/**
 * @description Informações de quantidades da Carga do CT-e.
 * Para o Aéreo é obrigatório o preenchimento desse campo da seguinte forma.
 * * 1 - Peso Bruto, sempre em quilogramas (obrigatório)
 * * 2 - Peso Cubado
 * sempre em quilogramas
 * * 3 - Quantidade de volumes, sempre em unidades (obrigatório)
 * * 4 - Cubagem, sempre em metros cúbicos (obrigatório apenas quando for impossível preencher as dimensões da(s) embalagem(ens) na tag xDime do leiaute do Aéreo)
 */
export type CteSimpSefazInfQSimp = {
  /**
   * @description Código da Unidade de Medida.
   * Preencher com:
   * * 00 - M3
   * * 01 - KG
   * * 02 - TON
   * * 03 - UNIDADE
   * * 04 - LITROS
   * * 05 - MMBTU
   */
  cUnid: string;
  /**
   * @description Tipo da Medida.
   * Informar com:
   * * 00 - Cubagem da NF-e
   * * 01 - Cubagem Aferida pelo Transportador
   * * 02 - Peso Bruto da NF-e
   * * 03 - Peso Bruto Aferido pelo Transportador
   * * 04 - Peso Cubado
   * * 05 - Peso Base do Cálculo do Frete
   * * 06 - Peso para uso Operacional
   * * 07 - Caixas
   * * 08 - Paletes
   * * 09 - Sacas
   * * 10 - Containers
   * * 11 - Rolos
   * * 12 - Bombonas
   * * 13 - Latas
   * * 14 - Litragem
   * * 15 - Milhão de BTU (British Thermal Units)
   * * 99 - Outros
   */
  tpMed: string;
  /** @description Quantidade. */
  qCarga: number;
};
/** @description Detalhamento das entregas / prestações do CTe Simplificado. */
export type CteSimpSefazDetSimp = {
  /** @description Número identificador do item agrupador da prestação. */
  nItem: number;
  /**
   * @description Código do Município de início da prestação.
   * Utilizar a tabela do IBGE. Informar 9999999 para operações com o exterior.
   */
  cMunIni: string;
  /**
   * @description Nome do Município do início da prestação.
   * Informar 'EXTERIOR' para operações com o exterior.
   */
  xMunIni: string;
  /**
   * @description Código do Município de término da prestação.
   * Utilizar a tabela do IBGE. Informar 9999999 para operações com o exterior.
   */
  cMunFim: string;
  /**
   * @description Nome do Município do término da prestação.
   * Informar 'EXTERIOR' para operações com o exterior.
   */
  xMunFim: string;
  /**
   * @description Valorl da Prestação do Serviço.
   * Pode conter zeros quando o CT-e for de complemento de ICMS.
   */
  vPrest: number;
  /** @description Valor a Receber. */
  vRec: number;
  Comp?: CteSimpSefazCompSimp[];
  infNFe?: CteSimpSefazInfNFeSimp[];
  infDocAnt?: CteSimpSefazInfDocAntSimp[];
};
/** @description Componentes do Valor da Prestação. */
export type CteSimpSefazCompSimp = {
  /**
   * @description Nome do componente.
   * Exxemplos: FRETE PESO, FRETE VALOR, SEC/CAT, ADEME, AGENDAMENTO, etc.
   */
  xNome: string;
  /** @description Valor do componente. */
  vComp: number;
};
/** @description Informações das NF-e. */
export type CteSimpSefazInfNFeSimp = {
  /** @description Chave de acesso da NF-e. */
  chNFe: string;
  /**
   * @description PIN SUFRAMA.
   * PIN atribuído pela SUFRAMA para a operação.
   */
  PIN?: string;
  /**
   * Format: date
   * @description Data prevista de entrega.
   * Formato AAAA-MM-DD.
   */
  dPrev?: string;
  infUnidCarga?: CteSimpSefazUnidCargaSimp[];
  infUnidTransp?: CteSimpSefazUnidadeTranspSimp[];
};
/**
 * @description Informações das Unidades de Carga (Containeres/ULD/Outros).
 * Dispositivo de carga utilizada (Unit Load Device - ULD) significa todo tipo de contêiner de carga, vagão, contêiner de avião, palete de aeronave com rede ou palete de aeronave com rede sobre um iglu.
 */
export type CteSimpSefazUnidCargaSimp = {
  /**
   * @description Tipo da Unidade de Carga.
   * * 1 - Container
   * * 2 - ULD
   * * 3 - Pallet
   * * 4 - Outros
   */
  tpUnidCarga: number;
  /**
   * @description Identificação da Unidade de Carga.
   * Informar a identificação da unidade de carga, por exemplo: número do container.
   */
  idUnidCarga: string;
  lacUnidCarga?: CteSimpSefazLacUnidCargaSimp[];
  /** @description Quantidade rateada (Peso,Volume). */
  qtdRat?: number;
};
/** @description Lacres das Unidades de Carga. */
export type CteSimpSefazLacUnidCargaSimp = {
  /** @description Número do lacre. */
  nLacre: string;
};
/**
 * @description Informações das Unidades de Transporte (Carreta/Reboque/Vagão).
 * Deve ser preenchido com as informações das unidades de transporte utilizadas.
 */
export type CteSimpSefazUnidadeTranspSimp = {
  /**
   * @description Tipo da Unidade de Transporte.
   * * 1 - Rodoviário Tração
   * * 2 - Rodoviário Reboque
   * * 3 - Navio
   * * 4 - Balsa
   * * 5 - Aeronave
   * * 6 - Vagão
   * * 7 - Outros
   */
  tpUnidTransp: number;
  /**
   * @description Identificação da Unidade de Transporte.
   * Informar a identificação conforme o tipo de unidade de transporte.
   * Por exemplo: para rodoviário tração ou reboque deverá preencher com a placa do veículo.
   */
  idUnidTransp: string;
  lacUnidTransp?: CteSimpSefazLacUnidTranspSimp[];
  infUnidCarga?: CteSimpSefazUnidCargaSimp[];
  /** @description Quantidade rateada (Peso,Volume). */
  qtdRat?: number;
};
/** @description Lacres das Unidades de Transporte. */
export type CteSimpSefazLacUnidTranspSimp = {
  /** @description Número do lacre. */
  nLacre: string;
};
/** @description Documentos anteriores. */
export type CteSimpSefazInfDocAntSimp = {
  /** @description Chave de acesso do CT-e. */
  chCTe: string;
  /**
   * @description indica se a prestação é total ou parcial em relação as notas do documento anterior.
   * Preencher com:
   * * 1 - Total
   * * 2 - Parcial
   */
  tpPrest: number;
  infNFeTranspParcial?: CteSimpSefazInfNFeTranspParcialSimp[];
};
export type CteSimpSefazInfNFeTranspParcialSimp = {
  /**
   * @description Chave de acesso da NF-e.
   * Informando o tpPrest com “2 - Parcial” deve-se informar as chaves de acesso das NF-e que acobertam a carga transportada.
   */
  chNFe: string;
};
/** @description Informações do modal. */
export type CteSimpSefazInfModalSimp = {
  /** @description Versão do leiaute específico para o Modal. */
  versaoModal: string;
  rodo?: CteSimpSefazRodoSimp;
  aereo?: CteSimpSefazAereoSimp;
  ferrov?: CteSimpSefazFerrovSimp;
  aquav?: CteSimpSefazAquavSimp;
  duto?: CteSimpSefazDutoSimp;
  multimodal?: CteSimpSefazMultimodalSimp;
};
/** @description Informações do modal Rodoviário. */
export type CteSimpSefazRodoSimp = {
  /**
   * @description Registro Nacional de Transportadores Rodoviários de Carga.
   * Registro obrigatório do emitente do CT-e junto à ANTT para exercer a atividade de transportador rodoviário de cargas por conta de terceiros e mediante remuneração.
   */
  RNTRC: string;
  occ?: CteSimpSefazOccSimp[];
};
/** @description Ordens de Coleta associados. */
export type CteSimpSefazOccSimp = {
  /** @description Série da OCC. */
  serie?: string;
  /** @description Número da Ordem de coleta. */
  nOcc: number;
  /**
   * Format: date
   * @description Data de emissão da ordem de coleta.
   * Formato AAAA-MM-DD.
   */
  dEmi: string;
  emiOcc?: CteSimpSefazEmiOccSimp;
};
export type CteSimpSefazEmiOccSimp = {
  /**
   * @description Número do CNPJ.
   * Informar os zeros não significativos.
   */
  CNPJ: string;
  /**
   * @description Código interno de uso da transportadora.
   * Uso intermo das transportadoras.
   */
  cInt?: string;
  /** @description Inscrição Estadual. */
  IE: string;
  /**
   * @description Sigla da UF.
   * Informar EX para operações com o exterior.
   */
  UF: string;
  /** @description Telefone. */
  fone?: string;
};
/** @description Informações do modal Aéreo. */
export type CteSimpSefazAereoSimp = {
  /**
   * @description Número da Minuta.
   * Documento que precede o CT-e, assinado pelo expedidor, espécie de pedido de serviço.
   */
  nMinu?: number;
  /**
   * @description Número Operacional do Conhecimento Aéreo.
   * Representa o número de controle comumente utilizado pelo conhecimento aéreo composto por uma sequência numérica de onze dígitos. Os três primeiros dígitos representam um código que os operadores de transporte aéreo associados à IATA possuem. Em seguida um número de série de sete dígitos determinados pelo operador de transporte aéreo. Para finalizar, um dígito verificador, que é um sistema de módulo sete imponderado o qual divide o número de série do conhecimento aéreo por sete e usa o resto como dígito de verificação.
   */
  nOCA?: string;
  /**
   * Format: date
   * @description Data prevista da entrega.
   * Formato AAAA-MM-DD.
   */
  dPrevAereo: string;
  natCarga: CteSimpSefazNatCargaSimp;
  tarifa: CteSimpSefazTarifaSimp;
  peri?: CteSimpSefazPeriSimp[];
};
/** @description Natureza da carga. */
export type CteSimpSefazNatCargaSimp = {
  /**
   * @description Dimensão.
   * Formato:1234X1234X1234 (cm). Esse campo deve sempre que possível ser preenchido. Entretanto, quando for impossível o preenchimento das dimensões, fica obrigatório o preenchimento da cubagem em metro cúbico do leiaute do CT-e da estrutura genérica (infQ).
   */
  xDime?: string;
  /**
   * @description Informações de manuseio.
   * * 01 - certificado do expedidor para embarque de animal vivo
   * * 02 - artigo perigoso conforme Declaração do Expedidor anexa
   * * 03 - somente em aeronave cargueira
   * * 04 - artigo perigoso - declaração do expedidor não requerida
   * * 05 - artigo perigoso em quantidade isenta
   * * 06 - gelo seco para refrigeração (especificar no campo observações a quantidade)
   * * 07 - não restrito (especificar a Disposição Especial no campo observações)
   * * 08 - artigo perigoso em carga consolidada (especificar a quantidade no campo observações)
   * * 09 - autorização da autoridade governamental anexa (especificar no campo observações)
   * * 10 - baterias de íons de lítio em conformidade com a Seção II da PI965 - CAO
   * * 11 - baterias de íons de lítio em conformidade com a Seção II da PI966
   * * 12 - baterias de íons de lítio em conformidade com a Seção II da PI967
   * * 13 - baterias de metal lítio em conformidade com a Seção II da PI968 — CAO
   * * 14 - baterias de metal lítio em conformidade com a Seção II da PI969
   * * 15 - baterias de metal lítio em conformidade com a Seção II da PI970
   * * 99 - outro (especificar no campo observações)
   */
  cInfManu?: string[];
};
/** @description Informações de tarifa. */
export type CteSimpSefazTarifaSimp = {
  /**
   * @description Classe.
   * Preencher com:
   * * M - Tarifa Mínima
   * * G - Tarifa Geral
   * * E - Tarifa Específica
   */
  CL: string;
  /**
   * @description Código da Tarifa.
   * Deverão ser incluídos os códigos de três dígitos, correspondentes à tarifa.
   */
  cTar?: string;
  /**
   * @description Valor da Tarifa.
   * Valor da tarifa por kg quando for o caso.
   */
  vTar: number;
};
/**
 * @description Preenchido quando for  transporte de produtos classificados pela ONU como perigosos.
 * O preenchimento desses campos não desobriga a empresa aérea de emitir os demais documentos que constam na legislação vigente.
 */
export type CteSimpSefazPeriSimp = {
  /**
   * @description Número ONU/UN.
   * Ver a legislação de transporte de produtos perigosos aplicadas ao modal.
   */
  nONU: string;
  /**
   * @description Quantidade total de volumes contendo artigos perigosos.
   * Preencher com o número de volumes (unidades) de artigos perigosos, ou seja, cada embalagem devidamente marcada e etiquetada (por ex.: número de caixas, de tambores, de bombonas, dentre outros). Não deve ser preenchido com o número de ULD, pallets ou containers.
   */
  qTotEmb: string;
  infTotAP: CteSimpSefazInfTotAPSimp;
};
/**
 * @description Grupo de informações das quantidades totais de artigos perigosos.
 * Preencher conforme a legislação de transporte de produtos perigosos aplicada ao modal.
 */
export type CteSimpSefazInfTotAPSimp = {
  /**
   * @description Quantidade total de artigos perigosos.
   * 15 posições, sendo 11 inteiras e 4 decimais.
   * Deve indicar a quantidade total do artigo perigoso, tendo como base a unidade referenciada na Tabela 3-1 do Doc 9284, por exemplo: litros
   * quilogramas
   * quilograma bruto etc. O preenchimento não deve, entretanto, incluir a unidade de medida. No caso de transporte de material radioativo, deve-se indicar o somatório dos Índices de Transporte (TI). Não indicar a quantidade do artigo perigoso por embalagem.
   */
  qTotProd: number;
  /**
   * @description Unidade de medida.
   * * 1 - KG
   * * 2 - KG G (quilograma bruto)
   * * 3 - LITROS
   * * 4 - TI (índice de transporte para radioativos)
   * * 5 - Unidades (apenas para artigos perigosos medidos em unidades que não se enquadram nos itens acima. Exemplo: baterias, celulares, equipamentos, veículos, dentre outros)
   */
  uniAP: number;
};
/** @description Informações do modal Ferroviário. */
export type CteSimpSefazFerrovSimp = {
  /**
   * @description Tipo de Tráfego.
   * Preencher com:
   * * 0 - Próprio
   * * 1 - Mútuo
   * * 2 - Rodoferroviário
   * * 3 - Rodoviário
   */
  tpTraf: number;
  trafMut?: CteSimpSefazTrafMutSimp;
  /**
   * @description Fluxo Ferroviário.
   * Trata-se de um número identificador do contrato firmado com o cliente.
   */
  fluxo: string;
};
/** @description Detalhamento de informações para o tráfego mútuo. */
export type CteSimpSefazTrafMutSimp = {
  /**
   * @description Responsável pelo Faturamento.
   * Preencher com:
   * * 1 - Ferrovia de origem
   * * 2 - Ferrovia de destino
   */
  respFat: number;
  /**
   * @description Ferrovia Emitente do CTe.
   * Preencher com:
   * * 1 - Ferrovia de origem
   * * 2 - Ferrovia de destino
   */
  ferrEmi: number;
  /** @description Valor do Frete do Tráfego Mútuo. */
  vFrete: number;
  /** @description Chave de acesso do CT-e emitido pelo ferrovia de origem. */
  chCTeFerroOrigem?: string;
  ferroEnv?: CteSimpSefazFerroEnvSimp[];
};
/** @description Informações das Ferrovias Envolvidas. */
export type CteSimpSefazFerroEnvSimp = {
  /**
   * @description Número do CNPJ.
   * Informar o CNPJ da Ferrovia Envolvida. Caso a Ferrovia envolvida não seja inscrita no CNPJ o campo deverá preenchido com zeros.
   * Informar os zeros não significativos.
   */
  CNPJ: string;
  /**
   * @description Código interno da Ferrovia envolvida.
   * Uso da transportadora.
   */
  cInt?: string;
  /** @description Inscrição Estadual. */
  IE?: string;
  /** @description Razão Social ou Nome. */
  xNome: string;
  enderFerro: CteSimpSefazEnderFerSimp;
};
/** @description Dados do endereço da ferrovia envolvida. */
export type CteSimpSefazEnderFerSimp = {
  /** @description Logradouro. */
  xLgr: string;
  /** @description Número. */
  nro?: string;
  /** @description Complemento. */
  xCpl?: string;
  /** @description Bairro. */
  xBairro?: string;
  /**
   * @description Código do município.
   * Utilizar a tabela do IBGE
   * Informar 9999999 para operações com o exterior.
   */
  cMun: string;
  /**
   * @description Nome do município.
   * Informar EXTERIOR para operações com o exterior.
   */
  xMun: string;
  /** @description CEP. */
  CEP: string;
  /**
   * @description Sigla da UF.
   * Informar EX para operações com o exterior.
   */
  UF: string;
};
/** @description Informações do modal Aquaviário. */
export type CteSimpSefazAquavSimp = {
  /** @description Valor da Prestação Base de Cálculo do AFRMM. */
  vPrest: number;
  /** @description AFRMM (Adicional de Frete para Renovação da Marinha Mercante). */
  vAFRMM: number;
  /** @description Identificação do Navio. */
  xNavio: string;
  balsa?: CteSimpSefazBalsaSimp[];
  /** @description Número da Viagem. */
  nViag?: string;
  /**
   * @description Direção.
   * Preencher com: N-Norte, L-Leste, S-Sul, O-Oeste.
   */
  direc: string;
  /** @description Irin do navio sempre deverá ser informado. */
  irin: string;
  detCont?: CteSimpSefazDetContSimp[];
  /**
   * @description Tipo de Navegação.
   * Preencher com:
   * * 0 - Interior
   * * 1 - Cabotagem
   */
  tpNav?: number;
};
/** @description Grupo de informações das balsas. */
export type CteSimpSefazBalsaSimp = {
  /** @description Identificador da Balsa. */
  xBalsa: string;
};
/**
 * @description Grupo de informações de detalhamento dos conteiners
 * (Somente para Redespacho Intermediário e Serviço Vinculado a Multimodal).
 */
export type CteSimpSefazDetContSimp = {
  /** @description Identificação do Container. */
  nCont: string;
  lacre?: CteSimpSefazLacreSimp[];
  infDoc?: CteSimpSefazInfDocSimp;
};
/** @description Grupo de informações dos lacres dos cointainers da qtde da carga. */
export type CteSimpSefazLacreSimp = {
  /** @description Lacre. */
  nLacre: string;
};
/** @description Informações dos documentos dos conteiners. */
export type CteSimpSefazInfDocSimp = {
  infNF?: CteSimpSefazInfNFSimp[];
  infNFe?: CteSimpSefazInfDoc_InfNFeSimp[];
};
/** @description Informações das NF. */
export type CteSimpSefazInfNFSimp = {
  /** @description Série. */
  serie: string;
  /** @description Número. */
  nDoc: string;
  /** @description Unidade de medida rateada (Peso,Volume). */
  unidRat?: number;
};
/** @description Informações das NFe. */
export type CteSimpSefazInfDoc_InfNFeSimp = {
  /** @description Chave de acesso da NF-e. */
  chave: string;
  /** @description Unidade de medida rateada (Peso,Volume). */
  unidRat?: number;
};
/** @description Informações do modal Dutoviário. */
export type CteSimpSefazDutoSimp = {
  /** @description Valor da tarifa. */
  vTar?: number;
  /**
   * Format: date
   * @description Data de Início da prestação do serviço.
   */
  dIni: string;
  /**
   * Format: date
   * @description Data de Fim da prestação do serviço.
   */
  dFim: string;
  /**
   * @description Classificação do Dutoviário.
   * Informar: 1 - Gasoduto 2 - Mineroduto 3 - Oleoduto.
   */
  classDuto?: number;
  /**
   * @description Tipo de contratação do serviço de transporte (apenas para gasoduto).
   * Informar:
   * * 0 - Ponta a ponto
   * * 1 - Capacidade de Entrada
   * * 2 - Capacidade de Saida
   */
  tpContratacao?: number;
  /** @description Código do Ponto de Entrada. */
  codPontoEntrada?: string;
  /** @description Código do Ponto de Saída. */
  codPontoSaida?: string;
  /** @description Número do Contrato de Capacidade. */
  nContrato?: string;
};
/** @description Informações do Multimodal. */
export type CteSimpSefazMultimodalSimp = {
  /** @description Número do Certificado do Operador de Transporte Multimodal. */
  COTM: string;
  /**
   * @description Indicador Negociável
   * Preencher com: 0 - Não Negociável
   * * 1 - Negociável
   */
  indNegociavel: number;
  seg?: CteSimpSefazSegSimp;
};
/** @description Informações de Seguro do Multimodal. */
export type CteSimpSefazSegSimp = {
  infSeg: CteSimpSefazInfSegSimp;
  /**
   * @description Número da Apólice.
   * Obrigatório pela lei 11.442/07 (RCTRC).
   */
  nApol: string;
  /**
   * @description Número da Averbação.
   * Não é obrigatório, pois muitas averbações ocorrem aapós a emissão do CT, mensalmente, por exemplo.
   */
  nAver: string;
};
/** @description Informações da seguradora. */
export type CteSimpSefazInfSegSimp = {
  /** @description Nome da Seguradora. */
  xSeg: string;
  /**
   * @description Número do CNPJ da seguradora.
   * Obrigatório apenas se responsável pelo seguro for (2) responsável pela contratação do transporte - pessoa jurídica.
   */
  CNPJ: string;
};
/** @description Dados da cobrança do CT-e. */
export type CteSimpSefazCobrSimp = {
  fat?: CteSimpSefazFatSimp;
  dup?: CteSimpSefazDupSimp[];
};
/** @description Dados da fatura. */
export type CteSimpSefazFatSimp = {
  /** @description Número da fatura. */
  nFat?: string;
  /** @description Valor original da fatura. */
  vOrig?: number;
  /** @description Valor do desconto da fatura. */
  vDesc?: number;
  /** @description Valor líquido da fatura. */
  vLiq?: number;
};
/** @description Dados das duplicatas. */
export type CteSimpSefazDupSimp = {
  /** @description Número da duplicata. */
  nDup?: string;
  /**
   * Format: date
   * @description Data de vencimento da duplicata (AAAA-MM-DD).
   */
  dVenc?: string;
  /** @description Valor da duplicata. */
  vDup?: number;
};
/** @description Informações do CT-e de substituição. */
export type CteSimpSefazInfCteSubSimp = {
  /** @description Chave de acesso do CT-e a ser substituído (original). */
  chCte: string;
  /** @description Indicador de CT-e Alteração de Tomador. */
  indAlteraToma?: number;
};
/** @description Informações relativas aos Impostos. */
export type CteSimpSefazInfCte_ImpSimp = {
  ICMS: CteSimpSefazImpSimp;
  /** @description Valor Total dos Tributos. */
  vTotTrib?: number;
  /**
   * @description Informações adicionais de interesse do Fisco.
   * Norma referenciada, informações complementares, etc.
   */
  infAdFisco?: string;
  ICMSUFFim?: CteSimpSefazICMSUFFimSimp;
  IBSCBS?: CteSimpSefazTribCTeSimp;
};
/** @description Informações relativas ao ICMS. */
export type CteSimpSefazImpSimp = {
  ICMS00?: CteSimpSefazICMS00Simp;
  ICMS20?: CteSimpSefazICMS20Simp;
  ICMS45?: CteSimpSefazICMS45Simp;
  ICMS60?: CteSimpSefazICMS60Simp;
  ICMS90?: CteSimpSefazICMS90Simp;
  ICMSOutraUF?: CteSimpSefazICMSOutraUFSimp;
  ICMSSN?: CteSimpSefazICMSSNSimp;
};
/** @description Prestação sujeito à tributação normal do ICMS. */
export type CteSimpSefazICMS00Simp = {
  /**
   * @description classificação Tributária do Serviço.
   * * 00 - tributação normal ICMS
   */
  CST: string;
  /** @description Valor da BC do ICMS. */
  vBC: number;
  /** @description Alíquota do ICMS. */
  pICMS: number;
  /** @description Valor do ICMS. */
  vICMS: number;
};
/** @description Prestação sujeito à tributação com redução de BC do ICMS. */
export type CteSimpSefazICMS20Simp = {
  /**
   * @description Classificação Tributária do serviço.
   * * 20 - tributação com BC reduzida do ICMS
   */
  CST: string;
  /** @description Percentual de redução da BC. */
  pRedBC: number;
  /** @description Valor da BC do ICMS. */
  vBC: number;
  /** @description Alíquota do ICMS. */
  pICMS: number;
  /** @description Valor do ICMS. */
  vICMS: number;
  /** @description Valor do ICMS de desoneração. */
  vICMSDeson?: number;
  /**
   * @description Código de Benefício Fiscal na UF.
   * Código de Benefício Fiscal utilizado pela UF.
   */
  cBenef?: string;
};
/** @description ICMS  Isento, não Tributado ou diferido. */
export type CteSimpSefazICMS45Simp = {
  /**
   * @description Classificação Tributária do Serviço.
   * Preencher com:
   * * 40 - ICMS isenção
   * * 41 - ICMS não tributada
   * * 51 - ICMS diferido
   */
  CST: string;
  /** @description Valor do ICMS de desoneração. */
  vICMSDeson?: number;
  /**
   * @description Código de Benefício Fiscal na UF.
   * Código de Benefício Fiscal utilizado pela UF.
   */
  cBenef?: string;
};
/** @description Tributação pelo ICMS60 - ICMS cobrado por substituição tributária.Responsabilidade do recolhimento do ICMS atribuído ao tomador ou 3º por ST. */
export type CteSimpSefazICMS60Simp = {
  /**
   * @description Classificação Tributária do Serviço.
   * * 60 - ICMS cobrado por substituição tributária
   */
  CST: string;
  /**
   * @description Valor da BC do ICMS ST retido.
   * Valor do frete sobre o qual será calculado o ICMS a ser substituído na Prestação.
   */
  vBCSTRet: number;
  /**
   * @description Valor do ICMS ST retido.
   * Resultado da multiplicação do “vBCSTRet” x “pICMSSTRet” - que será valor do ICMS a ser retido pelo Substituto. Podendo o valor do ICMS a ser retido efetivamente, sofrer ajustes conforme a opção tributaria do transportador substituído.
   */
  vICMSSTRet: number;
  /**
   * @description Alíquota do ICMS.
   * Percentual de Alíquota incidente na prestação de serviço de transporte.
   */
  pICMSSTRet: number;
  /**
   * @description Valor do Crédito outorgado/Presumido.
   * Preencher somente quando o transportador substituído, for optante pelo crédito outorgado previsto no Convênio 106/96 e corresponde ao percentual de 20%% do valor do ICMS ST retido.
   */
  vCred?: number;
  /** @description Valor do ICMS de desoneração. */
  vICMSDeson?: number;
  /**
   * @description Código de Benefício Fiscal na UF.
   * Código de Benefício Fiscal utilizado pela UF.
   */
  cBenef?: string;
};
/** @description ICMS Outros. */
export type CteSimpSefazICMS90Simp = {
  /**
   * @description Classificação Tributária do Serviço.
   * * 90 - ICMS outros
   */
  CST: string;
  /** @description Percentual de redução da BC. */
  pRedBC?: number;
  /** @description Valor da BC do ICMS. */
  vBC: number;
  /** @description Alíquota do ICMS. */
  pICMS: number;
  /** @description Valor do ICMS. */
  vICMS: number;
  /** @description Valor do Crédito Outorgado/Presumido. */
  vCred?: number;
  /** @description Valor do ICMS de desoneração. */
  vICMSDeson?: number;
  /**
   * @description Código de Benefício Fiscal na UF.
   * Código de Benefício Fiscal utilizado pela UF.
   */
  cBenef?: string;
};
/** @description ICMS devido à UF de origem da prestação, quando  diferente da UF do emitente. */
export type CteSimpSefazICMSOutraUFSimp = {
  /**
   * @description Classificação Tributária do Serviço.
   * * 90 - ICMS Outra UF
   */
  CST: string;
  /** @description Percentual de redução da BC. */
  pRedBCOutraUF?: number;
  /** @description Valor da BC do ICMS. */
  vBCOutraUF: number;
  /** @description Alíquota do ICMS. */
  pICMSOutraUF: number;
  /** @description Valor do ICMS devido outra UF. */
  vICMSOutraUF: number;
  /** @description Valor do ICMS de desoneração. */
  vICMSDeson?: number;
  /**
   * @description Código de Benefício Fiscal na UF.
   * Código de Benefício Fiscal utilizado pela UF.
   */
  cBenef?: string;
};
/** @description Simples Nacional. */
export type CteSimpSefazICMSSNSimp = {
  /**
   * @description Classificação Tributária do Serviço.
   * * 90 - ICMS Simples Nacional
   */
  CST: string;
  /** @description Indica se o contribuinte é Simples Nacional			1=Sim. */
  indSN: number;
};
/**
 * @description Informações do ICMS de partilha com a UF de término do serviço de transporte na operação interestadual.
 * Grupo a ser informado nas prestações interestaduais para consumidor final, não contribuinte do ICMS.
 */
export type CteSimpSefazICMSUFFimSimp = {
  /** @description Valor da BC do ICMS na UF de término da prestação do serviço de transporte. */
  vBCUFFim: number;
  /**
   * @description Percentual do ICMS relativo ao Fundo de Combate à pobreza (FCP) na UF de término da prestação do serviço de transporte.
   * Alíquota adotada nas operações internas na UF do destinatário.
   */
  pFCPUFFim: number;
  /**
   * @description Alíquota interna da UF de término da prestação do serviço de transporte.
   * Alíquota adotada nas operações internas na UF do destinatário.
   */
  pICMSUFFim: number;
  /**
   * @description Alíquota interestadual das UF envolvidas.
   * Alíquota interestadual das UF envolvidas.
   */
  pICMSInter: number;
  /** @description Valor do ICMS relativo ao Fundo de Combate á Pobreza (FCP) da UF de término da prestação. */
  vFCPUFFim: number;
  /** @description Valor do ICMS de partilha para a UF de término da prestação do serviço de transporte. */
  vICMSUFFim: number;
  /** @description Valor do ICMS de partilha para a UF de início da prestação do serviço de transporte. */
  vICMSUFIni: number;
};
/** @description Grupo de informações do IBS e CBS. */
export type CteSimpSefazTribCTeSimp = {
  /** @description Código Situação Tributária do IBS/CBS. */
  CST: string;
  cClassTrib?: string;
  gIBSCBS?: CteSimpSefazCIBSSimp;
};
export type CteSimpSefazCIBSSimp = {
  /** @description Valor do BC. */
  vBC: number;
  gIBSUF: CteSimpSefazGIBSUFSimp;
  gIBSMun: CteSimpSefazGIBSMunSimp;
  /** @description Valor do IBS (soma de vIBSUF e vIBSMun). */
  vIBS: number;
  gCBS: CteSimpSefazGCBSSimp;
  gTribRegular?: CteSimpSefazTribRegularSimp;
  gIBSCredPres?: CteSimpSefazCredPresSimp;
  gCBSCredPres?: CteSimpSefazCredPresSimp;
  gTribCompraGov?: CteSimpSefazTribCompraGovSimp;
};
/** @description Grupo de informações do IBS na UF. */
export type CteSimpSefazGIBSUFSimp = {
  /** @description Aliquota do IBS de competência das UF. */
  pIBSUF: number;
  gDif?: CteSimpSefazDifSimp;
  gDevTrib?: CteSimpSefazDevTribSimp;
  gRed?: CteSimpSefazRedSimp;
  /** @description Valor do IBS de competência das UF. */
  vIBSUF: number;
};
/** @description Grupo de campos do Diferimento. */
export type CteSimpSefazDifSimp = {
  /** @description Percentual do diferimento. */
  pDif: number;
  /** @description Valor do diferimento. */
  vDif: number;
};
/** @description Grupo de Informações da devolução de tributos. */
export type CteSimpSefazDevTribSimp = {
  /**
   * @description Valor do tributo devolvido. No fornecimento de energia elétrica, água, esgoto e
   * gás natural e em outras hipóteses definidas no regulamento.
   */
  vDevTrib: number;
};
/** @description Grupo de campos da redução de aliquota. */
export type CteSimpSefazRedSimp = {
  /** @description Percentual de redução de aliquota do cClassTrib. */
  pRedAliq: number;
  /** @description Aliquota Efetiva que será aplicada a Base de Calculo. */
  pAliqEfet: number;
};
/** @description Grupo de Informações do IBS no Município. */
export type CteSimpSefazGIBSMunSimp = {
  /** @description Aliquota do IBS Municipal. */
  pIBSMun: number;
  gDif?: CteSimpSefazDifSimp;
  gDevTrib?: CteSimpSefazDevTribSimp;
  gRed?: CteSimpSefazRedSimp;
  /** @description Valor do IBS Municipal. */
  vIBSMun: number;
};
/** @description Grupo de Tributação da CBS. */
export type CteSimpSefazGCBSSimp = {
  /** @description Aliquota da CBS. */
  pCBS: number;
  gDif?: CteSimpSefazDifSimp;
  gDevTrib?: CteSimpSefazDevTribSimp;
  gRed?: CteSimpSefazRedSimp;
  /** @description Valor da CBS. */
  vCBS: number;
};
/** @description Grupo de informações da Tributação Regular. Informar como seria a tributação caso não cumprida a condição resolutória/suspensiva. Exemplo 1: Art. 442, §4. Operações com ZFM e ALC. Exemplo 2: Operações com suspensão do tributo. */
export type CteSimpSefazTribRegularSimp = {
  /**
   * @description Código da Situação Tributária do IBS e CBS.
   * Informar qual seria o CST caso não cumprida a condição resolutória/suspensiva.
   */
  CSTReg: string;
  /** @description Informar qual seria o cClassTrib caso não cumprida a condição resolutória/suspensiva. */
  cClassTribReg: string;
  /**
   * @description Alíquota do IBS da UF.
   * Informar como seria a Alíquota caso não cumprida a condição resolutória/suspensiva.
   */
  pAliqEfetRegIBSUF: number;
  /**
   * @description Valor do IBS da UF.
   * Informar como seria o valor do Tributo caso não cumprida a condição resolutória/suspensiva.
   */
  vTribRegIBSUF: number;
  /**
   * @description Alíquota do IBS do Município.
   * Informar como seria a Alíquota caso não cumprida a condição resolutória/suspensiva.
   */
  pAliqEfetRegIBSMun: number;
  /**
   * @description Valor do IBS do Município.
   * Informar como seria o valor do Tributo caso não cumprida a condição resolutória/suspensiva.
   */
  vTribRegIBSMun: number;
  /**
   * @description Alíquota da CBS.
   * Informar como seria a Alíquota caso não cumprida a condição resolutória/suspensiva.
   */
  pAliqEfetRegCBS: number;
  /**
   * @description Valor da CBS.
   * Informar como seria o valor do Tributo caso não cumprida a condição resolutória/suspensiva.
   */
  vTribRegCBS: number;
};
/** @description Grupo de Informações do Crédito Presumido referente ao IBS, quando aproveitado pelo emitente do documento. */
export type CteSimpSefazCredPresSimp = {
  /** @description Usar tabela Cred Presumido, para o emitente da nota. */
  cCredPres: string;
  /** @description Percentual do Crédito Presumido. */
  pCredPres: number;
  /** @description Valor do Crédito Presumido. */
  vCredPres?: number;
  /** @description Valor do Crédito Presumido Condição Suspensiva, preencher apenas para cCredPres que possui indicação de Condição Suspensiva. */
  vCredPresCondSus?: number;
};
/** @description Grupo de informações da composição do valor do IBS e da CBS em compras governamental. */
export type CteSimpSefazTribCompraGovSimp = {
  pAliqIBSUF?: number;
  /** @description Valor que seria devido a UF, sem aplicação do Art. 473. da LC 214/2025. */
  vTribIBSUF: number;
  pAliqIBSMun?: number;
  /** @description Valor que seria devido ao município, sem aplicação do Art. 473. da LC 214/2025. */
  vTribIBSMun: number;
  pAliqCBS?: number;
  /** @description Valor que seria devido a CBS, sem aplicação do Art. 473. da LC 214/2025. */
  vTribCBS: number;
};
/** @description Valores Totais do CTe. */
export type CteSimpSefazTotalSimp = {
  /**
   * @description Valor Total da Prestação do Serviço.
   * Pode conter zeros quando o CT-e for de complemento de ICMS.
   */
  vTPrest: number;
  /** @description Valor total a Receber. */
  vTRec: number;
  /**
   * @description Valor total do documento fiscal
   * (vTPrest + total do IBS + total da CBS).
   */
  vTotDFe?: number;
};
/**
 * @description Autorizados para download do XML do DF-e.
 * Informar CNPJ ou CPF. Preencher os zeros não significativos.
 */
export type CteSimpSefazAutXMLSimp = {
  /**
   * @description CNPJ do autorizado.
   * Informar zeros não significativos.
   */
  CNPJ?: string;
  /**
   * @description CPF do autorizado.
   * Informar zeros não significativos.
   */
  CPF?: string;
};
/** @description Informações do Responsável Técnico pela emissão do DF-e. */
export type CteSimpSefazRespTecSimp = {
  /**
   * @description CNPJ da pessoa jurídica responsável técnica pelo sistema utilizado na emissão do documento fiscal eletrônico.
   * Informar o CNPJ da pessoa jurídica desenvolvedora do sistema utilizado na emissão do documento fiscal eletrônico.
   */
  CNPJ: string;
  /**
   * @description Nome da pessoa a ser contatada.
   * Informar o nome da pessoa a ser contatada na empresa desenvolvedora do sistema utilizado na emissão do documento fiscal eletrônico. No caso de pessoa física, informar o respectivo nome.
   */
  xContato: string;
  /** @description Email da pessoa jurídica a ser contatada. */
  email: string;
  /**
   * @description Telefone da pessoa jurídica a ser contatada.
   * Preencher com o Código DDD + número do telefone.
   */
  fone: string;
  /**
   * @description Identificador do código de segurança do responsável técnico.
   * Identificador do CSRT utilizado para geração do hash.
   */
  idCSRT?: number;
  /** @description Código de Segurança do Responsável Técnico utilizado para montar o hash do CSRT. */
  CSRT?: string;
  /**
   * @description Hash do token do código de segurança do responsável técnico.
   * O hashCSRT é o resultado das funções SHA-1 e base64 do token CSRT fornecido pelo fisco + chave de acesso do DF-e. (Implementação em futura NT)
   * Observação: 28 caracteres são representados no schema como 20 bytes do tipo base64Binary.
   *
   * *Se não informado, será calculado automaticamente, desde que os campos `idCSRT` e `CSRT` sejam fornecidos.*
   */
  hashCSRT?: string;
};
/** @description Grupo de informações do pedido de emissão da Nota Fiscal Fácil. */
export type CteSimpSefazInfSolicNFFSimp = {
  /**
   * @description Solicitação do pedido de emissão da NFF.
   * Será preenchido com a totalidade de campos informados no aplicativo emissor serializado.
   */
  xSolic: string;
};
/** @description Informações suplementares do CT-e. */
export type CteSimpSefazInfCTeSuplSimp = {
  /**
   * @description Texto com o QR-Code impresso no DACTE.
   *
   * *Geramos automaticamente quando nenhum valor é informado.*
   */
  qrCodCTe?: string;
};
export type CtePedidoCancelamento = {
  /** @description Justificativa para o cancelamento. Preencheremos automaticamente, caso esteja em branco. */
  justificativa?: string;
};
export type CtePedidoCartaCorrecao = {
  /** @description Grupo de Informações de Correção. */
  correcoes: CteInfCorrecao[];
};
export type CteInfCorrecao = {
  /** @description Indicar o grupo de informações que pertence o "campo_alterado". Ex: ide. */
  grupo_alterado: string;
  /** @description Nome do campo modificado do CT-e Original. */
  campo_alterado: string;
  /** @description Valor correspondente à alteração. */
  valor_alterado: string;
  /**
   * @description Preencher com o indice do item alterado caso a alteração ocorra em uma lista.
   * OBS: O indice inicia sempre em 1.
   */
  numero_item_alterado?: number;
};
export type CteCartaCorrecao = {
  /** @description Grupo de Informações de Correção. */
  correcoes: CteInfCorrecao[];
  /** @description ID único gerado pela Nuvem Fiscal para este evento. */
  id?: string;
  /**
   * @description Identificação do ambiente.
   * @enum {string}
   */
  ambiente?: "homologacao" | "producao";
  /**
   * @description Status do Evento.
   * @enum {string}
   */
  status?: "pendente" | "registrado" | "rejeitado" | "erro";
  /** @description Identificação do autor do evento. */
  autor?: DfeAutorEvento;
  /** @description Chave de Acesso do documento vinculado ao evento. */
  chave_acesso?: string;
  /**
   * Format: date-time
   * @description Data e hora do Evento.
   */
  data_evento?: string;
  /** @description Sequencial do evento para o mesmo tipo de evento. */
  numero_sequencial?: number;
  /**
   * Format: date-time
   * @description Data e hora do recebimento do Evento pela SEFAZ.
   */
  data_recebimento?: string;
  /** @description Código do status de registro do Evento. */
  codigo_status?: number;
  /** @description Descrição literal do status do registro do Evento. */
  motivo_status?: string;
  /** @description Número do Protocolo de registro do Evento. */
  numero_protocolo?: string;
  /** @description Código da Mensagem. */
  codigo_mensagem?: number;
  /** @description Mensagem da SEFAZ para o emissor. */
  mensagem?: string;
  tipo_evento?: string;
};
export type MdfeNaoEncerrados = {
  /**
   * @description Identificação do Ambiente:
   * * 1 - Produção
   * * 2 - Homologação
   */
  tpAmb?: number;
  /** @description Versão do Aplicativo que processou o MDF-e. */
  verAplic?: string;
  /** @description Código do status da mensagem enviada. */
  cStat: number;
  /** @description Descrição literal do status do serviço solicitado. */
  xMotivo?: string;
  /** @description código da UF de atendimento. */
  cUF?: number;
  infMDFe?: MdfeNaoEncerrado[];
};
export type MdfeNaoEncerrado = {
  /** @description Chaves de acesso do MDF-e não encerrado. */
  chMDFe: string;
  /** @description Número do Protocolo de autorização do MDF-e não encerrado. */
  nProt: string;
};
export type MdfePedidoEmissaoLote = {
  documentos?: MdfePedidoEmissao[];
  /**
   * @description Identificação do Ambiente.
   * @enum {string}
   */
  ambiente: "homologacao" | "producao";
  /** @description Seu identificador para este documento. Opcional, ajuda a evitar o envio duplicado de um mesmo documento. */
  referencia?: string;
  id_lote: string;
};
export type MdfePedidoEmissao = {
  infMDFe: MdfeSefazInfMDFe;
  infMDFeSupl?: MdfeSefazInfMDFeSupl;
  /**
   * @description Identificação do Ambiente.
   * @enum {string}
   */
  ambiente: "homologacao" | "producao";
  /** @description Seu identificador único para este documento. Opcional, ajuda a evitar o envio duplicado de um mesmo documento. */
  referencia?: string;
};
/** @description Informações do MDF-e. */
export type MdfeSefazInfMDFe = {
  /**
   * @description Versão do leiaute.
   * Ex: "3.00".
   */
  versao: string;
  /**
   * @description Identificador da tag a ser assinada.
   * Informar a chave de acesso do MDF-e e precedida do literal "MDFe".
   *
   * *Geramos automaticamente quando nenhum valor é informado.*
   */
  Id?: string;
  ide: MdfeSefazIde;
  emit: MdfeSefazEmit;
  infModal: MdfeSefazInfModal;
  infDoc: MdfeSefazInfDoc;
  seg?: MdfeSefazSeg[];
  prodPred?: MdfeSefazProdPred;
  tot: MdfeSefazTot;
  lacres?: MdfeSefazLacres[];
  autXML?: MdfeSefazAutXML[];
  infAdic?: MdfeSefazInfAdic;
  infRespTec?: MdfeSefazRespTec;
  infSolicNFF?: MdfeSefazInfSolicNFF;
};
/** @description Identificação do MDF-e. */
export type MdfeSefazIde = {
  /**
   * @description Código da UF do emitente do MDF-e.
   * Código da UF do emitente do Documento Fiscal. Utilizar a
   * Tabela do IBGE de código de unidades da federação.
   */
  cUF: number;
  /**
   * @description Tipo do Ambiente.
   * * 1 - Produção
   * * 2 - Homologação
   */
  tpAmb?: number;
  /**
   * @description Tipo do Emitente.
   * * 1 - Prestador de serviço de transporte
   * * 2 - Transportador de Carga Própria 3 - Prestador de serviço de transporte que emitirá CT-e Globalizado
   * OBS: Deve ser preenchido com 2 para emitentes de NF-e e pelas transportadoras quando estiverem fazendo transporte de carga própria. Deve ser preenchido com 3 para transportador de carga que emitirá à posteriori CT-e Globalizado relacionando as NF-e.
   */
  tpEmit: number;
  /**
   * @description Tipo do Transportador.
   * * 1 - ETC
   * * 2 - TAC
   * * 3 - CTC
   */
  tpTransp?: number;
  /**
   * @description Modelo do Manifesto Eletrônico.
   * Utilizar o código 58 para identificação do MDF-e.
   */
  mod?: number;
  /**
   * @description Série do Manifesto.
   * Informar a série do documento fiscal (informar zero se inexistente).
   * Série na faixa [920-969]: Reservada para emissão por contribuinte pessoa física com inscrição estadual.
   */
  serie: number;
  /**
   * @description Número do Manifesto.
   * Número que identifica o Manifesto. 1 a 999999999.
   */
  nMDF: number;
  /**
   * @description Código numérico que compõe a Chave de Acesso.
   * Código aleatório gerado pelo emitente, com o objetivo de evitar acessos indevidos ao documento.
   *
   * *Geramos automaticamente quando nenhum valor é informado.*
   */
  cMDF?: string;
  /**
   * @description Digito verificador da chave de acesso do Manifesto.
   * Informar o dígito  de controle da chave de acesso do MDF-e, que deve ser calculado com a aplicação do algoritmo módulo 11 (base 2,9) da chave de acesso.
   *
   * *Geramos automaticamente quando nenhum valor é informado.*
   */
  cDV?: number;
  /**
   * @description Modalidade de transporte.
   * * 1 - Rodoviário
   * * 2 - Aéreo
   * * 3 - Aquaviário
   * * 4 - Ferroviário
   */
  modal: number;
  /**
   * Format: date-time
   * @description Data e hora de emissão do Manifesto.
   * Formato AAAA-MM-DDTHH:MM:DD TZD.
   */
  dhEmi: string;
  /**
   * @description Forma de emissão do Manifesto.
   * * 1 - Normal
   * * 2 - Contingência
   * * 3 - Regime Especial NFF
   */
  tpEmis: number;
  /**
   * @description Identificação do processo de emissão do Manifesto.
   * * 0 - emissão de MDF-e com aplicativo do contribuinte
   */
  procEmi: string;
  /**
   * @description Versão do processo de emissão.
   * Informar a versão do aplicativo emissor de MDF-e.
   */
  verProc: string;
  /**
   * @description Sigla da UF do Carregamento.
   * Utilizar a Tabela do IBGE de código de unidades da federação.
   * Informar 'EX' para operações com o exterior.
   */
  UFIni: string;
  /**
   * @description Sigla da UF do Descarregamento.
   * Utilizar a Tabela do IBGE de código de unidades da federação.
   * Informar 'EX' para operações com o exterior.
   */
  UFFim: string;
  infMunCarrega: MdfeSefazInfMunCarrega[];
  infPercurso?: MdfeSefazInfPercurso[];
  /**
   * Format: date-time
   * @description Data e hora previstos de inicio da viagem.
   * Formato AAAA-MM-DDTHH:MM:DD TZD.
   */
  dhIniViagem?: string;
  /** @description Indicador de participação do Canal Verde. */
  indCanalVerde?: number;
  /** @description Indicador de MDF-e com inclusão da Carga posterior a emissão por evento de inclusão de DF-e. */
  indCarregaPosterior?: number;
};
/** @description Informações dos Municípios de Carregamento. */
export type MdfeSefazInfMunCarrega = {
  /** @description Código do Município de Carregamento. */
  cMunCarrega: string;
  /** @description Nome do Município de Carregamento. */
  xMunCarrega: string;
};
/** @description Informações do Percurso do MDF-e. */
export type MdfeSefazInfPercurso = {
  /**
   * @description Sigla das Unidades da Federação do percurso do veículo.
   * Não é necessário repetir as UF de Início e Fim.
   */
  UFPer: string;
};
/** @description Identificação do Emitente do Manifesto. */
export type MdfeSefazEmit = {
  /**
   * @description CNPJ do emitente.
   * Informar zeros não significativos.
   *
   * ***Obrigatório caso o emitente seja pessoa jurídica***.
   */
  CNPJ?: string;
  /**
   * @description CPF do emitente.
   * Informar zeros não significativos.
   * Usar com série específica 920-969 para emitente pessoa física com inscrição estadual.
   * Poderá ser usado também para emissão do Regime Especial da Nota Fiscal Fácil.
   *
   * ***Obrigatorio caso o emitente seja pessoa física***.
   */
  CPF?: string;
  /**
   * @description Inscrição Estadual do emitemte.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  IE?: string;
  /**
   * @description Razão social ou Nome do emitente.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  xNome?: string;
  /**
   * @description Nome fantasia do emitente.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  xFant?: string;
  enderEmit?: MdfeSefazEndeEmi;
};
/**
 * @description Endereço do emitente.
 *
 * *Caso não seja informado, será utilizado o do cadastro da empresa.*
 */
export type MdfeSefazEndeEmi = {
  /**
   * @description Logradouro.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  xLgr?: string;
  /**
   * @description Número.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  nro?: string;
  /**
   * @description Complemento.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  xCpl?: string;
  /**
   * @description Bairro.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  xBairro?: string;
  /**
   * @description Código do município (utilizar a tabela do IBGE), informar 9999999 para operações com o exterior.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  cMun?: string;
  /**
   * @description Nome do município, , informar EXTERIOR para operações com o exterior.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  xMun?: string;
  /**
   * @description CEP.
   * Informar zeros não significativos.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  CEP?: string;
  /**
   * @description Sigla da UF, , informar EX para operações com o exterior.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  UF?: string;
  /**
   * @description Telefone.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  fone?: string;
  /** @description Endereço de E-mail. */
  email?: string;
};
/** @description Informações do modal. */
export type MdfeSefazInfModal = {
  /** @description Versão do leiaute específico para o Modal. */
  versaoModal: string;
  aereo?: MdfeSefazAereo;
  rodo?: MdfeSefazRodo;
  aquav?: MdfeSefazAquav;
  ferrov?: MdfeSefazFerrov;
};
/** @description Informações do modal Aéreo. */
export type MdfeSefazAereo = {
  /** @description Marca da Nacionalidade da aeronave. */
  nac: string;
  /** @description Marca de Matrícula da aeronave. */
  matr: string;
  /**
   * @description Número do Voo.
   * Formato = AB1234, sendo AB a designação da empresa e 1234 o número do voo. Quando não for possível incluir as marcas de nacionalidade e matrícula sem hífen.
   */
  nVoo: string;
  /**
   * @description Aeródromo de Embarque.
   * O código de três letras IATA do aeroporto de partida deverá ser incluído como primeira anotação. Quando não for possível, utilizar a sigla OACI.
   */
  cAerEmb: string;
  /**
   * @description Aeródromo de Destino.
   * O código de três letras IATA do aeroporto de destino deverá ser incluído como primeira anotação. Quando não for possível, utilizar a sigla OACI.
   */
  cAerDes: string;
  /**
   * Format: date
   * @description Data do Voo.
   * Formato AAAA-MM-DD.
   */
  dVoo: string;
};
/** @description Informações do modal Rodoviário. */
export type MdfeSefazRodo = {
  infANTT?: MdfeSefazInfANTT;
  veicTracao: MdfeSefazVeicTracao;
  veicReboque?: MdfeSefazVeicReboque[];
  /** @description Código de Agendamento no porto. */
  codAgPorto?: string;
  lacRodo?: MdfeSefazLacRodo[];
};
/** @description Grupo de informações para Agência Reguladora. */
export type MdfeSefazInfANTT = {
  /**
   * @description Registro Nacional de Transportadores Rodoviários de Carga.
   * Registro obrigatório do emitente do MDF-e junto à ANTT para exercer a atividade de transportador rodoviário de cargas por conta de terceiros e mediante remuneração.
   */
  RNTRC?: string;
  infCIOT?: MdfeSefazInfCIOT[];
  valePed?: MdfeSefazValePed;
  infContratante?: MdfeSefazInfContratante[];
  infPag?: MdfeSefazInfPag[];
};
/** @description Dados do CIOT. */
export type MdfeSefazInfCIOT = {
  /**
   * @description Código Identificador da Operação de Transporte.
   * Também Conhecido como conta frete.
   */
  CIOT?: string;
  /**
   * @description Número do CPF responsável pela geração do CIOT.
   * Informar os zeros não significativos.
   */
  CPF?: string;
  /**
   * @description Número do CNPJ responsável pela geração do CIOT.
   * Informar os zeros não significativos.
   */
  CNPJ?: string;
};
/**
 * @description Informações de Vale Pedágio.
 * Outras informações sobre Vale-Pedágio obrigatório que não tenham campos específicos devem ser informadas no campo de observações gerais de uso livre pelo contribuinte, visando atender as determinações legais vigentes.
 */
export type MdfeSefazValePed = {
  disp: MdfeSefazDisp[];
  /**
   * @description Categoria de Combinação Veicular.
   * Preencher com:
   * 02 Veículo Comercial 2 eixos
   * 0
   * 4 Veículo Comercial 3 eixos
   * 06 Veículo Comercial 4 eixos
   * 0
   * 7 Veículo Comercial 5 eixos
   * 0
   * 8 Veículo Comercial 6 eixos
   * 10 Veículo Comercial 7 eixos
   * 11 Veículo Comercial 8 eixos
   * 12 Veículo Comercial 9 eixos
   * 13 Veículo Comercial 10 eixos
   * 14 Veículo Comercial Acima de 10 eixos.
   */
  categCombVeic?: string;
};
/** @description Informações dos dispositivos do Vale Pedágio. */
export type MdfeSefazDisp = {
  /**
   * @description CNPJ da empresa fornecedora do Vale-Pedágio.
   * * CNPJ da Empresa Fornecedora do Vale-Pedágio, ou seja, empresa que fornece ao Responsável pelo Pagamento do Vale-Pedágio os dispositivos do Vale-Pedágio.
   * * Informar os zeros não significativos.
   */
  CNPJForn: string;
  /**
   * @description CNPJ do responsável pelo pagamento do Vale-Pedágio.
   * * responsável pelo pagamento do Vale Pedágio. Informar somente quando o responsável não for o emitente do MDF-e.
   * * Informar os zeros não significativos.
   */
  CNPJPg?: string;
  /**
   * @description CNPJ do responsável pelo pagamento do Vale-Pedágio.
   * Informar os zeros não significativos.
   */
  CPFPg?: string;
  /** @description Identificador do vale pedagio obrigatório - IDVPO. */
  nCompra?: string;
  /**
   * @description Valor do Vale-Pedagio.
   * Valor do Vale-Pedágio obrigatório necessário à livre circulação, desde a origem da operação de transporte até o destino, do transportador contratado.
   */
  vValePed: number;
  /**
   * @description Tipo do Vale Pedagio.
   * * 01 - TAG; 04 - Leitura de placa (pela placa de identificação veicular)
   */
  tpValePed?: string;
};
/** @description Grupo de informações dos contratantes do serviço de transporte. */
export type MdfeSefazInfContratante = {
  /** @description Razão social ou Nome do contratante. */
  xNome?: string;
  /**
   * @description Número do CPF do contratante do serviço.
   * Informar os zeros não significativos.
   */
  CPF?: string;
  /**
   * @description Número do CNPJ do contratante do serviço.
   * Informar os zeros não significativos.
   */
  CNPJ?: string;
  /** @description Identificador do contratante em caso de contratante estrangeiro. */
  idEstrangeiro?: string;
  infContrato?: MdfeSefazInfContrato;
};
/** @description Grupo de informações do contrato entre transportador e contratante. */
export type MdfeSefazInfContrato = {
  /** @description Número do contrato do transportador com o contratante quando este existir para prestações continuadas. */
  NroContrato: string;
  /** @description Valor global do contrato. */
  vContratoGlobal: number;
};
/** @description Informações do Pagamento do Contrato. */
export type MdfeSefazInfPag = {
  /** @description Razão social ou Nome do respnsável pelo pagamento. */
  xNome?: string;
  /**
   * @description Número do CPF do responsável pelo pgto.
   * Informar os zeros não significativos.
   */
  CPF?: string;
  /**
   * @description Número do CNPJ do responsável pelo pgto.
   * Informar os zeros não significativos.
   */
  CNPJ?: string;
  /** @description Identificador do responsável pelo pgto em caso de ser estrangeiro. */
  idEstrangeiro?: string;
  Comp: MdfeSefazComp[];
  /** @description Valor Total do Contrato. */
  vContrato: number;
  /**
   * @description Indicador de operação de transporte de alto desempenho.
   * Operação de transporte com utilização de veículos de frotas dedicadas ou fidelizadas.
   * Preencher com “1” para indicar operação de transporte de alto desempenho, demais casos não informar a tag.
   */
  indAltoDesemp?: number;
  /**
   * @description Indicador da Forma de Pagamento:0-Pagamento à Vista
   * * 1 - Pagamento à Prazo
   */
  indPag: number;
  /** @description Valor do Adiantamento (usar apenas em pagamento à Prazo. */
  vAdiant?: number;
  /**
   * @description Indicador para declarar concordância em antecipar o adiantamento.
   * Informar a tag somente se for autorizado antecipar o adiantamento.
   */
  indAntecipaAdiant?: number;
  infPrazo?: MdfeSefazInfPrazo[];
  /**
   * @description Tipo de Permissão em relação a antecipação das parcelas.
   * * 0 - Não permite antecipar
   * * 1 - Permite antecipar as parcelas
   * * 2 - Permite antecipar as parcelas mediante confirmação
   */
  tpAntecip?: number;
  infBanc: MdfeSefazInfBanc;
};
/** @description Componentes do Pagamentoi do Contrato. */
export type MdfeSefazComp = {
  /**
   * @description Tipo do Componente.
   * Preencher com:
   * * 01 - Vale Pedágio
   * * 02 - Impostos, taxas e contribuições
   * * 03 - Despesas (bancárias, meios de pagamento, outras)
   * * 04 - Frete
   * * 99 - Outros
   */
  tpComp: string;
  /** @description Valor do componente. */
  vComp: number;
  /** @description Descrição do componente do tipo Outros. */
  xComp?: string;
};
/**
 * @description Informações do pagamento a prazo.
 * Informar somente se indPag for à Prazo.
 */
export type MdfeSefazInfPrazo = {
  /** @description Número da Parcela. */
  nParcela: number;
  /**
   * Format: date
   * @description Data de vencimento da Parcela (AAAA-MM-DD).
   */
  dVenc: string;
  /** @description Valor da Parcela. */
  vParcela: number;
};
/** @description Informações bancárias. */
export type MdfeSefazInfBanc = {
  /** @description Número do banco. */
  codBanco?: string;
  /** @description Número da agência bancária. */
  codAgencia?: string;
  /**
   * @description Número do CNPJ da Instituição de Pagamento Eletrônico do Frete.
   * Informar os zeros não significativos.
   */
  CNPJIPEF?: string;
  /**
   * @description Chave PIX.
   * Informar a chave PIX para recebimento do frete.
   * Pode ser email, CPF/ CNPJ (somente numeros), Telefone com a seguinte formatação (+5599999999999) ou a chave aleatória gerada pela instituição.
   */
  PIX?: string;
};
/** @description Dados do Veículo com a Tração. */
export type MdfeSefazVeicTracao = {
  /** @description Código interno do veículo. */
  cInt?: string;
  /** @description Placa do veículo. */
  placa: string;
  /** @description RENAVAM do veículo. */
  RENAVAM?: string;
  /** @description Tara em KG. */
  tara: number;
  /** @description Capacidade em KG. */
  capKG?: number;
  /** @description Capacidade em M3. */
  capM3?: number;
  prop?: MdfeSefazProp;
  condutor: MdfeSefazCondutor[];
  /**
   * @description Tipo de Rodado.
   * Preencher com:
   * * 01 - Truck
   * * 02 - Toco
   * * 03 - Cavalo Mecânico
   * * 04 - VAN
   * * 05 - Utilitário
   * * 06 - Outros
   */
  tpRod: string;
  /**
   * @description Tipo de Carroceria.
   * Preencher com:
   * * 00 - não aplicável
   * * 01 - Aberta
   * * 02 - Fechada/Baú
   * * 03 - Granelera
   * * 04 - Porta Container
   * * 05 - Sider
   */
  tpCar: string;
  /**
   * @description UF em que veículo está licenciado.
   * Sigla da UF de licenciamento do veículo.
   */
  UF?: string;
};
/**
 * @description Proprietário ou possuidor do Veículo.
 * Só preenchido quando o veículo não pertencer à empresa emitente do MDF-e.
 */
export type MdfeSefazProp = {
  /**
   * @description Número do CPF.
   * Informar os zeros não significativos.
   */
  CPF?: string;
  /**
   * @description Número do CNPJ.
   * Informar os zeros não significativos.
   */
  CNPJ?: string;
  /**
   * @description Registro Nacional dos Transportadores Rodoviários de Carga.
   * Registro obrigatório do proprietário, co-proprietário ou arrendatário do veículo junto à ANTT para exercer a atividade de transportador rodoviário de cargas por conta de terceiros e mediante remuneração.
   */
  RNTRC: string;
  /** @description Razão Social ou Nome do proprietário. */
  xNome: string;
  /** @description Inscrição Estadual. */
  IE?: string;
  /** @description UF. */
  UF?: string;
  /**
   * @description Tipo Proprietário ou possuidor.
   * Preencher com:
   * * 0 - TAC Agregado
   * * 1 - TAC Independente
   * * 2 - Outros
   */
  tpProp: number;
};
/** @description Informações do(s) Condutor(es) do veículo. */
export type MdfeSefazCondutor = {
  /** @description Nome do Condutor. */
  xNome: string;
  /** @description CPF do Condutor. */
  CPF: string;
};
/** @description Dados dos reboques. */
export type MdfeSefazVeicReboque = {
  /** @description Código interno do veículo. */
  cInt?: string;
  /** @description Placa do veículo. */
  placa: string;
  /** @description RENAVAM do veículo. */
  RENAVAM?: string;
  /** @description Tara em KG. */
  tara: number;
  /** @description Capacidade em KG. */
  capKG: number;
  /** @description Capacidade em M3. */
  capM3?: number;
  prop?: MdfeSefazVeicReboque_Prop;
  /**
   * @description Tipo de Carroceria.
   * Preencher com:
   * * 00 - não aplicável
   * * 01 - Aberta
   * * 02 - Fechada/Baú
   * * 03 - Granelera
   * * 04 - Porta Container
   * * 05 - Sider
   */
  tpCar: string;
  /**
   * @description UF em que veículo está licenciado.
   * Sigla da UF de licenciamento do veículo.
   */
  UF?: string;
};
/**
 * @description Proprietários ou possuidor do Veículo.
 * Só preenchido quando o veículo não pertencer à empresa emitente do MDF-e.
 */
export type MdfeSefazVeicReboque_Prop = {
  /**
   * @description Número do CPF.
   * Informar os zeros não significativos.
   */
  CPF?: string;
  /**
   * @description Número do CNPJ.
   * Informar os zeros não significativos.
   */
  CNPJ?: string;
  /**
   * @description Registro Nacional dos Transportadores Rodoviários de Carga.
   * Registro obrigatório do proprietário, co-proprietário ou arrendatário do veículo junto à ANTT para exercer a atividade de transportador rodoviário de cargas por conta de terceiros e mediante remuneração.
   */
  RNTRC: string;
  /** @description Razão Social ou Nome do proprietário. */
  xNome: string;
  /** @description Inscrição Estadual. */
  IE?: string;
  /** @description UF. */
  UF?: string;
  /**
   * @description Tipo Proprietário ou possuidor.
   * Preencher com:
   * * 0 - TAC Agregado
   * * 1 - TAC Independente
   * * 2 - Outros
   */
  tpProp: number;
};
/** @description Lacres. */
export type MdfeSefazLacRodo = {
  /** @description Número do Lacre. */
  nLacre: string;
};
/** @description Informações do modal Aquaviário. */
export type MdfeSefazAquav = {
  /** @description Irin do navio sempre deverá ser informado. */
  irin: string;
  /**
   * @description Código do tipo de embarcação.
   * Preencher com código da Tabela de Tipo de Embarcação definida no Ministério dos Transportes.
   */
  tpEmb: string;
  /** @description Código da embarcação. */
  cEmbar: string;
  /** @description Nome da embarcação. */
  xEmbar: string;
  /** @description Número da Viagem. */
  nViag: string;
  /**
   * @description Código do Porto de Embarque.
   * Preencher de acordo com Tabela de Portos definida no Ministério dos Transportes.
   */
  cPrtEmb: string;
  /**
   * @description Código do Porto de Destino.
   * Preencher de acordo com Tabela de Portos definida no Ministério dos Transportes.
   */
  cPrtDest: string;
  /** @description Porto de Transbordo. */
  prtTrans?: string;
  /**
   * @description Tipo de Navegação.
   * Preencher com:
   * * 0 - Interior
   * * 1 - Cabotagem
   */
  tpNav?: number;
  infTermCarreg?: MdfeSefazInfTermCarreg[];
  infTermDescarreg?: MdfeSefazInfTermDescarreg[];
  infEmbComb?: MdfeSefazInfEmbComb[];
  infUnidCargaVazia?: MdfeSefazInfUnidCargaVazia[];
  infUnidTranspVazia?: MdfeSefazInfUnidTranspVazia[];
  /**
   * @description Maritime Mobile Service Identify.
   * Preencher com o MMSI (Maritime Mobile Service Identify) fornecido pela ANATEL ou autoridade de telecomunicações de origem da embarcação.
   */
  MMSI?: string;
};
/** @description Grupo de informações dos terminais de carregamento. */
export type MdfeSefazInfTermCarreg = {
  /**
   * @description Código do Terminal de Carregamento.
   * Preencher de acordo com a Tabela de Terminais de Carregamento. O código de cada Porto está definido no Ministério de Transportes.
   */
  cTermCarreg: string;
  /** @description Nome do Terminal de Carregamento. */
  xTermCarreg: string;
};
/** @description Grupo de informações dos terminais de descarregamento. */
export type MdfeSefazInfTermDescarreg = {
  /**
   * @description Código do Terminal de Descarregamento.
   * Preencher de acordo com a Tabela de Terminais de Descarregamento. O código de cada Porto está definido no Ministério de Transportes.
   */
  cTermDescarreg: string;
  /** @description Nome do Terminal de Descarregamento. */
  xTermDescarreg: string;
};
/** @description Informações das Embarcações do Comboio. */
export type MdfeSefazInfEmbComb = {
  /** @description Código da embarcação do comboio. */
  cEmbComb: string;
  /** @description Identificador da Balsa. */
  xBalsa: string;
};
/** @description Informações das Undades de Carga vazias. */
export type MdfeSefazInfUnidCargaVazia = {
  /** @description Identificação da unidades de carga vazia. */
  idUnidCargaVazia: string;
  /**
   * @description Tipo da unidade de carga vazia.
   * * 1 - Container
   * * 2 - ULD
   * * 3 - Pallet
   * * 4 - Outros
   */
  tpUnidCargaVazia: number;
};
/** @description Informações das Undades de Transporte vazias. */
export type MdfeSefazInfUnidTranspVazia = {
  /** @description Identificação da unidades de transporte vazia. */
  idUnidTranspVazia: string;
  /**
   * @description Tipo da unidade de transporte vazia.
   * Deve ser preenchido com “1” para Rodoviário Tração do tipo caminhão ou “2” para Rodoviário reboque do tipo carreta.
   */
  tpUnidTranspVazia: number;
};
/** @description Informações do modal Ferroviário. */
export type MdfeSefazFerrov = {
  trem: MdfeSefazTrem;
  vag: MdfeSefazVag[];
};
/** @description Informações da composição do trem. */
export type MdfeSefazTrem = {
  /** @description Prefixo do Trem. */
  xPref: string;
  /**
   * Format: date-time
   * @description Data e hora de liberação do trem na origem.
   */
  dhTrem?: string;
  /**
   * @description Origem do Trem.
   * Sigla da estação de origem.
   */
  xOri: string;
  /**
   * @description Destino do Trem.
   * Sigla da estação de destino.
   */
  xDest: string;
  /** @description Quantidade de vagões carregados. */
  qVag: number;
};
/** @description informações dos Vagões. */
export type MdfeSefazVag = {
  /** @description Peso Base de Cálculo de Frete em Toneladas. */
  pesoBC: number;
  /** @description Peso Real em Toneladas. */
  pesoR: number;
  /** @description Tipo de Vagão. */
  tpVag?: string;
  /** @description Serie de Identificação do vagão. */
  serie: string;
  /** @description Número de Identificação do vagão. */
  nVag: number;
  /** @description Sequencia do vagão na composição. */
  nSeq?: number;
  /**
   * @description Tonelada Útil.
   * Unidade de peso referente à carga útil (apenas o peso da carga transportada), expressa em toneladas.
   */
  TU: number;
};
/** @description Informações dos Documentos fiscais vinculados ao manifesto. */
export type MdfeSefazInfDoc = {
  infMunDescarga: MdfeSefazInfMunDescarga[];
};
/** @description Informações dos Municípios de descarregamento. */
export type MdfeSefazInfMunDescarga = {
  /** @description Código do Município de Descarregamento. */
  cMunDescarga: string;
  /** @description Nome do Município de Descarregamento. */
  xMunDescarga: string;
  infCTe?: MdfeSefazInfCTe[];
  infNFe?: MdfeSefazInfNFe[];
  infMDFeTransp?: MdfeSefazInfMDFeTransp[];
};
/** @description Conhecimentos de Tranporte - usar este grupo quando for prestador de serviço de transporte. */
export type MdfeSefazInfCTe = {
  /** @description Conhecimento Eletrônico - Chave de Acesso. */
  chCTe: string;
  /** @description Segundo código de barras. */
  SegCodBarra?: string;
  /** @description Indicador de Reentrega. */
  indReentrega?: number;
  infUnidTransp?: MdfeSefazUnidadeTransp[];
  peri?: MdfeSefazPeri[];
  infEntregaParcial?: MdfeSefazInfEntregaParcial;
  /** @description Indicador de Prestação parcial. */
  indPrestacaoParcial?: number;
  infNFePrestParcial?: MdfeSefazInfNFePrestParcial[];
};
/**
 * @description Informações das Unidades de Transporte (Carreta/Reboque/Vagão).
 * Deve ser preenchido com as informações das unidades de transporte utilizadas.
 */
export type MdfeSefazUnidadeTransp = {
  /**
   * @description Tipo da Unidade de Transporte.
   * * 1 - Rodoviário Tração
   * * 2 - Rodoviário Reboque
   * * 3 - Navio
   * * 4 - Balsa
   * * 5 - Aeronave
   * * 6 - Vagão
   * * 7 - Outros
   */
  tpUnidTransp: number;
  /**
   * @description Identificação da Unidade de Transporte.
   * Informar a identificação conforme o tipo de unidade de transporte.
   * Por exemplo: para rodoviário tração ou reboque deverá preencher com a placa do veículo.
   */
  idUnidTransp: string;
  lacUnidTransp?: MdfeSefazLacUnidTransp[];
  infUnidCarga?: MdfeSefazUnidCarga[];
  /** @description Quantidade rateada (Peso,Volume). */
  qtdRat?: number;
};
/** @description Lacres das Unidades de Transporte. */
export type MdfeSefazLacUnidTransp = {
  /** @description Número do lacre. */
  nLacre: string;
};
/**
 * @description Informações das Unidades de Carga (Containeres/ULD/Outros).
 * Dispositivo de carga utilizada (Unit Load Device - ULD) significa todo tipo de contêiner de carga, vagão, contêiner de avião, palete de aeronave com rede ou palete de aeronave com rede sobre um iglu.
 */
export type MdfeSefazUnidCarga = {
  /**
   * @description Tipo da Unidade de Carga.
   * * 1 - Container
   * * 2 - ULD
   * * 3 - Pallet
   * * 4 - Outros
   */
  tpUnidCarga: number;
  /**
   * @description Identificação da Unidade de Carga.
   * Informar a identificação da unidade de carga, por exemplo: número do container.
   */
  idUnidCarga: string;
  lacUnidCarga?: MdfeSefazLacUnidCarga[];
  /** @description Quantidade rateada (Peso,Volume). */
  qtdRat?: number;
};
/** @description Lacres das Unidades de Carga. */
export type MdfeSefazLacUnidCarga = {
  /** @description Número do lacre. */
  nLacre: string;
};
/** @description Preenchido quando for  transporte de produtos classificados pela ONU como perigosos. */
export type MdfeSefazPeri = {
  /**
   * @description Número ONU/UN.
   * Ver a legislação de transporte de produtos perigosos aplicadas ao modal.
   */
  nONU: string;
  /**
   * @description Nome apropriado para embarque do produto.
   * Ver a legislação de transporte de produtos perigosos aplicada ao modo de transporte.
   */
  xNomeAE?: string;
  /**
   * @description Classe ou subclasse/divisão, e risco subsidiário/risco secundário.
   * Ver a legislação de transporte de produtos perigosos aplicadas ao modal.
   */
  xClaRisco?: string;
  /**
   * @description Grupo de Embalagem.
   * Ver a legislação de transporte de produtos perigosos aplicadas ao modal
   * Preenchimento obrigatório para o modal aéreo.
   * A legislação para o modal rodoviário e ferroviário não atribui grupo de embalagem para todos os produtos, portanto haverá casos de não preenchimento desse campo.
   */
  grEmb?: string;
  /**
   * @description Quantidade total por produto.
   * Preencher conforme a legislação de transporte de produtos perigosos aplicada ao modal.
   */
  qTotProd: string;
  /**
   * @description Quantidade e Tipo de volumes.
   * Preencher conforme a legislação de transporte de produtos perigosos aplicada ao modal.
   */
  qVolTipo?: string;
};
/** @description Grupo de informações da Entrega Parcial (Corte de Voo). */
export type MdfeSefazInfEntregaParcial = {
  /** @description Quantidade total de volumes. */
  qtdTotal: number;
  /** @description Quantidade de volumes enviados no MDF-e. */
  qtdParcial: number;
};
/** @description Grupo de informações das NFe que foram entregues do CTe relacionado. */
export type MdfeSefazInfNFePrestParcial = {
  /** @description Nota Fiscal Eletrônica. */
  chNFe: string;
};
/** @description Nota Fiscal Eletronica. */
export type MdfeSefazInfNFe = {
  /** @description Nota Fiscal Eletrônica. */
  chNFe: string;
  /** @description Segundo código de barras. */
  SegCodBarra?: string;
  /** @description Indicador de Reentrega. */
  indReentrega?: number;
  infUnidTransp?: MdfeSefazUnidadeTransp[];
  peri?: MdfeSefazInfNFe_Peri[];
};
/** @description Preenchido quando for  transporte de produtos classificados pela ONU como perigosos. */
export type MdfeSefazInfNFe_Peri = {
  /**
   * @description Número ONU/UN.
   * Ver a legislação de transporte de produtos perigosos aplicadas ao modal.
   */
  nONU: string;
  /**
   * @description Nome apropriado para embarque do produto.
   * Ver a legislação de transporte de produtos perigosos aplicada ao modo de transporte.
   */
  xNomeAE?: string;
  /**
   * @description Classe ou subclasse/divisão, e risco subsidiário/risco secundário.
   * Ver a legislação de transporte de produtos perigosos aplicadas ao modal.
   */
  xClaRisco?: string;
  /**
   * @description Grupo de Embalagem.
   * Ver a legislação de transporte de produtos perigosos aplicadas ao modal
   * Preenchimento obrigatório para o modal aéreo.
   * A legislação para o modal rodoviário e ferroviário não atribui grupo de embalagem para todos os produtos, portanto haverá casos de não preenchimento desse campo.
   */
  grEmb?: string;
  /**
   * @description Quantidade total por produto.
   * Preencher conforme a legislação de transporte de produtos perigosos aplicada ao modal.
   */
  qTotProd: string;
  /**
   * @description Quantidade e Tipo de volumes.
   * Preencher conforme a legislação de transporte de produtos perigosos aplicada ao modal.
   */
  qVolTipo?: string;
};
/** @description Manifesto Eletrônico de Documentos Fiscais. Somente para modal Aquaviário (vide regras MOC). */
export type MdfeSefazInfMDFeTransp = {
  /** @description Manifesto Eletrônico de Documentos Fiscais. */
  chMDFe: string;
  /** @description Indicador de Reentrega. */
  indReentrega?: number;
  infUnidTransp?: MdfeSefazUnidadeTransp[];
  peri?: MdfeSefazInfMDFeTransp_Peri[];
};
/** @description Preenchido quando for  transporte de produtos classificados pela ONU como perigosos. */
export type MdfeSefazInfMDFeTransp_Peri = {
  /**
   * @description Número ONU/UN.
   * Ver a legislação de transporte de produtos perigosos aplicadas ao modal.
   */
  nONU: string;
  /**
   * @description Nome apropriado para embarque do produto.
   * Ver a legislação de transporte de produtos perigosos aplicada ao modo de transporte.
   */
  xNomeAE?: string;
  /**
   * @description Classe ou subclasse/divisão, e risco subsidiário/risco secundário.
   * Ver a legislação de transporte de produtos perigosos aplicadas ao modal.
   */
  xClaRisco?: string;
  /**
   * @description Grupo de Embalagem.
   * Ver a legislação de transporte de produtos perigosos aplicadas ao modal
   * Preenchimento obrigatório para o modal aéreo.
   * A legislação para o modal rodoviário e ferroviário não atribui grupo de embalagem para todos os produtos, portanto haverá casos de não preenchimento desse campo.
   */
  grEmb?: string;
  /**
   * @description Quantidade total por produto.
   * Preencher conforme a legislação de transporte de produtos perigosos aplicada ao modal.
   */
  qTotProd: string;
  /**
   * @description Quantidade e Tipo de volumes.
   * Preencher conforme a legislação de transporte de produtos perigosos aplicada ao modal.
   */
  qVolTipo?: string;
};
/** @description Informações de Seguro da Carga. */
export type MdfeSefazSeg = {
  infResp: MdfeSefazInfResp;
  infSeg?: MdfeSefazInfSeg;
  /**
   * @description Número da Apólice.
   * Obrigatório pela lei 11.442/07 (RCTRC).
   */
  nApol?: string;
  /**
   * @description Número da Averbação.
   * Informar as averbações do seguro.
   */
  nAver?: string[];
};
/** @description Informações do responsável pelo seguro da carga. */
export type MdfeSefazInfResp = {
  /**
   * @description Responsável pelo seguro.
   * Preencher com:
   * * 1 - Emitente do MDF-e
   * * 22 - Responsável pela contratação do serviço de transporte (contratante)
   * Dados obrigatórios apenas no modal Rodoviário, depois da lei 11.442/07. Para os demais modais esta informação é opcional.
   */
  respSeg: number;
  /**
   * @description Número do CNPJ do responsável pelo seguro.
   * Obrigatório apenas se responsável pelo seguro for (2) responsável pela contratação do transporte - pessoa jurídica.
   */
  CNPJ?: string;
  /**
   * @description Número do CPF do responsável pelo seguro.
   * Obrigatório apenas se responsável pelo seguro for (2) responsável pela contratação do transporte - pessoa física.
   */
  CPF?: string;
};
/** @description Informações da seguradora. */
export type MdfeSefazInfSeg = {
  /** @description Nome da Seguradora. */
  xSeg: string;
  /**
   * @description Número do CNPJ da seguradora.
   * Obrigatório apenas se responsável pelo seguro for (2) responsável pela contratação do transporte - pessoa jurídica.
   */
  CNPJ: string;
};
/**
 * @description Produto predominante.
 * Informar a descrição do produto predominante, conforme o item de maior valor financeiro conforme Resolução ANTT n° 5.867 de 2020).
 */
export type MdfeSefazProdPred = {
  /**
   * @description Tipo de Carga.
   * Conforme Resolução ANTT nº.  5.849/2019.
   * * 01 - Granel sólido
   * * 02 - Granel líquido
   * * 03 - Frigorificada
   * * 04 - Conteinerizada
   * * 05 - Carga Geral
   * * 06 - Neogranel
   * * 07 - Perigosa (granel sólido)
   * * 08 - Perigosa (granel líquido)
   * * 09 - Perigosa (carga frigorificada)
   * * 10 - Perigosa (conteinerizada)
   * * 11 - Perigosa (carga geral)
   * * 12 - Granel pressurizada
   */
  tpCarga: string;
  /** @description Descrição do produto. */
  xProd: string;
  /** @description GTIN (Global Trade Item Number) do produto, antigo código EAN ou código de barras. */
  cEAN?: string;
  /** @description Código NCM. */
  NCM?: string;
  infLotacao?: MdfeSefazInfLotacao;
};
/** @description Informações da carga lotação. Informar somente quando MDF-e for de carga lotação. */
export type MdfeSefazInfLotacao = {
  infLocalCarrega: MdfeSefazInfLocalCarrega;
  infLocalDescarrega: MdfeSefazInfLocalDescarrega;
};
/** @description Informações da localização de carregamento do MDF-e de carga lotação. */
export type MdfeSefazInfLocalCarrega = {
  /**
   * @description CEP onde foi carregado o MDF-e.
   * Informar zeros não significativos.
   */
  CEP?: string;
  /** @description Latitude do ponto geográfico onde foi carregado o MDF-e. */
  latitude?: string;
  /** @description Latitude do ponto geográfico onde foi carregado o MDF-e. */
  longitude?: string;
};
/** @description Informações da localização de descarregamento do MDF-e de carga lotação. */
export type MdfeSefazInfLocalDescarrega = {
  /**
   * @description CEP onde foi descarregado o MDF-e.
   * Informar zeros não significativos.
   */
  CEP?: string;
  /** @description Latitude do ponto geográfico onde foi descarregado o MDF-e. */
  latitude?: string;
  /** @description Latitude do ponto geográfico onde foi descarregado o MDF-e. */
  longitude?: string;
};
/** @description Totalizadores da carga transportada e seus documentos fiscais. */
export type MdfeSefazTot = {
  /** @description Quantidade total de CT-e relacionados no Manifesto. */
  qCTe?: number;
  /** @description Quantidade total de NF-e relacionadas no Manifesto. */
  qNFe?: number;
  /** @description Quantidade total de MDF-e relacionados no Manifesto Aquaviário. */
  qMDFe?: number;
  /** @description Valor total da carga / mercadorias transportadas. */
  vCarga: number;
  /**
   * @description Código da unidade de medida do Peso Bruto da Carga / Mercadorias transportadas.
   * * 01 - KG
   * * 02 - TON
   */
  cUnid: string;
  /** @description Peso Bruto Total da Carga / Mercadorias transportadas. */
  qCarga: number;
};
/**
 * @description Lacres do MDF-e.
 * Preechimento opcional para os modais Rodoviário e Ferroviário.
 */
export type MdfeSefazLacres = {
  /** @description número do lacre. */
  nLacre: string;
};
/**
 * @description Autorizados para download do XML do DF-e.
 * Informar CNPJ ou CPF. Preencher os zeros não significativos.
 */
export type MdfeSefazAutXML = {
  /**
   * @description CNPJ do autorizado.
   * Informar zeros não significativos.
   */
  CNPJ?: string;
  /**
   * @description CPF do autorizado.
   * Informar zeros não significativos.
   */
  CPF?: string;
};
/** @description Informações Adicionais. */
export type MdfeSefazInfAdic = {
  /**
   * @description Informações adicionais de interesse do Fisco.
   * Norma referenciada, informações complementares, etc.
   */
  infAdFisco?: string;
  /** @description Informações complementares de interesse do Contribuinte. */
  infCpl?: string;
};
/** @description Informações do Responsável Técnico pela emissão do DF-e. */
export type MdfeSefazRespTec = {
  /**
   * @description CNPJ da pessoa jurídica responsável técnica pelo sistema utilizado na emissão do documento fiscal eletrônico.
   * Informar o CNPJ da pessoa jurídica desenvolvedora do sistema utilizado na emissão do documento fiscal eletrônico.
   */
  CNPJ: string;
  /**
   * @description Nome da pessoa a ser contatada.
   * Informar o nome da pessoa a ser contatada na empresa desenvolvedora do sistema utilizado na emissão do documento fiscal eletrônico. No caso de pessoa física, informar o respectivo nome.
   */
  xContato: string;
  /** @description Email da pessoa jurídica a ser contatada. */
  email: string;
  /**
   * @description Telefone da pessoa jurídica a ser contatada.
   * Preencher com o Código DDD + número do telefone.
   */
  fone: string;
  /**
   * @description Identificador do código de segurança do responsável técnico.
   * Identificador do CSRT utilizado para geração do hash.
   */
  idCSRT?: number;
  /** @description Código de Segurança do Responsável Técnico utilizado para montar o hash do CSRT. */
  CSRT?: string;
  /**
   * @description Hash do token do código de segurança do responsável técnico.
   * O hashCSRT é o resultado das funções SHA-1 e base64 do token CSRT fornecido pelo fisco + chave de acesso do DF-e. (Implementação em futura NT)
   * Observação: 28 caracteres são representados no schema como 20 bytes do tipo base64Binary.
   *
   * *Se não informado, será calculado automaticamente, desde que os campos `idCSRT` e `CSRT` sejam fornecidos.*
   */
  hashCSRT?: string;
};
/** @description Grupo de informações do pedido de emissão da Nota Fiscal Fácil. */
export type MdfeSefazInfSolicNFF = {
  /**
   * @description Solicitação do pedido de emissão da NFF.
   * Será preenchido com a totalidade de campos informados no aplicativo emissor serializado.
   */
  xSolic: string;
};
/** @description Informações suplementares do MDF-e. */
export type MdfeSefazInfMDFeSupl = {
  /**
   * @description Texto com o QR-Code para consulta do MDF-e.
   *
   * *Geramos automaticamente quando nenhum valor é informado.*
   */
  qrCodMDFe?: string;
};
export type DfeLote = {
  /** @description ID único gerado pela Nuvem Fiscal para este documento. */
  id?: string;
  /** Format: date-time */
  created_at?: string;
  /** @enum {string} */
  status?: "pendente" | "processado" | "erro";
  /** @enum {string} */
  ambiente?: "homologacao" | "producao";
  /** @description Seu identificador único para este documento. Opcional, ajuda a evitar o envio duplicado de um mesmo documento. */
  referencia?: string;
  id_lote?: string;
  recibo?: DfeRecibo;
  documentos?: Dfe[];
};
export type DfeRecibo = {
  /** @description Número do Recibo */
  numero?: string;
  /** @description Código do status da mensagem enviada. */
  codigo_status?: number;
  /** @description Descrição literal do status do serviço solicitado. */
  motivo_status?: string;
  /**
   * Format: date-time
   * @description Data e hora de processamento.
   */
  data_recebimento?: string;
  /** @description Código da Mensagem. */
  codigo_mensagem?: number;
  /** @description Mensagem da SEFAZ para o emissor. */
  mensagem?: string;
};
export type DfeLoteListagem = {
  "@count"?: number;
  data?: DfeLote[];
};
export type MdfePedidoCancelamento = {
  /** @description Justificativa para o cancelamento. Preencheremos automaticamente, caso esteja em branco. */
  justificativa?: string;
};
export type MdfePedidoEncerramento = {
  /**
   * Format: date
   * @description Data que o manifesto foi encerrado.
   *
   * Opcional. Caso não seja informada, será utilizada a data em que a solicitação foi feita à API.
   */
  data_encerramento?: string;
  /** @description UF de encerramento do manifesto. */
  uf: string;
  /** @description Código IBGE do Município de encerramento do manifesto. */
  codigo_municipio: string;
};
export type MdfeEncerramento = {
  /**
   * Format: date
   * @description Data que o manifesto foi encerrado.
   */
  data_encerramento?: string;
  /** @description UF de encerramento do manifesto. */
  uf?: string;
  /** @description Código do Município de encerramento do manifesto. */
  codigo_municipio?: string;
  /** @description ID único gerado pela Nuvem Fiscal para este evento. */
  id?: string;
  /**
   * @description Identificação do ambiente.
   * @enum {string}
   */
  ambiente?: "homologacao" | "producao";
  /**
   * @description Status do Evento.
   * @enum {string}
   */
  status?: "pendente" | "registrado" | "rejeitado" | "erro";
  /** @description Identificação do autor do evento. */
  autor?: DfeAutorEvento;
  /** @description Chave de Acesso do documento vinculado ao evento. */
  chave_acesso?: string;
  /**
   * Format: date-time
   * @description Data e hora do Evento.
   */
  data_evento?: string;
  /** @description Sequencial do evento para o mesmo tipo de evento. */
  numero_sequencial?: number;
  /**
   * Format: date-time
   * @description Data e hora do recebimento do Evento pela SEFAZ.
   */
  data_recebimento?: string;
  /** @description Código do status de registro do Evento. */
  codigo_status?: number;
  /** @description Descrição literal do status do registro do Evento. */
  motivo_status?: string;
  /** @description Número do Protocolo de registro do Evento. */
  numero_protocolo?: string;
  /** @description Código da Mensagem. */
  codigo_mensagem?: number;
  /** @description Mensagem da SEFAZ para o emissor. */
  mensagem?: string;
  tipo_evento?: string;
};
export type MdfePedidoInclusaoCondutor = {
  /** @description Nome do condutor. */
  nome_condutor: string;
  /** @description CPF do condutor. */
  cpf_condutor: string;
};
export type MdfeInclusaoCondutor = {
  /** @description Nome do condutor. */
  nome_condutor?: string;
  /** @description CPF do condutor. */
  cpf_condutor?: string;
  /** @description ID único gerado pela Nuvem Fiscal para este evento. */
  id?: string;
  /**
   * @description Identificação do ambiente.
   * @enum {string}
   */
  ambiente?: "homologacao" | "producao";
  /**
   * @description Status do Evento.
   * @enum {string}
   */
  status?: "pendente" | "registrado" | "rejeitado" | "erro";
  /** @description Identificação do autor do evento. */
  autor?: DfeAutorEvento;
  /** @description Chave de Acesso do documento vinculado ao evento. */
  chave_acesso?: string;
  /**
   * Format: date-time
   * @description Data e hora do Evento.
   */
  data_evento?: string;
  /** @description Sequencial do evento para o mesmo tipo de evento. */
  numero_sequencial?: number;
  /**
   * Format: date-time
   * @description Data e hora do recebimento do Evento pela SEFAZ.
   */
  data_recebimento?: string;
  /** @description Código do status de registro do Evento. */
  codigo_status?: number;
  /** @description Descrição literal do status do registro do Evento. */
  motivo_status?: string;
  /** @description Número do Protocolo de registro do Evento. */
  numero_protocolo?: string;
  /** @description Código da Mensagem. */
  codigo_mensagem?: number;
  /** @description Mensagem da SEFAZ para o emissor. */
  mensagem?: string;
  tipo_evento?: string;
};
export type MdfePedidoInclusaoDfe = {
  /** @description Código do Município de carregamento. */
  codigo_municipio_carrega?: string;
  /** @description Nome do Município de carregamento. */
  municipio_carrega?: string;
  /** @description Informações dos documentos fiscais vinculados ao manifesto. */
  documentos?: MdfeDocumentoVinculado[];
  protocolo_autorizacao?: string;
};
export type MdfeDocumentoVinculado = {
  /** @description Código do Município de descarregamento. */
  codigo_municipio_descarga?: string;
  /** @description Nome do Município de descarregamento. */
  municipio_descarga?: string;
  /** @description Chave de acesso da NF-e. */
  chave_acesso_nfe?: string;
};
export type MdfeInclusaoDfe = {
  /** @description Código do Município de carregamento. */
  codigo_municipio_carrega?: string;
  /** @description Nome do Município de carregamento. */
  municipio_carrega?: string;
  /** @description Informações dos documentos fiscais vinculados ao manifesto. */
  documentos?: MdfeDocumentoVinculado[];
  /** @description ID único gerado pela Nuvem Fiscal para este evento. */
  id?: string;
  /**
   * @description Identificação do ambiente.
   * @enum {string}
   */
  ambiente?: "homologacao" | "producao";
  /**
   * @description Status do Evento.
   * @enum {string}
   */
  status?: "pendente" | "registrado" | "rejeitado" | "erro";
  /** @description Identificação do autor do evento. */
  autor?: DfeAutorEvento;
  /** @description Chave de Acesso do documento vinculado ao evento. */
  chave_acesso?: string;
  /**
   * Format: date-time
   * @description Data e hora do Evento.
   */
  data_evento?: string;
  /** @description Sequencial do evento para o mesmo tipo de evento. */
  numero_sequencial?: number;
  /**
   * Format: date-time
   * @description Data e hora do recebimento do Evento pela SEFAZ.
   */
  data_recebimento?: string;
  /** @description Código do status de registro do Evento. */
  codigo_status?: number;
  /** @description Descrição literal do status do registro do Evento. */
  motivo_status?: string;
  /** @description Número do Protocolo de registro do Evento. */
  numero_protocolo?: string;
  /** @description Código da Mensagem. */
  codigo_mensagem?: number;
  /** @description Mensagem da SEFAZ para o emissor. */
  mensagem?: string;
  tipo_evento?: string;
};
/** @description Dados do Resultado do Dados do Pedido de Consulta de cadastro de contribuintes. */
export type DfeContribuinteInfCons = {
  /** @description Código do status da mensagem enviada. */
  codigo_status: number;
  /** @description Descrição literal do status do serviço solicitado. */
  motivo_status: string;
  /** @description sigla da UF consultada, utilizar SU para SUFRAMA. */
  uf: string;
  /** @description Inscrição Estadual do contribuinte. */
  ie?: string;
  /** @description CNPJ do contribuinte. */
  cnpj?: string;
  /** @description CPF do contribuinte. */
  cpf?: string;
  /**
   * Format: date-time
   * @description Data da Consulta.
   */
  data_consulta: string;
  /** @description código da UF de atendimento. */
  uf_atendimento: number;
  informacoes_cadastrais?: DfeContribuinteInfCad[];
};
/** @description Informações cadastrais do contribuinte consultado. */
export type DfeContribuinteInfCad = {
  /** @description Número da Inscrição Estadual do contribuinte. */
  ie: string;
  /** @description Número do CNPJ  do contribuinte. */
  cnpj?: string;
  /** @description Número do CPF do contribuinte. */
  cpf?: string;
  /** @description Sigla da UF de localização do contribuinte. Em algumas situações, a UF de localização pode ser diferente da UF consultada. Ex. IE de Substituto Tributário. */
  uf: string;
  /**
   * @description Situação cadastral do contribuinte:
   * * 0 - não habilitado
   * * 1 - habilitado
   */
  situacao_cadastral: number;
  /**
   * @description Indicador de contribuinte credenciado a emitir NF-e.
   * * 0 - Não credenciado para emissão da NF-e
   * * 1 - Credenciado
   * * 2 - Credenciado com obrigatoriedade para todas operações
   * * 3 - Credenciado com obrigatoriedade parcial
   * * 4 - a SEFAZ não fornece a informação
   * Este indicador significa apenas que o contribuinte é credenciado para emitir NF-e na SEFAZ consultada.
   */
  indicador_nfe: number;
  /**
   * @description Indicador de contribuinte credenciado a emitir CT-e.
   * * 0 - Não credenciado para emissão da CT-e
   * * 1 - Credenciado
   * * 2 - Credenciado com obrigatoriedade para todas operações
   * * 3 - Credenciado com obrigatoriedade parcial
   * * 4 - a SEFAZ não fornece a informação
   * Este indicador significa apenas que o contribuinte é credenciado para emitir CT-e na SEFAZ consultada.
   */
  indicador_cte: number;
  /** @description Razão Social ou nome do contribuinte. */
  nome_razao_social: string;
  /** @description Razão Social ou nome do contribuinte. */
  nome_fantasia?: string;
  /** @description Regime de Apuração do ICMS. */
  regime_apuracao_icms?: string;
  /** @description CNAE Fiscal do contribuinte. */
  cnae?: string;
  /**
   * Format: date
   * @description Data de início de atividades do contribuinte.
   */
  data_inicio_atividade?: string;
  /**
   * Format: date
   * @description Data da última modificação da situação cadastral do contribuinte.
   */
  data_situacao_cadastral?: string;
  /**
   * Format: date
   * @description Data de ocorrência da baixa do contribuinte.
   */
  data_fim_atividade?: string;
  /** @description Inscrição Estadual Única. */
  ie_unica?: string;
  /** @description Inscrição Estadual atual. */
  ie_atual?: string;
  endereco?: DfeContribuinteEndereco;
};
/** @description Dados do endereço. */
export type DfeContribuinteEndereco = {
  /** @description Logradouro. */
  logradouro: string;
  /** @description Número. */
  numero: string;
  /** @description Complemento. */
  complemento?: string;
  /** @description Bairro. */
  bairro: string;
  /** @description Código do município (utilizar a tabela do IBGE), informar 9999999 para operações com o exterior. */
  codigo_municipio: string;
  /** @description Nome do município, informar EXTERIOR para operações com o exterior. */
  nome_municipio: string;
  /** @description Sigla da UF, informar EX para operações com o exterior. */
  uf: string;
  /** @description CEP. */
  cep?: string;
  /** @description Código de Pais. */
  codigo_pais?: string;
  /** @description Nome do país. */
  pais?: string;
  /** @description Telefone, preencher com Código DDD + número do telefone , nas operações com exterior é permtido informar o código do país + código da localidade + número do telefone. */
  fone?: string;
};
export type NfePedidoEmissaoLote = {
  documentos: NfePedidoEmissao[];
  /**
   * @description Identificação do Ambiente.
   * @enum {string}
   */
  ambiente: "homologacao" | "producao";
  /** @description Seu identificador para este documento. Opcional, ajuda a evitar o envio duplicado de um mesmo documento. */
  referencia?: string;
  id_lote: string;
};
export type NfePedidoEmissao = {
  infNFe: NfeSefazInfNFe;
  infNFeSupl?: NfeSefazInfNFeSupl;
  /**
   * @description Identificação do Ambiente.
   * @enum {string}
   */
  ambiente: "homologacao" | "producao";
  /** @description Seu identificador único para este documento. Opcional, ajuda a evitar o envio duplicado de um mesmo documento. */
  referencia?: string;
};
/** @description Informações da Nota Fiscal eletrônica. */
export type NfeSefazInfNFe = {
  /** @description Versão do leiaute (v4.00). */
  versao: string;
  /**
   * @description PL_005d - 11/08/09 - validação do Id.
   *
   * *Geramos automaticamente quando nenhum valor é informado.*
   */
  Id?: string;
  ide: NfeSefazIde;
  emit: NfeSefazEmit;
  avulsa?: NfeSefazAvulsa;
  dest?: NfeSefazDest;
  retirada?: NfeSefazLocal;
  entrega?: NfeSefazLocal;
  autXML?: NfeSefazAutXML[];
  det: NfeSefazDet[];
  total: NfeSefazTotal;
  transp: NfeSefazTransp;
  cobr?: NfeSefazCobr;
  pag: NfeSefazPag;
  infIntermed?: NfeSefazInfIntermed;
  infAdic?: NfeSefazInfAdic;
  exporta?: NfeSefazExporta;
  compra?: NfeSefazCompra;
  cana?: NfeSefazCana;
  infRespTec?: NfeSefazInfRespTec;
  infSolicNFF?: NfeSefazInfSolicNFF;
  agropecuario?: NfeSefazAgropecuario;
};
/** @description identificação da NF-e. */
export type NfeSefazIde = {
  /** @description Código da UF do emitente do Documento Fiscal. Utilizar a Tabela do IBGE. */
  cUF: number;
  /**
   * @description Código numérico que compõe a Chave de Acesso. Número aleatório gerado pelo emitente para cada NF-e.
   *
   * *Geramos automaticamente quando nenhum valor é informado.*
   */
  cNF?: string;
  /** @description Descrição da Natureza da Operação. */
  natOp: string;
  /**
   * @description Código do modelo do Documento Fiscal:
   * * 55 - NF-e
   * * 65 - NFC-e
   */
  mod?: number;
  /**
   * @description Série do Documento Fiscal:
   * * Série normal 0-889
   * * Avulsa Fisco 890-899
   * * SCAN 900-999
   */
  serie: number;
  /** @description Número do Documento Fiscal. */
  nNF: number;
  /**
   * Format: date-time
   * @description Data e Hora de emissão do Documento Fiscal (AAAA-MM-DDThh:mm:ssTZD) ex.: 2012-09-01T13:00:00-03:00.
   */
  dhEmi: string;
  /**
   * Format: date-time
   * @description Data e Hora da saída ou de entrada da mercadoria / produto (AAAA-MM-DDTHH:mm:ssTZD).
   */
  dhSaiEnt?: string;
  /**
   * @description Tipo do Documento Fiscal:
   * * 0 - Entrada
   * * 1 - Saída
   */
  tpNF: number;
  /**
   * @description Identificador de Local de destino da operação:
   * * 1 - Interna
   * * 2 - Interestadual
   * * 3 - Exterior
   */
  idDest: number;
  /** @description Código do Município de Ocorrência do Fato Gerador (utilizar a tabela do IBGE). */
  cMunFG: string;
  /**
   * @description Informar o município de ocorrência do fato gerador do fato gerador do IBS / CBS.
   * Campo preenchido somente quando “indPres = 5 (Operação presencial, fora do estabelecimento) ”, e não tiver endereço do destinatário (Grupo: E05) ou local de entrega (Grupo: G01).
   */
  cMunFGIBS?: string;
  /**
   * @description Formato de impressão do DANFE:
   * * 0 - Sem DANFE
   * * 1 - DANFe Retrato
   * * 2 - DANFe Paisagem
   * * 3 - DANFe Simplificado
   * * 4 - DANFe NFC-e
   * * 5 - DANFe NFC-e em mensagem eletrônica
   */
  tpImp: number;
  /**
   * @description Forma de emissão da NF-e
   * * 1 - Normal
   * * 2 - Contingência FS
   * * 3 - Regime Especial NFF (NT 2021.002)
   * * 4 - Contingência DPEC
   * * 5 - Contingência FSDA
   * * 6 - Contingência SVC - AN
   * * 7 - Contingência SVC - RS
   * * 9 - Contingência off-line NFC-e
   */
  tpEmis: number;
  /**
   * @description Digito Verificador da Chave de Acesso da NF-e.
   *
   * *Geramos automaticamente quando nenhum valor é informado.*
   */
  cDV?: number;
  /**
   * @description Identificação do Ambiente:
   * * 1 - Produção
   * * 2 - Homologação
   */
  tpAmb?: number;
  /**
   * @description Finalidade da emissão da NF-e:
   * * 1 - NFe normal
   * * 2 - NFe complementar
   * * 3 - NFe de ajuste
   * * 4 - Devolução/Retorno
   * * 5 - Nota de crédito
   * * 6 - Nota de débito
   */
  finNFe: number;
  /**
   * @description Tipo de Nota de Débito:
   * * 01 - Transferência de créditos para Cooperativas
   * * 02 - Anulação de Crédito por Saídas Imunes/Isentas
   * * 03 - Débitos de notas fiscais não processadas na apuração
   * * 04 - Multa e juros
   * * 05 - Transferência de crédito de sucessão
   */
  tpNFDebito?: string;
  /** @description Tipo de Nota de Crédito. */
  tpNFCredito?: string;
  /**
   * @description Indica operação com consumidor final:
   * * 0 - Não
   * * 1 - Consumidor Final
   */
  indFinal: number;
  /**
   * @description Indicador de presença do comprador no estabelecimento comercial no momento da operação:
   * * 0 - Não se aplica (ex.: Nota Fiscal complementar ou de ajuste)
   * * 1 - Operação presencial
   * * 2 - Não presencial, internet
   * * 3 - Não presencial, teleatendimento
   * * 4 - NFC-e entrega em domicílio
   * * 5 - Operação presencial, fora do estabelecimento
   * * 9 - Não presencial, outros
   */
  indPres: number;
  /**
   * @description Indicador de intermediador/marketplace
   * * 0 - Operação sem intermediador (em site ou plataforma própria)
   * * 1 - Operação em site ou plataforma de terceiros (intermediadores/marketplace)
   */
  indIntermed?: number;
  /**
   * @description Processo de emissão utilizado com a seguinte codificação:
   * * 0 - emissão de NF-e com aplicativo do contribuinte
   * * 1 - emissão de NF-e avulsa pelo Fisco
   * * 2 - emissão de NF-e avulsa, pelo contribuinte com seu certificado digital, através do site
   * do Fisco
   * * 3 - emissão de NF-e pelo contribuinte com aplicativo fornecido pelo Fisco
   */
  procEmi: number;
  /**
   * @description versão do aplicativo utilizado no processo de
   * emissão.
   */
  verProc: string;
  /**
   * Format: date-time
   * @description Informar a data e hora de entrada em contingência contingência no formato  (AAAA-MM-DDThh:mm:ssTZD) ex.: 2012-09-01T13:00:00-03:00.
   */
  dhCont?: string;
  /** @description Informar a Justificativa da entrada. */
  xJust?: string;
  NFref?: NfeSefazNFref[];
  gCompraGov?: NfeSefazCompraGov;
  gPagAntecipado?: NfeSefazGPagAntecipado;
};
/** @description Grupo de infromações da NF referenciada. */
export type NfeSefazNFref = {
  /** @description Chave de acesso das NF-e referenciadas. Chave de acesso compostas por Código da UF (tabela do IBGE) + AAMM da emissão + CNPJ do Emitente + modelo, série e número da NF-e Referenciada + Código Numérico + DV. */
  refNFe?: string;
  /** @description Referencia uma NF-e (modelo 55) emitida anteriormente pela sua Chave de Acesso com código numérico zerado, permitindo manter o sigilo da NF-e referenciada. */
  refNFeSig?: string;
  refNF?: NfeSefazRefNF;
  refNFP?: NfeSefazRefNFP;
  /** @description Utilizar esta TAG para referenciar um CT-e emitido anteriormente, vinculada a NF-e atual. */
  refCTe?: string;
  refECF?: NfeSefazRefECF;
};
/** @description Dados da NF modelo 1/1A referenciada ou NF modelo 2 referenciada. */
export type NfeSefazRefNF = {
  /** @description Código da UF do emitente do Documento Fiscal. Utilizar a Tabela do IBGE. */
  cUF: number;
  /** @description AAMM da emissão. */
  AAMM: string;
  /** @description CNPJ do emitente do documento fiscal referenciado. */
  CNPJ: string;
  /** @description Código do modelo do Documento Fiscal. Utilizar 01 para NF modelo 1/1A e 02 para NF modelo 02. */
  mod: string;
  /** @description Série do Documento Fiscal, informar zero se inexistente. */
  serie: number;
  /** @description Número do Documento Fiscal. */
  nNF: number;
};
/** @description Grupo com as informações NF de produtor referenciada. */
export type NfeSefazRefNFP = {
  /** @description Código da UF do emitente do Documento FiscalUtilizar a Tabela do IBGE (Anexo IV - Tabela de UF, Município e País). */
  cUF: number;
  /** @description AAMM da emissão da NF de produtor. */
  AAMM: string;
  /** @description CNPJ do emitente da NF de produtor. */
  CNPJ?: string;
  /** @description CPF do emitente da NF de produtor. */
  CPF?: string;
  /** @description IE do emitente da NF de Produtor. */
  IE: string;
  /** @description Código do modelo do Documento Fiscal - utilizar 04 para NF de produtor  ou 01 para NF Avulsa. */
  mod: string;
  /** @description Série do Documento Fiscal, informar zero se inexistentesérie. */
  serie: number;
  /** @description Número do Documento Fiscal - 1 - 999999999. */
  nNF: number;
};
/** @description Grupo do Cupom Fiscal vinculado à NF-e. */
export type NfeSefazRefECF = {
  /**
   * @description Código do modelo do Documento Fiscal
   * Preencher com "2B", quando se tratar de Cupom Fiscal emitido por máquina registradora (não ECF), com "2C", quando se tratar de Cupom Fiscal PDV, ou "2D", quando se tratar de Cupom Fiscal (emitido por ECF).
   */
  mod: string;
  /** @description Informar o número de ordem seqüencial do ECF que emitiu o Cupom Fiscal vinculado à NF-e. */
  nECF: number;
  /** @description Informar o Número do Contador de Ordem de Operação - COO vinculado à NF-e. */
  nCOO: number;
};
/** @description Grupo de Compras Governamentais. */
export type NfeSefazCompraGov = {
  /**
   * @description Para administração pública direta e suas autarquias e fundações:
   * * 1 - União
   * * 2 - Estados
   * * 3 - Distrito Federal
   * * 4 - Municípios
   */
  tpEnteGov: number;
  /** @description Percentual de redução de aliquota em compra goverrnamental. */
  pRedutor: number;
  /**
   * @description Tipo da operação com ente governamental:
   * * 1 - Fornecimento
   * * 2 - Recebimento do Pagamento
   */
  tpOperGov: number;
};
/** @description Informado para abater as parcelas de antecipação de pagamento, conforme Art. 10. § 4º. */
export type NfeSefazGPagAntecipado = {
  /** @description Chave de acesso da NF-e de antecipação de pagamento. */
  refNFe: string[];
};
/** @description Identificação do emitente. */
export type NfeSefazEmit = {
  /**
   * @description Número do CNPJ do emitente.
   *
   * ***Obrigatório caso o emitente seja pessoa jurídica***.
   */
  CNPJ?: string;
  /**
   * @description Número do CPF do emitente.
   *
   * ***Obrigatorio caso o emitente seja pessoa física***.
   */
  CPF?: string;
  /**
   * @description Razão Social ou Nome do emitente.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  xNome?: string;
  /**
   * @description Nome fantasia.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  xFant?: string;
  enderEmit?: NfeSefazEnderEmi;
  /**
   * @description Inscrição Estadual do Emitente.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  IE?: string;
  /**
   * @description Inscricao Estadual do Substituto Tributário.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  IEST?: string;
  /**
   * @description Inscrição Municipal.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  IM?: string;
  /**
   * @description CNAE Fiscal.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  CNAE?: string;
  /**
   * @description Código de Regime Tributário.
   * Este campo será obrigatoriamente preenchido com:
   * * 1 - Simples Nacional
   * * 2 - Simples Nacional - excesso de sublimite de receita bruta
   * * 3 - Regime Normal
   * * 4 - Simples Nacional - Microempreendedor individual - MEI
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  CRT?: number;
};
/**
 * @description Endereço do emitente.
 *
 * *Caso não seja informado, será utilizado o do cadastro da empresa.*
 */
export type NfeSefazEnderEmi = {
  /**
   * @description Logradouro.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  xLgr?: string;
  /**
   * @description Número.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  nro?: string;
  /**
   * @description Complemento.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  xCpl?: string;
  /**
   * @description Bairro.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  xBairro?: string;
  /**
   * @description Código do município.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  cMun?: string;
  /**
   * @description Nome do município.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  xMun?: string;
  /**
   * @description Sigla da UF.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  UF?: string;
  /**
   * @description CEP - NT 2011/004.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  CEP?: string;
  /**
   * @description Código do país.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  cPais?: string;
  /**
   * @description Nome do país.
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  xPais?: string;
  /**
   * @description Preencher com Código DDD + número do telefone (v.2.0).
   *
   * *Caso não seja informado, será utilizado o do cadastro da empresa.*
   */
  fone?: string;
};
/** @description Emissão de avulsa, informar os dados do Fisco emitente. */
export type NfeSefazAvulsa = {
  /** @description CNPJ do Órgão emissor. */
  CNPJ: string;
  /** @description Órgão emitente. */
  xOrgao: string;
  /** @description Matrícula do agente. */
  matr: string;
  /** @description Nome do agente. */
  xAgente: string;
  /** @description Telefone. */
  fone?: string;
  /** @description Sigla da Unidade da Federação. */
  UF: string;
  /** @description Número do Documento de Arrecadação de Receita. */
  nDAR?: string;
  /**
   * Format: date
   * @description Data de emissão do DAR (AAAA-MM-DD).
   */
  dEmi?: string;
  /** @description Valor Total constante no DAR. */
  vDAR?: number;
  /** @description Repartição Fiscal emitente. */
  repEmi: string;
  /**
   * Format: date
   * @description Data de pagamento do DAR (AAAA-MM-DD).
   */
  dPag?: string;
};
/** @description Identificação do Destinatário. */
export type NfeSefazDest = {
  /** @description Número do CNPJ. */
  CNPJ?: string;
  /** @description Número do CPF. */
  CPF?: string;
  /** @description Identificador do destinatário, em caso de comprador estrangeiro. */
  idEstrangeiro?: string;
  /** @description Razão Social ou nome do destinatário. */
  xNome?: string;
  enderDest?: NfeSefazEndereco;
  /**
   * @description Indicador da IE do destinatário:
   * * 1 - Contribuinte ICMSpagamento à vista
   * * 2 - Contribuinte isento de inscrição
   * * 9 - Não Contribuinte
   */
  indIEDest: number;
  /** @description Inscrição Estadual (obrigatório nas operações com contribuintes do ICMS). */
  IE?: string;
  /** @description Inscrição na SUFRAMA (Obrigatório nas operações com as áreas com benefícios de incentivos fiscais sob controle da SUFRAMA) PL_005d - 11/08/09 - alterado para aceitar 8 ou 9 dígitos. */
  ISUF?: string;
  /** @description Inscrição Municipal do tomador do serviço. */
  IM?: string;
  /**
   * @description Informar o e-mail do destinatário. O campo pode ser utilizado para informar o e-mail
   * de recepção da NF-e indicada pelo destinatário.
   */
  email?: string;
};
/** @description Dados do endereço. */
export type NfeSefazEndereco = {
  /** @description Logradouro. */
  xLgr: string;
  /** @description Número. */
  nro: string;
  /** @description Complemento. */
  xCpl?: string;
  /** @description Bairro. */
  xBairro: string;
  /** @description Código do município (utilizar a tabela do IBGE), informar 9999999 para operações com o exterior. */
  cMun: string;
  /** @description Nome do município, informar EXTERIOR para operações com o exterior. */
  xMun: string;
  /** @description Sigla da UF, informar EX para operações com o exterior. */
  UF: string;
  /** @description CEP. */
  CEP?: string;
  /** @description Código de Pais. */
  cPais?: string;
  /** @description Nome do país. */
  xPais?: string;
  /** @description Telefone, preencher com Código DDD + número do telefone , nas operações com exterior é permtido informar o código do país + código da localidade + número do telefone. */
  fone?: string;
};
/** @description Identificação do local de retirada/entrega (informar apenas quando for diferente do endereço do remetente/destinatário) */
export type NfeSefazLocal = {
  /** @description CNPJ. */
  CNPJ?: string;
  /** @description CPF (v2.0). */
  CPF?: string;
  /** @description Razão Social ou Nome do Expedidor/Recebedor. */
  xNome?: string;
  /** @description Logradouro. */
  xLgr: string;
  /** @description Número. */
  nro: string;
  /** @description Complemento. */
  xCpl?: string;
  /** @description Bairro. */
  xBairro: string;
  /** @description Código do município (utilizar a tabela do IBGE). */
  cMun: string;
  /** @description Nome do município. */
  xMun: string;
  /** @description Sigla da UF. */
  UF: string;
  /** @description CEP. */
  CEP?: string;
  /** @description Código de Pais. */
  cPais?: string;
  /** @description Nome do país. */
  xPais?: string;
  /** @description Telefone, preencher com Código DDD + número do telefone , nas operações com exterior é permtido informar o código do país + código da localidade + número do telefone. */
  fone?: string;
  /** @description Informar o e-mail do expedidor/Recebedor. O campo pode ser utilizado para informar o e-mail de recepção da NF-e indicada pelo expedidor. */
  email?: string;
  /** @description Inscrição Estadual (v2.0). */
  IE?: string;
};
/** @description Pessoas autorizadas para o download do XML da NF-e. */
export type NfeSefazAutXML = {
  /** @description CNPJ Autorizado. */
  CNPJ?: string;
  /** @description CPF Autorizado. */
  CPF?: string;
};
/** @description Dados dos detalhes da NF-e. */
export type NfeSefazDet = {
  /** @description Número do item do NF. */
  nItem: number;
  prod: NfeSefazProd;
  imposto: NfeSefazImposto;
  impostoDevol?: NfeSefazImpostoDevol;
  /** @description Informações adicionais do produto (norma referenciada, informações complementares, etc). */
  infAdProd?: string;
  obsItem?: NfeSefazObsItem;
  /** @description Valor total do Item, correspondente à sua participação no total da nota. A soma dos itens deverá corresponder ao total da nota. */
  vItem?: number;
  DFeReferenciado?: NfeSefazDFeReferenciado;
};
/** @description Dados dos produtos e serviços da NF-e. */
export type NfeSefazProd = {
  /**
   * @description Código do produto ou serviço. Preencher com CFOP caso se trate de itens não relacionados com mercadorias/produto e que o contribuinte não possua codificação própria
   * Formato ”CFOP9999”.
   */
  cProd: string;
  /** @description GTIN (Global Trade Item Number) do produto, antigo código EAN ou código de barras. */
  cEAN: string;
  /** @description Codigo de barras diferente do padrão GTIN. */
  cBarra?: string;
  /** @description Descrição do produto ou serviço. */
  xProd: string;
  /** @description Código NCM (8 posições), será permitida a informação do gênero (posição do capítulo do NCM) quando a operação não for de comércio exterior (importação/exportação) ou o produto não seja tributado pelo IPI. Em caso de item de serviço ou item que não tenham produto (Ex. transferência de crédito, crédito do ativo imobilizado, etc.), informar o código 00 (zeros) (v2.0). */
  NCM: string;
  /** @description Nomenclatura de Valor aduaneio e Estatístico. */
  NVE?: string[];
  /** @description Codigo especificador da Substuicao Tributaria - CEST, que identifica a mercadoria sujeita aos regimes de  substituicao tributária e de antecipação do recolhimento  do imposto. */
  CEST?: string;
  indEscala?: string;
  /** @description CNPJ do Fabricante da Mercadoria, obrigatório para produto em escala NÃO relevante. */
  CNPJFab?: string;
  cBenef?: string;
  gCred?: NfeSefazGCred[];
  /** @description Código EX TIPI (3 posições). */
  EXTIPI?: string;
  /** @description Cfop. */
  CFOP: string;
  /** @description Unidade comercial. */
  uCom: string;
  /** @description Quantidade Comercial  do produto, alterado para aceitar de 0 a 4 casas decimais e 11 inteiros. */
  qCom: number;
  /** @description Valor unitário de comercialização  - alterado para aceitar 0 a 10 casas decimais e 11 inteiros. */
  vUnCom: number;
  /** @description Valor bruto do produto ou serviço. */
  vProd: number;
  /** @description GTIN (Global Trade Item Number) da unidade tributável, antigo código EAN ou código de barras. */
  cEANTrib: string;
  /** @description Código de barras da unidade tributável diferente do padrão GTIN. */
  cBarraTrib?: string;
  /** @description Unidade Tributável. */
  uTrib: string;
  /** @description Quantidade Tributável - alterado para aceitar de 0 a 4 casas decimais e 11 inteiros. */
  qTrib: number;
  /** @description Valor unitário de tributação - alterado para aceitar 0 a 10 casas decimais e 11 inteiros. */
  vUnTrib: number;
  /** @description Valor Total do Frete. */
  vFrete?: number;
  /** @description Valor Total do Seguro. */
  vSeg?: number;
  /** @description Valor do Desconto. */
  vDesc?: number;
  /** @description Outras despesas acessórias. */
  vOutro?: number;
  /**
   * @description Este campo deverá ser preenchido com:
   * * 0 - o valor do item (vProd) não compõe o valor total da NF-e (vProd)
   * * 1 - o valor do item (vProd) compõe o valor total da NF-e (vProd)
   */
  indTot: number;
  /** @description Indicador de fornecimento de bem móvel usado: 1-Bem Móvel Usado. */
  indBemMovelUsado?: number;
  DI?: NfeSefazDI[];
  detExport?: NfeSefazDetExport[];
  /** @description pedido de compra - Informação de interesse do emissor para controle do B2B. */
  xPed?: string;
  /** @description Número do Item do Pedido de Compra - Identificação do número do item do pedido de Compra. */
  nItemPed?: number;
  /** @description Número de controle da FCI - Ficha de Conteúdo de Importação. */
  nFCI?: string;
  rastro?: NfeSefazRastro[];
  infProdNFF?: NfeSefazInfProdNFF;
  infProdEmb?: NfeSefazInfProdEmb;
  veicProd?: NfeSefazVeicProd;
  med?: NfeSefazMed;
  arma?: NfeSefazArma[];
  comb?: NfeSefazComb;
  /** @description Número do RECOPI. */
  nRECOPI?: string;
};
/** @description Grupo de informações sobre o CréditoPresumido. */
export type NfeSefazGCred = {
  /** @description Código de Benefício Fiscal de Crédito Presumido na UF aplicado ao item. */
  cCredPresumido: string;
  /** @description Percentual do Crédito Presumido. */
  pCredPresumido: number;
  /** @description Valor do Crédito Presumido. */
  vCredPresumido: number;
};
/** @description Declaração de Importação (NT 2011/004). */
export type NfeSefazDI = {
  /** @description Número do Documento de Importação (DI, DSI, DIRE, DUImp) (NT2011/004). */
  nDI: string;
  /**
   * Format: date
   * @description Data de registro da DI/DSI/DA (AAAA-MM-DD).
   */
  dDI: string;
  /** @description Local do desembaraço aduaneiro. */
  xLocDesemb: string;
  /** @description UF onde ocorreu o desembaraço aduaneiro. */
  UFDesemb: string;
  /**
   * Format: date
   * @description Data do desembaraço aduaneiro (AAAA-MM-DD).
   */
  dDesemb: string;
  /**
   * @description Via de transporte internacional informada na DI ou na Declaração Única de Importação (DUImp):
   * * 1 - Maritima
   * * 2 - Fluvial
   * * 3 - Lacustre
   * * 4 - Aerea
   * * 5 - Postal
   * * 6 - Ferroviaria
   * * 7 - Rodoviaria
   * * 8 - Conduto
   * * 9 - Meios Proprios
   * * 10 - Entrada/Saida Ficta
   * * 11 - Courier
   * * 12 - Em maos
   * * 13 - Por reboque
   */
  tpViaTransp: number;
  /** @description Valor Adicional ao frete para renovação de marinha mercante. */
  vAFRMM?: number;
  /**
   * @description Forma de Importação quanto a intermediação
   * * 1 - por conta propria
   * * 2 - por conta e ordem
   * * 3 - encomenda
   */
  tpIntermedio: number;
  /** @description CNPJ do adquirente ou do encomendante. */
  CNPJ?: string;
  /** @description CPF do adquirente ou do encomendante. */
  CPF?: string;
  /** @description Sigla da UF do adquirente ou do encomendante. */
  UFTerceiro?: string;
  /** @description Código do exportador (usado nos sistemas internos de informação do emitente da NF-e). */
  cExportador: string;
  adi: NfeSefazAdi[];
};
/** @description Adições (NT 2011/004). */
export type NfeSefazAdi = {
  /** @description Número da Adição. */
  nAdicao?: number;
  /** @description Número seqüencial do item. */
  nSeqAdic: number;
  /** @description Código do fabricante estrangeiro (usado nos sistemas internos de informação do emitente da NF-e). */
  cFabricante: string;
  /** @description Valor do desconto do item. */
  vDescDI?: number;
  /** @description Número do ato concessório de Drawback. */
  nDraw?: string;
};
/** @description Detalhe da exportação. */
export type NfeSefazDetExport = {
  /** @description Número do ato concessório de Drawback. */
  nDraw?: string;
  exportInd?: NfeSefazExportInd;
};
/** @description Exportação indireta. */
export type NfeSefazExportInd = {
  /** @description Registro de exportação. */
  nRE: string;
  /** @description Chave de acesso da NF-e recebida para exportação. */
  chNFe: string;
  /** @description Quantidade do item efetivamente exportado. */
  qExport: number;
};
export type NfeSefazRastro = {
  /** @description Número do lote do produto. */
  nLote: string;
  /** @description Quantidade de produto no lote. */
  qLote: number;
  /**
   * Format: date
   * @description Data de fabricação/produção. Formato "AAAA-MM-DD".
   */
  dFab: string;
  /**
   * Format: date
   * @description Data de validade. Informar o último dia do mês caso a validade não especifique o dia. Formato "AAAA-MM-DD".
   */
  dVal: string;
  cAgreg?: string;
};
/** @description Informações mais detalhadas do produto (usada na NFF). */
export type NfeSefazInfProdNFF = {
  /** @description Código Fiscal do Produto. */
  cProdFisco: string;
  /** @description Código da operação selecionada na NFF e relacionada ao item. */
  cOperNFF: string;
};
/** @description Informações mais detalhadas do produto (usada na NFF). */
export type NfeSefazInfProdEmb = {
  /** @description Embalagem do produto. */
  xEmb: string;
  /** @description Volume do produto na embalagem. */
  qVolEmb: number;
  /** @description Unidade de Medida da Embalagem. */
  uEmb: string;
};
/** @description Veículos novos. */
export type NfeSefazVeicProd = {
  /** @description Tipo da Operação (1 - Venda concessionária; 2 - Faturamento direto; 3 - Venda direta; 0 - Outros). */
  tpOp: number;
  /** @description Chassi do veículo - VIN (código-identificação-veículo). */
  chassi: string;
  /** @description Cor do veículo (código de cada montadora). */
  cCor: string;
  /** @description Descrição da cor. */
  xCor: string;
  /** @description Potência máxima do motor do veículo em cavalo vapor (CV). (potência-veículo). */
  pot: string;
  /** @description Capacidade voluntária do motor expressa em centímetros cúbicos (CC). (cilindradas). */
  cilin: string;
  /** @description Peso líquido. */
  pesoL: string;
  /** @description Peso bruto. */
  pesoB: string;
  /** @description Serial (série). */
  nSerie: string;
  /**
   * @description Tipo de combustível-Tabela RENAVAM: 01-Álcool
   * * 02 - Gasolina
   * * 03 - Diesel
   * * 16 - Álcool/Gas
   * * 17 - Gas./Álcool/GNV
   * * 18 - Gasolina/Elétrico
   */
  tpComb: string;
  /** @description Número do motor. */
  nMotor: string;
  /** @description CMT-Capacidade Máxima de Tração - em Toneladas 4 casas decimais. */
  CMT: string;
  /** @description Distância entre eixos. */
  dist: string;
  /** @description Ano Modelo de Fabricação. */
  anoMod: number;
  /** @description Ano de Fabricação. */
  anoFab: number;
  /** @description Tipo de pintura. */
  tpPint: string;
  /** @description Tipo de veículo (utilizar tabela RENAVAM). */
  tpVeic: number;
  /** @description Espécie de veículo (utilizar tabela RENAVAM). */
  espVeic: number;
  /**
   * @description Informa-se o veículo tem VIN (chassi) remarcado.
   * * R-Remarcado
   * * N-NormalVIN
   */
  VIN: string;
  /** @description Condição do veículo (1 - acabado; 2 - inacabado; 3 - semi-acabado). */
  condVeic: number;
  /** @description Código Marca Modelo (utilizar tabela RENAVAM). */
  cMod: string;
  /**
   * @description Código da Cor Segundo as regras de pré-cadastro do DENATRAN: 01-AMARELO
   * * 02 - AZUL
   * * 03 - BEGE
   * * 04 - BRANCA
   * * 05 - CINZA
   * * 06 - DOURADA
   * * 07 - GRENA
   * * 08 - LARANJA
   * * 09 - MARROM
   * * 10 - PRATA
   * * 11 - PRETA
   * * 12 - ROSA
   * * 13 - ROXA
   * * 14 - VERDE
   * * 15 - VERMELHA
   * * 16 - FANTASIA
   */
  cCorDENATRAN: string;
  /** @description Quantidade máxima de permitida de passageiros sentados, inclusive motorista. */
  lota: number;
  /**
   * @description Restrição
   * * 0 - Não há
   * * 1 - Alienação Fiduciária
   * * 2 - Arrendamento Mercantil
   * * 3 - Reserva de Domínio
   * * 4 - Penhor de Veículos
   * * 9 - outras
   */
  tpRest: number;
};
/** @description grupo do detalhamento de Medicamentos e de matérias-primas farmacêuticas. */
export type NfeSefazMed = {
  /** @description Utilizar o número do registro ANVISA  ou preencher com o literal “ISENTO”, no caso de medicamento isento de registro na ANVISA. */
  cProdANVISA: string;
  /** @description Obs.: Para medicamento isento de registro na ANVISA, informar o número da decisão que o isenta, como por exemplo o número da Resolução da Diretoria Colegiada da ANVISA (RDC). */
  xMotivoIsencao?: string;
  /** @description Preço Máximo ao Consumidor. */
  vPMC: number;
};
/** @description Armamentos. */
export type NfeSefazArma = {
  /** @description Indicador do tipo de arma de fogo (0 - Uso permitido; 1 - Uso restrito). */
  tpArma: number;
  /** @description Número de série da arma. */
  nSerie: string;
  /** @description Número de série do cano. */
  nCano: string;
  /** @description Descrição completa da arma, compreendendo: calibre, marca, capacidade, tipo de funcionamento, comprimento e demais elementos que permitam a sua perfeita identificação. */
  descr: string;
};
/** @description Informar apenas para operações com combustíveis líquidos. */
export type NfeSefazComb = {
  /** @description Código de produto da ANP. codificação de produtos do SIMP (http://www.anp.gov.br). */
  cProdANP: number;
  /** @description Descrição do Produto conforme ANP. Utilizar a descrição de produtos do Sistema de Informações de Movimentação de Produtos - SIMP (http://www.anp.gov.br/simp/). */
  descANP: string;
  /** @description Percentual do GLP derivado do petróleo no produto GLP (cProdANP=210203001). Informar em número decimal o percentual do GLP derivado de petróleo no produto GLP. Valores 0 a 100. */
  pGLP?: number;
  /** @description Percentual de gás natural nacional - GLGNn para o produto GLP (cProdANP=210203001). Informar em número decimal o percentual do Gás Natural Nacional - GLGNn para o produto GLP. Valores de 0 a 100. */
  pGNn?: number;
  /** @description Percentual de gás natural importado GLGNi para o produto GLP (cProdANP=210203001). Informar em número deciaml o percentual do Gás Natural Importado - GLGNi para o produto GLP. Valores de 0 a 100. */
  pGNi?: number;
  /** @description Valor de partida (cProdANP=210203001). Deve ser informado neste campo o valor por quilograma sem ICMS. */
  vPart?: number;
  /** @description Código de autorização / registro do CODIF. Informar apenas quando a UF utilizar o CODIF (Sistema de Controle do 			Diferimento do Imposto nas Operações com AEAC - Álcool Etílico Anidro Combustível). */
  CODIF?: string;
  /**
   * @description Quantidade de combustível
   * faturada à temperatura ambiente.
   * Informar quando a quantidade
   * faturada informada no campo
   * qCom (I10) tiver sido ajustada para
   * uma temperatura diferente da
   * ambiente.
   */
  qTemp?: number;
  /** @description Sigla da UF de Consumo. */
  UFCons: string;
  CIDE?: NfeSefazCIDE;
  encerrante?: NfeSefazEncerrante;
  /** @description Percentual do índice de mistura do Biodiesel (B100) no Óleo Diesel B instituído pelo órgão regulamentador. */
  pBio?: number;
  origComb?: NfeSefazOrigComb[];
};
/** @description CIDE Combustíveis. */
export type NfeSefazCIDE = {
  /** @description BC do CIDE ( Quantidade comercializada). */
  qBCProd: number;
  /** @description Alíquota do CIDE  (em reais). */
  vAliqProd: number;
  /** @description Valor do CIDE. */
  vCIDE: number;
};
/** @description Informações do grupo de "encerrante". */
export type NfeSefazEncerrante = {
  /** @description Numero de identificação do Bico utilizado no abastecimento. */
  nBico: number;
  /** @description Numero de identificação da bomba ao qual o bico está interligado. */
  nBomba?: number;
  /** @description Numero de identificação do tanque ao qual o bico está interligado. */
  nTanque: number;
  /** @description Valor do Encerrante no ínicio do abastecimento. */
  vEncIni: number;
  /** @description Valor do Encerrante no final do abastecimento. */
  vEncFin: number;
};
/** @description Grupo indicador da origem do combustível. */
export type NfeSefazOrigComb = {
  /**
   * @description Indicador de importação 0=Nacional
   * * 1 - Importado
   */
  indImport: number;
  /** @description UF de origem do produtor ou do importado. */
  cUFOrig: number;
  /** @description Percentual originário para a UF. */
  pOrig: number;
};
/** @description Tributos incidentes nos produtos ou serviços da NF-e. */
export type NfeSefazImposto = {
  /** @description Valor estimado total de impostos federais, estaduais e municipais. */
  vTotTrib?: number;
  ICMS?: NfeSefazICMS;
  IPI?: NfeSefazIpi;
  II?: NfeSefazII;
  ISSQN?: NfeSefazISSQN;
  PIS?: NfeSefazPIS;
  PISST?: NfeSefazPISST;
  COFINS?: NfeSefazCOFINS;
  COFINSST?: NfeSefazCOFINSST;
  ICMSUFDest?: NfeSefazICMSUFDest;
  IS?: NfeSefazIS;
  IBSCBS?: NfeSefazTribNFe;
};
/** @description Dados do ICMS Normal e ST. */
export type NfeSefazICMS = {
  ICMS00?: NfeSefazICMS00;
  ICMS02?: NfeSefazICMS02;
  ICMS10?: NfeSefazICMS10;
  ICMS15?: NfeSefazICMS15;
  ICMS20?: NfeSefazICMS20;
  ICMS30?: NfeSefazICMS30;
  ICMS40?: NfeSefazICMS40;
  ICMS51?: NfeSefazICMS51;
  ICMS53?: NfeSefazICMS53;
  ICMS60?: NfeSefazICMS60;
  ICMS61?: NfeSefazICMS61;
  ICMS70?: NfeSefazICMS70;
  ICMS90?: NfeSefazICMS90;
  ICMSPart?: NfeSefazICMSPart;
  ICMSST?: NfeSefazICMSST;
  ICMSSN101?: NfeSefazICMSSN101;
  ICMSSN102?: NfeSefazICMSSN102;
  ICMSSN201?: NfeSefazICMSSN201;
  ICMSSN202?: NfeSefazICMSSN202;
  ICMSSN500?: NfeSefazICMSSN500;
  ICMSSN900?: NfeSefazICMSSN900;
};
/**
 * @description Tributação pelo ICMS
 * * 00 - Tributada integralmente
 */
export type NfeSefazICMS00 = {
  /**
   * @description Origem da mercadoria:
   * * 0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;
   * * 1 - Estrangeira - Importação direta, exceto a indicada no código 6;
   * * 2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;
   * * 3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40%% e inferior ou igual a 70%%;
   * * 4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes;
   * * 5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%%;
   * * 6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;
   * * 7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural;
   * * 8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%%.
   */
  orig: number;
  /**
   * @description Tributção pelo ICMS
   * * 00 - Tributada integralmente
   */
  CST: string;
  /**
   * @description Modalidade de determinação da BC do ICMS:
   * * 0 - Margem Valor Agregado (%%)
   * * 1 - Pauta (valor)
   * * 2 - Preço Tabelado Máximo (valor)
   * * 3 - Valor da Operação
   */
  modBC: number;
  /** @description Valor da BC do ICMS. */
  vBC: number;
  /** @description Alíquota do ICMS. */
  pICMS: number;
  /** @description Valor do ICMS. */
  vICMS: number;
  /** @description Percentual de ICMS relativo ao Fundo de Combate à Pobreza (FCP). */
  pFCP?: number;
  /** @description Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP). */
  vFCP?: number;
};
/** @description Tributação monofásica própria sobre combustíveis. */
export type NfeSefazICMS02 = {
  /**
   * @description Origem da mercadoria:
   * * 0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;
   * * 1 - Estrangeira - Importação direta, exceto a indicada no código 6;
   * * 2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;
   * * 3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40%% e inferior ou igual a 70%%;
   * * 4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes;
   * * 5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%%;
   * * 6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;
   * * 7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural;
   * * 8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%%.
   */
  orig: number;
  /**
   * @description Tributção pelo ICMS
   * * 02 - Tributação monofásica própria sobre combustíveis
   */
  CST: string;
  /** @description Quantidade tributada. */
  qBCMono?: number;
  /** @description Alíquota ad rem do imposto. */
  adRemICMS: number;
  /** @description Valor do ICMS própri. */
  vICMSMono: number;
};
/**
 * @description Tributação pelo ICMS
 * * 10 - Tributada e com cobrança do ICMS por substituição tributária
 */
export type NfeSefazICMS10 = {
  /**
   * @description Origem da mercadoria:
   * * 0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;
   * * 1 - Estrangeira - Importação direta, exceto a indicada no código 6;
   * * 2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;
   * * 3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40%% e inferior ou igual a 70%%;
   * * 4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes;
   * * 5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%%;
   * * 6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;
   * * 7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural;
   * * 8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%%.
   */
  orig: number;
  /** @description * 10 - Tributada e com cobrança do ICMS por substituição tributária */
  CST: string;
  /**
   * @description Modalidade de determinação da BC do ICMS:
   * * 0 - Margem Valor Agregado (%%)
   * * 1 - Pauta (valor)
   * * 2 - Preço Tabelado Máximo (valor)
   * * 3 - Valor da Operação
   */
  modBC: number;
  /** @description Valor da BC do ICMS. */
  vBC: number;
  /** @description Alíquota do ICMS. */
  pICMS: number;
  /** @description Valor do ICMS. */
  vICMS: number;
  /** @description Valor da Base de cálculo do FCP. */
  vBCFCP?: number;
  /** @description Percentual de ICMS relativo ao Fundo de Combate à Pobreza (FCP). */
  pFCP?: number;
  /** @description Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP). */
  vFCP?: number;
  /**
   * @description Modalidade de determinação da BC do ICMS ST:
   * * 0 - Preço tabelado ou máximo  sugerido
   * * 1 - Lista Negativa (valor)
   * * 2 - Lista Positiva (valor)
   * * 3 - Lista Neutra (valor)
   * * 4 - Margem Valor Agregado (%%)
   * * 5 - Pauta (valor)
   * * 6 - Valor da Operação
   */
  modBCST: number;
  /** @description Percentual da Margem de Valor Adicionado ICMS ST. */
  pMVAST?: number;
  /** @description Percentual de redução da BC ICMS ST. */
  pRedBCST?: number;
  /** @description Valor da BC do ICMS ST. */
  vBCST: number;
  /** @description Alíquota do ICMS ST. */
  pICMSST: number;
  /** @description Valor do ICMS ST. */
  vICMSST: number;
  /** @description Valor da Base de cálculo do FCP retido por substituicao tributaria. */
  vBCFCPST?: number;
  /** @description Percentual de FCP retido por substituição tributária. */
  pFCPST?: number;
  /** @description Valor do FCP retido por substituição tributária. */
  vFCPST?: number;
  /** @description Valor do ICMS-ST desonerado. */
  vICMSSTDeson?: number;
  /**
   * @description Motivo da desoneração do ICMS-ST: 3-Uso na agropecuária
   * * 9 - Outros
   * * 12 - Fomento agropecuário
   */
  motDesICMSST?: number;
};
/** @description Tributação monofásica própria e com responsabilidade pela retenção sobre combustíveis. */
export type NfeSefazICMS15 = {
  /**
   * @description Origem da mercadoria:
   * * 0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;
   * * 1 - Estrangeira - Importação direta, exceto a indicada no código 6;
   * * 2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;
   * * 3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40%% e inferior ou igual a 70%%;
   * * 4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes;
   * * 5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%%;
   * * 6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;
   * * 7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural;
   * * 8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%%.
   */
  orig: number;
  /**
   * @description Tributção pelo ICMS
   * * 15 - Tributação monofásica própria e com responsabilidade pela retenção sobre combustíveis
   */
  CST: string;
  /** @description Quantidade tributada. */
  qBCMono?: number;
  /** @description Alíquota ad rem do imposto. */
  adRemICMS: number;
  /** @description Valor do ICMS próprio. */
  vICMSMono: number;
  /** @description Quantidade tributada sujeita a retenção. */
  qBCMonoReten?: number;
  /** @description Alíquota ad rem do imposto com retenção. */
  adRemICMSReten: number;
  /** @description Valor do ICMS com retenção. */
  vICMSMonoReten: number;
  /** @description Percentual de redução do valor da alíquota ad rem do ICMS. */
  pRedAdRem?: number;
  /**
   * @description Motivo da redução do adrem
   * * 1 - Transporte coletivo de passageiros
   * * 9 - Outros
   */
  motRedAdRem?: number;
};
/**
 * @description Tributção pelo ICMS
 * * 20 - Com redução de base de cálculo
 */
export type NfeSefazICMS20 = {
  /**
   * @description Origem da mercadoria:
   * * 0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;
   * * 1 - Estrangeira - Importação direta, exceto a indicada no código 6;
   * * 2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;
   * * 3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40%% e inferior ou igual a 70%%;
   * * 4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes;
   * * 5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%%;
   * * 6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;
   * * 7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural;
   * * 8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%%.
   */
  orig: number;
  /**
   * @description Tributção pelo ICMS
   * * 20 - Com redução de base de cálculo
   */
  CST: string;
  /**
   * @description Modalidade de determinação da BC do ICMS:
   * * 0 - Margem Valor Agregado (%%)
   * * 1 - Pauta (valor)
   * * 2 - Preço Tabelado Máximo (valor)
   * * 3 - Valor da Operação
   */
  modBC: number;
  /** @description Percentual de redução da BC. */
  pRedBC: number;
  /** @description Valor da BC do ICMS. */
  vBC: number;
  /** @description Alíquota do ICMS. */
  pICMS: number;
  /** @description Valor do ICMS. */
  vICMS: number;
  /** @description Valor da Base de cálculo do FCP. */
  vBCFCP?: number;
  /** @description Percentual de ICMS relativo ao Fundo de Combate à Pobreza (FCP). */
  pFCP?: number;
  /** @description Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP). */
  vFCP?: number;
  /** @description Valor do ICMS de desoneração. */
  vICMSDeson?: number;
  /**
   * @description Motivo da desoneração do ICMS:3-Uso na agropecuária
   * * 9 - Outros
   * * 12 - Fomento agropecuário
   */
  motDesICMS?: number;
  /**
   * @description Indica se o valor do ICMS desonerado (vICMSDeson) deduz do valor do item (vProd):
   * * 0 - Valor do ICMS desonerado (vICMSDeson) não deduz do valor do item (vProd) / total da NF-e
   * * 1 - Valor do ICMS desonerado (vICMSDeson) deduz do valor do item (vProd) / total da NF-e
   */
  indDeduzDeson?: number;
};
/**
 * @description Tributação pelo ICMS
 * * 30 - Isenta ou não tributada e com cobrança do ICMS por substituição tributária
 */
export type NfeSefazICMS30 = {
  /**
   * @description Origem da mercadoria:
   * * 0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;
   * * 1 - Estrangeira - Importação direta, exceto a indicada no código 6;
   * * 2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;
   * * 3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40%% e inferior ou igual a 70%%;
   * * 4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes;
   * * 5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%%;
   * * 6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;
   * * 7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural;
   * * 8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%%.
   */
  orig: number;
  /**
   * @description Tributção pelo ICMS
   * * 30 - Isenta ou não tributada e com cobrança do ICMS por substituição tributária
   */
  CST: string;
  /**
   * @description Modalidade de determinação da BC do ICMS ST:
   * * 0 - Preço tabelado ou máximo  sugerido
   * * 1 - Lista Negativa (valor)
   * * 2 - Lista Positiva (valor)
   * * 3 - Lista Neutra (valor)
   * * 4 - Margem Valor Agregado (%%)
   * * 5 - Pauta (valor)
   * * 6 - Valor da Operação
   */
  modBCST: number;
  /** @description Percentual da Margem de Valor Adicionado ICMS ST. */
  pMVAST?: number;
  /** @description Percentual de redução da BC ICMS ST. */
  pRedBCST?: number;
  /** @description Valor da BC do ICMS ST. */
  vBCST: number;
  /** @description Alíquota do ICMS ST. */
  pICMSST: number;
  /** @description Valor do ICMS ST. */
  vICMSST: number;
  /** @description Valor da Base de cálculo do FCP. */
  vBCFCPST?: number;
  /** @description Percentual de FCP retido por substituição tributária. */
  pFCPST?: number;
  /** @description Valor do FCP retido por substituição tributária. */
  vFCPST?: number;
  /** @description Valor do ICMS de desoneração. */
  vICMSDeson?: number;
  /**
   * @description Motivo da desoneração do ICMS:6-Utilitários Motocicleta AÁrea Livre
   * * 7 - SUFRAMA
   * * 9 - Outros
   */
  motDesICMS?: number;
  /**
   * @description Indica se o valor do ICMS desonerado (vICMSDeson) deduz do valor do item (vProd):
   * * 0 - Valor do ICMS desonerado (vICMSDeson) não deduz do valor do item (vProd) / total da NF-e
   * * 1 - Valor do ICMS desonerado (vICMSDeson) deduz do valor do item (vProd) / total da NF-e
   */
  indDeduzDeson?: number;
};
/**
 * @description Tributação pelo ICMS
 * * 40 - Isenta
 * * 41 - Não tributada
 * * 50 - Suspensão
 */
export type NfeSefazICMS40 = {
  /**
   * @description Origem da mercadoria:
   * * 0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;
   * * 1 - Estrangeira - Importação direta, exceto a indicada no código 6;
   * * 2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;
   * * 3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40%% e inferior ou igual a 70%%;
   * * 4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes;
   * * 5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%%;
   * * 6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;
   * * 7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural;
   * * 8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%%.
   */
  orig: number;
  /**
   * @description Tributação pelo ICMS
   * * 40 - Isenta
   * * 41 - Não tributada
   * * 50 - Suspensão
   * * 51 - Diferimento
   */
  CST: string;
  /** @description O valor do ICMS será informado apenas nas operações com veículos beneficiados com a desoneração condicional do ICMS. */
  vICMSDeson?: number;
  /**
   * @description Este campo será preenchido quando o campo anterior estiver preenchido.
   * Informar o motivo da desoneração:
   * * 1 - Táxi
   * * 3 - Produtor Agropecuário
   * * 4 - Frotista/Locadora
   * * 5 - Diplomático/Consular
   * * 6 - Utilitários e Motocicletas da Amazônia Ocidental e Áreas de Livre Comércio (Resolução 714/88 e 790/94 - CONTRAN e suas alterações)
   * * 7 - SUFRAMA
   * * 8 - Venda a órgão Público
   * * 9 - Outros
   * * 10 - Deficiente Condutor
   * * 11 - Deficiente não condutor
   * * 16 - Olimpíadas Rio 2016
   * * 90 - Solicitado pelo Fisco
   */
  motDesICMS?: number;
  /**
   * @description Indica se o valor do ICMS desonerado (vICMSDeson) deduz do valor do item (vProd):
   * * 0 - Valor do ICMS desonerado (vICMSDeson) não deduz do valor do item (vProd) / total da NF-e
   * * 1 - Valor do ICMS desonerado (vICMSDeson) deduz do valor do item (vProd) / total da NF-e
   */
  indDeduzDeson?: number;
};
/** @description Tributção pelo ICMS 51 - Diferimento. A exigência do preenchimento das informações do ICMS diferido fica à critério de cada UF. */
export type NfeSefazICMS51 = {
  /**
   * @description Origem da mercadoria:
   * * 0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;
   * * 1 - Estrangeira - Importação direta, exceto a indicada no código 6;
   * * 2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;
   * * 3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40%% e inferior ou igual a 70%%;
   * * 4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes;
   * * 5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%%;
   * * 6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;
   * * 7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural;
   * * 8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%%.
   */
  orig: number;
  /** @description Tributação pelo ICMS 51 - Tributação com Diferimento. */
  CST: string;
  /**
   * @description Modalidade de determinação da BC do ICMS:
   * * 0 - Margem Valor Agregado (%%)
   * * 1 - Pauta (valor)
   * * 2 - Preço Tabelado Máximo (valor)
   * * 3 - Valor da Operação
   */
  modBC?: number;
  /** @description Percentual de redução da BC. */
  pRedBC?: number;
  /** @description Código de Benefício Fiscal na UF aplicado ao item quando houver RBC. */
  cBenefRBC?: string;
  /** @description Valor da BC do ICMS. */
  vBC?: number;
  /** @description Alíquota do imposto. */
  pICMS?: number;
  /** @description Valor do ICMS da Operação. */
  vICMSOp?: number;
  /** @description Percentual do diferemento. */
  pDif?: number;
  /** @description Valor do ICMS da diferido. */
  vICMSDif?: number;
  /** @description Valor do ICMS. */
  vICMS?: number;
  /** @description Valor da Base de cálculo do FCP. */
  vBCFCP?: number;
  /** @description Percentual de ICMS relativo ao Fundo de Combate à Pobreza (FCP). */
  pFCP?: number;
  /** @description Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP). */
  vFCP?: number;
  /** @description Percentual do diferimento do ICMS relativo ao Fundo de Combate à Pobreza (FCP). */
  pFCPDif?: number;
  /** @description Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) diferido. */
  vFCPDif?: number;
  /** @description Valor efetivo do ICMS relativo ao Fundo de Combate à Pobreza (FCP). */
  vFCPEfet?: number;
};
/** @description Tributação monofásica sobre combustíveis com recolhimento diferido. */
export type NfeSefazICMS53 = {
  /**
   * @description Origem da mercadoria:
   * * 0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;
   * * 1 - Estrangeira - Importação direta, exceto a indicada no código 6;
   * * 2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;
   * * 3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40%% e inferior ou igual a 70%%;
   * * 4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes;
   * * 5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%%;
   * * 6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;
   * * 7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural;
   * * 8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%%.
   */
  orig: number;
  /**
   * @description Tributção pelo ICMS
   * * 53 - Tributação monofásica sobre combustíveis com recolhimento diferido
   */
  CST: string;
  /** @description Quantidade tributada. */
  qBCMono?: number;
  /** @description Alíquota ad rem do imposto. */
  adRemICMS?: number;
  /** @description Valor do ICMS da operação. */
  vICMSMonoOp?: number;
  /** @description Percentual do diferemento. */
  pDif?: number;
  /** @description Valor do ICMS diferido. */
  vICMSMonoDif?: number;
  /** @description Valor do ICMS próprio devido. */
  vICMSMono?: number;
  /**
   * @description Quantidade tributada diferida.
   * OBS: Campo revogado pela NT2023.001v1.20
   */
  qBCMonoDif?: number;
  /**
   * @description Alíquota ad rem do imposto diferido.
   * OBS: Campo revogado pela NT2023.001v1.20
   */
  adRemICMSDif?: number;
};
/**
 * @description Tributação pelo ICMS
 * * 60 - ICMS cobrado anteriormente por substituição tributária
 */
export type NfeSefazICMS60 = {
  /**
   * @description Origem da mercadoria:
   * * 0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;
   * * 1 - Estrangeira - Importação direta, exceto a indicada no código 6;
   * * 2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;
   * * 3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40%% e inferior ou igual a 70%%;
   * * 4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes;
   * * 5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%%;
   * * 6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;
   * * 7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural;
   * * 8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%%.
   */
  orig: number;
  /**
   * @description Tributação pelo ICMS
   * * 60 - ICMS cobrado anteriormente por substituição tributária
   */
  CST: string;
  /** @description Valor da BC do ICMS ST retido anteriormente. */
  vBCSTRet?: number;
  /** @description Aliquota suportada pelo consumidor final. */
  pST?: number;
  /** @description Valor do ICMS Próprio do Substituto cobrado em operação anterior. */
  vICMSSubstituto?: number;
  /** @description Valor do ICMS ST retido anteriormente. */
  vICMSSTRet?: number;
  /** @description Valor da Base de cálculo do FCP retido anteriormente por ST. */
  vBCFCPSTRet?: number;
  /** @description Percentual de FCP retido anteriormente por substituição tributária. */
  pFCPSTRet?: number;
  /** @description Valor do FCP retido por substituição tributária. */
  vFCPSTRet?: number;
  /** @description Percentual de redução da base de cálculo efetiva. */
  pRedBCEfet?: number;
  /** @description Valor da base de cálculo efetiva. */
  vBCEfet?: number;
  /** @description Alíquota do ICMS efetiva. */
  pICMSEfet?: number;
  /** @description Valor do ICMS efetivo. */
  vICMSEfet?: number;
};
/** @description Tributação monofásica sobre combustíveis cobrada anteriormente. */
export type NfeSefazICMS61 = {
  /**
   * @description Origem da mercadoria:
   * * 0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;
   * * 1 - Estrangeira - Importação direta, exceto a indicada no código 6;
   * * 2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;
   * * 3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40%% e inferior ou igual a 70%%;
   * * 4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes;
   * * 5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%%;
   * * 6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;
   * * 7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural;
   * * 8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%%.
   */
  orig: number;
  /**
   * @description Tributção pelo ICMS
   * * 61 - Tributação monofásica sobre combustíveis cobrada anteriormente
   */
  CST: string;
  /** @description Quantidade tributada retida anteriormente. */
  qBCMonoRet?: number;
  /** @description Alíquota ad rem do imposto retido anteriormente. */
  adRemICMSRet: number;
  /** @description Valor do ICMS retido anteriormente. */
  vICMSMonoRet: number;
};
/**
 * @description Tributação pelo ICMS
 * * 70 - Com redução de base de cálculo e cobrança do ICMS por substituição tributária
 */
export type NfeSefazICMS70 = {
  /**
   * @description Origem da mercadoria:
   * * 0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;
   * * 1 - Estrangeira - Importação direta, exceto a indicada no código 6;
   * * 2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;
   * * 3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40%% e inferior ou igual a 70%%;
   * * 4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes;
   * * 5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%%;
   * * 6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;
   * * 7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural;
   * * 8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%%.
   */
  orig: number;
  /**
   * @description Tributção pelo ICMS
   * * 70 - Com redução de base de cálculo e cobrança do ICMS por substituição tributária
   */
  CST: string;
  /**
   * @description Modalidade de determinação da BC do ICMS:
   * * 0 - Margem Valor Agregado (%%)
   * * 1 - Pauta (valor)
   * * 2 - Preço Tabelado Máximo (valor)
   * * 3 - Valor da Operação
   */
  modBC: number;
  /** @description Percentual de redução da BC. */
  pRedBC: number;
  /** @description Valor da BC do ICMS. */
  vBC: number;
  /** @description Alíquota do ICMS. */
  pICMS: number;
  /** @description Valor do ICMS. */
  vICMS: number;
  /** @description Valor da Base de cálculo do FCP. */
  vBCFCP?: number;
  /** @description Percentual de ICMS relativo ao Fundo de Combate à Pobreza (FCP). */
  pFCP?: number;
  /** @description Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP). */
  vFCP?: number;
  /**
   * @description Modalidade de determinação da BC do ICMS ST:
   * * 0 - Preço tabelado ou máximo  sugerido
   * * 1 - Lista Negativa (valor)
   * * 2 - Lista Positiva (valor)
   * * 3 - Lista Neutra (valor)
   * * 4 - Margem Valor Agregado (%%)
   * * 5 - Pauta (valor)
   * * 6 - Valor da Operação
   */
  modBCST: number;
  /** @description Percentual da Margem de Valor Adicionado ICMS ST. */
  pMVAST?: number;
  /** @description Percentual de redução da BC ICMS ST. */
  pRedBCST?: number;
  /** @description Valor da BC do ICMS ST. */
  vBCST: number;
  /** @description Alíquota do ICMS ST. */
  pICMSST: number;
  /** @description Valor do ICMS ST. */
  vICMSST: number;
  /** @description Valor da Base de cálculo do FCP retido por substituição tributária. */
  vBCFCPST?: number;
  /** @description Percentual de FCP retido por substituição tributária. */
  pFCPST?: number;
  /** @description Valor do FCP retido por substituição tributária. */
  vFCPST?: number;
  /** @description Valor do ICMS de desoneração. */
  vICMSDeson?: number;
  /**
   * @description Motivo da desoneração do ICMS:3-Uso na agropecuária
   * * 9 - Outros
   * * 12 - Fomento agropecuário
   */
  motDesICMS?: number;
  /**
   * @description Indica se o valor do ICMS desonerado (vICMSDeson) deduz do valor do item (vProd):
   * * 0 - Valor do ICMS desonerado (vICMSDeson) não deduz do valor do item (vProd) / total da NF-e
   * * 1 - Valor do ICMS desonerado (vICMSDeson) deduz do valor do item (vProd) / total da NF-e
   */
  indDeduzDeson?: number;
  /** @description Valor do ICMS-ST desonerado. */
  vICMSSTDeson?: number;
  /**
   * @description Motivo da desoneração do ICMS-ST: 3-Uso na agropecuária
   * * 9 - Outros
   * * 12 - Fomento agropecuário
   */
  motDesICMSST?: number;
};
/**
 * @description Tributação pelo ICMS
 * * 90 - Outras
 */
export type NfeSefazICMS90 = {
  /**
   * @description Origem da mercadoria:
   * * 0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;
   * * 1 - Estrangeira - Importação direta, exceto a indicada no código 6;
   * * 2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;
   * * 3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40%% e inferior ou igual a 70%%;
   * * 4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes;
   * * 5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%%;
   * * 6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;
   * * 7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural;
   * * 8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%%.
   */
  orig: number;
  /**
   * @description Tributção pelo ICMS
   * * 90 - Outras
   */
  CST: string;
  /**
   * @description Modalidade de determinação da BC do ICMS:
   * * 0 - Margem Valor Agregado (%%)
   * * 1 - Pauta (valor)
   * * 2 - Preço Tabelado Máximo (valor)
   * * 3 - Valor da Operação
   */
  modBC?: number;
  /** @description Valor da BC do ICMS. */
  vBC?: number;
  /** @description Percentual de redução da BC. */
  pRedBC?: number;
  /** @description Alíquota do ICMS. */
  pICMS?: number;
  /** @description Valor do ICMS. */
  vICMS?: number;
  /** @description Valor da Base de cálculo do FCP. */
  vBCFCP?: number;
  /** @description Percentual de ICMS relativo ao Fundo de Combate à Pobreza (FCP). */
  pFCP?: number;
  /** @description Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP). */
  vFCP?: number;
  /**
   * @description Modalidade de determinação da BC do ICMS ST:
   * * 0 - Preço tabelado ou máximo  sugerido
   * * 1 - Lista Negativa (valor)
   * * 2 - Lista Positiva (valor)
   * * 3 - Lista Neutra (valor)
   * * 4 - Margem Valor Agregado (%%)
   * * 5 - Pauta (valor)
   * * 6 - Valor da Operação
   */
  modBCST?: number;
  /** @description Percentual da Margem de Valor Adicionado ICMS ST. */
  pMVAST?: number;
  /** @description Percentual de redução da BC ICMS ST. */
  pRedBCST?: number;
  /** @description Valor da BC do ICMS ST. */
  vBCST?: number;
  /** @description Alíquota do ICMS ST. */
  pICMSST?: number;
  /** @description Valor do ICMS ST. */
  vICMSST?: number;
  /** @description Valor da Base de cálculo do FCP. */
  vBCFCPST?: number;
  /** @description Percentual de FCP retido por substituição tributária. */
  pFCPST?: number;
  /** @description Valor do FCP retido por substituição tributária. */
  vFCPST?: number;
  /** @description Valor do ICMS de desoneração. */
  vICMSDeson?: number;
  /**
   * @description Motivo da desoneração do ICMS:3-Uso na agropecuária
   * * 9 - Outros
   * * 12 - Fomento agropecuário
   */
  motDesICMS?: number;
  /**
   * @description Indica se o valor do ICMS desonerado (vICMSDeson) deduz do valor do item (vProd):
   * * 0 - Valor do ICMS desonerado (vICMSDeson) não deduz do valor do item (vProd) / total da NF-e
   * * 1 - Valor do ICMS desonerado (vICMSDeson) deduz do valor do item (vProd) / total da NF-e
   */
  indDeduzDeson?: number;
  /** @description Valor do ICMS-ST desonerado. */
  vICMSSTDeson?: number;
  /**
   * @description Motivo da desoneração do ICMS-ST: 3-Uso na agropecuária
   * * 9 - Outros
   * * 12 - Fomento agropecuário
   */
  motDesICMSST?: number;
};
/**
 * @description Partilha do ICMS entre a UF de origem e UF de destino ou a UF definida na legislação
 * Operação interestadual para consumidor final com partilha do ICMS  devido na operação entre a UF de origem e a UF do destinatário ou ou a UF definida na legislação. (Ex. UF da concessionária de entrega do  veículos).
 */
export type NfeSefazICMSPart = {
  /**
   * @description Origem da mercadoria:
   * * 0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;
   * * 1 - Estrangeira - Importação direta, exceto a indicada no código 6;
   * * 2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;
   * * 3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40%% e inferior ou igual a 70%%;
   * * 4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes;
   * * 5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%%;
   * * 6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;
   * * 7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural;
   * * 8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%%.
   */
  orig: number;
  /**
   * @description Tributação pelo ICMS
   * * 10 - Tributada e com cobrança do ICMS por substituição tributária
   * * 90 - Outros
   */
  CST: string;
  /**
   * @description Modalidade de determinação da BC do ICMS:
   * * 0 - Margem Valor Agregado (%%)
   * * 1 - Pauta (valor)
   * * 2 - Preço Tabelado Máximo (valor)
   * * 3 - Valor da Operação
   */
  modBC: number;
  /** @description Valor da BC do ICMS. */
  vBC: number;
  /** @description Percentual de redução da BC. */
  pRedBC?: number;
  /** @description Alíquota do ICMS. */
  pICMS: number;
  /** @description Valor do ICMS. */
  vICMS: number;
  /**
   * @description Modalidade de determinação da BC do ICMS ST:
   * * 0 - Preço tabelado ou máximo  sugerido
   * * 1 - Lista Negativa (valor)
   * * 2 - Lista Positiva (valor)
   * * 3 - Lista Neutra (valor)
   * * 4 - Margem Valor Agregado (%%)
   * * 5 - Pauta (valor)
   * * 6 - Valor da Operação
   */
  modBCST: number;
  /** @description Percentual da Margem de Valor Adicionado ICMS ST. */
  pMVAST?: number;
  /** @description Percentual de redução da BC ICMS ST. */
  pRedBCST?: number;
  /** @description Valor da BC do ICMS ST. */
  vBCST: number;
  /** @description Alíquota do ICMS ST. */
  pICMSST: number;
  /** @description Valor do ICMS ST. */
  vICMSST: number;
  /** @description Valor da Base de cálculo do FCP retido por substituicao tributaria. */
  vBCFCPST?: number;
  /** @description Percentual de FCP retido por substituição tributária. */
  pFCPST?: number;
  /** @description Valor do FCP retido por substituição tributária. */
  vFCPST?: number;
  /** @description Percentual para determinação do valor  da Base de Cálculo da operação própria. */
  pBCOp: number;
  /** @description Sigla da UF para qual é devido o ICMS ST da operação. */
  UFST: string;
};
/** @description Grupo de informação do ICMSST devido para a UF de destino, nas operações interestaduais de produtos que tiveram retenção antecipada de ICMS por ST na UF do remetente. Repasse via Substituto Tributário. */
export type NfeSefazICMSST = {
  /**
   * @description Origem da mercadoria:
   * * 0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;
   * * 1 - Estrangeira - Importação direta, exceto a indicada no código 6;
   * * 2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;
   * * 3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40%% e inferior ou igual a 70%%;
   * * 4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes;
   * * 5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%%;
   * * 6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;
   * * 7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural;
   * * 8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%%.
   */
  orig: number;
  /**
   * @description Tributção pelo ICMS
   * * 41 - Não Tributado
   * * 60 - Cobrado anteriormente por substituição tributária
   */
  CST: string;
  /** @description Informar o valor da BC do ICMS ST retido na UF remetente. */
  vBCSTRet: number;
  /** @description Aliquota suportada pelo consumidor final. */
  pST?: number;
  /** @description Valor do ICMS Próprio do Substituto cobrado em operação anterior. */
  vICMSSubstituto?: number;
  /** @description Informar o valor do ICMS ST retido na UF remetente (iv2.0)). */
  vICMSSTRet: number;
  /** @description Informar o valor da Base de Cálculo do FCP retido anteriormente por ST. */
  vBCFCPSTRet?: number;
  /** @description Percentual relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária. */
  pFCPSTRet?: number;
  /** @description Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária. */
  vFCPSTRet?: number;
  /** @description Informar o valor da BC do ICMS ST da UF destino. */
  vBCSTDest: number;
  /** @description Informar o valor da BC do ICMS ST da UF destino (v2.0). */
  vICMSSTDest: number;
  /** @description Percentual de redução da base de cálculo efetiva. */
  pRedBCEfet?: number;
  /** @description Valor da base de cálculo efetiva. */
  vBCEfet?: number;
  /** @description Alíquota do ICMS efetivo. */
  pICMSEfet?: number;
  /** @description Valor do ICMS efetivo. */
  vICMSEfet?: number;
};
/** @description Tributação do ICMS pelo SIMPLES NACIONAL e CSOSN=101 (v.2.0). */
export type NfeSefazICMSSN101 = {
  /**
   * @description Origem da mercadoria:
   * * 0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;
   * * 1 - Estrangeira - Importação direta, exceto a indicada no código 6;
   * * 2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;
   * * 3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40%% e inferior ou igual a 70%%;
   * * 4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes;
   * * 5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%%;
   * * 6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;
   * * 7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural;
   * * 8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%%.
   */
  orig: number;
  /** @description * 101 - Tributada pelo Simples Nacional com permissão de crédito. (v.2.0) */
  CSOSN: string;
  /** @description Alíquota aplicável de cálculo do crédito (Simples Nacional). (v2.0). */
  pCredSN: number;
  /** @description Valor crédito do ICMS que pode ser aproveitado nos termos do art. 23 da LC 123 (Simples Nacional) (v2.0). */
  vCredICMSSN: number;
};
/** @description Tributação do ICMS pelo SIMPLES NACIONAL e CSOSN=102, 103, 300 ou 400 (v.2.0)). */
export type NfeSefazICMSSN102 = {
  /**
   * @description Origem da mercadoria:
   * * 0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;
   * * 1 - Estrangeira - Importação direta, exceto a indicada no código 6;
   * * 2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;
   * * 3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40%% e inferior ou igual a 70%%;
   * * 4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes;
   * * 5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%%;
   * * 6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;
   * * 7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural;
   * * 8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%%.
   */
  orig: number;
  /**
   * @description * 102 - Tributada pelo Simples Nacional sem permissão de crédito
   * * 103 - Isenção do ICMS  no Simples Nacional para faixa de receita bruta
   * * 300 - Imune
   * * 400 - Não tributda pelo Simples Nacional (v.2.0) (v.2.0)
   */
  CSOSN: string;
};
/** @description Tributação do ICMS pelo SIMPLES NACIONAL e CSOSN=201 (v.2.0). */
export type NfeSefazICMSSN201 = {
  /**
   * @description Origem da mercadoria:
   * * 0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;
   * * 1 - Estrangeira - Importação direta, exceto a indicada no código 6;
   * * 2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;
   * * 3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40%% e inferior ou igual a 70%%;
   * * 4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes;
   * * 5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%%;
   * * 6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;
   * * 7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural;
   * * 8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%%.
   */
  orig: number;
  /** @description * 201 - Tributada pelo Simples Nacional com permissão de crédito e com cobrança do ICMS por Substituição Tributária (v.2.0) */
  CSOSN: string;
  /**
   * @description Modalidade de determinação da BC do ICMS ST:
   * * 0 - Preço tabelado ou máximo  sugerido
   * * 1 - Lista Negativa (valor)
   * * 2 - Lista Positiva (valor)
   * * 3 - Lista Neutra (valor)
   * * 4 - Margem Valor Agregado (%%)
   * * 5 - Pauta (valor). (v2.0)
   * * 6 - Valor da Operação
   */
  modBCST: number;
  /** @description Percentual da Margem de Valor Adicionado ICMS ST (v2.0). */
  pMVAST?: number;
  /** @description Percentual de redução da BC ICMS ST  (v2.0). */
  pRedBCST?: number;
  /** @description Valor da BC do ICMS ST (v2.0). */
  vBCST: number;
  /** @description Alíquota do ICMS ST (v2.0). */
  pICMSST: number;
  /** @description Valor do ICMS ST (v2.0). */
  vICMSST: number;
  /** @description Valor da Base de cálculo do FCP. */
  vBCFCPST?: number;
  /** @description Percentual de FCP retido por substituição tributária. */
  pFCPST?: number;
  /** @description Valor do FCP retido por substituição tributária. */
  vFCPST?: number;
  /** @description Alíquota aplicável de cálculo do crédito (Simples Nacional). (v2.0). */
  pCredSN: number;
  /** @description Valor crédito do ICMS que pode ser aproveitado nos termos do art. 23 da LC 123 (Simples Nacional) (v2.0). */
  vCredICMSSN: number;
};
/** @description Tributação do ICMS pelo SIMPLES NACIONAL e CSOSN=202 ou 203 (v.2.0). */
export type NfeSefazICMSSN202 = {
  /**
   * @description Origem da mercadoria:
   * * 0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;
   * * 1 - Estrangeira - Importação direta, exceto a indicada no código 6;
   * * 2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;
   * * 3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40%% e inferior ou igual a 70%%;
   * * 4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes;
   * * 5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%%;
   * * 6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;
   * * 7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural;
   * * 8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%%.
   */
  orig: number;
  /**
   * @description * 202 - Tributada pelo Simples Nacional sem permissão de crédito e com cobrança do ICMS por Substituição Tributária
   * * 203 - Isenção do ICMS nos Simples Nacional para faixa de receita bruta e com cobrança do ICMS por Substituição Tributária (v.2.0)
   */
  CSOSN: string;
  /**
   * @description Modalidade de determinação da BC do ICMS ST:
   * * 0 - Preço tabelado ou máximo  sugerido
   * * 1 - Lista Negativa (valor)
   * * 2 - Lista Positiva (valor)
   * * 3 - Lista Neutra (valor)
   * * 4 - Margem Valor Agregado (%%)
   * * 5 - Pauta (valor). (v2.0)
   * * 6 - Valor da Operação
   */
  modBCST: number;
  /** @description Percentual da Margem de Valor Adicionado ICMS ST (v2.0). */
  pMVAST?: number;
  /** @description Percentual de redução da BC ICMS ST  (v2.0). */
  pRedBCST?: number;
  /** @description Valor da BC do ICMS ST (v2.0). */
  vBCST: number;
  /** @description Alíquota do ICMS ST (v2.0). */
  pICMSST: number;
  /** @description Valor do ICMS ST (v2.0). */
  vICMSST: number;
  /** @description Valor da Base de cálculo do FCP. */
  vBCFCPST?: number;
  /** @description Percentual de FCP retido por substituição tributária. */
  pFCPST?: number;
  /** @description Valor do FCP retido por substituição tributária. */
  vFCPST?: number;
};
/** @description Tributação do ICMS pelo SIMPLES NACIONAL,CRT=1 - Simples Nacional e CSOSN=500 (v.2.0). */
export type NfeSefazICMSSN500 = {
  /**
   * @description Origem da mercadoria:
   * * 0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;
   * * 1 - Estrangeira - Importação direta, exceto a indicada no código 6;
   * * 2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;
   * * 3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40%% e inferior ou igual a 70%%;
   * * 4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes;
   * * 5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%%;
   * * 6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;
   * * 7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural;
   * * 8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%%.
   */
  orig: number;
  /**
   * @description * 500 - ICMS cobrado anterirmente por substituição tributária (substituído) ou por antecipação
   * (v.2.0).
   */
  CSOSN: string;
  /** @description Valor da BC do ICMS ST retido anteriormente (v2.0). */
  vBCSTRet?: number;
  /** @description Aliquota suportada pelo consumidor final. */
  pST?: number;
  /** @description Valor do ICMS próprio do substituto. */
  vICMSSubstituto?: number;
  /** @description Valor do ICMS ST retido anteriormente  (v2.0). */
  vICMSSTRet?: number;
  /** @description Valor da Base de cálculo do FCP retido anteriormente. */
  vBCFCPSTRet?: number;
  /** @description Percentual de FCP retido anteriormente por substituição tributária. */
  pFCPSTRet?: number;
  /** @description Valor do FCP retido por substituição tributária. */
  vFCPSTRet?: number;
  /** @description Percentual de redução da base de cálculo efetiva. */
  pRedBCEfet?: number;
  /** @description Valor da base de cálculo efetiva. */
  vBCEfet?: number;
  /** @description Alíquota do ICMS efetiva. */
  pICMSEfet?: number;
  /** @description Valor do ICMS efetivo. */
  vICMSEfet?: number;
};
/** @description Tributação do ICMS pelo SIMPLES NACIONAL, CRT=1 - Simples Nacional, CRT=4 - MEI e CSOSN=900 (v2.0). */
export type NfeSefazICMSSN900 = {
  /**
   * @description Origem da mercadoria:
   * * 0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;
   * * 1 - Estrangeira - Importação direta, exceto a indicada no código 6;
   * * 2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;
   * * 3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40%% e inferior ou igual a 70%%;
   * * 4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes;
   * * 5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%%;
   * * 6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;
   * * 7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural;
   * * 8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%%.
   */
  orig: number;
  /** @description Tributação pelo ICMS 900 - Outros(v2.0). */
  CSOSN: string;
  /**
   * @description Modalidade de determinação da BC do ICMS:
   * * 0 - Margem Valor Agregado (%%)
   * * 1 - Pauta (valor)
   * * 2 - Preço Tabelado Máximo (valor)
   * * 3 - Valor da Operação
   */
  modBC?: number;
  /** @description Valor da BC do ICMS. */
  vBC?: number;
  /** @description Percentual de redução da BC. */
  pRedBC?: number;
  /** @description Alíquota do ICMS. */
  pICMS?: number;
  /** @description Valor do ICMS. */
  vICMS?: number;
  /**
   * @description Modalidade de determinação da BC do ICMS ST:
   * * 0 - Preço tabelado ou máximo  sugerido
   * * 1 - Lista Negativa (valor)
   * * 2 - Lista Positiva (valor)
   * * 3 - Lista Neutra (valor)
   * * 4 - Margem Valor Agregado (%%)
   * * 5 - Pauta (valor)
   * * 6 - Valor da Operação
   */
  modBCST?: number;
  /** @description Percentual da Margem de Valor Adicionado ICMS ST. */
  pMVAST?: number;
  /** @description Percentual de redução da BC ICMS ST. */
  pRedBCST?: number;
  /** @description Valor da BC do ICMS ST. */
  vBCST?: number;
  /** @description Alíquota do ICMS ST. */
  pICMSST?: number;
  /** @description Valor do ICMS ST. */
  vICMSST?: number;
  /** @description Valor da Base de cálculo do FCP. */
  vBCFCPST?: number;
  /** @description Percentual de FCP retido por substituição tributária. */
  pFCPST?: number;
  /** @description Valor do FCP retido por substituição tributária. */
  vFCPST?: number;
  /** @description Alíquota aplicável de cálculo do crédito (Simples Nacional). (v2.0). */
  pCredSN?: number;
  /** @description Valor crédito do ICMS que pode ser aproveitado nos termos do art. 23 da LC 123 (Simples Nacional) (v2.0). */
  vCredICMSSN?: number;
};
export type NfeSefazIpi = {
  /** @description CNPJ do produtor da mercadoria, quando diferente do emitente. Somente para os casos de exportação direta ou indireta. */
  CNPJProd?: string;
  /** @description Código do selo de controle do IPI. */
  cSelo?: string;
  /**
   * Format: int64
   * @description Quantidade de selo de controle do IPI.
   */
  qSelo?: number;
  /** @description Código de Enquadramento Legal do IPI (tabela a ser criada pela RFB). */
  cEnq: string;
  IPITrib?: NfeSefazIPITrib;
  IPINT?: NfeSefazIPINT;
};
export type NfeSefazIPITrib = {
  /**
   * @description Código da Situação Tributária do IPI:
   * * 00 - Entrada com recuperação de crédito
   * * 49 - Outras entradas
   * * 50 - Saída tributada
   * * 99 - Outras saídas
   */
  CST: string;
  /** @description Valor da BC do IPI. */
  vBC?: number;
  /** @description Alíquota do IPI. */
  pIPI?: number;
  /** @description Quantidade total na unidade padrão para tributação. */
  qUnid?: number;
  /** @description Valor por Unidade Tributável. Informar o valor do imposto Pauta por unidade de medida. */
  vUnid?: number;
  /** @description Valor do IPI. */
  vIPI: number;
};
export type NfeSefazIPINT = {
  /**
   * @description Código da Situação Tributária do IPI:
   * * 01 - Entrada tributada com alíquota zero
   * * 02 - Entrada isenta
   * * 03 - Entrada não-tributada
   * * 04 - Entrada imune
   * * 05 - Entrada com suspensão
   * * 51 - Saída tributada com alíquota zero
   * * 52 - Saída isenta
   * * 53 - Saída não-tributada
   * * 54 - Saída imune
   * * 55 - Saída com suspensão
   */
  CST: string;
};
/** @description Dados do Imposto de Importação. */
export type NfeSefazII = {
  /** @description Base da BC do Imposto de Importação. */
  vBC: number;
  /** @description Valor das despesas aduaneiras. */
  vDespAdu: number;
  /** @description Valor do Imposto de Importação. */
  vII: number;
  /** @description Valor do Imposto sobre Operações Financeiras. */
  vIOF: number;
};
/** @description ISSQN. */
export type NfeSefazISSQN = {
  /** @description Valor da BC do ISSQN. */
  vBC: number;
  /** @description Alíquota do ISSQN. */
  vAliq: number;
  /** @description Valor da do ISSQN. */
  vISSQN: number;
  /** @description Informar o município de ocorrência do fato gerador do ISSQN. Utilizar a Tabela do IBGE (Anexo VII - Tabela de UF, Município e País). “Atenção, não vincular com os campos B12, C10 ou E10” v2.0. */
  cMunFG: string;
  /** @description Informar o Item da lista de serviços da LC 116/03 em que se classifica o serviço. */
  cListServ: string;
  /** @description Valor dedução para redução da base de cálculo. */
  vDeducao?: number;
  /** @description Valor outras retenções. */
  vOutro?: number;
  /** @description Valor desconto incondicionado. */
  vDescIncond?: number;
  /** @description Valor desconto condicionado. */
  vDescCond?: number;
  /** @description Valor Retenção ISS. */
  vISSRet?: number;
  /**
   * @description Exibilidade do ISS:1-Exigível
   * * 2 - Não incidente
   * * 3 - Isenção
   * * 4 - Exportação
   * * 5 - Imunidade
   * * 6 - Exig.Susp. Judicial
   * * 7 - Exig.Susp. ADM
   */
  indISS: number;
  /** @description Código do serviço prestado dentro do município. */
  cServico?: string;
  /** @description Código do Município de Incidência do Imposto. */
  cMun?: string;
  /** @description Código de Pais. */
  cPais?: string;
  /** @description Número do Processo administrativo ou judicial de suspenção do processo. */
  nProcesso?: string;
  /**
   * @description Indicador de Incentivo Fiscal. 1=Sim
   * * 2 - Não
   */
  indIncentivo: number;
};
/** @description Dados do PIS. */
export type NfeSefazPIS = {
  PISAliq?: NfeSefazPISAliq;
  PISQtde?: NfeSefazPISQtde;
  PISNT?: NfeSefazPISNT;
  PISOutr?: NfeSefazPISOutr;
};
/**
 * @description Código de Situação Tributária do PIS.
 * * 01 - Operação Tributável - Base de Cálculo = Valor da Operação Alíquota Normal (Cumulativo/Não Cumulativo)
 * * 02 - Operação Tributável - Base de Calculo = Valor da Operação (Alíquota Diferenciada)
 */
export type NfeSefazPISAliq = {
  /**
   * @description Código de Situação Tributária do PIS.
   * * 01 - Operação Tributável - Base de Cálculo = Valor da Operação Alíquota Normal (Cumulativo/Não Cumulativo)
   * * 02 - Operação Tributável - Base de Calculo = Valor da Operação (Alíquota Diferenciada)
   */
  CST: string;
  /** @description Valor da BC do PIS. */
  vBC: number;
  /** @description Alíquota do PIS (em percentual). */
  pPIS: number;
  /** @description Valor do PIS. */
  vPIS: number;
};
/**
 * @description Código de Situação Tributária do PIS.
 * * 03 - Operação Tributável - Base de Calculo = Quantidade Vendida x Alíquota por Unidade de Produto
 */
export type NfeSefazPISQtde = {
  /**
   * @description Código de Situação Tributária do PIS.
   * * 03 - Operação Tributável - Base de Calculo = Quantidade Vendida x Alíquota por Unidade de Produto
   */
  CST: string;
  /** @description Quantidade Vendida  (NT2011/004). */
  qBCProd: number;
  /** @description Alíquota do PIS (em reais) (NT2011/004). */
  vAliqProd: number;
  /** @description Valor do PIS. */
  vPIS: number;
};
/**
 * @description Código de Situação Tributária do PIS.
 * * 04 - Operação Tributável - Tributação Monofásica - (Alíquota Zero)
 * * 06 - Operação Tributável - Alíquota Zero
 * * 07 - Operação Isenta da contribuição
 * * 08 - Operação Sem Incidência da contribuição
 * * 09 - Operação com suspensão da contribuição
 */
export type NfeSefazPISNT = {
  /**
   * @description Código de Situação Tributária do PIS.
   * * 04 - Operação Tributável - Tributação Monofásica - (Alíquota Zero)
   * * 05 - Operação Tributável (ST)
   * * 06 - Operação Tributável - Alíquota Zero
   * * 07 - Operação Isenta da contribuição
   * * 08 - Operação Sem Incidência da contribuição
   * * 09 - Operação com suspensão da contribuição
   */
  CST: string;
};
/**
 * @description Código de Situação Tributária do PIS.
 * * 99 - Outras Operações
 */
export type NfeSefazPISOutr = {
  /**
   * @description Código de Situação Tributária do PIS.
   * * 99 - Outras Operações
   */
  CST: string;
  /** @description Valor da BC do PIS. */
  vBC?: number;
  /** @description Alíquota do PIS (em percentual). */
  pPIS?: number;
  /** @description Quantidade Vendida (NT2011/004). */
  qBCProd?: number;
  /** @description Alíquota do PIS (em reais) (NT2011/004). */
  vAliqProd?: number;
  /** @description Valor do PIS. */
  vPIS: number;
};
/** @description Dados do PIS Substituição Tributária. */
export type NfeSefazPISST = {
  /** @description Valor da BC do PIS ST. */
  vBC?: number;
  /** @description Alíquota do PIS ST (em percentual). */
  pPIS?: number;
  /** @description Quantidade Vendida. */
  qBCProd?: number;
  /** @description Alíquota do PIS ST (em reais). */
  vAliqProd?: number;
  /** @description Valor do PIS ST. */
  vPIS: number;
  /** @description Indica se o valor do PISST compõe o valor total da NF-e. */
  indSomaPISST?: number;
};
/** @description Dados do COFINS. */
export type NfeSefazCOFINS = {
  COFINSAliq?: NfeSefazCOFINSAliq;
  COFINSQtde?: NfeSefazCOFINSQtde;
  COFINSNT?: NfeSefazCOFINSNT;
  COFINSOutr?: NfeSefazCOFINSOutr;
};
/**
 * @description Código de Situação Tributária do COFINS.
 * * 01 - Operação Tributável - Base de Cálculo = Valor da Operação Alíquota Normal (Cumulativo/Não Cumulativo)
 * * 02 - Operação Tributável - Base de Calculo = Valor da Operação (Alíquota Diferenciada)
 */
export type NfeSefazCOFINSAliq = {
  /**
   * @description Código de Situação Tributária do COFINS.
   * * 01 - Operação Tributável - Base de Cálculo = Valor da Operação Alíquota Normal (Cumulativo/Não Cumulativo)
   * * 02 - Operação Tributável - Base de Calculo = Valor da Operação (Alíquota Diferenciada)
   */
  CST: string;
  /** @description Valor da BC do COFINS. */
  vBC: number;
  /** @description Alíquota do COFINS (em percentual). */
  pCOFINS: number;
  /** @description Valor do COFINS. */
  vCOFINS: number;
};
/**
 * @description Código de Situação Tributária do COFINS.
 * * 03 - Operação Tributável - Base de Calculo = Quantidade Vendida x Alíquota por Unidade de Produto
 */
export type NfeSefazCOFINSQtde = {
  /**
   * @description Código de Situação Tributária do COFINS.
   * * 03 - Operação Tributável - Base de Calculo = Quantidade Vendida x Alíquota por Unidade de Produto
   */
  CST: string;
  /** @description Quantidade Vendida (NT2011/004). */
  qBCProd: number;
  /** @description Alíquota do COFINS (em reais) (NT2011/004). */
  vAliqProd: number;
  /** @description Valor do COFINS. */
  vCOFINS: number;
};
/**
 * @description Código de Situação Tributária do COFINS:
 * * 04 - Operação Tributável - Tributação Monofásica - (Alíquota Zero)
 * * 06 - Operação Tributável - Alíquota Zero
 * * 07 - Operação Isenta da contribuição
 * * 08 - Operação Sem Incidência da contribuição
 * * 09 - Operação com suspensão da contribuição
 */
export type NfeSefazCOFINSNT = {
  /**
   * @description Código de Situação Tributária do COFINS:
   * * 04 - Operação Tributável - Tributação Monofásica - (Alíquota Zero)
   * * 05 - Operação Tributável (ST)
   * * 06 - Operação Tributável - Alíquota Zero
   * * 07 - Operação Isenta da contribuição
   * * 08 - Operação Sem Incidência da contribuição
   * * 09 - Operação com suspensão da contribuição
   */
  CST: string;
};
/**
 * @description Código de Situação Tributária do COFINS:
 * * 49 - Outras Operações de Saída
 * * 50 - Operação com Direito a Crédito - Vinculada Exclusivamente a Receita Tributada no Mercado Interno
 * * 51 - Operação com Direito a Crédito - Vinculada Exclusivamente a Receita Não Tributada no Mercado Interno
 * * 52 - Operação com Direito a Crédito - Vinculada Exclusivamente a Receita de Exportação
 * * 53 - Operação com Direito a Crédito - Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno
 * * 54 - Operação com Direito a Crédito - Vinculada a Receitas Tributadas no Mercado Interno e de Exportação
 * * 55 - Operação com Direito a Crédito - Vinculada a Receitas Não-Tributadas no Mercado Interno e de Exportação
 * * 56 - Operação com Direito a Crédito - Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno, e de Exportação
 * * 60 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita Tributada no Mercado Interno
 * * 61 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita Não-Tributada no Mercado Interno
 * * 62 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita de Exportação
 * * 63 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno
 * * 64 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas no Mercado Interno e de Exportação
 * * 65 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Não-Tributadas no Mercado Interno e de Exportação
 * * 66 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno, e de Exportação
 * * 67 - Crédito Presumido - Outras Operações
 * * 70 - Operação de Aquisição sem Direito a Crédito
 * * 71 - Operação de Aquisição com Isenção
 * * 72 - Operação de Aquisição com Suspensão
 * * 73 - Operação de Aquisição a Alíquota Zero
 * * 74 - Operação de Aquisição sem Incidência da Contribuição
 * * 75 - Operação de Aquisição por Substituição Tributária
 * * 98 - Outras Operações de Entrada
 * * 99 - Outras Operações
 */
export type NfeSefazCOFINSOutr = {
  /**
   * @description Código de Situação Tributária do COFINS:
   * * 49 - Outras Operações de Saída
   * * 50 - Operação com Direito a Crédito - Vinculada Exclusivamente a Receita Tributada no Mercado Interno
   * * 51 - Operação com Direito a Crédito - Vinculada Exclusivamente a Receita Não Tributada no Mercado Interno
   * * 52 - Operação com Direito a Crédito - Vinculada Exclusivamente a Receita de Exportação
   * * 53 - Operação com Direito a Crédito - Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno
   * * 54 - Operação com Direito a Crédito - Vinculada a Receitas Tributadas no Mercado Interno e de Exportação
   * * 55 - Operação com Direito a Crédito - Vinculada a Receitas Não-Tributadas no Mercado Interno e de Exportação
   * * 56 - Operação com Direito a Crédito - Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno, e de Exportação
   * * 60 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita Tributada no Mercado Interno
   * * 61 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita Não-Tributada no Mercado Interno
   * * 62 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita de Exportação
   * * 63 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno
   * * 64 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas no Mercado Interno e de Exportação
   * * 65 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Não-Tributadas no Mercado Interno e de Exportação
   * * 66 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno, e de Exportação
   * * 67 - Crédito Presumido - Outras Operações
   * * 70 - Operação de Aquisição sem Direito a Crédito
   * * 71 - Operação de Aquisição com Isenção
   * * 72 - Operação de Aquisição com Suspensão
   * * 73 - Operação de Aquisição a Alíquota Zero
   * * 74 - Operação de Aquisição sem Incidência da Contribuição
   * * 75 - Operação de Aquisição por Substituição Tributária
   * * 98 - Outras Operações de Entrada
   * * 99 - Outras Operações
   */
  CST: string;
  /** @description Valor da BC do COFINS. */
  vBC?: number;
  /** @description Alíquota do COFINS (em percentual). */
  pCOFINS?: number;
  /** @description Quantidade Vendida (NT2011/004). */
  qBCProd?: number;
  /** @description Alíquota do COFINS (em reais) (NT2011/004). */
  vAliqProd?: number;
  /** @description Valor do COFINS. */
  vCOFINS: number;
};
/**
 * @description Dados do COFINS da
 * Substituição Tributaria.
 */
export type NfeSefazCOFINSST = {
  /** @description Valor da BC do COFINS ST. */
  vBC?: number;
  /** @description Alíquota do COFINS ST(em percentual). */
  pCOFINS?: number;
  /** @description Quantidade Vendida. */
  qBCProd?: number;
  /** @description Alíquota do COFINS ST(em reais). */
  vAliqProd?: number;
  /** @description Valor do COFINS ST. */
  vCOFINS: number;
  /** @description Indica se o valor da COFINS ST compõe o valor total da NFe. */
  indSomaCOFINSST?: number;
};
/** @description Grupo a ser informado nas vendas interestarduais para consumidor final, não contribuinte de ICMS. */
export type NfeSefazICMSUFDest = {
  /** @description Valor da Base de Cálculo do ICMS na UF do destinatário. */
  vBCUFDest: number;
  /** @description Valor da Base de Cálculo do FCP na UF do destinatário. */
  vBCFCPUFDest?: number;
  /** @description Percentual adicional inserido na alíquota interna da UF de destino, relativo ao Fundo de Combate à Pobreza (FCP) naquela UF. */
  pFCPUFDest?: number;
  /** @description Alíquota adotada nas operações internas na UF do destinatário para o produto / mercadoria. */
  pICMSUFDest: number;
  /**
   * @description Alíquota interestadual das UF envolvidas:
   * * 4%% alíquota interestadual para produtos importados
   * * 7%% para os Estados de origem do Sul e Sudeste (exceto ES), destinado para os Estados do Norte e Nordeste  ou ES
   * * 12%% para os demais casos.
   */
  pICMSInter: number;
  /**
   * @description Percentual de partilha para a UF do destinatário:
   * * 40%% em 2016
   * * 60%% em 2017
   * * 80%% em 2018
   * * 100%% a partir de 2019.
   */
  pICMSInterPart: number;
  /** @description Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) da UF de destino. */
  vFCPUFDest?: number;
  /** @description Valor do ICMS de partilha para a UF do destinatário. */
  vICMSUFDest: number;
  /** @description Valor do ICMS de partilha para a UF do remetente. Nota: A partir de 2019, este valor será zero. */
  vICMSUFRemet: number;
};
/** @description Grupo de informações do Imposto Seletivo. */
export type NfeSefazIS = {
  /** @description Código Situação Tributária do Imposto Seletivo. */
  CSTIS: string;
  cClassTribIS?: string;
  /** @description Valor do BC. */
  vBCIS?: number;
  /** @description Alíquota do Imposto Seletivo (percentual). */
  pIS?: number;
  /** @description Alíquota do Imposto Seletivo (por valor). */
  pISEspec?: number;
  /** @description Unidade de medida apropriada especificada em Lei Ordinaria para fins de apuração do Imposto Seletivo. */
  uTrib?: string;
  /** @description Quantidade com abse no campo uTrib informado. */
  qTrib?: number;
  /** @description Valor do Imposto Seletivo calculado. */
  vIS?: number;
};
/** @description Grupo de informações dos tributos IBS, CBS e Imposto Seletivo. */
export type NfeSefazTribNFe = {
  /** @description Código Situação Tributária do IBS/CBS. */
  CST: string;
  cClassTrib?: string;
  gIBSCBS?: NfeSefazCIBS;
  gIBSCBSMono?: NfeSefazMonofasia;
  gTransfCred?: NfeSefazTransfCred;
  gCredPresIBSZFM?: NfeSefazCredPresIBSZFM;
};
export type NfeSefazCIBS = {
  /** @description Valor do BC. */
  vBC: number;
  gIBSUF: NfeSefazGIBSUF;
  gIBSMun: NfeSefazGIBSMun;
  /** @description Valor do IBS. */
  vIBS: number;
  gCBS: NfeSefazGCBS;
  gTribRegular?: NfeSefazTribRegular;
  gIBSCredPres?: NfeSefazCredPres;
  gCBSCredPres?: NfeSefazCredPres;
  gTribCompraGov?: NfeSefazTribCompraGov;
};
/** @description Grupo de informações do IBS na UF. */
export type NfeSefazGIBSUF = {
  /** @description Aliquota do IBS de competência das UF. */
  pIBSUF: number;
  gDif?: NfeSefazDif;
  gDevTrib?: NfeSefazDevTrib;
  gRed?: NfeSefazRed;
  /** @description Valor do IBS de competência das UF. */
  vIBSUF: number;
};
/** @description Grupo de campos do Diferimento. */
export type NfeSefazDif = {
  /** @description Percentual do diferimento. */
  pDif: number;
  /** @description Valor do diferimento. */
  vDif: number;
};
/** @description Grupo de Informações da devolução de tributos. */
export type NfeSefazDevTrib = {
  /**
   * @description Valor do tributo devolvido. No fornecimento de energia elétrica, água, esgoto e
   * gás natural e em outras hipóteses definidas no regulamento.
   */
  vDevTrib: number;
};
/** @description Grupo de campos da redução de aliquota. */
export type NfeSefazRed = {
  /** @description Percentual de redução de aliquota do cClassTrib. */
  pRedAliq: number;
  /** @description Aliquota Efetiva que será aplicada a Base de Calculo. */
  pAliqEfet: number;
};
/** @description Grupo de Informações do IBS no Município. */
export type NfeSefazGIBSMun = {
  /** @description Aliquota do IBS Municipal. */
  pIBSMun: number;
  gDif?: NfeSefazDif;
  gDevTrib?: NfeSefazDevTrib;
  gRed?: NfeSefazRed;
  /** @description Valor do IBS Municipal. */
  vIBSMun: number;
};
/** @description Grupo de Tributação da CBS. */
export type NfeSefazGCBS = {
  /** @description Aliquota da CBS. */
  pCBS: number;
  gDif?: NfeSefazDif;
  gDevTrib?: NfeSefazDevTrib;
  gRed?: NfeSefazRed;
  /** @description Valor da CBS. */
  vCBS: number;
};
/** @description Grupo de informações da Tributação Regular. Informar como seria a tributação caso não cumprida a condição resolutória/suspensiva. Exemplo 1: Art. 442, §4. Operações com ZFM e ALC. Exemplo 2: Operações com suspensão do tributo. */
export type NfeSefazTribRegular = {
  /**
   * @description Código da Situação Tributária do IBS e CBS.
   * Informar qual seria o CST caso não cumprida a condição resolutória/suspensiva.
   */
  CSTReg: string;
  /** @description Informar qual seria o cClassTrib caso não cumprida a condição resolutória/suspensiva. */
  cClassTribReg: string;
  /**
   * @description Alíquota do IBS da UF.
   * Informar como seria a Alíquota caso não cumprida a condição resolutória/suspensiva.
   */
  pAliqEfetRegIBSUF: number;
  /**
   * @description Valor do IBS da UF.
   * Informar como seria o valor do Tributo caso não cumprida a condição resolutória/suspensiva.
   */
  vTribRegIBSUF: number;
  /**
   * @description Alíquota do IBS do Município.
   * Informar como seria a Alíquota caso não cumprida a condição resolutória/suspensiva.
   */
  pAliqEfetRegIBSMun: number;
  /**
   * @description Valor do IBS do Município.
   * Informar como seria o valor do Tributo caso não cumprida a condição resolutória/suspensiva.
   */
  vTribRegIBSMun: number;
  /**
   * @description Alíquota da CBS.
   * Informar como seria a Alíquota caso não cumprida a condição resolutória/suspensiva.
   */
  pAliqEfetRegCBS: number;
  /**
   * @description Valor da CBS.
   * Informar como seria o valor do Tributo caso não cumprida a condição resolutória/suspensiva.
   */
  vTribRegCBS: number;
};
/** @description Grupo de Informações do Crédito Presumido referente ao IBS, quando aproveitado pelo emitente do documento. */
export type NfeSefazCredPres = {
  /** @description Código de Classificação do Crédito Presumido do IBS e da CBS. */
  cCredPres: string;
  /** @description Percentual do Crédito Presumido. */
  pCredPres: number;
  /** @description Valor do Crédito Presumido. */
  vCredPres?: number;
  /** @description Valor do Crédito Presumido Condição Suspensiva, preencher apenas para cCredPres que possui indicação de Condição Suspensiva. */
  vCredPresCondSus?: number;
};
/** @description Grupo de informações da composição do valor do IBS e da CBS em compras governamental. */
export type NfeSefazTribCompraGov = {
  pAliqIBSUF?: number;
  /** @description Valor que seria devido a UF, sem aplicação do Art. 473. da LC 214/2025. */
  vTribIBSUF: number;
  pAliqIBSMun?: number;
  /** @description Valor que seria devido ao município, sem aplicação do Art. 473. da LC 214/2025. */
  vTribIBSMun: number;
  pAliqCBS?: number;
  /** @description Valor que seria devido a CBS, sem aplicação do Art. 473. da LC 214/2025. */
  vTribCBS: number;
};
/** @description Informar essa opção da Choice para Monofasia. */
export type NfeSefazMonofasia = {
  gMonoPadrao?: NfeSefazGMonoPadrao;
  gMonoReten?: NfeSefazGMonoReten;
  gMonoRet?: NfeSefazGMonoRet;
  gMonoDif?: NfeSefazGMonoDif;
  /** @description Total de IBS monofásico do item. */
  vTotIBSMonoItem: number;
  /** @description Total da CBS monofásica do item. */
  vTotCBSMonoItem: number;
};
/** @description Grupo de informações da Tributação Monofásica padrão. */
export type NfeSefazGMonoPadrao = {
  /** @description Quantidade tributada na monofasia. */
  qBCMono: number;
  /** @description Alíquota ad rem do IBS. */
  adRemIBS: number;
  /** @description Alíquota ad rem da CBS. */
  adRemCBS: number;
  /** @description Valor do IBS monofásico. */
  vIBSMono: number;
  /** @description Valor da CBS monofásica. */
  vCBSMono: number;
};
/** @description Grupo de informações da Tributação Monofásica sujeita a retenção. */
export type NfeSefazGMonoReten = {
  /** @description Quantidade tributada sujeita a retenção. */
  qBCMonoReten: number;
  /** @description Alíquota ad rem do IBS sujeito a retenção. */
  adRemIBSReten: number;
  /** @description Valor do IBS monofásico sujeito a retenção. */
  vIBSMonoReten: number;
  /** @description Alíquota ad rem da CBS sujeita a retenção. */
  adRemCBSReten: number;
  /** @description Valor da CBS monofásica sujeita a retenção. */
  vCBSMonoReten: number;
};
/** @description Grupo de informações da Tributação Monofásica retida anteriormente. */
export type NfeSefazGMonoRet = {
  /** @description Quantidade tributada retida anteriormente. */
  qBCMonoRet: number;
  /** @description Alíquota ad rem do IBS retido anteriormente. */
  adRemIBSRet: number;
  /** @description Valor do IBS retido anteriormente. */
  vIBSMonoRet: number;
  /** @description Alíquota ad rem da CBS retida anteriormente. */
  adRemCBSRet: number;
  /** @description Valor da CBS retida anteriormente. */
  vCBSMonoRet: number;
};
/** @description Grupo de informações do diferimento da Tributação Monofásica. */
export type NfeSefazGMonoDif = {
  /** @description Percentual do diferimento do imposto monofásico. */
  pDifIBS: number;
  /** @description Valor do IBS monofásico diferido. */
  vIBSMonoDif: number;
  /** @description Percentual do diferimento do imposto monofásico. */
  pDifCBS: number;
  /** @description Valor da CBS monofásica diferida. */
  vCBSMonoDif: number;
};
/** @description Informar essa opção da Choice para o CST 800. */
export type NfeSefazTransfCred = {
  /** @description Valor do IBS a ser transferido. */
  vIBS: number;
  /** @description Valor da CBS a ser transferida. */
  vCBS: number;
};
/** @description Classificação de acordo com o art. 450, § 1º, da LC 214/25 para o cálculo do crédito presumido na ZFM. */
export type NfeSefazCredPresIBSZFM = {
  /**
   * @description Classificação de acordo com o art. 450, § 1º, da LC 214/25 para o cálculo do crédito presumido na ZFM.
   * * 0 - Sem crédito presumido
   * * 1 - Bens de consumo final (55%%)
   * * 2 - Bens de capital (75%%)
   * * 3 - Bens intermediários (90,25%%)
   * * 4 - Bens de informática e outros definidos em legislação (100%%)
   * OBS: Percentuais definidos no art. 450, § 1º, da LC 214/25 para o cálculo do crédito presumido.
   */
  tpCredPresIBSZFM: number;
  /** @description Valor do crédito presumido calculado sobre o saldo devedor apurado. */
  vCredPresIBSZFM?: number;
};
export type NfeSefazImpostoDevol = {
  /** @description Percentual de mercadoria devolvida. */
  pDevol: number;
  IPI: NfeSefazImpostoDevol_IPI;
};
/** @description Informação de IPI devolvido. */
export type NfeSefazImpostoDevol_IPI = {
  /** @description Valor do IPI devolvido. */
  vIPIDevol: number;
};
/** @description Grupo de observações de uso livre (para o item da NF-e). */
export type NfeSefazObsItem = {
  obsCont?: NfeSefazObsCont;
  obsFisco?: NfeSefazObsFisco;
};
/** @description Grupo de observações de uso livre (para o item da NF-e). */
export type NfeSefazObsCont = {
  xCampo?: string;
  xTexto?: string;
};
/** @description Grupo de observações de uso livre (para o item da NF-e). */
export type NfeSefazObsFisco = {
  xCampo?: string;
  xTexto?: string;
};
/** @description Referenciamento de item de outros DFe. */
export type NfeSefazDFeReferenciado = {
  /** @description Chave de Acesso do DFe referenciado. */
  chaveAcesso: string;
  /** @description Número do item do documento referenciado. Corresponde ao atributo nItem do elemento det do documento original. */
  nItem?: number;
};
/** @description Dados dos totais da NF-e. */
export type NfeSefazTotal = {
  ICMSTot: NfeSefazICMSTot;
  ISSQNtot?: NfeSefazISSQNtot;
  retTrib?: NfeSefazRetTrib;
  ISTot?: NfeSefazISTot;
  IBSCBSTot?: NfeSefazIBSCBSMonoTot;
  /** @description Valor Total da NF considerando os impostos por fora IBS, CBS e IS. */
  vNFTot?: number;
};
/** @description Totais referentes ao ICMS. */
export type NfeSefazICMSTot = {
  /** @description BC do ICMS. */
  vBC: number;
  /** @description Valor Total do ICMS. */
  vICMS: number;
  /** @description Valor Total do ICMS desonerado. */
  vICMSDeson: number;
  /** @description Valor total do ICMS relativo ao Fundo de Combate à Pobreza (FCP) para a UF de destino. */
  vFCPUFDest?: number;
  /** @description Valor total do ICMS de partilha para a UF do destinatário. */
  vICMSUFDest?: number;
  /** @description Valor total do ICMS de partilha para a UF do remetente. */
  vICMSUFRemet?: number;
  /** @description Valor Total do FCP (Fundo de Combate à Pobreza). */
  vFCP: number;
  /** @description BC do ICMS ST. */
  vBCST: number;
  /** @description Valor Total do ICMS ST. */
  vST: number;
  /** @description Valor Total do FCP (Fundo de Combate à Pobreza) retido por substituição tributária. */
  vFCPST: number;
  /** @description Valor Total do FCP (Fundo de Combate à Pobreza) retido anteriormente por substituição tributária. */
  vFCPSTRet: number;
  /** @description Valor total da quantidade tributada do ICMS monofásico próprio. */
  qBCMono?: number;
  /** @description Valor total do ICMS monofásico próprio. */
  vICMSMono?: number;
  /** @description Valor total da quantidade tributada do ICMS monofásico sujeito a retenção. */
  qBCMonoReten?: number;
  /** @description Valor total do ICMS monofásico sujeito a retenção. */
  vICMSMonoReten?: number;
  /** @description Valor total da quantidade tributada do ICMS monofásico retido anteriormente. */
  qBCMonoRet?: number;
  /** @description Valor do ICMS monofásico retido anteriormente. */
  vICMSMonoRet?: number;
  /** @description Valor Total dos produtos e serviços. */
  vProd: number;
  /** @description Valor Total do Frete. */
  vFrete: number;
  /** @description Valor Total do Seguro. */
  vSeg: number;
  /** @description Valor Total do Desconto. */
  vDesc: number;
  /** @description Valor Total do II. */
  vII: number;
  /** @description Valor Total do IPI. */
  vIPI: number;
  /** @description Valor Total do IPI devolvido. Deve ser informado quando preenchido o Grupo Tributos Devolvidos na emissão de nota finNFe=4 (devolução) nas operações com não contribuintes do IPI. Corresponde ao total da soma dos campos id: UA04. */
  vIPIDevol: number;
  /** @description Valor do PIS. */
  vPIS: number;
  /** @description Valor do COFINS. */
  vCOFINS: number;
  /** @description Outras Despesas acessórias. */
  vOutro: number;
  /** @description Valor Total da NF-e. */
  vNF: number;
  /** @description Valor estimado total de impostos federais, estaduais e municipais. */
  vTotTrib?: number;
};
/** @description Totais referentes ao ISSQN. */
export type NfeSefazISSQNtot = {
  /** @description Valor Total dos Serviços sob não-incidência ou não tributados pelo ICMS. */
  vServ?: number;
  /** @description Base de Cálculo do ISS. */
  vBC?: number;
  /** @description Valor Total do ISS. */
  vISS?: number;
  /** @description Valor do PIS sobre serviços. */
  vPIS?: number;
  /** @description Valor do COFINS sobre serviços. */
  vCOFINS?: number;
  /**
   * Format: date
   * @description Data da prestação do serviço  (AAAA-MM-DD).
   */
  dCompet: string;
  /** @description Valor dedução para redução da base de cálculo. */
  vDeducao?: number;
  /** @description Valor outras retenções. */
  vOutro?: number;
  /** @description Valor desconto incondicionado. */
  vDescIncond?: number;
  /** @description Valor desconto condicionado. */
  vDescCond?: number;
  /** @description Valor Total Retenção ISS. */
  vISSRet?: number;
  /** @description Código do regime especial de tributação. */
  cRegTrib?: number;
};
/** @description Retenção de Tributos Federais. */
export type NfeSefazRetTrib = {
  /** @description Valor Retido de PIS. */
  vRetPIS?: number;
  /** @description Valor Retido de COFINS. */
  vRetCOFINS?: number;
  /** @description Valor Retido de CSLL. */
  vRetCSLL?: number;
  /** @description Base de Cálculo do IRRF. */
  vBCIRRF?: number;
  /** @description Valor Retido de IRRF. */
  vIRRF?: number;
  /** @description Base de Cálculo da Retenção da Previdêncica Social. */
  vBCRetPrev?: number;
  /** @description Valor da Retenção da Previdêncica Social. */
  vRetPrev?: number;
};
/** @description Valores totais da NF com Imposto Seletivo. */
export type NfeSefazISTot = {
  /** @description Valor Total do Imposto Seletivo. */
  vIS: number;
};
/** @description Valores totais da NF com IBS / CBS. */
export type NfeSefazIBSCBSMonoTot = {
  /** @description Total Base de Calculo. */
  vBCIBSCBS: number;
  gIBS?: NfeSefazGIBS;
  gCBS?: NfeSefazIBSCBSMonoTot_GCBS;
  gMono?: NfeSefazGMono;
};
/** @description Totalização do IBS. */
export type NfeSefazGIBS = {
  gIBSUF: NfeSefazGIBS_GIBSUF;
  gIBSMun: NfeSefazGIBS_GIBSMun;
  /** @description Valor total do IBS. */
  vIBS: number;
  /** @description Total do Crédito Presumido. */
  vCredPres: number;
  /** @description Total do Crédito Presumido Condição Suspensiva. */
  vCredPresCondSus: number;
};
/** @description Totalização do IBS de competência da UF. */
export type NfeSefazGIBS_GIBSUF = {
  /** @description Total do Diferimento. */
  vDif: number;
  /** @description Total de devoluções de tributos. */
  vDevTrib: number;
  /** @description Valor total do IBS Estadual. */
  vIBSUF: number;
};
/** @description Totalização do IBS de competência Municipal. */
export type NfeSefazGIBS_GIBSMun = {
  /** @description Total do Diferimento. */
  vDif: number;
  /** @description Total de devoluções de tributos. */
  vDevTrib: number;
  /** @description Valor total do IBS Municipal. */
  vIBSMun: number;
};
/** @description Totalização da CBS. */
export type NfeSefazIBSCBSMonoTot_GCBS = {
  /** @description Total do Diferimento. */
  vDif: number;
  /** @description Total de devoluções de tributos. */
  vDevTrib: number;
  /** @description Valor total da CBS. */
  vCBS: number;
  /** @description Total do Crédito Presumido. */
  vCredPres: number;
  /** @description Total do Crédito Presumido Condição Suspensiva. */
  vCredPresCondSus: number;
};
/**
 * @description Totais da Monofasia.
 * Só deverá ser utilizado para DFe modelos 55 e 65.
 */
export type NfeSefazGMono = {
  /** @description Valor total do IBS monofásico. */
  vIBSMono: number;
  /** @description Valor total da CBS monofásica. */
  vCBSMono: number;
  /** @description Valor total do IBS monofásico sujeito a retenção. */
  vIBSMonoReten: number;
  /** @description Valor total da CBS monofásica sujeita a retenção. */
  vCBSMonoReten: number;
  /** @description Valor do IBS monofásico retido anteriormente. */
  vIBSMonoRet: number;
  /** @description Valor da CBS monofásica retida anteriormente. */
  vCBSMonoRet: number;
};
/** @description Dados dos transportes da NF-e. */
export type NfeSefazTransp = {
  /**
   * @description Modalidade do frete
   * * 0 - Contratação do Frete por conta do Remetente (CIF)
   * * 1 - Contratação do Frete por conta do destinatário/remetente (FOB)
   * * 2 - Contratação do Frete por conta de terceiros
   * * 3 - Transporte próprio por conta do remetente
   * * 4 - Transporte próprio por conta do destinatário
   * * 9 - Sem Ocorrência de transporte
   */
  modFrete: number;
  transporta?: NfeSefazTransporta;
  retTransp?: NfeSefazRetTransp;
  veicTransp?: NfeSefazVeiculo;
  reboque?: NfeSefazVeiculo[];
  /** @description Identificação do vagão (v2.0). */
  vagao?: string;
  /** @description Identificação da balsa (v2.0). */
  balsa?: string;
  vol?: NfeSefazVol[];
};
/** @description Dados do transportador. */
export type NfeSefazTransporta = {
  /** @description CNPJ do transportador. */
  CNPJ?: string;
  /** @description CPF do transportador. */
  CPF?: string;
  /** @description Razão Social ou nome do transportador. */
  xNome?: string;
  /** @description Inscrição Estadual (v2.0). */
  IE?: string;
  /** @description Endereço completo. */
  xEnder?: string;
  /** @description Nome do munícipio. */
  xMun?: string;
  /** @description Sigla da UF. */
  UF?: string;
};
/** @description Dados da retenção  ICMS do Transporte. */
export type NfeSefazRetTransp = {
  /** @description Valor do Serviço. */
  vServ: number;
  /** @description BC da Retenção do ICMS. */
  vBCRet: number;
  /** @description Alíquota da Retenção. */
  pICMSRet: number;
  /** @description Valor do ICMS Retido. */
  vICMSRet: number;
  /** @description Código Fiscal de Operações e Prestações. */
  CFOP: string;
  /** @description Código do Município de Ocorrência do Fato Gerador (utilizar a tabela do IBGE). */
  cMunFG: string;
};
/** @description Dados do veículo. */
export type NfeSefazVeiculo = {
  /** @description Placa do veículo (NT2011/004). */
  placa: string;
  /** @description Sigla da UF. */
  UF?: string;
  /** @description Registro Nacional de Transportador de Carga (ANTT). */
  RNTC?: string;
};
/** @description Dados dos volumes. */
export type NfeSefazVol = {
  /**
   * Format: int64
   * @description Quantidade de volumes transportados.
   */
  qVol?: number;
  /** @description Espécie dos volumes transportados. */
  esp?: string;
  /** @description Marca dos volumes transportados. */
  marca?: string;
  /** @description Numeração dos volumes transportados. */
  nVol?: string;
  /** @description Peso líquido (em kg). */
  pesoL?: number;
  /** @description Peso bruto (em kg). */
  pesoB?: number;
  lacres?: NfeSefazLacres[];
};
export type NfeSefazLacres = {
  /** @description Número dos Lacres. */
  nLacre: string;
};
/** @description Dados da cobrança da NF-e. */
export type NfeSefazCobr = {
  fat?: NfeSefazFat;
  dup?: NfeSefazDup[];
};
/** @description Dados da fatura. */
export type NfeSefazFat = {
  /** @description Número da fatura. */
  nFat?: string;
  /** @description Valor original da fatura. */
  vOrig?: number;
  /** @description Valor do desconto da fatura. */
  vDesc?: number;
  /** @description Valor líquido da fatura. */
  vLiq?: number;
};
/** @description Dados das duplicatas NT 2011/004. */
export type NfeSefazDup = {
  /** @description Número da duplicata. */
  nDup?: string;
  /**
   * Format: date
   * @description Data de vencimento da duplicata (AAAA-MM-DD).
   */
  dVenc?: string;
  /** @description Valor da duplicata. */
  vDup: number;
};
/** @description Dados de Pagamento. Obrigatório apenas para (NFC-e) NT 2012/004. */
export type NfeSefazPag = {
  detPag: NfeSefazDetPag[];
  /** @description Valor do Troco. */
  vTroco?: number;
};
/** @description Grupo de detalhamento da forma de pagamento. */
export type NfeSefazDetPag = {
  /**
   * @description Indicador da Forma de Pagamento:0-Pagamento à Vista
   * * 1 - Pagamento à Prazo
   */
  indPag?: number;
  /** @description Forma de Pagamento:. */
  tPag: string;
  /** @description Descrição do Meio de Pagamento. */
  xPag?: string;
  /** @description Valor do Pagamento. Esta tag poderá ser omitida quando a tag tPag=90 (Sem Pagamento), caso contrário deverá ser preenchida. */
  vPag: number;
  /**
   * Format: date
   * @description Data do Pagamento.
   */
  dPag?: string;
  /** @description CNPJ transacional do pagamento - Preencher informando o CNPJ do estabelecimento onde o pagamento foi processado/transacionado/recebido quando a emissão do documento fiscal ocorrer em estabelecimento distinto. */
  CNPJPag?: string;
  /** @description UF do CNPJ do estabelecimento onde o pagamento foi processado/transacionado/recebido. */
  UFPag?: string;
  card?: NfeSefazCard;
};
/** @description Grupo de Cartões, PIX, Boletos e outros Pagamentos Eletrônicos. */
export type NfeSefazCard = {
  /**
   * @description Tipo de Integração do processo de pagamento com o sistema de automação da empresa:
   * * 1 - Pagamento integrado com o sistema de automação da empresa (Ex.: equipamento TEF, Comércio Eletrônico, POS Integrado)
   * * 2 - Pagamento não integrado com o sistema de automação da empresa (Ex.: equipamento POS Simples)
   */
  tpIntegra: number;
  /** @description CNPJ da instituição de pagamento. */
  CNPJ?: string;
  /** @description Bandeira da operadora de cartão. */
  tBand?: string;
  /** @description Número de autorização da operação com cartões, PIX, boletos e outros pagamentos eletrônicos. */
  cAut?: string;
  /** @description CNPJ do beneficiário do pagamento. */
  CNPJReceb?: string;
  /** @description Identificador do terminal de pagamento. */
  idTermPag?: string;
};
/** @description Grupo de Informações do Intermediador da Transação. */
export type NfeSefazInfIntermed = {
  /** @description CNPJ do Intermediador da Transação (agenciador, plataforma de delivery, marketplace e similar) de serviços e de negócios. */
  CNPJ: string;
  /** @description Identificador cadastrado no intermediador. */
  idCadIntTran: string;
};
/** @description Informações adicionais da NF-e. */
export type NfeSefazInfAdic = {
  /** @description Informações adicionais de interesse do Fisco (v2.0). */
  infAdFisco?: string;
  /** @description Informações complementares de interesse do Contribuinte. */
  infCpl?: string;
  obsCont?: NfeSefazInfAdic_ObsCont[];
  obsFisco?: NfeSefazInfAdic_ObsFisco[];
  procRef?: NfeSefazProcRef[];
};
/**
 * @description Campo de uso livre do contribuinte
 * informar o nome do campo no atributo xCampo
 * e o conteúdo do campo no xTexto.
 */
export type NfeSefazInfAdic_ObsCont = {
  xCampo?: string;
  xTexto?: string;
};
/**
 * @description Campo de uso exclusivo do Fisco
 * informar o nome do campo no atributo xCampo
 * e o conteúdo do campo no xTexto.
 */
export type NfeSefazInfAdic_ObsFisco = {
  xCampo?: string;
  xTexto?: string;
};
/** @description Grupo de informações do  processo referenciado. */
export type NfeSefazProcRef = {
  /**
   * @description Indentificador do processo ou ato
   * concessório.
   */
  nProc: string;
  /**
   * @description Origem do processo, informar com:
   * * 0 - SEFAZ
   * * 1 - Justiça Federal
   * * 2 - Justiça Estadual
   * * 3 - Secex/RFB
   * * 4 - CONFAZ
   * * 9 - Outros
   */
  indProc: number;
  /**
   * @description Tipo do ato concessório
   * Para origem do Processo na SEFAZ (indProc=0), informar o
   * tipo de ato concessório:
   * * 08 - Termo de Acordo
   * * 10 - Regime Especial
   * * 12 - Autorização específica
   * * 14 - Ajuste SINIEF
   * * 15 - Convênio ICMS
   */
  tpAto?: string;
};
/** @description Informações de exportação. */
export type NfeSefazExporta = {
  /** @description Sigla da UF de Embarque ou de transposição de fronteira. */
  UFSaidaPais: string;
  /** @description Local de Embarque ou de transposição de fronteira. */
  xLocExporta: string;
  /** @description Descrição do local de despacho. */
  xLocDespacho?: string;
};
/** @description Informações de compras  (Nota de Empenho, Pedido e Contrato). */
export type NfeSefazCompra = {
  /** @description Informação da Nota de Empenho de compras públicas (NT2011/004). */
  xNEmp?: string;
  /** @description Informação do pedido. */
  xPed?: string;
  /** @description Informação do contrato. */
  xCont?: string;
};
/** @description Informações de registro aquisições de cana. */
export type NfeSefazCana = {
  /** @description Identificação da safra. */
  safra: string;
  /** @description Mês e Ano de Referência, formato: MM/AAAA. */
  ref: string;
  forDia: NfeSefazForDia[];
  /** @description Total do mês. */
  qTotMes: number;
  /** @description Total Anterior. */
  qTotAnt: number;
  /** @description Total Geral. */
  qTotGer: number;
  deduc?: NfeSefazDeduc[];
  /** @description Valor  dos fornecimentos. */
  vFor: number;
  /** @description Valor Total das Deduções. */
  vTotDed: number;
  /** @description Valor Líquido dos fornecimentos. */
  vLiqFor: number;
};
/** @description Fornecimentos diários. */
export type NfeSefazForDia = {
  /** @description Número do dia. */
  dia: number;
  /** @description Quantidade em quilogramas - peso líquido. */
  qtde: number;
};
/** @description Deduções - Taxas e Contribuições. */
export type NfeSefazDeduc = {
  /** @description Descrição da Dedução. */
  xDed: string;
  /** @description valor da dedução. */
  vDed: number;
};
/** @description Informações do Responsável Técnico pela emissão do DF-e. */
export type NfeSefazInfRespTec = {
  /** @description CNPJ. */
  CNPJ: string;
  /** @description Informar o nome da pessoa a ser contatada na empresa desenvolvedora do sistema utilizado na emissão do documento fiscal eletrônico. */
  xContato: string;
  /** @description Informar o e-mail da pessoa a ser contatada na empresa desenvolvedora do sistema. */
  email: string;
  /** @description Informar o telefone da pessoa a ser contatada na empresa desenvolvedora do sistema. Preencher com o Código DDD + número do telefone. */
  fone: string;
  /** @description Identificador do CSRT utilizado para montar o hash do CSRT. */
  idCSRT?: number;
  /** @description Código de Segurança do Responsável Técnico utilizado para montar o hash do CSRT. */
  CSRT?: string;
  /**
   * @description O hashCSRT é o resultado da função hash (SHA-1 - Base64) do CSRT fornecido pelo fisco mais a Chave de Acesso da NFe.
   *
   * *Se não informado, será calculado automaticamente, desde que os campos `idCSRT` e `CSRT` sejam fornecidos.*
   */
  hashCSRT?: string;
};
/** @description Grupo para informações da solicitação da NFF. */
export type NfeSefazInfSolicNFF = {
  /** @description Solicitação do pedido de emissão da NFF. */
  xSolic: string;
};
/** @description Produtos Agropecurários Animais, Vegetais e Florestais. */
export type NfeSefazAgropecuario = {
  defensivo?: NfeSefazDefensivo[];
  guiaTransito?: NfeSefazGuiaTransito;
};
/** @description Defensivo Agrícola / Agrotóxico. */
export type NfeSefazDefensivo = {
  /** @description Número do Receituário ou Receita do Defensivo / Agrotóxico. */
  nReceituario: string;
  /** @description CPF do Responsável Técnico pelo receituário. */
  CPFRespTec: string;
};
/** @description Guias De Trânsito de produtos agropecurários animais, vegetais e de origem florestal. */
export type NfeSefazGuiaTransito = {
  /** @description Tipo da Guia: 1 - GTA; 2 - TTA; 3 - DTA; 4 - ATV; 5 - PTV; 6 - GTV; 7 - Guia Florestal (DOF, SisFlora - PA e MT, SIAM - MG). */
  tpGuia: number;
  UFGuia?: string;
  /** @description Série da Guia. */
  serieGuia?: string;
  /** @description Número da Guia. */
  nGuia: string;
};
/** @description Informações suplementares Nota Fiscal. */
export type NfeSefazInfNFeSupl = {
  /**
   * @description Texto com o QR-Code impresso no DANFE NFC-e.
   *
   * *Geramos automaticamente quando nenhum valor é informado.*
   */
  qrCode?: string;
  /**
   * @description Informar a URL da "Consulta por chave de acesso da NFC-e". A mesma URL que deve estar informada no DANFE NFC-e para consulta por chave de acesso.
   *
   * *Geramos automaticamente quando nenhum valor é informado.*
   */
  urlChave?: string;
};
export type DfePedidoEnvioEmail = {
  /**
   * @description Lista de endereços de email para envio dos arquivos.
   *
   * *Caso nenhum email seja informado, será utilizado o email do destinatário do documento fiscal.*
   */
  destinatarios?: EnderecoEmail[];
};
export type EnderecoEmail = {
  /** @description Email do destinatário. */
  email: string;
};
export type EmailStatusResponse = {
  /**
   * @description ID único gerado pela Nuvem Fiscal para este email.
   *
   * Utilize-o no endpoint de <a href="#tag/Email/operation/ConsultarEmail">consulta de email</a>
   * para obter informações detalhadas sobre o envio do email e
   * rastrear todos os eventos relacionados, como envio, entrega, falhas e outros
   * eventos relevantes.
   */
  id: string;
  /** @enum {string} */
  status?:
    | "pending"
    | "sending"
    | "sent"
    | "delivered"
    | "delivery_delayed"
    | "bounced"
    | "complained"
    | "rejected"
    | "cancelled"
    | "failed";
  status_message?: string;
};
export type NfePedidoCancelamento = {
  /** @description Justificativa para o cancelamento. Preencheremos automaticamente, caso esteja em branco. */
  justificativa?: string;
};
export type NfePedidoCartaCorrecao = {
  /** @description Correção a ser considerada. */
  correcao?: string;
};
export type DfeCartaCorrecao = {
  /** @description Correção a ser considerada. */
  correcao?: string;
  /** @description ID único gerado pela Nuvem Fiscal para este evento. */
  id?: string;
  /**
   * @description Identificação do ambiente.
   * @enum {string}
   */
  ambiente?: "homologacao" | "producao";
  /**
   * @description Status do Evento.
   * @enum {string}
   */
  status?: "pendente" | "registrado" | "rejeitado" | "erro";
  /** @description Identificação do autor do evento. */
  autor?: DfeAutorEvento;
  /** @description Chave de Acesso do documento vinculado ao evento. */
  chave_acesso?: string;
  /**
   * Format: date-time
   * @description Data e hora do Evento.
   */
  data_evento?: string;
  /** @description Sequencial do evento para o mesmo tipo de evento. */
  numero_sequencial?: number;
  /**
   * Format: date-time
   * @description Data e hora do recebimento do Evento pela SEFAZ.
   */
  data_recebimento?: string;
  /** @description Código do status de registro do Evento. */
  codigo_status?: number;
  /** @description Descrição literal do status do registro do Evento. */
  motivo_status?: string;
  /** @description Número do Protocolo de registro do Evento. */
  numero_protocolo?: string;
  /** @description Código da Mensagem. */
  codigo_mensagem?: number;
  /** @description Mensagem da SEFAZ para o emissor. */
  mensagem?: string;
  tipo_evento?: string;
};
export type DfePedidoInutilizacao = {
  /**
   * @description Identificação do Ambiente.
   * @enum {string}
   */
  ambiente: "homologacao" | "producao";
  /** @description CNPJ do emitente. */
  cnpj: string;
  /** @description Ano de inutilização da numeração. */
  ano: number;
  /** @description Série da NF-e. */
  serie: number;
  /** @description Número da NF-e inicial. */
  numero_inicial: number;
  /** @description Número da NF-e final. */
  numero_final: number;
  /** @description Justificativa do pedido de inutilização. */
  justificativa: string;
};
export type DfeInutilizacao = {
  cnpj?: string;
  ano?: number;
  modelo?: number;
  serie?: number;
  numero_inicial?: number;
  numero_final?: number;
  justificativa?: string;
  /** @description ID único gerado pela Nuvem Fiscal para este evento. */
  id?: string;
  /**
   * @description Identificação do ambiente.
   * @enum {string}
   */
  ambiente?: "homologacao" | "producao";
  /**
   * @description Status do Evento.
   * @enum {string}
   */
  status?: "pendente" | "registrado" | "rejeitado" | "erro";
  /** @description Identificação do autor do evento. */
  autor?: DfeAutorEvento;
  /** @description Chave de Acesso do documento vinculado ao evento. */
  chave_acesso?: string;
  /**
   * Format: date-time
   * @description Data e hora do Evento.
   */
  data_evento?: string;
  /** @description Sequencial do evento para o mesmo tipo de evento. */
  numero_sequencial?: number;
  /**
   * Format: date-time
   * @description Data e hora do recebimento do Evento pela SEFAZ.
   */
  data_recebimento?: string;
  /** @description Código do status de registro do Evento. */
  codigo_status?: number;
  /** @description Descrição literal do status do registro do Evento. */
  motivo_status?: string;
  /** @description Número do Protocolo de registro do Evento. */
  numero_protocolo?: string;
  /** @description Código da Mensagem. */
  codigo_mensagem?: number;
  /** @description Mensagem da SEFAZ para o emissor. */
  mensagem?: string;
  tipo_evento?: string;
};
export type DfeEventoListagem = {
  "@count"?: number;
  data?: DfeEvento[];
};
export type CnpjEmpresa = {
  /** @description Número de inscrição do CNPJ. */
  cnpj?: string;
  /** @description Nome empresarial da pessoa jurídica. */
  razao_social?: string;
  /** @description Corresponde ao nome fantasia. */
  nome_fantasia?: string;
  /**
   * Format: date
   * @description Data de início da atividade.
   */
  data_inicio_atividade?: string;
  /**
   * @description Indicador de matriz/filial:
   * * `true` - É matriz
   * * `false` - É filial
   */
  matriz?: boolean;
  natureza_juridica?: CnpjNaturezaJuridica;
  /** @description Capital social da empresa. */
  capital_social?: number;
  porte?: CnpjPorteEmpresa;
  /**
   * @description O ente federativo responsável é preenchido para os casos de órgãos e
   * entidades do grupo de natureza jurídica 1XXX. Para as demais naturezas,
   * este atributo fica em branco.
   */
  ente_federativo_responsavel?: string;
  situacao_cadastral?: CnpjSituacaoCadastral;
  motivo_situacao_cadastral?: CnpjMotivoSituacaoCadastral;
  /** @description Nome da cidade no exterior. */
  nome_da_cidade_no_exterior?: string;
  pais?: CnpjPais;
  atividade_principal?: CnpjCnae;
  atividades_secundarias?: CnpjCnaeSecundario[];
  endereco?: CnpjEndereco;
  telefones?: CnpjTelefone[];
  /** @description E-mail do contribuinte. */
  email?: string;
  situacao_especial?: CnpjSituacaoEspecial;
  simples?: CnpjOpcaoSimples;
  simei?: CnpjOpcaoSimei;
  socios?: CnpjSocio[];
};
/** @description Natureza jurídica. */
export type CnpjNaturezaJuridica = {
  /** @description Código da natureza jurídica. */
  codigo?: string;
  /** @description Nome da natureza jurídica. */
  descricao?: string;
};
/** @description Porte da empresa. */
export type CnpjPorteEmpresa = {
  /** @description Código do porte da empresa. */
  codigo?: string;
  /** @description Descrição do porte da empresa. */
  descricao?: string;
};
/** @description Situação cadastral. */
export type CnpjSituacaoCadastral = {
  /**
   * Format: date
   * @description Data do evento da situação cadastral.
   */
  data?: string;
  /** @description Código da situação cadastral. */
  codigo?: string;
  /** @description Descrição da situação cadastral. */
  descricao?: string;
};
/** @description Motivo da situação cadastral. */
export type CnpjMotivoSituacaoCadastral = {
  /**
   * Format: date
   * @description Data do evento.
   */
  data?: string;
  /** @description Código do motivo da situação cadastral. */
  codigo?: string;
  /** @description Descrição do motivo da situação cadastral. */
  descricao?: string;
};
/** @description País. */
export type CnpjPais = {
  /** @description Código do país. */
  codigo?: string;
  /** @description Nome do país. */
  descricao?: string;
};
/** @description Atividade econômica principal do estabelecimento. */
export type CnpjCnae = {
  /** @description Código da atividade econômica. */
  codigo?: string;
  /** @description Nome da atividade econômica. */
  descricao?: string;
};
/** @description Atividade econômica secundária do estabelecimento. */
export type CnpjCnaeSecundario = {
  /** @description Código da atividade econômica. */
  codigo?: string;
  /** @description Nome da atividade econômica. */
  descricao?: string;
};
/** @description Endereço do estabelecimento. */
export type CnpjEndereco = {
  /** @description Descrição do tipo de logradouro. */
  tipo_logradouro?: string;
  /** @description Nome do logradouro onde se localiza o estabelecimento. */
  logradouro?: string;
  /**
   * @description Número onde se localiza o estabelecimento. Quando não houver
   * preenchimento do número haverá ‘S/N’.
   */
  numero?: string;
  /** @description Complemento para o endereço de localização do estabelecimento. */
  complemento?: string;
  /** @description Bairro onde se localiza o estabelecimento. */
  bairro?: string;
  /**
   * @description Código de endereçamento postal referente ao logradouro no qual o
   * estabelecimento esta localizado.
   */
  cep?: string;
  /** @description Sigla da unidade da federação em que se encontra o estabelecimento. */
  uf?: string;
  municipio?: CnpjMunicipio;
};
/** @description Município de jurisdição onde se encontra o estabelecimento. */
export type CnpjMunicipio = {
  /** @description Código TOM do município. */
  codigo_tom?: string;
  /** @description Código IBGE do município. */
  codigo_ibge?: string;
  /** @description Nome do município. */
  descricao?: string;
};
/** @description Telefone do estabelecimento. */
export type CnpjTelefone = {
  /** @description Código de DDD (Discagem Direta à Distância) */
  ddd?: string;
  /** @description Número do telefone. */
  numero?: string;
};
/** @description Situação especial da empresa. */
export type CnpjSituacaoEspecial = {
  /**
   * Format: date
   * @description Data em que a empresa entrou em situação especial.
   */
  data?: string;
  /** @description Código da situação especial da empresa. */
  codigo?: string;
  /** @description Descrição da situação especial da empresa. */
  descricao?: string;
};
/** @description Informações da opção do Simples Nacional. */
export type CnpjOpcaoSimples = {
  /**
   * @description Indicador da existência da opção pelo Simples Nacional:
   * * `true` - É optante.
   * * `false` - Não é optante.
   */
  optante?: boolean;
  /**
   * Format: date
   * @description Data da opção pelo Simples Nacional.
   */
  data_opcao?: string;
  /**
   * Format: date
   * @description Data da exclusão do Simples Nacional.
   */
  data_exclusao?: string;
};
/** @description Informações da opção pelo MEI. */
export type CnpjOpcaoSimei = {
  /**
   * @description Indicador da existência da opção pelo MEI:
   * * `true` - É optante.
   * * `false` - Não é optante.
   */
  optante?: boolean;
  /**
   * Format: date
   * @description Data da opção pelo MEI.
   */
  data_opcao?: string;
  /**
   * Format: date
   * @description Data da exclusão do MEI.
   */
  data_exclusao?: string;
};
/** @description Quadro Societário. */
export type CnpjSocio = {
  identificador_socio?: CnpjIdentificadorSocio;
  /**
   * @description Nome do sócio pessoa física ou a razão social e/ou nome empresarial da
   * pessoa jurídica e/ou nome do sócio/razão social do sócio estrangeiro.
   */
  nome?: string;
  /** @description CPF ou CNPJ do sócio (sócio estrangeiro não tem esta informação). */
  cpf_cnpj?: string;
  qualificacao?: CnpjQualificacaoSocio;
  /**
   * Format: date
   * @description Data de entrada na sociedade.
   */
  data_entrada_sociedade?: string;
  pais?: CnpjPais;
  representante_legal?: CnpjRepresentanteLegal;
  faixa_etaria?: CnpjFaixaEtaria;
};
/** @description Identificador de sócio. */
export type CnpjIdentificadorSocio = {
  /** @description Código do identificador do sócio. */
  codigo?: string;
  /** @description Descrição do identificador do sócio. */
  descricao?: string;
};
/** @description Qualificação. */
export type CnpjQualificacaoSocio = {
  /** @description Código da qualificação do sócio. */
  codigo?: string;
  /** @description Nome da qualificação do sócio. */
  descricao?: string;
};
/** @description Representante legal. */
export type CnpjRepresentanteLegal = {
  /** @description Número do cpf do representante legal. */
  cpf?: string;
  /** @description Nome do representante legal. */
  nome?: string;
  /** @description Qualificação do representante legal. */
  qualificacao?: CnpjQualificacaoSocio;
};
/** @description Faixa etária. */
export type CnpjFaixaEtaria = {
  /** @description Código correspondente à faixa etária do sócio. */
  codigo?: string;
  /** @description Descrição correspondente à faixa etária do sócio. */
  descricao?: string;
};
export type CnpjListagem = {
  "@count"?: number;
  data?: CnpjEmpresa[];
};
export type CepEndereco = {
  bairro?: string;
  cep?: string;
  codigo_ibge?: string;
  complemento?: string;
  logradouro?: string;
  municipio?: string;
  tipo_logradouro?: string;
  uf?: string;
};
