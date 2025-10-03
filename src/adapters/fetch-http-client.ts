import { NuvemFiscalHttpClient } from "../types/nuvem-fiscal-api.httpclient";

export type FetchHttpClientInit = {
  headers?: Record<string, string>;
  /** Converte objetos em querystring. Substitua se quiser outra semântica. */
  toQueryString?: (q: Record<string, unknown>) => string;
};

export class FetchHttpClient implements NuvemFiscalHttpClient {
  constructor(private init: FetchHttpClientInit = {}) {}

  private qs(q?: Record<string, unknown>) {
    if (!q || Object.keys(q).length === 0) return "";
    const toQueryString =
      this.init.toQueryString ??
      ((obj: Record<string, unknown>) =>
        new URLSearchParams(
          Object.entries(obj).reduce<Record<string, string>>((acc, [k, v]) => {
            if (v === undefined || v === null) return acc;
            acc[k] = Array.isArray(v) ? v.join(",") : String(v);
            return acc;
          }, {})
        ).toString());

    const query = toQueryString(q);
    return query ? `?${query}` : "";
  }

  async get<T>(url: string, query?: Record<string, unknown>): Promise<T> {
    const res = await fetch(`${url}${this.qs(query)}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        ...(this.init.headers ?? {}),
      },
    });
    if (!res.ok) throw await this.error(res);
    return await this.json<T>(res);
  }

  async post<T>(url: string, body?: unknown): Promise<T> {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(this.init.headers ?? {}),
      },
      body: body === undefined ? undefined : JSON.stringify(body),
    });
    if (!res.ok) throw await this.error(res);
    return await this.json<T>(res);
  }

  async put<T>(url: string, body?: unknown): Promise<T> {
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(this.init.headers ?? {}),
      },
      body: body === undefined ? undefined : JSON.stringify(body),
    });
    if (!res.ok) throw await this.error(res);
    return await this.json<T>(res);
  }

  async patch<T>(url: string, body?: unknown): Promise<T> {
    const res = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(this.init.headers ?? {}),
      },
      body: body === undefined ? undefined : JSON.stringify(body),
    });
    if (!res.ok) throw await this.error(res);
    return await this.json<T>(res);
  }

  async delete<T>(url: string): Promise<T> {
    const res = await fetch(url, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        ...(this.init.headers ?? {}),
      },
    });
    if (!res.ok) throw await this.error(res);
    return await this.json<T>(res);
  }

  async getArrayBuffer(
    url: string,
    query?: Record<string, unknown>
  ): Promise<ArrayBuffer> {
    const res = await fetch(`${url}${this.qs(query)}`, {
      method: "GET",
      headers: { ...(this.init.headers ?? {}) }, // não force Accept pra permitir PDF/XML
    });
    if (!res.ok) throw await this.error(res);
    return await res.arrayBuffer();
  }

  async postArrayBuffer(url: string, body?: unknown): Promise<ArrayBuffer> {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(this.init.headers ?? {}),
      },
      body: body === undefined ? undefined : JSON.stringify(body),
    });
    if (!res.ok) throw await this.error(res);
    return await res.arrayBuffer();
  }

  private async json<T>(res: Response): Promise<T> {
    const text = await res.text();
    if (!text) return undefined as unknown as T; // lida com 204/empty
    try {
      return JSON.parse(text) as T;
    } catch {
      // quando a API retorna texto plano com content-type incorreto
      return text as unknown as T;
    }
  }

  private async error(res: Response) {
    const text = await res.text().catch(() => "");
    let data: any = undefined;
    try {
      data = text ? JSON.parse(text) : undefined;
    } catch {
      /* ignore */
    }
    const err = new Error(
      `HTTP ${res.status} ${res.statusText}${text ? ` - ${text}` : ""}`
    ) as Error & { status?: number; body?: any };
    err.status = res.status;
    err.body = data ?? text;
    return err;
  }
}
