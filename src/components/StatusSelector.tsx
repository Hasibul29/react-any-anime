import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectStatus: (status: string) => void;
  selectedStatus: string;
}

const StatusSelector = ({ onSelectStatus, selectedStatus }: Props) => {
  const status = [
    { value: "", label: "All" },
    { value: "airing", label: "Airing" },
    { value: "complete", label: "Complete" },
    { value: "upcoming", label: "Upcoming" },
  ];
  const currentSortOrder = status.find(
    (status) => status.value === selectedStatus
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Status: {currentSortOrder?.label ?? "All"}
      </MenuButton>
      <MenuList>
        {status.map((status) => (
          <MenuItem
            onClick={() => onSelectStatus(status.value)}
            key={status.value}
            value={status.value}
          >
            {status.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default StatusSelector;
