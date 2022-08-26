export type Movie = {
  id?: number;
  title: string;
  year: string;
  type: string;
  imdbID: string;
  poster: string;
  userId?: number;
};

export type SearchResult = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

export type Filters = {
  userId?: string;
  type?: string;
};

export type QueryParams = {
  filters?: Filters;
  sortBy?: string;
  limit: number;
  skip: number;
  type?: string;
  userId?: string;
};

export type HashedImdb = {
  [key: string]: number;
};
