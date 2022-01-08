import styled from "styled-components"
import React, {useRef} from "react"
import emailjs from "@emailjs/browser"
import Swal from "sweetalert2"

interface Props {
    id: string;
}

const DivStyled = styled.div`
    margin: ${props => props.theme.margin};
    background-color: "lightcoral";
`

const Form = styled.form`
    
`

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICEID
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATEID
const USER_ID = process.env.REACT_APP_EMAILJS_USERID

const Contact = (props: Props) => {
    const form = useRef<HTMLFormElement>(null)

    const sendEmail = (e: any) => {
        e.preventDefault()

        // ! is for indicating that im sure this is a string
        emailjs.sendForm(SERVICE_ID!, TEMPLATE_ID!, form.current!, USER_ID!)
            .then((result) => {
                console.log(result.text)
                Swal.fire({
                    icon: "success",
                    title: "Message Sent",
                    text: "I'll get back to you soon!"
                })
            }, (error) => {
                console.log(error.text)
                Swal.fire({
                    icon: "error",
                    title:"Oops, something went wrong",
                    text: error.text
                })
            })

        e.target.reset()
    }

    return(
        <DivStyled id = {props.id}>
            <h2>Get In Touch</h2>
            <Form ref={form} onSubmit={sendEmail}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" tabIndex={1} required/>
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" tabIndex={2} required />
                </div>

                <div>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" cols={40} rows={5} tabIndex={3} required placeholder="Leave a message"></textarea>
                </div>

                <div>
                    <button type="submit" tabIndex={4}>Submit</button>
                </div>
            </Form>
        </DivStyled>
    )
}

export default Contact