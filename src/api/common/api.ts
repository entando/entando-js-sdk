import ApiError from './ApiError';
import ApiRequest from './ApiRequest';
import pjson from '../../../package.json';

const JSON_CONTENT_TYPE = 'application/json';

export default async function api(apiRequest: ApiRequest) {
  const { endpoint, serverUrl, token, customConfig, queryParams } = apiRequest;

  if (!endpoint) {
    throw new Error('API endpoint missing!');
  }

  const queryString = queryParams ? `?${new URLSearchParams(queryParams)}` : '';
  const url = `${serverUrl || ''}${endpoint}${queryString}`;

  const config = composeConfig(customConfig, token);
  return fetchJson(url, config);
}

function composeConfig(customConfig?: Partial<RequestInit>, token?: string) {
  const baseHeaders = {
    'Content-Type': JSON_CONTENT_TYPE,
    'User-Agent': `js/${pjson.version}`,
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
  const response = await window.fetch(url, config);
  const contentType = response.headers.get('content-type');
  const hasJson = contentType && contentType.startsWith(JSON_CONTENT_TYPE);
  if (!hasJson) {
    Promise.reject({
      errors: [
        {
          status: response.status,
          message: response.statusText,
        },
      ],
    });
  }
  const jsonResponse = await response.json();
  if (!response.ok) {
    Promise.reject({
      ...jsonResponse,
      errors: jsonResponse.errors.map((apiError: ApiError) => ({
        ...apiError,
        status: response.status,
      })),
    });
  }
  return jsonResponse;
}
