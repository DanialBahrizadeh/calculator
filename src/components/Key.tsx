import { useEffect, useRef } from "react";
import { StyledKey } from "./styles/Key.styled";

interface KeyProps {
  value: string;
  setResult: React.Dispatch<React.SetStateAction<string>>;
}

const Key: React.FC<KeyProps> = (props) => {
  const keyRef = useRef<HTMLButtonElement>({} as HTMLButtonElement);
  useEffect(() => {
    const func = (event: KeyboardEvent) => {
      if (event.key == props.value) {
        event.preventDefault();
        keyRef.current.click();
      } else if (event.key === "Enter" && props.value === "=") {
        event.preventDefault();
        keyRef.current.click();
      } else if (event.key === "*" && props.value === "x") {
        event.preventDefault();
        keyRef.current.click();
      } else if (event.key === "Backspace" && props.value === "DEL") {
        event.preventDefault();
        keyRef.current.click();
      }
    };
    window.addEventListener("keydown", func);

    return () => {
      window.removeEventListener("keydown", func);
    };
  }, []);
  const hundleClick = () => {
    props.setResult((prevValue) => {
      const specialChars = ["DEL", "RESET", "="];
      const actionsChars = ["/", "x", "+", "-"];
      const value = props.value;
      if (!specialChars.includes(value) && !actionsChars.includes(value)) {
        if (value === "0" && prevValue === "0") {
          return "0";
        } else if (value === "." && prevValue === "0") {
          return "0.";
        } else if (value !== "0" && prevValue == "0") {
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
          return String(eval(prevValue.replaceAll("x", "*")));
        }
      }
    });
  };

  return (
    <StyledKey ref={keyRef} onClick={hundleClick} value={props.value}>
      {props.value}
    </StyledKey>
  );
};

export default Key;
