import { createGlobalStyle } from "styled-components";
import { ThemeProp } from "../../model/Theme";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@700&display=swap');

    body {
        font-family: ${({ theme }: ThemeProp) => theme.font.family};
        font-size: ${({ theme }: ThemeProp) => theme.font.size};
        font-weight: ${({ theme }: ThemeProp) => theme.font.weight};
    }

`;
export default GlobalStyles;
