import styled from "styled-components"
import React, {useRef} from "react"
import emailjs from "@emailjs/browser"
import Swal from "sweetalert2"
import {Form, LeftDiv, RightDiv, StyledDiv, ElemDiv, Heading2, Label, Input, Textarea, Button, CenterDiv} from "./ContactElements"

interface Props {
    id: string;
}

const DivStyled = styled.div`
    margin: 5% auto;
    margin-bottom: 0;
    background-color: #cc3939;
    padding: 15px;
    border-radius: ${props => props.theme.borderRadius};
    width: fit-content;

    * {
        color: black;
    }

    @media screen and (max-width: 768px) {
        width: 80%;
    }
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
            <Heading2>Get In Touch</Heading2>
            <Form ref={form} onSubmit={sendEmail}>
                <StyledDiv>
                    <LeftDiv>
                        <ElemDiv>
                            <Label htmlFor="name">Name</Label>
                            <Input type="text" name="name" id="name" tabIndex={1} required/>
                        </ElemDiv>

                        <ElemDiv>
                            <Label htmlFor="email">Email</Label>
                            <Input type="email" name="email" id="email" tabIndex={2} required />
                        </ElemDiv>
                    </LeftDiv>

                    <RightDiv>
                        <ElemDiv>
                            <Label htmlFor="message">Message</Label>
                            <Textarea name="message" id="message" cols={40} rows={5} tabIndex={3} required placeholder="Leave a message"></Textarea>
                        </ElemDiv>
                    </RightDiv>
                </StyledDiv>

                <CenterDiv>
                    <Button type="submit" tabIndex={4}>Submit</Button>
                </CenterDiv>
            </Form>
        </DivStyled>
    )
}

export default Contact