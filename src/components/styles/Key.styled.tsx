import styled from "styled-components";
import Theme from "../../model/Theme";

interface StyledKeyProps {
  value: string;
}
const spesial = [
  { value: "+", gridValue: "plus" },
  { value: "-", gridValue: "minus" },
  { value: "/", gridValue: "slash" },
  { value: ".", gridValue: "dot" },
  { value: "=", gridValue: "equals" },
  { value: 0, gridValue: "zero" },
  { value: 1, gridValue: "one" },
  { value: 2, gridValue: "two" },
  { value: 3, gridValue: "three" },
  { value: 4, gridValue: "four" },
  { value: 5, gridValue: "five" },
  { value: 6, gridValue: "six" },
  { value: 7, gridValue: "seven" },
  { value: 8, gridValue: "eight" },
  { value: 9, gridValue: "nine" },
];

const boxShadowColor = (props: any) => {
  const theme: Theme = props.theme;
  switch (props.value) {
    case "DEL":
    case "RESET":
      return theme.keysColor.shadow.secondary;
    case "=":
      return theme.keysColor.shadow.equals;
    default:
      return theme.keysColor.shadow.main;
  }
};

export const StyledKey = styled.button<StyledKeyProps>`
  grid-area: ${({ value }) => {
    const target = spesial.find((char) => char.value == value);
    return target?.gridValue || value;
  }};
  background-color: ${(props) => {
    const theme: Theme = props.theme;
    switch (props.value) {
      case "DEL":
      case "RESET":
        return theme.keysColor.background.secondary;
      case "=":
        return theme.keysColor.background.equals;
      default:
        return theme.keysColor.background.main;
    }
  }};
  color: ${(props) => {
    const theme: Theme = props.theme;
    switch (props.value) {
      case "DEL":
      case "RESET":
        return "#fff";
      case "=":
        return theme.textColor.equalsKey || "#fff";
      default:
        return theme.textColor.keys;
    }
  }};
  box-shadow: 0 5px 0 0 ${boxShadowColor};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => {
    switch (props.value) {
      case "RESET":
      case "=":
        return "font-size: 1.5rem !important;width: 90%;margin: 0 auto;";
      case "DEL":
        return `
        font-size: 1.5rem !important;
        width: 90px;
        height: 60px;
        margin: 0 auto;
        `;
      default:
        return `
        width: 100px;
        height: 60px;
        margin: 0 auto;
      `;
    }
  }}
  cursor: pointer;
  border: none;
  font-size: inherit;
  font-weight: inherit;
  font-family: inherit;
  transition-duration: 150ms;
  &:active {
    transform: scale(0.9);
    box-shadow: 0 5px 1px -1px ${boxShadowColor};
    background-color: ${(props) => {
      const theme: Theme = props.theme;
      switch (props.value) {
        case "DEL":
        case "RESET":
          return theme.keysColor.activeBackground.secondary;
        case "=":
          return theme.keysColor.activeBackground.equals;
        default:
          return theme.keysColor.activeBackground.main;
      }
    }};
  }
`;
