import styled, { css } from "styled-components"

const sharedStyles = css`
    padding: 4px 6px;
    border-radius: 15px;
    font-size: 1em;
`

export const Heading2 = styled.h2`
    margin: 2px 0px 20px 0;
    font-size: 2.2em;
    font-family: "Fredericka", serif;
    font-weight: normal;
    color: white !important;
    text-align: center;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    * {
        font-family: "Fredericka", "serif";
    }
`

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 3px;
    }
`

export const LeftDiv = styled.div`
    width: 35%;
    margin-right: 15px;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export const RightDiv = styled.div`
    width: 50%;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export const ElemDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`

export const Label = styled.label`
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 1.1em;
`

export const Input = styled.input`
    ${sharedStyles};
    height: 40px;
    width: 100%;
    font-family: "Helvetica Nevue", "serif";

    @media screen and (max-width: 768px) {
        width: 70%;
    }
`

export const Textarea = styled.textarea`
    ${sharedStyles};
    font-family: "Helvetica Nevue", serif;
`

export const CenterDiv = styled.div`
    text-align: center;
    margin-top: 10px;
`

export const Button = styled.button`
    color: white !important;
    background-color: black;
    font-family: "Annie", serif;
    border: none;
    font-size: 1.5em;
    padding: 4px 15px;
    border-radius: 10px;
    margin-bottom: 6px;
    border: 1px solid black;
    transition: all ease 0.2s;

    &:hover {
        border: 1px solid gold;
    }

    &:focus {
        border: 1px solid gold;
    }

`
