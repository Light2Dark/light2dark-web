import styled from "styled-components"
import {animateScroll as scroll} from "react-scroll"

type AppProps = {
    logoName: string,
    className?: string
}

const Logo = ({className, logoName}: AppProps): JSX.Element => {
    return (
        <>
            <Button className={className} onClick={() => {scroll.scrollToTop()}}>{logoName}</Button>
        </>
    )
}

const Button = styled.button`
    background-color: ${props => props.theme.colors.darkBlue};
    color: white;
    cursor: pointer;
    border: none;
`

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