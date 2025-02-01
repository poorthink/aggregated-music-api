declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    SPOTIFY_CLIENT_ID: string;
    SPOTIFY_CLIENT_SECRET: string;
    SPOTIFY_REDIRECT_URI: string;
  }
}
