import styled, { keyframes, css } from "styled-components"
import {Link} from "react-scroll"
import {LinkScroll, LinkScrollContact, Contact} from "./NavbarElements"

interface Props {
    isOpen?: boolean;
}

const bounce = keyframes`
    from {
        transform: rotate(0deg);
    }

    20% {
        transform: rotate(-9deg);
    }

    50% {
        transform: rotate(0deg);
    }

    65% {
        transform: rotate(-3deg);
    }

    to {
        transform: rotate(0deg);
    }
` 

const SidebarLink = styled(LinkScroll)`
    margin-bottom: 50px;
    font-size: 1.4rem;
    transform-origin: bottom left;
`

const SidebarContainer = styled.aside<Props>`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: ${props => props.theme.transition};
    top: 0;
    /* right: ${({isOpen}) => (isOpen ? "0px" : "-400px")}; */
    transform: ${({isOpen}) => (isOpen ? "translateX(0vw)" : "translateX(100vw)")};
    right: 0;
    z-index: 9;
    width: min(65vw, 400px);
    height: 100vh;
    outline: 0px;
    background-color: ${props => props.theme.colors.darkBlue};
    box-shadow: -10px 0px 30px -15px black;

    ${SidebarLink} {
        animation: ${({isOpen}) => (isOpen ? css`${bounce} 0.7s linear 0.2s` : "none")};
    }

    ${Contact} {
        div {
            transform-origin: ${({isOpen}) => (isOpen ? "center" : "bottom left")}; // need a 0.2s delay before doing this
            animation: ${({isOpen}) => (isOpen ? css`${bounce} 0.7s linear 0.2s` : "none")};
        }
    }
`

const SidebarLinkContact = styled(LinkScrollContact)`
    font-size: 1.4rem;

    &:hover {
        font-size: 1.4rem;
    }
`

const SidebarMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Sidebar = ({isOpen}: Props) => {
    return (
        <>
            <SidebarContainer isOpen = {isOpen}>
                <SidebarMenu>
                    <SidebarLink
                        activeClass="active"
                        className ="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        projects.
                    </SidebarLink>

                    <SidebarLink
                        to="experience"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        experience.
                    </SidebarLink>

                    <Contact>
                        <div>
                            <SidebarLinkContact 
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                contact.
                            </SidebarLinkContact>
                        </div>
                    </Contact>

                </SidebarMenu>
            </ SidebarContainer>
        </>
    )
}

export default Sidebar