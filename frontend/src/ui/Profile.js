import React from "react"
import {Sort} from "./Sort"
import {StoryList} from './shared/components/StoryList'
import {CommentWrapper} from "./CommentWrapper"
import {Col, Container, Row, Card, Form, ListGroup, Button, ButtonGroup, Accordion} from "react-bootstrap";


export function Profile() {
    return (
        <>
<Container>
            <Row>
                <Col xs lg="4">
                    <Sort/>
                   <StoryList/>
                </Col>
                <Col xs lg="8">
                    <Accordion className="m-2" >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Update Email</Accordion.Header>
                            <Accordion.Body>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Update Password</Accordion.Header>
                            <Accordion.Body>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Form>
                        <Form.Group className="m-2" controlId="exampleForm.ControlTextarea1">

                            <Form.Label>Create story text input</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                            <ButtonGroup aria-label="Basic example">
                                <Button variant="secondary">Submit</Button>
                                <Button variant="secondary">Edit</Button>
                                <Button variant="secondary">Delete</Button>
                            </ButtonGroup>
                        </Form.Group>
                    </Form>
                    <CommentWrapper/>
                </Col>
           </Row>
</Container>
        </>
)
}