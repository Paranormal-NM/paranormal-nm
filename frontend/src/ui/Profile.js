import React from "react"
import {Sort} from "./Sort"
import {CommentWrapper} from "./CommentWrapper"
import {Col, Container, Row, Card, Form, ListGroup, Button} from "react-bootstrap";


export function Profile() {
    return (
        <>

            <Row>
                <Col>
                    <ListGroup className="m-4">
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
                        <Form.Group className="m-4" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                    <CommentWrapper/>
                </Col>

           </Row>
        </>
)
}