import styled from "styled-components"
import styles from "./glitch.module.css"

interface Props {
    id?: string;
}

const DivStyled = styled.div`
    height: 100px;
    background-color: white;
    margin: 20px;
`

const Stories = ({id}: Props): JSX.Element => {
    return(
        <>
            <DivStyled id={id}>
                <div className={styles.scanlines}>
                    <div className={styles.glitch} data-text="ELISABÉTH">ELISABÉTH</div>
                    <div className={styles.glow}>ELISABÉTH</div>
                    <p className={styles.subtitle}>IMPRACTICAL DEVELOPER</p>
                </div>
            </DivStyled>
        </>
    )
}

export default Stories