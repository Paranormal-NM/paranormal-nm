import React from "react"
import {Form, InputGroup,FormControl} from "react-bootstrap"

export function signUp(){
    return(
        <>

            <InputGroup className="mb-3">
                <FormControl>
                    placeholder="Firstname"
                    aria-label="Firstname"
                    aria-describedby="first-name"
                </FormControl>
                <FormControl>
                    placeholder="Lastname"
                    aria-label="Lastname"
                    aria-describedby="last-name"
                </FormControl>
                <Form.Control type="email" placeholder="Enter email" />

                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />

                <Form.Label>Retype Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />



            </InputGroup>

        </>
    )
}