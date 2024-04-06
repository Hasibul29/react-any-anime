import { Grid, GridItem, Wrap } from "@chakra-ui/react";
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
                      `}
      gridTemplateRows={"70px 1fr"}
      gridTemplateColumns={"1fr"}
    >
      <GridItem area={"header"} paddingY={2}>
        <HeaderBar />
      </GridItem>
      <GridItem area={"main"} marginTop={10}>
        <Wrap marginLeft={5} spacingY={5} spacingX={3}>
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
        </Wrap>

        <AnimeGrid animeQuery={animeQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
