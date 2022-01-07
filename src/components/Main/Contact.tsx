import styled from "styled-components"

interface Props {
    id: string;
}

const DivStyled = styled.div`
    margin: ${props => props.theme.margin};
    background-color: "lightcoral";
`

const Form = styled.form`
    
`

const Contact = (props: Props) => {
    return(
        <DivStyled id = {props.id}>
            <h2>Get In Touch</h2>
            <Form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" tabIndex={1} />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" tabIndex={2} />
                </div>

                <div>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" cols={40} rows={5}>Leave a message!</textarea>
                </div>
            </Form>
        </DivStyled>
    )
}

export default Contact