//DUNCAN COLHOUN
//CAPSTONE PROJECT
//COHORT 34

import React from "react"
import {Form, Button, Container, CardGroup, Card} from "react-bootstrap"

export function Login(){
    return (
        <>
            <>
  <Container className={"signin-container"}>
      <CardGroup satus>
          <Card className={"signup-card"}>
              <Card className={"card-body text-center w-auto"}>
             <h3 className={"storyTitle"}>Login</h3>

            {/*Login form from react-bootstrap at GitHub*/}

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email Address" lg />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" lg />
                    </Form.Group>
                    <Button variant="btn btn-primary" type="submit">
                        Submit
                    </Button>
                </Form>
              </Card>
          </Card>

          <Card className={"signup-card"}>
              <Card className="card-body text-center w-auto">
                  <h3 className={"storyTitle"}>Sign Up</h3>

                  {/*Login form from react-bootstrap at GitHub*/}

                  <Form>
                      <Form.Group className="mb-3" controlId="formText">
                          <Form.Control type="username" placeholder="Username (may be real name or a handle)" sm />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formText3">
                          <Form.Control type="address" placeholder="City/State" sm />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control type="email" placeholder="Email Address" sm />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Control type="password" placeholder="Password" sm />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword2">
                          <Form.Control type="password" placeholder="Re-enter Password" sm />
                      </Form.Group>
                      <Button variant="btn btn-primary" type="submit">
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