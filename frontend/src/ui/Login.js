//DUNCAN COLHOUN
//CAPSTONE PROJECT
//COHORT 34

import React from "react"
import {Form, Button, Container, CardGroup, Card} from "react-bootstrap"

export function Login(){
    return (
        <>
            <>
  <Container className={"bg-dark"}>
      <CardGroup>
          <Card>
              <Card className="card-body text-center w-auto border-1 border-dark bg-info ">
             <h3>Login to <br/> Paranormal-NM<br/> </h3>

            {/*Login form from react-bootstrap at GitHub*/}

            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label><br/><strong>Email address</strong></Form.Label>
                    <Form.Control type="email" placeholder="Enter email" lg />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label><strong>Password</strong></Form.Label>
                    <Form.Control type="password" placeholder="Password" lg />
                </Form.Group>
                <Button variant="dark border-1" type="submit">
                    Submit
                </Button>
            </Form>
              </Card>
          </Card>

          <Card>
              <Card className="card-body text-center w-auto border-1 border-dark bg-info">
                  <h3>Sign up for <br/> Paranormal-NM!</h3>

                  {/*Login form from react-bootstrap at GitHub*/}

                  <Form>
                      <Form.Group className="mb-3" controlId="formText">
                          <Form.Label><br/><strong>First Name</strong></Form.Label>
                          <Form.Control type="text" placeholder="Enter first name" sm />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formText2">
                          <Form.Label><strong>Last Name</strong></Form.Label>
                          <Form.Control type="text" placeholder="Last Name" sm />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formText3">
                          <Form.Label><strong>Your City and State</strong></Form.Label>
                          <Form.Control type="text" placeholder="Anytown, NM" sm />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label><strong>Email address</strong></Form.Label>
                          <Form.Control type="email" placeholder="Enter email" sm />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label><strong>Password</strong></Form.Label>
                          <Form.Control type="password" placeholder="Password" sm />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword2">
                          <Form.Label><strong>Re-enter Password</strong></Form.Label>
                          <Form.Control type="password" placeholder="Re-enter password" sm />
                      </Form.Group>
                      <Button variant="dark border-1" type="submit">
                          Submit
                      </Button>
                  </Form>
              </Card>


          </Card>
      </CardGroup>
  </Container>
            </>
        </>
    )

}