import { Grid, GridItem } from "@chakra-ui/react";
import HeaderBar from "./components/HeaderBar";
import AnimeGrid from "./components/AnimeGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";

export interface AnimeQuery {
  selectedGenres: Genres[] | null;
}

function App() {
  const [anmieQuery, setanimeQuery] = useState<AnimeQuery>({} as AnimeQuery);

  return (
    <Grid
      templateAreas={`"header"
                      "main"
                      "footer"`}
      gridTemplateRows={"70px 1fr 30px"}
      gridTemplateColumns={"1fr"}
    >
      <GridItem area={"header"} paddingY={2}>
        <HeaderBar />
      </GridItem>
      <GridItem area={"main"}>
        <GenreList
          selectedGenre={(selectedGenres) =>
            setanimeQuery({ ...anmieQuery, selectedGenres })
          }
        />
        <AnimeGrid animeQuery={anmieQuery} />
      </GridItem>
      <GridItem bg="blue.300" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
