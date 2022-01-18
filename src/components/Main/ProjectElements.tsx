import styled from "styled-components"


export interface ProjectItem {
    name: string;
    description: string;
    technologies: string;
    picture: string;
    buttonText: string;
    link: string;
    tag: string;
}

export const DivStyled = styled.div`
    background-color: ${props => props.theme.colors.lightBlue};
    margin: ${props => props.theme.margin};
    padding: 10px 20px 20px 20px;
    border-radius: ${props => props.theme.borderRadius};

    *{
        font-family: "Annie" !important;
    }
`

export const DivItem = styled.div<ProjectItem>`
    height: 230px;
    width: 50%;
    cursor: pointer;
    background-image: url(${props => props.picture});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media screen and (max-width: 768px) {
        width: 100%;
        height: 200px;
    }
`

export const FlexDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`


export const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%;
    height: 100%;
    opacity: 0;
    transition: backdrop-filter 0.4s ease;
    transition: opacity 0.1s ease;
    color: white;

    button {
        width: fit-content;
        padding: 3px 8px;
        letter-spacing: 2px;
        border-radius: ${props => props.theme.borderRadius};
    }

    &:hover {
        opacity: 1;
        /* backdrop-filter: brightness(0.5) blur(5px); */
        background-color: #00000086;
        backdrop-filter: blur(5px);
    }

    /* &::before {
        backdrop-filter: blur(5px);
    } */
`

export const Heading = styled.h2`
    font-size: 1.6em;
    font-family: "Fredericka" !important;
    font-weight: lighter;
    text-align: center;
    margin: 10px 0;
`

export const Header3 = styled.h3`
    font-size: 1.4em;
    margin-bottom: 15px;
    text-align: center;

    background-color: black;
    padding: 0 5px;
`

export const Button = styled.button`
    font-size: 1em;
    font-weight: bold;
    margin-bottom: 10px;
    transition: all 0.1s ease;

    &:hover {
        box-shadow: 0px 3px 16px -1px rgba(0,0,0,0.52);
        font-size: 1.05em;
    }
`

export const A = styled.a`
    text-decoration: none;
`

export const P = styled.p`
    text-align: center;
    font-size: 1.2em;
`