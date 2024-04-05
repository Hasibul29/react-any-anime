import { Badge } from "@chakra-ui/react";

interface Prop {
  score: number;
}
const ScoreBatch = ({ score }: Prop) => {
  let color = score > 7.5 ? "green" : score > 6 ? "yellow" : "red";
  return (
    <Badge fontSize="14px" paddingX={2} borderRadius="4px" colorScheme={color}>
      {score}
    </Badge>
  );
};

export default ScoreBatch;
