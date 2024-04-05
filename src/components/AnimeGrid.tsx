import { CircularProgress, SimpleGrid } from "@chakra-ui/react";
import AnimeCard from "./AnimeCard";
import useAnimes from "../hooks/useAnimes";

const AnimeGrid = () => {
  const { animeList, error, isLoading } = useAnimes();

  if (error) return <p>{error}</p>;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}>
      {isLoading && <CircularProgress />}
      {animeList.map((anime) => (
        <AnimeCard anime={anime} key={anime.mal_id} />
      ))}
    </SimpleGrid>
  );
};

export default AnimeGrid;
