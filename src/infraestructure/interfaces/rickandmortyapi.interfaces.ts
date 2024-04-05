export interface EpisodesPaginatedResponse {
  info: EpisodeInfo;
  results: EpisodeResult[];
}

export interface EpisodeInfo {
  count: number;
  pages: number;
  next: string;
  prev: null;
}

export interface EpisodeResult {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface LocationsPaginatedResponse {
  info: LocationInfo;
  results: LocationResult[];
}

export interface LocationInfo {
  count: number;
  pages: number;
  next: string;
  prev: null;
}

export interface LocationResult {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface CharacterResponse {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface Location {
  name: string;
  url: string;
}
