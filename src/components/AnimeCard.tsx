import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { List, ListItem } from "@chakra-ui/react";

interface Anime {
  title: string;
}

interface FetchResponse {
  data: Anime[];
}

const AnimeCard = () => {
  const [animeList, setAnimeList] = useState<Anime[]>([]);

  useEffect(() => {
    apiClient
      .get<FetchResponse>("")
      .then((resp) => setAnimeList(resp.data.data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <List>
      {animeList.map((anime) => (
        <ListItem>{anime.title}</ListItem>
      ))}
    </List>
  );
};

export default AnimeCard;
