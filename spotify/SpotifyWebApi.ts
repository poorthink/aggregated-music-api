import { SPOTIFY } from "./constants";
import * as modules from "./modules";
import { ClientCredentials } from "./types";
import { request } from "./utils/request";

export function isAsyncFunction(target): boolean {
  return (
    typeof target === "function" && target.constructor.name === "AsyncFunction"
  );
}

export class SpotifyWebApi {
  private token: string | undefined;

  constructor(
    private clientId: string,
    private clientSecret: string,
    private redirectUri: string
  ) {
    return new Proxy(this, {
      get(t, p) {
        const original: (...args) => any = t[p];
        if (p in t && isAsyncFunction(original) && !t.token) {
          return async (...args) => {
            await t.initializeToken();
            return original.apply(t, args);
          };
        }
        return original;
      },
    });
  }

  async initializeToken() {
    this.token = (await this.getClientCredentials()).access_token;
  }

  async getClientCredentials() {
    return request<ClientCredentials>(
      modules.getClientCredentials(this.clientId, this.clientSecret),
      {
        baseURL: SPOTIFY.AUTH_URL,
      }
    );
  }
}
