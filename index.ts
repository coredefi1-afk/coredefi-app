/**
 * API Layer
 * Configurable scalable service architecture capable of REST, GraphQL, and WebSockets.
 */

export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  status: number;
}

export const ApiClient = {
  get: async <T>(endpoint: string): Promise<ApiResponse<T>> => {
    try {
      const response = await fetch(endpoint, {
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await response.json();
      return { data, error: null, status: response.status };
    } catch (error: any) {
      return { data: null, error: error.message, status: 500 };
    }
  },
  post: async <T>(endpoint: string, body: any): Promise<ApiResponse<T>> => {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      const data = await response.json();
      return { data, error: null, status: response.status };
    } catch (error: any) {
      return { data: null, error: error.message, status: 500 };
    }
  }
};
