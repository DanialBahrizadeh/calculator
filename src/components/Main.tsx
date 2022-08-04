import Key from "./Key";
import { StyledMain } from "./styles/Main.styled";

interface MainProps {
  setResult: React.Dispatch<React.SetStateAction<string>>;
}
const Main: React.FC<MainProps> = ({ setResult }) => {
  const keys = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ".",
    "/",
    "+",
    "-",
    "x",
    "DEL",
    "RESET",
    "=",
  ];
  const keysElements = keys.map((key, index) => (
    <Key key={index} value={key} setResult={setResult} />
  ));
  return <StyledMain>{keysElements} </StyledMain>;
};

export default Main;
