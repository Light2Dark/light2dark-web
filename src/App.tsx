import React, {useState} from 'react';

import GlobalFonts from './assets/fonts/fonts'
import GlobalStyles from './GlobalStyles';
import styled, {ThemeProvider} from 'styled-components';
import theme from "./my-theme"
import Main from "./components/Main/index"

import Navbar from "./components/Header/Navbar"
import {Link, animateScroll as scroll} from "react-scroll"

export const SidebarContext = React.createContext(false)

function App() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false)

  function openSidebar() {
      setSidebarOpen(!sidebarOpen)
  }
  
  return (
    <div>
      <GlobalFonts />
      <GlobalStyles />

      <ThemeProvider theme = {theme}>
        <SidebarContext.Provider value = {sidebarOpen}>
          <header>
            <Navbar logoName = "sham;" openSidebar = {openSidebar} />
          </header>

          <Main />

          <footer>

          </footer>
        </SidebarContext.Provider>
      </ThemeProvider>
      

    </div>
  );
}

export default App;
