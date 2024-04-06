import { Grid, GridItem, HStack } from "@chakra-ui/react";
import HeaderBar from "./components/HeaderBar";
import AnimeGrid from "./components/AnimeGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";
import StatusSelector from "./components/StatusSelector";
import TypeSelector from "./components/TypeSelector";
import SearchInput from "./components/SeachInput";

export interface AnimeQuery {
  selectedGenres: Genres[] | null;
  status: string;
  type: string;
  q: string;
}

function App() {
  const [animeQuery, setAnimeQuery] = useState<AnimeQuery>({} as AnimeQuery);

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
      <GridItem area={"main"} marginTop={10}>
        <HStack>
          <GenreList
            selectedGenre={(selectedGenres) =>
              setAnimeQuery({ ...animeQuery, selectedGenres })
            }
          />
          <StatusSelector
            selectedStatus={animeQuery.status}
            onSelectStatus={(status) =>
              setAnimeQuery({ ...animeQuery, status })
            }
          />
          <TypeSelector
            selectedType={animeQuery.type}
            onSelectType={(type) => setAnimeQuery({ ...animeQuery, type })}
          />
          <SearchInput onSearch={(q) => setAnimeQuery({ ...animeQuery, q })} />
        </HStack>

        <AnimeGrid animeQuery={animeQuery} />
      </GridItem>
      <GridItem bg="blue.300" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
