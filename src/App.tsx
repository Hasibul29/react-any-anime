import { Grid, GridItem } from "@chakra-ui/react";
import HeaderBar from "./components/HeaderBar";

function App() {
  return (
    <Grid
      templateAreas={`"header header"
                      "nav main"
                      "nav footer"`}
      gridTemplateRows={"70px 1fr 30px"}
      gridTemplateColumns={"150px 1fr"}
    >
      <GridItem pl="2" area={"header"}>
        <HeaderBar />
      </GridItem>
      <GridItem pl="2" bg="pink.300" area={"nav"}>
        Nav
      </GridItem>
      <GridItem pl="2" bg="green.300" area={"main"}>
        Main
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
