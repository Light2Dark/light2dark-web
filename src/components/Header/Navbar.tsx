import React, {useContext} from "react"
import { SidebarContext } from "../../App"

import styled from 'styled-components'
import Logo from "./Logo"
import {Nav, Bars, TabMenuStyled, Tab, Li, LinkScroll, LinkScrollContact, Contact} from "./NavbarElements"
import Sidebar from "./Sidebar"

interface Props {
    logoName: string
    openSidebar: () => void;
    className?: string
}

const Navbar = ({className, logoName, openSidebar}: Props): JSX.Element => {
    // const [sidebarOpen, setSidebarOpen] = React.useState(false)
    const sidebarOpen = useContext(SidebarContext)

    return (
        <>
            <Nav>
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
            </Nav>
            <Sidebar isOpen = {sidebarOpen} />
        </>
    )
}


export default Navbar