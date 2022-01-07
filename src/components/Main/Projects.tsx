import styled from "styled-components"

interface Props {
    id: string;
    projects: object;
}

type ProjectItemProps = {
    projects: object;
}

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

const ProjectItem = (projects: ProjectItemProps) => {
    
    // Object.entries(projects).map(project => {
    //     console.log(project);
    // })

    return(
        <DivItem>

        </DivItem>
    )
}

const Project = (props: Props) => {

    return (
        <>
            <DivStyled id={props.id}>
                <ul>
                    <li>web.</li>
                    <li>games.</li>
                    <li>writing.</li>
                    <li>science.</li>
                </ul>

                <FlexDiv>
                    <ProjectItem projects={props.projects} />
                    <DivItem style={{backgroundColor: "red"}} />
                    <DivItem style={{backgroundColor: "grey"}} />
                    <DivItem style={{backgroundColor: "blue"}} />
                </FlexDiv>
            </DivStyled>
        </>
    )
}

export default Project