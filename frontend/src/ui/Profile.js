import React from "react"
import {Sort} from "./Sort"
import {CommentWrapper} from "./CommentWrapper"
import {Col, Container, Row, Card, Form, ListGroup, Button, ButtonGroup} from "react-bootstrap";


export function Profile() {
    return (
        <>
<Container>
            <Row>
                <Col>
                    <ListGroup className="m-2">
                        <ListGroup.Item><Button variant="secondary" size="lg">
                            Create New Story
                        </Button></ListGroup.Item>
                        <ListGroup.Item><a href="">Hounted Toilet</a> by robert t bob</ListGroup.Item>
                        <ListGroup.Item><a href="">Hounted Toilet</a> by robert t bob</ListGroup.Item>
                        <ListGroup.Item><a href="">Hounted Toilet</a> by robert t bob</ListGroup.Item>
                        <ListGroup.Item><a href="">Hounted Toilet</a> by robert t bob</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col>
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