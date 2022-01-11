import React, {useState, ReactDOM} from "react"
import styled from "styled-components"
import {LinksDiv, Link, AllLink} from "./ProjectFilter"
import {FlexDiv, TextDiv, Button, Header3, Heading, DivItem, DivStyled, ProjectItem, A, P} from "./ProjectElements"

interface Props {
    id: string;
    projects: ProjectItem[];
}

const TestDiv = styled.div`
    height: 200px;
    background-color: white;
`

const Project = ({id, projects}: Props) => {
    
    const [displayedProjects, setDisplayedProjects] = useState<ProjectItem[]>(projects)
    

    const handleDisplayedProjects = (tag: string) => {
        if (tag === "all") {

            setDisplayedProjects(projects)

        } else {
            const selectedProjects = projects.filter(projects => projects.tag === tag)
            setDisplayedProjects(selectedProjects)
        }
    }

    return (
        <>
            <DivStyled id={id}>
                <Heading>Projects</Heading>
                <LinksDiv>
                    <AllLink onClick={() => handleDisplayedProjects("all")}>All.</AllLink>
                    <Link onClick={() => handleDisplayedProjects("web")}>web.</Link>
                    <Link onClick={() => handleDisplayedProjects("games")}>games.</Link>
                    <Link onClick={() => handleDisplayedProjects("writing")}>writing.</Link>
                    <Link onClick={() => handleDisplayedProjects("other")}>other.</Link>
                </LinksDiv>

                <FlexDiv>
                    {displayedProjects.map(({buttonText, name, link, description, technologies, picture, tag}) => {

                        let pic = require(picture)
                        console.log(pic)

                        return(
                            <DivItem key= {name} buttonText={buttonText} description={description} link={link} technologies={technologies} picture={picture} name={name} tag={tag}>
                                <TextDiv>
                                    <Header3>{name}</Header3>
                                    {/* <h4>{technologies}</h4> */}
                                    <Button><A href={link}>{buttonText}</A></Button>
                                    <P>{description}</P>    
                                </TextDiv>  
                            </DivItem>       
                        )
                    })}
                </FlexDiv>

            <TestDiv>
                <h3>Picture Test</h3>
            </TestDiv>

            </DivStyled>
        </>
    )
}

export default Project