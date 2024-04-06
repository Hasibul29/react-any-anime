import { useState } from "react";
import {
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  Button,
  Flex,
  Divider,
  Badge,
  Icon,
} from "@chakra-ui/react";

import { AiFillCaretDown, AiFillFunnelPlot } from "react-icons/ai";

interface Props {
  title: string;
  options: string[];
  onChange: (selected: string[]) => void;
}

const MultiSelect = ({ title, options, onChange }: Props) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionSelect = (selected: string | string[]) => {
    const list = Array.isArray(selected)
      ? selected
      : [...selectedOptions, selected];

    setSelectedOptions(list);
    onChange(list);
  };

  const handleClear = () => {
    setSelectedOptions([]);
    onChange([]);
  };

  return (
    <Flex direction={"column"}>
      <Flex gap="4" align={"center"}>
        <Menu closeOnSelect={false}>
          <MenuButton
            as={Button}
            colorScheme="blue"
            variant={"outline"}
            rightIcon={<Icon as={AiFillCaretDown} />}
            maxW={"2xs"}
          >
            <Flex align="center" gap="2">
              <Text noOfLines={1}>{title}</Text>

              <Badge bg="blue.600" color="white">
                {selectedOptions.length}
              </Badge>
            </Flex>
          </MenuButton>
          <MenuList
            minWidth="xs"
            maxW={"sm"}
            maxHeight="500px"
            overflowY="scroll"
          >
            <MenuOptionGroup
              value={selectedOptions}
              onChange={handleOptionSelect}
              type="checkbox"
            >
              <Flex direction={"column"} gap="2" px="4" py="2">
                <Flex justify={"space-between"} align="center">
                  <Flex gap="2" align={"center"}>
                    <Icon as={AiFillFunnelPlot} />
                    <Text size="md" noOfLines={1} fontWeight={"medium"}>
                      {title}
                    </Text>
                  </Flex>
                  <Flex flexShrink={0} gap="2">
                    <Button
                      size="xs"
                      variant="link"
                      colorScheme="blue"
                      onClick={() => handleOptionSelect(options)}
                    >
                      Select All
                    </Button>

                    <Button
                      size="xs"
                      variant="link"
                      colorScheme="blue"
                      onClick={handleClear}
                    >
                      Clear
                    </Button>
                  </Flex>
                </Flex>
              </Flex>

              <Divider />

              {options.map((option) => (
                <MenuItemOption
                  key={option}
                  value={option}
                  transition={"background 0.3s ease"}
                >
                  {option}
                </MenuItemOption>
              ))}
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default MultiSelect;
