import performApiRequest from '../common/performApiRequest';
import ApiRequestObject from '../common/ApiRequest';

const BASE_ENDPOINT = '/api/plugins/cms/contents/';

export const fetchContentById = async (
  id: string,
  apiRequestConfig?: ApiRequestObject
) => {
  const endpoint = `${BASE_ENDPOINT}${id}`;
  return performApiRequest({
    endpoint,
    ...apiRequestConfig,
  });
};

export const fetchContents = async (apiRequestConfig?: ApiRequestObject) => {
  const endpoint = `${BASE_ENDPOINT}`;
  return performApiRequest({
    endpoint,
    ...apiRequestConfig,
  });
};
