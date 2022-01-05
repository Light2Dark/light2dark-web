interface Props {
    id: string;
}

const Contact = (props: Props) => {
    return(
        <div id={props.id}>
            <h2>Get In Touch</h2>
            <div style={{height: "1000px", backgroundColor: "lightcoral"}}>

            </div>
        </div>
    )
}

export default Contact