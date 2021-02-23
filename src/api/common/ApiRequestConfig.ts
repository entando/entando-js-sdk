export default interface ApiRequestConfig {
  endpoint?: string;
  serverUrl?: string;
  token?: string;
  customConfig?: Partial<RequestInit>;
  queryParams?: { [key: string]: string };
}
