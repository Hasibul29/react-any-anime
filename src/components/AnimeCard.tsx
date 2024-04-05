import { CircularProgress, List, ListItem } from "@chakra-ui/react";
import useAnimes from "../hooks/useAnimes";

const AnimeCard = () => {
  const { animeList, error, isLoading } = useAnimes();
  console.log(animeList);
  if (error) return <p>{error}</p>;
  return (
    <>
      {isLoading && <CircularProgress />}
      <List>
        {animeList.map((anime) => (
          <ListItem key={anime.mal_id}>{anime.title}</ListItem>
        ))}
      </List>
    </>
  );
};

export default AnimeCard;
