import { Card, CardBody, Image } from "@chakra-ui/react";
import { Anime } from "../hooks/useAnimes";

interface Props {
  anime: Anime;
}

const AnimeCard = ({ anime }: Props) => {
  return (
    <>
      <Card maxW="sm">
        <Image src={anime.images.webp.image_url} />
        <CardBody>{anime.title}</CardBody>
      </Card>
    </>
  );
};

export default AnimeCard;
