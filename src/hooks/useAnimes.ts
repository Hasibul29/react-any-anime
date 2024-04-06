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

const useAnimes = () => useData("");

export default useAnimes;
