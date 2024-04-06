import { Box } from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres";
import MultiSelect from "./MultiSelect";

interface Props {
  selectedGenre: (genres: Genres[]) => void;
}

const GenreList = ({ selectedGenre }: Props) => {
  const { data, error } = useGenres();
  if (error) return null;
  return (
    <Box marginLeft={5}>
      <MultiSelect
        title="Genres"
        options={data.map((genre) => genre.name)}
        onChange={(selected) =>
          selectedGenre(data.filter((genre) => selected.includes(genre.name)))
        }
      />
    </Box>
  );
};

export default GenreList;
