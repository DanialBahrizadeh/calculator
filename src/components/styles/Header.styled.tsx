import styled from "styled-components";
import { ThemeProp } from "../../model/Theme";
import { containerWidth } from "./Container.styled";
interface SwitchProps {
  active: number;
}
export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 5vh;
  color: ${({ theme }: ThemeProp) => theme.textColor.top};

  & > div {
    display: flex;
    column-gap: 35px;
    & > h2 {
      font-size: 0.85rem;
      display: flex;
      justify-content: center;
      align-items: end;
      margin-bottom: 9px;
    }
  }
`;

export const Heading = styled.h1`
  font-size: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ThemeSwitch = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  font-size: 0.7rem;
  height: 100%;
  & > div:first-child {
    display: flex;
    justify-content: space-between;
    padding: 0 8px;
    width: ${containerWidth / 11}px;
  }
`;

export const Switch = styled.div<SwitchProps>`
  width: ${containerWidth / 11}px;
  height: 50%;
  background-color: ${({ theme }: ThemeProp) => theme.backgroundColor.toggle};
  border-radius: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 3px;
  & > span {
    border-radius: 50%;
    background-color: transparent;
    cursor: pointer;
  }
  & > span:nth-child(${(props) => props.active}) {
    background-color: ${({ theme }: ThemeProp) =>
      theme.keysColor.background.equals};
  }
`;
