import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Result from "./components/Result";
import Main from "./components/Main";
import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/global";
import {
  darkTheme,
  draculaTheme,
  lightTheme,
} from "./components/styles/themes";
import { ThemesEnum } from "./model/Theme";
const App: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState<ThemesEnum>(
    ThemesEnum.darkMode
  );
  const [result, setResult] = useState<string>("0");
  return (
    <ThemeProvider
      theme={
        activeTheme === ThemesEnum.darkMode
          ? darkTheme
          : activeTheme === ThemesEnum.lightMode
          ? lightTheme
          : draculaTheme
      }
    >
      <GlobalStyles />
      <Container>
        <Header activeTheme={activeTheme} setActiveTheme={setActiveTheme} />
        <Result result={result} />
        <Main setResult={setResult} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
