export default interface EntandoApiRequest {
  endpoint: string;
  serverUrl?: string;
  token?: string;
  customConfig?: Partial<RequestInit>;
  queryParams?: { [key: string]: string };
}
