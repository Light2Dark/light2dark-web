import styled from "styled-components"

type AppProps = {
    logoName: string,
    className?: string
}

const Logo = ({className, logoName}: AppProps): JSX.Element => {
    return (
        <>
            <h2 className={className}>{logoName}</h2>
        </>
    )
}

const LogoStyled = styled(Logo)`
    color: ${props => props.theme.colors.lightAlmond};
    font-family: "Annie"
`

export default LogoStyled