import {Button, Form} from "react-bootstrap";
import React from "react";

export const SignupFormContent = (props) => {
    const {}= props;

return ( <Form>
    <Form.Group className="mb-3" controlId="profileUsername">
        <Form.Control type="username" placeholder="Username (may be real name or a handle)" sm />
    </Form.Group>

    <Form.Group className="mb-3" controlId="profileAddressCity">
        <Form.Control type="address" placeholder="City/State" sm />
    </Form.Group>

    <Form.Group className="mb-3" controlId="profileAddressState">
        <Form.Control type="address" placeholder="City/State" sm />
    </Form.Group>

    <Form.Group className="mb-3" controlId="profileEmail">
        <Form.Control type="email" placeholder="Email Address" sm />
    </Form.Group>

    <Form.Group className="mb-3" controlId="profilePassword">
        <Form.Control type="password" placeholder="Password" sm />
    </Form.Group>

    <Form.Group className="mb-3" controlId="profilePasswordConfirm">
        <Form.Control type="password" placeholder="Re-enter Password" sm />
    </Form.Group>
    <Button variant="btn btn-primary" type="submit">
        Submit
    </Button>
</Form> )
}