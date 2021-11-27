import React from "react"
import styled from 'styled-components'
import Logo from "./Logo"
import {Nav, Bars} from "./NavbarElements"

interface Props {
    logoName: string

    className?: string
}

const Navbar = ({className, logoName}: Props): JSX.Element => {
    return (
        <>
            <Nav>
                <Logo logoName = {logoName} />
                <Bars />
                {/* <Bars />
                <TabMenu>
                    <Tab className = "active">{logoName}</Tab>
                    <Tab>web.</Tab>
                    <Tab>games.</Tab>
                    <Tab>writing.</Tab>
                    <Tab>contact.</Tab>
                </TabMenu> */}
            </Nav>
        </>
    )
}

// const MyComponent = styled(Navbar)`
//     background-color: black;
//     height: 200px;
// `

export default Navbar