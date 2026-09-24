interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}

export async function apiClient<T>(
  endpoint: string,
  options: FetchOptions = {},
): Promise<T> {
  const { headers, ...customConfig } = options;

  const defaultConfig: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    ...customConfig,
  };

  const response = await fetch(
    `${"http://192.168.1.106:8000/api" + endpoint}`,
    defaultConfig,
  );

  // معالجة أخطاء الـ HTTP (مثل 404 أو 500)
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `حدث خطأ: ${response.status}`);
  }

  return response.json();
}
