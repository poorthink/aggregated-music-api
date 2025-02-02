export type ModuleMethod = "get" | "post" | "put" | "delete";

export interface ModuleParams {
  [key: string]: any;
}
export interface ModuleData {
  [key: string]: any;
}
export interface ModuleHeaders {
  "Content-Type"?:
    | "application/json"
    | "application/x-www-form-urlencoded"
    | "application/x-www-form-urlencoded;charset=UTF-8";
  Authorization?: string;
  [key: string]: any;
}
export interface Module {
  method: ModuleMethod;
  url: string;
  params?: ModuleParams;
  data?: ModuleData;
  headers?: ModuleHeaders;
}
export interface SimplifiedArtist {
  id: string;
  name: string;
  avatar: string;
}

export interface SimplifiedAlbum {
  id: string;
  name: string;
  cover: string;
}

export interface SimplifiedTrack {
  id: string;
  name: string;
  artists: SimplifiedArtist[];
  album: SimplifiedAlbum;
}

export interface Track extends SimplifiedTrack {
  duration: number;
  url: string;
  canListen: boolean;
  isPremium: boolean;
}

export interface SimplifiedPlaylist {
  id: string;
  name: string;
  description: string;
  cover: string;
  trackCount: number;
  subscribedCount: number;
}

export interface Playlist extends SimplifiedPlaylist {
  tracks: Track[];
}

export interface SimplifiedProfile {
  id: string;
  name: string;
  avatar: string;
}
