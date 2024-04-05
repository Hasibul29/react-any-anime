import { Grid, GridItem } from "@chakra-ui/react";
import HeaderBar from "./components/HeaderBar";
import AnimeGrid from "./components/AnimeGrid";

function App() {
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
        <AnimeGrid />
      </GridItem>
      <GridItem bg="blue.300" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
