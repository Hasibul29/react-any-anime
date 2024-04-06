import genres from "../data/genre";

export interface Genres {
  mal_id: number;
  name: string;
}

const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;
