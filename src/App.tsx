import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/global";
import { darkTheme } from "./components/styles/themes";
const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <div>
        <h1>Hello World</h1>
      </div>
    </ThemeProvider>
  );
};

export default App;
