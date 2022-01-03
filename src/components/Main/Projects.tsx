import styled from "styled-components"

const DivStyled = styled.div`
    height: 400px;
    background-color: ${props => props.theme.colors.lightBlue};
    margin: 0 2em 0 2em;
    padding: 20px;
`

const FlexDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const DivItem = styled.div`
    height: 100px;
    width: 50%;
    background-color: pink;
`

const Project = () => {
    return (
        <>
            <DivStyled>
                <ul>
                    <li>web.</li>
                    <li>games.</li>
                    <li>writing.</li>
                    <li>science.</li>
                </ul>

                <FlexDiv>
                    <DivItem />
                    <DivItem style={{backgroundColor: "red"}} />
                    <DivItem style={{backgroundColor: "grey"}} />
                    <DivItem style={{backgroundColor: "blue"}} />
                </FlexDiv>
            </DivStyled>
        </>
    )
}

export default Project