import {Button, Form} from "react-bootstrap";
import React from "react";
import {FormDebugger} from "../shared/FormDebugger";

export const LoginFormContent=(props) =>{
    const {
        status, values, errors, touched, dirty, isSubmitting, handleChange, handleBlur, handleSubmit, handleReset
    } = props;
    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="profileEmail">
            <Form.Control type="email" placeholder="Email Address" value = {values.profileEmail} onChange={handleChange} onBlur={handleBlur}  lg />
            {errors.profileEmail && touched.profileEmail && (
                <p>{errors.profileEmail}</p>
            )}

        </Form.Group>

        <Form.Group className="mb-3" controlId="profilePassword">
            <Form.Control type="password" placeholder="Password" value={values.profilePassword} onChange={handleChange} onBlur={handleBlur}  lg />
            {errors.profilePassword && touched.profilePassword && (
                <p>{errors.profilePassword}</p>
            )}
        </Form.Group>
        <Button variant="btn btn-primary" type="submit">
            Submit
        </Button>
            <FormDebugger {...props}/>
    </Form>)
}