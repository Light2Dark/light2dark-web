import React, {useContext, useState, useEffect} from "react"
import styled from "styled-components"
import { SidebarContext } from "../../App"

import Logo from "./Logo"
import {Nav, Bars, TabMenuStyled, Tab, Li, LinkScroll, LinkScrollContact, Contact} from "./NavbarElements"
import Sidebar from "./Sidebar"
import debounce from "../../utilities/helpers"

interface Props {
    logoName: string
    openSidebar: () => void;
    className?: string
}

const NavStyled = styled(Nav)<{visible: boolean}>`
    position: relative;
    top: ${props => props.visible ? "0px": "-70px"};
    transition: top 0.6s ease;
`

const Navbar = ({className, logoName, openSidebar}: Props): JSX.Element => {
    const sidebarOpen = useContext(SidebarContext)
    
    // Displaying / Not Displatying Navbar when scrolling
    // https://www.devtwins.com/blog/sticky-navbar-hides-scroll
    // Debounce limits the rate of firing functions
    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const [visible, setVisible] = useState(true)

    const handleScroll = debounce(() => {
        const currentScrollPos = window.scrollY // same as pageYOffset
        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10)

        setPrevScrollPos(currentScrollPos)
    }, 100)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [prevScrollPos, visible, handleScroll])

    return (
        <>
            <NavStyled visible={visible}>
                <Logo logoName = {logoName} />
                <TabMenuStyled>
                    <Li>
                        <LinkScroll
                            activeClass="active"
                            className ="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >projects.</LinkScroll>
                    </Li>
                    <Li>
                        <LinkScroll
                            to="experience"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >experience.</LinkScroll>
                    </Li>
                    <Li>
                        <Contact>
                            <div>
                                <LinkScrollContact
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >contact.</LinkScrollContact>
                            </div>
                        </Contact>
                    </Li>
                </TabMenuStyled>
                <div onClick = {openSidebar}>
                    <Bars isOpen = {sidebarOpen} />
                </div>
            </NavStyled>
        </>
    )
}


export default Navbar
export {Sidebar}