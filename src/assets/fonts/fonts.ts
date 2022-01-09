import { createGlobalStyle } from "styled-components";

import AnnieUseYourTelescope from "./AnnieUseYourTelescope.ttf"
import ComforterBrushRegular from "./ComforterBrush-Regular.ttf"
import FrederickaTheGreat from "./FrederickatheGreat-Regular.ttf"

export default createGlobalStyle`
    @font-face {
        font-family: "Annie";
        src: local("Annie"),
        url(${AnnieUseYourTelescope}) format("truetype"); 
    } 
    @font-face {
        font-family: "Brush";
        src: local("Brush"),
        url(${ComforterBrushRegular}) format("truetype");
    }
    @font-face {
        font-family: "Fredericka";
        src: local("Fredericka"),
        url(${FrederickaTheGreat}) format("truetype");
    }
`