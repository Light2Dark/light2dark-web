import styled from "styled-components"
import { SocialIcon } from "react-social-icons"

// type IconProps = {
//     url: string;
//     bgColor?: string;
//     fgColor?: string;
//     className?: string;
// }

const StyledDiv = styled.div`
    background-color: ${props => props.theme.colors.darkBlue};
    margin: ${props => props.theme.margin};
    display: flex;
    justify-content: center;

    div {
        margin-right: 20px;
    }
`

// const Icon = ({url, bgColor, fgColor, className}: IconProps) => {
//     return(
//         <>
//             <SocialIcon url = {url} bgColor={bgColor} fgColor={fgColor} />
//         </>
//     )
// }

// const IconStyled = styled(Icon)<IconProps>`
//     border: 2px solid black;
//     color: #b6b6b6;
    
//     &:hover {
//         border: 2px solid black;
//     }
// `

const DivItem = styled.div`
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.1)
    }
`

const Footer = () => {
    return (
        <StyledDiv>
            <DivItem>
                <SocialIcon url="https://github.com/Light2Dark" bgColor="black" fgColor="#b6b6b6"/>
            </DivItem>

            <DivItem>
                <SocialIcon url="https://www.instagram.com/shahms.v/"/>
            </DivItem>

            <DivItem>
                <SocialIcon url="https://open.spotify.com/user/12148851158?si=55f59fd923724d66"/>
            </DivItem>

            <DivItem>
                <SocialIcon url="https://www.linkedin.com/in/shahmir-varqha" />
            </DivItem>

        </StyledDiv>
    )
}

export default Footer