export interface IMovies {
  adult?: null | boolean;
  backdrop_path?: null | string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  belongs_to_collection?: any;
  budget?: null | number;
  genres?: null | Genre[];
  homepage?: null | string;
  id?: null | number;
  imdb_id?: null | string;
  original_language?: null | string;
  original_title?: null | string;
  overview?: null | string;
  popularity?: null | number;
  poster_path?: null | string;
  production_companies?: null | ProductionCompany[];
  production_countries?: null | ProductionCountry[];
  release_date?: null | Date;
  revenue?: null | number;
  runtime?: null | number;
  spoken_languages?: null | SpokenLanguage[];
  status?: null | string;
  tagline?: null | string;
  title?: null | string;
  video?: null | boolean;
  vote_average?: null | number;
  vote_count?: null | number;
}

export interface Genre {
  id?: null | number;
  name?: null | string;
}

export interface ProductionCompany {
  id?: null | number;
  logo_path?: null | string;
  name?: null | string;
  origin_country?: null | string;
}

export interface ProductionCountry {
  iso_3166_1?: null | string;
  name?: null | string;
}

export interface SpokenLanguage {
  english_name?: null | string;
  iso_639_1?: null | string;
  name?: null | string;
}
