import styled from "styled-components";

export const LinksDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 0 30px 0;
`

export const Link = styled.a`
    cursor: pointer;
    margin: 0 40px;
    font-size: 1.2em;

    &:hover {
        text-decoration: underline;
        text-decoration-color: #ff0000a7;
    }

    &:active {
        background-color: black;
    }

    @media screen and (max-width: 768px) {
        margin: 0 15px;
    }
`

export const AllLink = styled(Link)`
    font-weight: bold;
    text-decoration: underline;
`