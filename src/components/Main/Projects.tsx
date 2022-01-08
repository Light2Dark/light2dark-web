import React, {useState} from "react"
import styled from "styled-components"
import {LinksDiv, Link, AllLink} from "./ProjectFilter"

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
    background-color: ${props => props.theme.colors.lightBlue};
    margin: ${props => props.theme.margin};
    padding: 10px 20px 20px 20px;
    border-radius: ${props => props.theme.borderRadius};

    *{
        font-family: "Annie" !important;
    }
`

const FlexDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const DivItem = styled.div<ProjectItem>`
    height: 100px;
    width: 50%;
    cursor: pointer;
    background-color: pink;
    background-image: url(${props => props.picture});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

const Heading = styled.h2`
    font-size: 1.5em;
    text-align: center;
    margin: 10px 0;
`

const Project = ({id, projects}: Props) => {
    
    const [displayedProjects, setDisplayedProjects] = useState<ProjectItem[]>(projects)
    

    const handleDisplayedProjects = (tag: string) => {
        if (tag === "all") {

            setDisplayedProjects(projects)
            // const divChildren = elem.target.parentNode.children
            // const links: Element[] = Array.from(divChildren)

            // links.forEach((link: Element) => {
            //     console.log(link.className.toggle("active"))
            // })

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
                    {/* <Link onClick={() => handleDisplayedProjects("web")}>web.</Link>
                    <Link onClick={() => handleDisplayedProjects("games")}>games.</Link>
                    <Link onClick={() => handleDisplayedProjects("writing")}>writing.</Link>
                    <Link onClick={() => handleDisplayedProjects("other")}>other.</Link> */}
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