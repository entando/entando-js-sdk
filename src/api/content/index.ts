import apiRequest from '../common/apiRequest';
import ApiRequestConfig from '../common/ApiRequestConfig';

const BASE_ENDPOINT = '/api/plugins/cms/contents/';

export const fetchContentById = async (
  id: string,
  apiRequestConfig?: ApiRequestConfig
) => {
  const endpoint = `${BASE_ENDPOINT}${id}`;
  return apiRequest({
    endpoint,
    ...apiRequestConfig,
  });
};
