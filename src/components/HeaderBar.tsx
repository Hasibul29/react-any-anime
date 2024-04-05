import { Heading, Image, HStack } from "@chakra-ui/react";
import logo from "../assets/Logo.webp";
const HeaderBar = () => {
  return (
    <HStack>
      <Image
        bg="white"
        borderRadius={30}
        padding={1}
        src={logo}
        boxSize="60px"
      />
      <Heading as="h2" size="2xl">
        ANY ANIME
      </Heading>
    </HStack>
  );
};

export default HeaderBar;
