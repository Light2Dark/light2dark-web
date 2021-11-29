import styled from "styled-components";
import {Link, animateScroll as scroll} from "react-scroll"

interface Props {
    className?: string;
}

type TabProps = {
    link: string;
    tabName: string;
}

const Bar = styled.div`
    width: 38px;
    height: 3.5px;
    background-color: ${props => props.theme.colors.lightAlmond};
    margin-bottom: 5px;
    border-radius: 4px;    
`

const Bar2 = styled(Bar)`
    width: 28px;
    float: right;
`

const AllBars = ({className}: Props) : JSX.Element => {
    return (
        <div className={className}>
            <Bar></Bar>
            <Bar></Bar>
            <Bar2></Bar2>
        </div>
    )
}

export const Bars = styled(AllBars)`
    display: none;
    margin-right: ${props => props.theme.marginRight};
    &:hover {
        cursor: pointer;
    }

    @media screen and (max-width:768px) {
        display: block;
    }

`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    background: ${props => props.theme.colors.darkBlue};
    height: 80px;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
    position: sticky;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const TabMenuStyled = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const Li = styled.li`
    
`

export const LinkScroll = styled(Link)`
    color: white;
    cursor: pointer;

    &.active {
        border-bottom: 2px solid white;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
`

export const LinkScrollContact = styled(LinkScroll)`
    color: red;
    transition: all ease 1.5s;

    &:hover {
        font-weight: bold;
        font-size: 1.2rem;
    }
`

export const Contact = styled.div`
    display: inline-block;
    transition: all ease 1.5s;

    &:hover {
        transform: rotate(360deg);
    }
`

export const Tab = (props: TabProps) => {
    return (
        <>
            <a href={props.link}>{props.tabName}</a>
        </>
    )
}

