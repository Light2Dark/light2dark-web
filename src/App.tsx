import React from 'react';
import GlobalFonts from './assets/fonts/fonts'
import GlobalStyles from './GlobalStyles';
import styled, {ThemeProvider} from 'styled-components';
import theme from "./my-theme"
import Three from "./components/Main/index"

import Navbar from "./components/Header/Navbar"
import {Link, animateScroll as scroll} from "react-scroll"

function App() {
  return (
    <div>
      <GlobalFonts />
      <GlobalStyles />

      <ThemeProvider theme = {theme}>
        <header>
          <Navbar logoName = "sham;" />
        </header>

        <main>
          <Three />
          <section id = "web">Web!!</section>
        </main>

        <footer>

        </footer>
      </ThemeProvider>
      

    </div>
  );
}

export default App;
