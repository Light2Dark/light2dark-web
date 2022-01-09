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
    font-family: "Brush";
    text-decoration: none;
    font-size: 2.7rem;
    font-weight: 500;

    &:hover {
        font-weight: bold;
    }

    @media screen and (max-width: 968px) {
        margin-left: ${props => props.theme.marginLeft};
    }
`

export default LogoStyled