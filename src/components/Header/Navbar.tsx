import React from "react"
import { NavLink } from "react-router-dom"
import styled from 'styled-components'
import Logo from "./Logo"

interface Props {
    text?: string

    className?: string
}

const Navbar = ({className}: Props): JSX.Element => {
    return (
        <>
            <Logo />
            <Nav>
                <NavLink to ="/">
                    <h1>sham;</h1>
                </NavLink>
            <Bars />
                <NavMenu>
                    <NavLink to ="/all" activeStyle>all.</NavLink>
                    <NavLink to ="/web">web.</NavLink>
                    <NavLink to ="/games">games.</NavLink>
                    <NavLink to ="/writing">writing.</NavLink>
                    <NavLink to ="/contact">contact.</NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to = "/signin"
                </NavBtn>
            </Nav>
        </>
    )
}

const MyComponent = styled(Navbar)`
    color: red;
`

export default MyComponent