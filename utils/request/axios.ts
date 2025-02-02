import axios, {
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosRequestConfig,
} from "axios";
import type { MarkRequired } from "type-sugar";

export function createAxios(
  config: MarkRequired<AxiosRequestConfig, "baseURL">,
  requestInterceptor?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>,
  responseInterceptor?: (
    response: AxiosResponse
  ) => AxiosResponse | Promise<AxiosResponse>
) {
  const DEFAULT_CONFIG = {
    timeout: 5000,
    withCredentials: true,
  };

  const instance = axios.create({
    ...DEFAULT_CONFIG,
    ...config,
  });

  instance.interceptors.request.use(
    requestInterceptor ? requestInterceptor : (config) => config,
    (error) => Promise.reject(error)
  );

  instance.interceptors.response.use(
    responseInterceptor ? responseInterceptor : (response) => response,
    (error) => Promise.reject(error)
  );

  return instance;
}
