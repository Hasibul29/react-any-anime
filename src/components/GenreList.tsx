import useGenres from "../hooks/useGenres";
import MultiSelect from "./MultiSelect";

const GenreList = () => {
  const { data, error } = useGenres();
  if (error) return null;
  return (
    <MultiSelect
      title="Genres"
      options={data.map((genre) => genre.name)}
      onChange={(selected) =>
        console.log(data.filter((genre) => selected.includes(genre.name)))
      }
    />
  );
};

export default GenreList;
