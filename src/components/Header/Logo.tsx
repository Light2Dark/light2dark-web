import styled from "styled-components"
import {animateScroll as scroll} from "react-scroll"

type AppProps = {
    logoName: string,
    className?: string
}

const Logo = ({className, logoName}: AppProps): JSX.Element => {
    return (
        <>
            <a href = "#" className={className} onClick={() => {scroll.scrollToTop()}}>{logoName}</a>
        </>
    )
}

const LogoStyled = styled(Logo)`
    color: ${props => props.theme.colors.lightAlmond};
    font-family: "Fredericka";
    margin-left: ${props => props.theme.marginLeft};
    text-decoration: none;
    font-size: 1.8rem;
    font-weight: 500;
`

export default LogoStyled