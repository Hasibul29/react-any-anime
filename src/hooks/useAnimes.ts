import { AnimeQuery } from "../App";
import useData from "./useData";

export interface Anime {
  mal_id: number;
  title: string;
  images: {
    webp: {
      image_url: string;
    };
  };
  score: number;
  episodes: number;
  rank: number;
  rating: string;
}

const useAnimes = (animeQuery: AnimeQuery) =>
  useData<Anime>(
    "/anime",
    {
      params: {
        genres: animeQuery.selectedGenres
          ?.map((genre) => genre.mal_id)
          .join(","),
        status: animeQuery.status,
        type: animeQuery.type,
      },
    },
    [animeQuery]
  );

export default useAnimes;
