import styled from "styled-components";

export const LinksDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`

export const Link = styled.a`
    cursor: pointer;
    margin: 0 45px;

    &:hover {
        text-decoration: underline;
    }

    &:active {
        background-color: white;
    }

    @media screen and (max-width: 768px) {
        margin: 0 15px;
    }
`

export const AllLink = styled(Link)`
    font-weight: bold;
    text-decoration: underline;
`