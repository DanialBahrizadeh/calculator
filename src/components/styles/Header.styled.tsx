import styled from "styled-components";
import { ThemeProp } from "../../model/Theme";
interface SelectedProps {
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
    column-gap: 25px;
    & > h2 {
      font-size: 0.65rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 12px;
    }
  }
`;

export const Heading = styled.h1`
  font-size: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
`;

const ThemeSwitchWidth = 60;
export const ThemeSwitch = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  font-size: 0.7rem;
  height: 100%;
  width: ${ThemeSwitchWidth}px;
  & > div:first-child {
    display: flex;
    justify-content: space-between;
    padding: 0 8px;
    width: 100%;
    & > span {
      cursor: pointer;
    }
  }
`;

const switchPadding = 4;
export const Switch = styled.div`
  width: 100%;
  height: 45%;
  background-color: ${({ theme }: ThemeProp) => theme.backgroundColor.toggle};
  border-radius: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  padding: ${switchPadding}px 3px;
  position: relative;
  & > span {
    border-radius: 50%;
    background-color: transparent;
    cursor: pointer;
  }
`;

export const Selected = styled.span<SelectedProps>`
  background-color: ${({ theme }: ThemeProp) =>
    theme.keysColor.background.equals}!important;
  position: absolute;
  width: ${(ThemeSwitchWidth - 6) / 3}px;
  height: calc(100% - ${switchPadding}px);
  left: ${({ active }) => (active * ThemeSwitchWidth) / 3 || 3}px;
  top: ${switchPadding / 2}px;
  transition-duration: 300ms;
`;
