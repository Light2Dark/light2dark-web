import styled from "styled-components"
import { useContext } from "react"
import Three from "./Three"
import { SidebarContext } from "../../App"

const ThreeJS = (): JSX.Element => {
    return (
        <>
            <Three />
        </>
    )
}

const MainStyled = styled.main<{blur: boolean}>`
    transition: ${props => props.theme.transition};
    filter: ${props => (props.blur ? "blur(5px) brightness(0.7)" : "")};
`

const Main = () => {
    const blur = useContext(SidebarContext)

    return(
        <MainStyled blur={blur}>
            <ThreeJS />
            <section id = "web">Web!!</section>
        </MainStyled>
    )
}

export default Main
