import api from '../common/api';
import ApiRequest from '../common/ApiRequest';

const BASE_ENDPOINT = '/api/plugins/cms/contents/';

export const fetchContentById = async (id: string, apiRequest?: ApiRequest) => {
  const endpoint = `${BASE_ENDPOINT}${id}`;
  return api({
    endpoint,
    ...apiRequest,
  });
};

export const fetchContents = async (apiRequest?: ApiRequest) => {
  const endpoint = `${BASE_ENDPOINT}`;
  return api({
    endpoint,
    ...apiRequest,
  });
};
