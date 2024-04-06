import { CircularProgress, SimpleGrid } from "@chakra-ui/react";
import AnimeCard from "./AnimeCard";
import useAnimes from "../hooks/useAnimes";

const AnimeGrid = () => {
  const { data, error, isLoading } = useAnimes();

  if (error) return <p>{error}</p>;

  return (
    <SimpleGrid
      columns={{ sm: 2, md: 3, lg: 4, xl: 5 }}
      spacing={5}
      padding={5}
    >
      {isLoading && <CircularProgress />}
      {data.map((anime) => (
        <AnimeCard anime={anime} key={anime.mal_id} />
      ))}
    </SimpleGrid>
  );
};

export default AnimeGrid;
