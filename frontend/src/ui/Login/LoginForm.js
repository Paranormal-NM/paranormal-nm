import React from "react"
import {Form, Button, Container, CardGroup, Card} from "react-bootstrap"
import * as Yup from "yup"
import {httpConfig} from "../shared/utils/http-config";
import {Formik} from "formik"
export function LoginForm() {
const initialValues = {
    profileEmail: "" ,
    profilePassword: ""
}
const validator = Yup.object().shape({
    profileEmail: Yup.string().required("Please provide an email").email("Please provide a valid email."),
    profilePassword: Yup.string().required("Please provide a password.")
})

    const handleSubmit = (values, {setStatus, resetForm}) => {
    httpConfig.post("/apis/sign-up/", values)
        .then(reply => {
            let {message, type} = reply
            if (reply.status === 200) {
                console.log("success!")
            }
        })
    }

    return (<>
        <Formik initialValues = {initialValues} onSubmit = {handleSubmit} validationSchema = {validator}>
            {LoginFormContent}


        </Formik>
    </>)

}
export function LoginFormContent(){
    return (               <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email Address" lg />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" lg />
        </Form.Group>
        <Button variant="btn btn-primary" type="submit">
            Submit
        </Button>
    </Form>)
}