import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectType: (Type: string) => void;
  selectedType: string;
}

const TypeSelector = ({ onSelectType, selectedType }: Props) => {
  const Type = [
    { value: "", label: "All" },
    { value: "tv", label: "TV" },
    { value: "movie", label: "Movie" },
    { value: "ova", label: "OVA" },
    { value: "special", label: "Special" },
    { value: "ona", label: "ONA" },
    { value: "music", label: "Music" },
    { value: "cm", label: "CM" },
    { value: "pv", label: "PV" },
    { value: "tv_special", label: "TV Special" },
  ];
  const currentSortOrder = Type.find((Type) => Type.value === selectedType);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Type: {currentSortOrder?.label ?? "All"}
      </MenuButton>
      <MenuList>
        {Type.map((Type) => (
          <MenuItem
            onClick={() => onSelectType(Type.value)}
            key={Type.value}
            value={Type.value}
          >
            {Type.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default TypeSelector;
