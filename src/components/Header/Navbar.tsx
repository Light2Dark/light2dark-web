import React from "react"
import styled from 'styled-components'
import Logo from "./Logo"
import {Nav, Bars, TabMenuStyled, Tab, Li, LinkScroll, LinkScrollContact, Contact} from "./NavbarElements"

interface Props {
    logoName: string

    className?: string
}

const Navbar = ({className, logoName}: Props): JSX.Element => {
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
                        <LinkScroll
                            to="experience"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >experience.</LinkScroll>
                        <Contact>
                            <LinkScrollContact
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >contact.</LinkScrollContact>
                        </Contact>
                    </Li>
                </TabMenuStyled>
                <Bars />
            </Nav>
        </>
    )
}

// const MyComponent = styled(Navbar)`
//     background-color: black;
//     height: 200px;
// `

export default Navbar