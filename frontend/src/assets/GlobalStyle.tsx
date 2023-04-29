import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    
    input[type="button"], input[type="submit"], a, button {
        cursor: pointer;
    }

    body {
        margin: 0;
        font-family: 'Inter', sans-serif;
    }

    body.dark-mode {
        background-color: #000;
        color: #fff;
    }

`;

export default GlobalStyle;