import useData from "./useData";

interface Genres {
  mal_id: number;
  name: string;
}

const useGenres = () => useData<Genres>("/genres/anime");

export default useGenres;
