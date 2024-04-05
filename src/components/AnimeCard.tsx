import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Anime } from "../hooks/useAnimes";

interface Props {
  anime: Anime;
}

const AnimeCard = ({ anime }: Props) => {
  return (
    <>
      <Card>
        <Image
          alt={anime.title}
          objectFit="fill"
          height="350px"
          src={anime.images.webp.image_url}
        />
        <CardBody>
          <Heading fontSize="2xl">{anime.title}</Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default AnimeCard;
