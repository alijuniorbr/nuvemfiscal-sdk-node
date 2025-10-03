// src/types/nuvem-fiscal-api.httpclient.ts

export interface NuvemFiscalHttpClient {
  get<T>(url: string, params?: Record<string, any>): Promise<T>;
  post<T>(url: string, body: any, params?: Record<string, any>): Promise<T>;
  put<T>(url: string, body: any, params?: Record<string, any>): Promise<T>;
  patch<T>(url: string, body?: unknown): Promise<T>;
  delete<T>(url: string, params?: Record<string, any>): Promise<T>;

  getArrayBuffer(
    url: string,
    query?: Record<string, unknown>
  ): Promise<ArrayBuffer>;
  postArrayBuffer(url: string, body?: unknown): Promise<ArrayBuffer>;
}
