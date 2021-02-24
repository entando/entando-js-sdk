export default interface ApiResponse {
  payload: any;
  errors: [{ code?: string; status?: number; message: string }];
  meta: any;
}
