import styled from "styled-components"
import { useContext } from "react"
import Three from "./Three"
import { SidebarContext } from "../../App"
import Project from "./Projects"
import Contact from "./Contact"
import projectsData from "../../projects.json"

// const Main = () => {
//     const blur = useContext(SidebarContext)

//     return(
//         <MainStyled blur={blur}>
//             <Three />
//             <Project />
//             <Contact />
//             {/* <div>
//                 <h3>Data</h3>
//                 {projectsData.map(project => {
//                     return(
//                         <>
//                             <p>{project["name"]}</p>
//                             <img src={project["picture"]} alt="Picture" />
//                         </>
//                     )
//                 })}
//             </div> */}
//         </MainStyled>
//     )
// }

export {Three, Project, Contact}
