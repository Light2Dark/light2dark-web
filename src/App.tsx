import React from 'react';
import GlobalFonts from './assets/fonts/fonts'
import GlobalStyles from './GlobalStyles';
import {ThemeProvider} from 'styled-components';
import theme from "./my-theme"
import Three from "./components/Header/index"

import Navbar from "./components/Main/Navbar"

function App() {
  return (
    <div>
      <GlobalFonts />
      <GlobalStyles />

      <ThemeProvider theme = {theme}>
        <header>
          <Three />
        </header>

        <main>
          <Navbar logoName = "sham;" />
        </main>

        <footer>

        </footer>
      </ThemeProvider>
      

    </div>
  );
}

export default App;
