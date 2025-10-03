// src/adapters/axios-http-client.ts

import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import type { NuvemFiscalHttpClient } from "../types/nuvem-fiscal-api.httpclient";

/**
 * Implementação Axios do HttpClient usado pelo SDK.
 * - Suporte a JSON (get/post/put/patch/delete)
 * - Suporte a binário (getArrayBuffer/postArrayBuffer) para PDF/XML/etc.
 * - Tratamento de erros com { status, body }
 * - 204 No Content => retorna undefined
 */
export class AxiosHttpClient implements NuvemFiscalHttpClient {
  private client: AxiosInstance;

  /**
   * @param options Você pode passar um accessToken OU um AxiosInstance pronto.
   * Se passar ambos, o AxiosInstance prevalece.
   */
  constructor(options: {
    accessToken?: string;
    axiosInstance?: AxiosInstance;
    baseURL?: string;
    headers?: Record<string, string>;
    timeoutMs?: number;
  }) {
    const {
      accessToken,
      axiosInstance,
      baseURL,
      headers = {},
      timeoutMs = 30_000,
    } = options ?? {};

    this.client =
      axiosInstance ??
      axios.create({
        baseURL,
        timeout: timeoutMs,
        headers: {
          ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
          "Content-Type": "application/json",
          ...headers,
        },
        // Arrays como ?a=1&a=2 (compatível com maioria dos backends)
        paramsSerializer: {
          serialize: (params) => {
            const usp = new URLSearchParams();
            for (const [k, v] of Object.entries(params ?? {})) {
              if (v === undefined || v === null) continue;
              if (Array.isArray(v)) {
                v.forEach((it) => usp.append(k, String(it)));
              } else {
                usp.append(k, String(v));
              }
            }
            return usp.toString();
          },
        },
      });
  }

  // ---------------------- JSON/TEXT ----------------------

  async get<T>(url: string, params?: Record<string, any>): Promise<T> {
    try {
      const res = await this.client.get<T>(url, { params });
      // 204 -> undefined
      return res.status === 204 ? (undefined as unknown as T) : res.data;
    } catch (e: any) {
      throw this.wrapAxiosError(e);
    }
  }

  async post<T>(
    url: string,
    body?: any,
    params?: Record<string, any>
  ): Promise<T> {
    try {
      const res = await this.client.post<T>(url, body, { params });
      return res.status === 204 ? (undefined as unknown as T) : res.data;
    } catch (e: any) {
      throw this.wrapAxiosError(e);
    }
  }

  async put<T>(
    url: string,
    body?: any,
    params?: Record<string, any>
  ): Promise<T> {
    try {
      const res = await this.client.put<T>(url, body, { params });
      return res.status === 204 ? (undefined as unknown as T) : res.data;
    } catch (e: any) {
      throw this.wrapAxiosError(e);
    }
  }

  async patch<T>(
    url: string,
    body?: any,
    params?: Record<string, any>
  ): Promise<T> {
    try {
      const res = await this.client.patch<T>(url, body, { params });
      return res.status === 204 ? (undefined as unknown as T) : res.data;
    } catch (e: any) {
      throw this.wrapAxiosError(e);
    }
  }

  async delete<T>(url: string, params?: Record<string, any>): Promise<T> {
    try {
      const res = await this.client.delete<T>(url, { params });
      return res.status === 204 ? (undefined as unknown as T) : res.data;
    } catch (e: any) {
      throw this.wrapAxiosError(e);
    }
  }

  // ---------------------- BINÁRIO (PDF/XML/etc.) ----------------------

  async getArrayBuffer(
    url: string,
    params?: Record<string, any>
  ): Promise<ArrayBuffer> {
    try {
      const cfg: AxiosRequestConfig = {
        params,
        responseType: "arraybuffer",
        // Não força Accept JSON; deixa o servidor decidir (PDF/XML/…)
      };
      const res = await this.client.get<ArrayBuffer>(url, cfg);
      // Em tese, 204 não faz sentido para binário, mas tratamos por segurança:
      return res.data ?? new ArrayBuffer(0);
    } catch (e: any) {
      throw this.wrapAxiosError(e);
    }
  }

  async postArrayBuffer(
    url: string,
    body?: any,
    params?: Record<string, any>
  ): Promise<ArrayBuffer> {
    try {
      const cfg: AxiosRequestConfig = {
        params,
        responseType: "arraybuffer",
        headers: {
          // se o body não for JSON, ajuste aqui (ex.: multipart/form-data)
          "Content-Type": "application/json",
        },
      };
      const res = await this.client.post<ArrayBuffer>(url, body, cfg);
      return res.data ?? new ArrayBuffer(0);
    } catch (e: any) {
      throw this.wrapAxiosError(e);
    }
  }

  // ---------------------- Helpers ----------------------

  private wrapAxiosError(error: any): Error & { status?: number; body?: any } {
    const status = error?.response?.status ?? error?.status;
    const data = error?.response?.data;

    // tenta extrair mensagem útil
    let message =
      (typeof data === "string" && data) ||
      data?.error_description ||
      data?.error?.message ||
      data?.message ||
      error?.message ||
      "HTTP error";

    // Se data for ArrayBuffer (ex.: servidor respondeu texto com responseType arraybuffer)
    if (data instanceof ArrayBuffer) {
      try {
        const text = Buffer.from(data).toString("utf-8");
        message = message || text;
      } catch {
        /* ignore */
      }
    }

    const err = new Error(`HTTP ${status ?? "?"} - ${message}`) as Error & {
      status?: number;
      body?: any;
    };
    err.status = status;
    err.body = data;
    return err;
  }
}
