import React from "react"
import {Form, Button, Container, CardGroup, Card} from "react-bootstrap"
import * as Yup from "yup"
import {httpConfig} from "../shared/utils/http-config";
import {Formik} from "formik"
import {LoginFormContent} from "./LoginFormContent";
import jwt_Decode from "jwt-decode";
import {getAuth} from "../../store/auth";
import {useDispatch} from "react-redux";

export function LoginForm() {
const initialValues = {
    profileEmail: "" ,
    profilePassword: ""
}
const dispatch=useDispatch()
const validator = Yup.object().shape({
    profileEmail: Yup.string().required("Please provide an email").email("Please provide a valid email."),
    profilePassword: Yup.string().required("Please provide a password.")
})

    const handleSubmit = (values, {setStatus, resetForm}) => {
    httpConfig.post("/apis/sign-in/", values)
        .then(reply => {
            let {message, type} = reply
            if (reply.status === 200) {
                window.localStorage.removeItem("authorization")
                window.localStorage.setItem("authorization",reply.headers["authorization"])
                resetForm()
                let jwtToken=jwt_Decode(reply.headers["authorization"])
                dispatch(getAuth(jwtToken))
            }
            setStatus({message, type})
        })
    }

    return (<>
        <Formik initialValues = {initialValues} onSubmit = {handleSubmit} validationSchema = {validator}>
            {LoginFormContent}


        </Formik>
    </>)

}



