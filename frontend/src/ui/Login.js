import React from "react"
import {Form, Button} from "react-bootstrap"
export function Login(){
    return (
        <>
            <h1>Login to Paranormal-NM</h1>

            {/*Login form from react-bootstrap at GitHub*/}

            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    {/*<Form.Text className="text-muted">*/}
                    {/*    Please enter your email to log in.*/}
                    {/*</Form.Text>*/}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </>
    )

}