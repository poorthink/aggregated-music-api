import { createAxios } from "@ama/utils";
import { SPOTIFY } from "~/constants";

export async function request<T = any>(
  module: any,
  options?: {
    baseURL?: string;
    token?: string;
  }
) {
  const config = module;

  const instance = createAxios(
    {
      baseURL: options?.baseURL || SPOTIFY.BASE_URL,
    },
    (config) => {
      if (options && options.token) {
        config.headers.Authorization = `Bearer ${options.token}`;
      }
      return config;
    },
    (response) => response
  );

  try {
    const response = await instance(config);
    return response.data as T;
  } catch (err: any) {
    if (err.name === "AxiosError") {
      return err.response.data as T;
    }
    throw err;
  }
}
