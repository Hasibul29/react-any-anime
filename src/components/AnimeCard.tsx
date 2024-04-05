import {
  Box,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Anime } from "../hooks/useAnimes";
import ScoreBatch from "./ScoreBatch";

interface Props {
  anime: Anime;
}

const AnimeCard = ({ anime }: Props) => {
  return (
    <>
      <Card>
        <Box position="relative">
          <Image
            w="100%"
            alt={anime.title}
            objectFit="fill"
            height="350px"
            src={anime.images.webp.image_url}
          />
          <Text
            position="absolute"
            bottom="0"
            right="0"
            bg="rgba(0, 0, 0, 0.5)"
            p="10px"
            textAlign="center"
          >
            Ep : {anime.episodes}
          </Text>
        </Box>

        <CardBody>
          <Heading fontSize="xl" mb={2}>
            {anime.title}
          </Heading>
          <HStack justifyContent="space-between">
            <Text fontWeight="bold" mb={2}>
              Rank: #{anime.rank}
            </Text>
            <ScoreBatch score={anime.score} />
          </HStack>
          <Text mb={2}>{anime.rating}</Text>
        </CardBody>
      </Card>
    </>
  );
};

export default AnimeCard;
