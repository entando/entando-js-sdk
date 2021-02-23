import ApiRequestConfig from './ApiRequestConfig';

const JSON_CONTENT_TYPE = 'application/json';

function composeFetchConfig(
  customConfig?: Partial<RequestInit>,
  token?: string
) {
  const baseHeaders = {
    'Content-Type': JSON_CONTENT_TYPE,
  };

  const headers = token
    ? {
        ...baseHeaders,
        Authorization: `Bearer ${token}`,
      }
    : baseHeaders;

  const config = {
    method: 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig?.headers,
    },
  };
  return config;
}

async function fetchJson(url: string, config?: RequestInit) {
  const response = await window.fetch(`${url}`, config);
  const contentType = response.headers.get('content-type');
  const hasJson = contentType && contentType.startsWith(JSON_CONTENT_TYPE);
  if (!response.ok && !hasJson) {
    throw new Error(response.statusText);
  }
  return response.json();
}

export default async function apiRequest(apiRequestConfig: ApiRequestConfig) {
  const {
    endpoint,
    serverUrl,
    token,
    customConfig,
    queryParams,
  } = apiRequestConfig;

  const queryString = queryParams ? `?${new URLSearchParams(queryParams)}` : '';
  const url = `${serverUrl || ''}${endpoint}${queryString}`;

  const config = composeFetchConfig(customConfig, token);
  return fetchJson(url, config);
}
