import {
  Card,
  CardBody,
  CircularProgress,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useAnimes from "../hooks/useAnimes";

const AnimeCard = () => {
  const { animeList, error, isLoading } = useAnimes();

  if (error) return <p>{error}</p>;
  return (
    <>
      {isLoading && <CircularProgress />}
      {animeList.map((anime) => (
        <>
          <Image src={anime.images.webp.image_url} />
          <Card maxW="sm" key={anime.mal_id}>
            <CardBody>{anime.title}</CardBody>
          </Card>
        </>
      ))}
    </>
  );
};

export default AnimeCard;
