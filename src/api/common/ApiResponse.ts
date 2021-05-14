import ApiError from './ApiError';

export default interface ApiResponse {
  payload: any;
  errors: ApiError[];
  meta: any;
}
