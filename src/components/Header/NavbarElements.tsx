import styled, { keyframes, css } from "styled-components";
import {Link, animateScroll as scroll} from "react-scroll"

interface Props {
    className?: string;
    isOpen?: boolean;
}

type TabProps = {
    link: string;
    tabName: string;
}

/* Animation Bars */
const middleBarAnimation = keyframes`
    from {
        transform: translateX(0) rotate(0);
    }

    50% {
        transform: translateX(-180px) rotate(-180deg);
    }

    to {
        transform: translateX(0) rotate(-585deg);
    }
`

const topBarAnimation = keyframes`
    from {
        transform: translateX(0) translateY(0) rotate(0);
    }

    50% {
        transform: translateX(-90px) translateY(4px) rotate(90deg);
    }

    to {
        transform: translateX(0px) translateY(9px) rotate(225deg);
    }
`

const lastBarAnimation = keyframes`
    from {
        transform: translateX(0) rotate(0);
        opacity: 100%;
    }

    80% {
        opacity: 50%;
    }

    to {
        transform: translateX(-500px) rotate(-720deg);
        opacity: 0;
    }
`

const Bar = styled.div<{isOpen? : boolean}>`
    width: 38px;
    height: 3.5px;
    background-color: ${props => props.theme.colors.lightAlmond};
    margin-bottom: 5px;
    border-radius: 4px;

    transition: all ease 1s;
    transform: ${props => (props.isOpen ? "translateX(0px) translateY(9px) rotate(225deg)" : "")};

    animation: ${props => (props.isOpen ? css`${topBarAnimation} 0.8s ease 0s` : "")};
`

const MiddleBar = styled(Bar)`
    animation: ${props => (props.isOpen ? css`${middleBarAnimation} 0.8s ease 0s` : "")};

    transform: ${props => (props.isOpen ? "rotate(-585deg)" : "")};
`

const LastBar = styled(Bar)`
    width: 28px;
    float: right;

    animation: ${props => (props.isOpen ? css`${lastBarAnimation} 1s ease-out 0s` : "")};

    transition: all ease 0.5s;
    transform: ${props => (props.isOpen ? "translateX(-400px)" : "")};
    opacity: ${props => (props.isOpen ? "0" : "100%")};
`

const AllBars = ({className, isOpen}: Props) : JSX.Element => {    
    return (
        <div className={className}>
            <Bar isOpen={isOpen}></Bar>
            <MiddleBar isOpen = {isOpen}></MiddleBar>
            <LastBar isOpen={isOpen}></LastBar>
        </div>
    )
}

export const Bars = styled(AllBars)<Props>`
    display: none;
    &:hover {
        cursor: pointer;
    }

    @media screen and (max-width:768px) {
        display: block;
    }
`

export const BarsDiv = styled.div`
    margin-right: ${props => props.theme.marginRight};
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    background: ${props => props.theme.colors.darkBlue};
    height: 80px;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    position: sticky;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
        justify-content: space-between
    }
`

export const TabMenuStyled = styled.ul<Props>`
    display: flex;
    flex-direction: row;
    list-style: none;
    margin-left: auto;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const Li = styled.li`
    font-size: 1.2em;
`

export const LiMargin = styled(Li)`
    margin-right: 20%;
`

export const LinkScroll = styled(Link)`
    color: white;
    cursor: pointer;
    transition: background-color 0.2s ease !important;

    &.active {
        /* border-bottom: 2px solid white;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px; */

        background-color: ${props => props.theme.colors.darkRed};
    }

    &:hover {
        background-color: ${props => props.theme.colors.darkRed};
    }
`

export const LinkScrollContact = styled(LinkScroll)`
    /* color: red; */
    transition: ${props => props.theme.transition2};
    font-weight: bold;
`

export const Contact = styled.div`
    display: inline-block;

    div {
        transition: ${props => props.theme.transition2};
    }

    &:hover {
        div {
            transform: rotate(-360deg);
        }
    }
`

export const Tab = (props: TabProps) => {
    return (
        <>
            <a href={props.link}>{props.tabName}</a>
        </>
    )
}


