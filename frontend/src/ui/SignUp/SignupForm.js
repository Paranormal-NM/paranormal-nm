import React from 'react';
import * as Yup from "yup";
import {Formik} from "formik";
import {SignupFormContent} from "./SignupFormContent";
import {httpConfig} from "../shared/utils/http-config";


export const SignupForm = () => {
    const initialValues = {
        profileUsername: "",
        profileAddressCity: "",
        profileAddressState: "",
        profileEmail: "",
        profilePassword: "",
        profilePasswordConfirm: "",
    };

    const validator = Yup.object().shape({

        profileUsername: Yup.string()
            .required('username is required.'),

        profileAddressCity: Yup.string()
            .required('city is required.'),

        profileAddressState: Yup.string()
            .required('state is required.'),

        profileEmail: Yup.string()
            .email("email must be a valid email")
            .required('email is required'),

        profilePassword: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least eight characters"),

        profilePasswordConfirm: Yup.string()
            .required("Password Confirm is required")
            .min(8, "Password must be at least eight characters")
    });
    const submitSignup = ( values, {resetForm, setStatus} ) => {
        httpConfig.post("/apis/sign-up/", values).then(reply =>{
                let {message, type} = reply;

                if(reply.status === 200) {
                    resetForm();
                }
                setStatus({message, type});

        })

}

    return (

        <Formik
            initialValues={initialValues}
            onSubmit={submitSignup}
            validationSchema={validator}
        >
            {SignupFormContent}
        </Formik>

    )

}



