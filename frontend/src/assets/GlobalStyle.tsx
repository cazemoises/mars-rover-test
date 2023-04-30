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

    button {
        transition: .2s ease;
    }

    button:hover {
        transform: scale(1.05);
    } 

`;

export default GlobalStyle;