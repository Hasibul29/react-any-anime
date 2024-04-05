import { Grid, GridItem, Show } from "@chakra-ui/react";
import HeaderBar from "./components/HeaderBar";
import AnimeGrid from "./components/AnimeGrid";

function App() {
  return (
    <Grid
      templateAreas={`"header header"
                      "nav main"
                      "nav footer"`}
      gridTemplateRows={"70px 1fr 30px"}
      gridTemplateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area={"header"}>
        <HeaderBar />
      </GridItem>
      <Show above="lg">
        <GridItem bg="pink.300" area={"nav"}>
          Nav
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <AnimeGrid />
      </GridItem>
      <GridItem bg="blue.300" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
