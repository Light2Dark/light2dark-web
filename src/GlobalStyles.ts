import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: "Annie", "Fredericka", "Brush";
    }

    body {
        background-color: black;
        color: white;
    }

    #root {
        margin: 0 auto;
    }
`