import { StyledKey } from "./styles/Key.styled";

interface KeyProps {
  value: string;
  setResult: React.Dispatch<React.SetStateAction<string>>;
}

const Key: React.FC<KeyProps> = (props) => {
  const hundleClick = () => {
    props.setResult((prevValue) => {
      const specialChars = ["DEL", "RESET", "="];
      const actionsChars = ["/", "x", "+", "-"];
      const value = props.value;
      if (!specialChars.includes(value) && !actionsChars.includes(value)) {
        if (value === "0" && prevValue === "0") {
          return "0";
        } else if (value !== "0" && prevValue === "0") {
          return value;
        } else {
          return `${prevValue}${value}`;
        }
      } else if (actionsChars.includes(value)) {
        return actionsChars.includes(prevValue[prevValue.length - 1])
          ? prevValue
          : `${prevValue}${value}`;
      } else {
        if (value === "RESET") {
          return "0";
        } else if (value === "DEL") {
          return prevValue.slice(0, -1);
        } else {
          return String(eval(prevValue));
        }
      }
    });
  };

  /**

  const str = "12345+123456/1234567x55555";
    const value = str.split(/\D/g).map(item => item.split("").reverse().map((num,index) => {
      if(index !== 0 && index % 3 === 0 && index !== str.length) {
        return `${num},`;
      }
      return num;
    }).reverse().join("")).join("^")

    console.log(value)

  const chars = str.split(/\d+/).filter(char => char !== "")
  let result= "";
  let index = 0;
  for(let i = 0; i < value.length; i++) {
    if(value[i] === "^") {
      result += chars[index]
      index++
    } else result += value[i]
  }
  console.log(result)
   */

  return (
    <StyledKey onClick={hundleClick} value={props.value}>
      {props.value}
    </StyledKey>
  );
};

export default Key;
