import api from '../common/api';

const BASE_ENDPOINT = '/api/plugins/cms/contents/';

export const fetchContentById = async (id: string, apiRequest?: any) => {
  const endpoint = `${BASE_ENDPOINT}${id}`;
  return api({
    endpoint,
    ...apiRequest,
  });
};

export const fetchContents = async (apiRequest?: any) => {
  const endpoint = `${BASE_ENDPOINT}`;
  return api({
    endpoint,
    ...apiRequest,
  });
};
