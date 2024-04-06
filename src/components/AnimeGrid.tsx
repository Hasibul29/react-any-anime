import { SimpleGrid } from "@chakra-ui/react";
import AnimeCard from "./AnimeCard";
import useAnimes from "../hooks/useAnimes";
import { AnimeQuery } from "../App";
import AnimeCardSkeleton from "./AnimeCardSkeleton";
interface Props {
  animeQuery: AnimeQuery;
}

const AnimeGrid = ({ animeQuery }: Props) => {
  const { data, error, isLoading } = useAnimes(animeQuery);
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];
  if (error) return <p>{error}</p>;

  return (
    <SimpleGrid
      columns={{ sm: 2, md: 3, lg: 4, xl: 5 }}
      spacing={5}
      padding={5}
    >
      {isLoading &&
        skeletons.map((skeleton) => <AnimeCardSkeleton key={skeleton} />)}
      {!isLoading &&
        data.map((anime) => <AnimeCard anime={anime} key={anime.mal_id} />)}
    </SimpleGrid>
  );
};

export default AnimeGrid;
