import styled from "styled-components"
import styles from "./glitch.module.css"

interface Props {
    id?: string;
}

const DivStyled = styled.div`
    position: relative;
    height: 200px;
    background-color: black;
    margin: 5% auto;
    width: 80%;
`

const Stories = ({id}: Props): JSX.Element => {
    return(
        <>
            <DivStyled id={id}>
                <div className={styles.container}>
                    <div className={styles.glitch} data-text="COMING SOO">COMING SOON</div>
                    <div className={styles.glow}>COMING SOON</div>
                    <p className={styles.subtitle}>IMPERFECT ARTIST</p>
                    <div className={styles.scanlines}></div>
                </div>
            </DivStyled>
        </>
    )
}

export default Stories