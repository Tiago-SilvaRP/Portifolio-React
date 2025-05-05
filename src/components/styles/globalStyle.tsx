import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }

    #root {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
`