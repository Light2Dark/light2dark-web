import React, {useContext, useState, useEffect} from "react"
import styled from "styled-components"
import { SidebarContext } from "../../App"

import Logo from "./Logo"
import {Nav, Bars, TabMenuStyled, Tab, LiMargin, Li, LinkScroll, LinkScrollContact, Contact, BarsDiv} from "./NavbarElements"
import Sidebar from "./Sidebar"
import debounce from "../../utilities/helpers"

interface Props {
    logoName: string
    openSidebar: () => void;
    className?: string
}

const NavStyled = styled(Nav)<{sidebarOpen: boolean}>`
    width: 100%;

    @media screen and (max-width:768px) {
        position: ${props => props.sidebarOpen ? "fixed" : "static"};
    }
`

const Navbar = ({className, logoName, openSidebar}: Props): JSX.Element => {
    const sidebarOpen = useContext(SidebarContext)

    return (
        <>
            <NavStyled sidebarOpen={sidebarOpen}>
                <Logo logoName = {logoName} />
                <TabMenuStyled>
                    <LiMargin>
                        <LinkScroll
                            activeClass=""
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >projects.</LinkScroll>
                    </LiMargin>
                    <LiMargin>
                        <LinkScroll
                            activeClass=""
                            to="stories"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >stories.</LinkScroll>
                    </LiMargin>
                    <Li>
                        <Contact>
                            <div>
                                <LinkScrollContact
                                    activeClass=""
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
                <BarsDiv onClick = {openSidebar}>
                    <Bars isOpen = {sidebarOpen} />
                </BarsDiv>
            </NavStyled>
        </>
    )
}


export default Navbar
export {Sidebar}