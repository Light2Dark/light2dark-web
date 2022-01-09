import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: "Fredericka", "Annie", "Brush";
    }

    body {
        background-color: #031D44;
        color: white;
        -webkit-font-smoothing: antialiased;
    }

    #root {
        margin: 0 auto;
    }
`