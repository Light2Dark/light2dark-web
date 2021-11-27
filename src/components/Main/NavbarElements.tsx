import styled from "styled-components";

type Props = {
    className?: string;
}

const Bar = styled.div`
    width: 35px;
    height: 4px;
    background-color: ${props => props.theme.colors.lightAlmond};
    margin-bottom: 5px;
    border-radius: ${props => props.theme.borderRadius};    
`

const Bar2 = styled(Bar)`
    width: 25px;
    float: right;
`

const BarsContainer = () : JSX.Element => {
    return (
        <div>
            <Bar></Bar>
            <Bar></Bar>
            <Bar2></Bar2>
        </div>
    )
}

export const Bars = styled(BarsContainer)`
    display: flex;
    flex-direction: column;
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    background: ${props => props.theme.colors.darkBlue};
    height: 80px;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
`

