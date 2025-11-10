import type { NuvemFiscalClient } from "@alijunior/nuvemfiscal-sdk-node";
import { getNuvemFiscalClient } from "./useNuvemFiscalClient";
import type { EmpresaResult } from "../types";

export function useFiscalEmpresaManager() {
  // === api ===
  let apiClient: NuvemFiscalClient | null = null;
  const getApi = async () => {
    if (!apiClient) {
      apiClient = await getNuvemFiscalClient();
    }
    return apiClient;
  };

  // === CONSULTAR CNPJ ===
  const consultarCnpj = async (cnpj: string): Promise<EmpresaResult | null> => {
    const api = await getApi();

    const cleaned = cnpj.replace(/\D/g, "");
    if (!/^\d{14}$/.test(cleaned)) {
      throw new Error("CNPJ inválido");
    }

    try {
      const resultado = await api.consultarEmpresa({ cpf_cnpj: cleaned });
      console.log("✅ Empresa encontrada na NuvemFiscal:", resultado);
      return resultado;
    } catch (err: any) {
      console.log("🔍 Erro ao consultar NuvemFiscal:", {
        status: err.response?.status,
        message: err.message,
      });
    }

    return null;
  };
}
