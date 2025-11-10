export interface EmpresaResult {
  cpf_cnpj: string;
  nome_razao_social: string;
  nome_fantasia?: string;
  inscricao_estadual?: string;
  inscricao_municipal?: string;
  cnae?: string;
  regime_tributario?: string;
  email: string;
  fone?: string;
  endereco: {
    logradouro: string;
    numero: string;
    complemento?: string;
    bairro: string;
    codigo_municipio: string;
    cidade?: string;
    uf: string;
    codigo_pais?: string;
    pais?: string;
    cep: string;
  };
}
