//DUNCAN COLHOUN
//CAPSTONE PROJECT
//COHORT 34

import React from "react"
import {Form, Button, Container, CardGroup, Card} from "react-bootstrap"
import {LoginForm} from "./LoginForm";
import {SignupForm} from "../SignUp/SignupForm";

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

        <LoginForm/>


              </Card>
          </Card>

          <Card className={"signup-card"}>
              <Card className="card-body text-center w-auto">
                  <h3 className={"storyTitle"}>Sign Up</h3>

                  {/*Login form from react-bootstrap at GitHub*/}
                    <SignupForm/>
              </Card>
          </Card>
      </CardGroup>
  </Container>
            </>
        </>
    )

}