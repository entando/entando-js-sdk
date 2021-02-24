export default interface ApiRequest {
  endpoint?: string;
  serverUrl?: string;
  token?: string;
  customConfig?: Partial<RequestInit>;
  queryParams?: { [key: string]: string };
}
