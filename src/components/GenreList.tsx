import { List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data, error } = useGenres();
  if (error) return null;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.mal_id}>{genre.name}</ListItem>
      ))}
    </List>
  );
};

export default GenreList;
