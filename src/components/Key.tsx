import { StyledKey } from "./styles/Key.styled";

interface KeyProps {
  value: string;
}

const Key: React.FC<KeyProps> = (props) => {
  return <StyledKey value={props.value}>{props.value}</StyledKey>;
};

export default Key;
