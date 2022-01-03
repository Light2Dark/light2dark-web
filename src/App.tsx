import React, {useState} from 'react';
import GlobalFonts from './assets/fonts/fonts'
import GlobalStyles from './GlobalStyles';
import styled, {ThemeProvider} from 'styled-components';
import theme from "./my-theme"

import {Three, Project, Contact} from "./components/Main/index"
import Navbar, {Sidebar} from "./components/Header/Navbar"
export const SidebarContext = React.createContext(false)


const MainStyled = styled.main<{blur: boolean}>`
  transition: ${props => props.theme.transition};
  filter: ${props => (props.blur ? "blur(5px) brightness(0.7)" : "")};
`

const HeaderStyled = styled.header`

`

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  function openSidebar() {
    setSidebarOpen(!sidebarOpen)
  }
  
  return (
    <div>
      <GlobalFonts />
      <GlobalStyles />

      <ThemeProvider theme = {theme}>
        <SidebarContext.Provider value = {sidebarOpen}>
          <HeaderStyled>
            <Navbar logoName = "sham;" openSidebar = {openSidebar} />
            <Sidebar isOpen = {sidebarOpen} />
          </HeaderStyled>

          <MainStyled blur={sidebarOpen}>
            {/* <Three /> */}
            <Project />
            <Contact />
          </MainStyled>

          <footer>

          </footer>
        </SidebarContext.Provider>
      </ThemeProvider>
      

    </div>
  );
}

export default App;
