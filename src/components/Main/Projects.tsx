import React, {useState} from "react"
import styled from "styled-components"
import {LinksDiv, Link, AllLink} from "./Project/ProjectFilter"

interface Props {
    id: string;
    projects: ProjectItem[];
}

interface ProjectItem {
    name: string;
    description: string;
    technologies: string;
    picture: string;
    buttonText: string;
    link: string;
    tag: string;
}

const DivStyled = styled.div`
    height: 400px;
    background-color: ${props => props.theme.colors.lightBlue};
    margin: ${props => props.theme.margin};
    padding: 40px;
`

const FlexDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const DivItem = styled.div<ProjectItem>`
    height: 100px;
    width: 50%;
    background-color: pink;
    background-image: url(${props => props.picture});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
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
                <LinksDiv>
                    <AllLink onClick={() => handleDisplayedProjects("all")}>All.</AllLink>
                    <Link onClick={() => handleDisplayedProjects("web")}>web.</Link>
                    <Link onClick={() => handleDisplayedProjects("games")}>games.</Link>
                    <Link onClick={() => handleDisplayedProjects("writing")}>writing.</Link>
                    <Link onClick={() => handleDisplayedProjects("other")}>other.</Link>
                </LinksDiv>

                <FlexDiv>
                    {displayedProjects.map(({buttonText, name, link, description, technologies, picture, tag}) => {
                        return(
                            <DivItem key={name} buttonText={buttonText} description={description} link={link} technologies={technologies} picture={picture} name={name} tag={tag}>
                                {name}
                            </DivItem>
                        )
                    })}
                    
                </FlexDiv>
            </DivStyled>
        </>
    )
}

export default Project