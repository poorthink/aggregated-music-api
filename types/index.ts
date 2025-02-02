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
