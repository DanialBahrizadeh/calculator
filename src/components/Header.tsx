import React from "react";
import { ThemesEnum } from "../model/Theme";
import {
  Heading,
  StyledHeader,
  ThemeSwitch,
  Switch,
  Selected,
} from "./styles/Header.styled";

interface HeaderProps {
  activeTheme: ThemesEnum;
  setActiveTheme: React.Dispatch<React.SetStateAction<ThemesEnum>>;
}

const Header: React.FC<HeaderProps> = (props) => {
  const toggleTheme = (event: React.MouseEvent<HTMLSpanElement>) => {
    const target: HTMLSpanElement = event.target as HTMLSpanElement;
    const activeTheme = Number(target.getAttribute("data-theme"));
    props.setActiveTheme(activeTheme);
  };

  return (
    <StyledHeader>
      <Heading>calc</Heading>
      <div>
        <h2>THEME</h2>
        <ThemeSwitch>
          <div>
            <span onClick={toggleTheme} data-theme={ThemesEnum.darkMode}>
              1
            </span>
            <span onClick={toggleTheme} data-theme={ThemesEnum.lightMode}>
              2
            </span>
            <span onClick={toggleTheme} data-theme={ThemesEnum.draculaMode}>
              3
            </span>
          </div>
          <Switch>
            <Selected active={props.activeTheme}></Selected>
            <span onClick={toggleTheme} data-theme={ThemesEnum.darkMode}></span>
            <span
              onClick={toggleTheme}
              data-theme={ThemesEnum.lightMode}
            ></span>
            <span
              onClick={toggleTheme}
              data-theme={ThemesEnum.draculaMode}
            ></span>
          </Switch>
        </ThemeSwitch>
      </div>
    </StyledHeader>
  );
};

export default Header;
