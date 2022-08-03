import { StyledResult } from "./styles/Result.styled";

interface ResultProps {
  result: string;
}
const Result: React.FC<ResultProps> = ({ result }) => {
  return (
    <StyledResult>
      <span>{result}</span>
    </StyledResult>
  );
};

export default Result;
