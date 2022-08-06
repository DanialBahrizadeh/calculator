import { createGlobalStyle } from "styled-components";
import { ThemeProp } from "../../model/Theme";

const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'League Spartan', sans-serif;
        font-size: 32px;
        font-weight: 700;
    }

    #root {
        width: 100%;
        height: 100vh;
        background-color: ${({ theme }: ThemeProp) =>
          theme.backgroundColor.screen} ;
          display: flex;
          justify-content: center;
          align-items: center;
    }
`;
export default GlobalStyles;
