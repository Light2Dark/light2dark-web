import styled from 'styled-components'

interface Props {
    className?: string
    colors?: string
}

const Three = ({className}: Props): JSX.Element => {
    return (
        <>
            <div>
                <h2 className = {className}>Three.js video here, rain falling on white roses?</h2>
            </div>
        </>
    )
}

const ThreeStyled = styled(Three)<Props>`
    height: 200px;
    background-color: black;
    color: ${props => props.theme.colors.almond};
    text-align: center;
`




export default ThreeStyled