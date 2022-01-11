import React, {useState, useEffect} from 'react';
import GlobalFonts from './assets/fonts/fonts'
import GlobalStyles from './GlobalStyles';
import styled, {ThemeProvider} from 'styled-components';
import theme from "./my-theme"

import {Three, Project, Contact, Stories} from "./components/Main/index"
import Navbar, {Sidebar} from "./components/Header/Navbar"
import debounce from './utilities/helpers';
import projects from "./projects.json"
import Footer from './components/Footer/footer';

export const SidebarContext = React.createContext(false)

const MainStyled = styled.main<{blur: boolean}>`
  transition: ${props => props.theme.transition};
  filter: ${props => (props.blur ? "blur(5px) brightness(0.7)" : "")};
  background-color: ${props => props.theme.colors.darkBlue};
`

const HeaderStyled = styled.header<{visible: boolean, sidebarOpen?: boolean}>`
  /* position: sticky; */
  position: ${props => props.sidebarOpen ? "absolute" : "sticky"};
  transition: top 0.4s ease;
  top: ${props => props.visible ? "0px": "-80px"};
  width: 100%;
`

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  function openSidebar() {
    setSidebarOpen(!sidebarOpen)
  }

  // Displaying / Not Displaying Navbar when scrolling
  // https://www.devtwins.com/blog/sticky-navbar-hides-scroll
  // Debounce limits the rate of firing functions
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const handleScroll = debounce(() => {
      const currentScrollPos = window.scrollY // same as pageYOffset
      setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10)

      setPrevScrollPos(currentScrollPos)
  }, 300) // 300 is the pause btwn triggering rerender

  useEffect(() => {
      window.addEventListener("scroll", handleScroll)
      return () => {
          window.removeEventListener("scroll", handleScroll)
      }
  }, [prevScrollPos, visible, handleScroll])

  return (
    <div>
      <GlobalFonts />
      <GlobalStyles />

      <ThemeProvider theme = {theme}>
        <SidebarContext.Provider value = {sidebarOpen}>
          <HeaderStyled visible={visible} sidebarOpen={sidebarOpen}>
            <Navbar logoName = "sham;" openSidebar = {openSidebar}/>
            <Sidebar isOpen = {sidebarOpen} />
          </HeaderStyled>

          <MainStyled blur={sidebarOpen}>
            <Three />
            <Project id= "projects" projects={projects}/>
            <Stories id="stories"/>
            <Contact id = "contact" />
          </MainStyled>

          <footer>
            <Footer />
          </footer>
        </SidebarContext.Provider>
      </ThemeProvider>
      

    </div>
  );
}

export default App;
