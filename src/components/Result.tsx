import { StyledResult } from "./styles/Result.styled";

interface ResultProps {
  result: string;
}
const Result: React.FC<ResultProps> = ({ result }) => {
  const numPretter = (str: string) => {
    const value = str
      .split(/[+ \- x /]/)
      .map((num) => {
        if (num === "") return;
        return Number(num).toLocaleString();
      })
      .filter((r) => r !== undefined);

    const chars = str.match(/[+ \- x /]/g);

    const result = value.map((num, index) => {
      return `${num}${chars && chars[index] ? chars[index] : ""}`;
    });

    return result;
  };
  return (
    <StyledResult>
      <span>{numPretter(result)}</span>
    </StyledResult>
  );
};

export default Result;
