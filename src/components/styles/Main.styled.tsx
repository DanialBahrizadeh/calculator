import styled from "styled-components";
import { ThemeProp } from "../../model/Theme";

export const StyledMain = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-template-areas:
    "seven eight nine DEL"
    "four five six plus"
    "one two three minus"
    "dot zero slash x"
    "RESET RESET equals equals ";
  justify-content: space-evenly;
  background-color: ${({ theme }: ThemeProp) => theme.backgroundColor.keypad};
  /* margin-top: 25px; */
  row-gap: 25px;
  padding: 15px;
  border-radius: 8px;
`;
