import React from "react"
import {Col, Container, Row, Card, ListGroup } from "react-bootstrap";
import {Sort} from "./Sort";



export function Home() {
    return (
        <>
            <Sort/>
            <Container>
                <ListGroup>
                    <ListGroup.Item className="m-2"><a href="">Hounted Toilet</a> by robert t bob</ListGroup.Item>
                    <ListGroup.Item className="m-2"><a href="">Hounted Toilet</a> by robert t bob</ListGroup.Item>
                    <ListGroup.Item className="m-2"><a href="">Hounted Toilet</a> by robert t bob</ListGroup.Item>
                    <ListGroup.Item className="m-2"><a href="">Hounted Toilet</a> by robert t bob</ListGroup.Item>
                    <ListGroup.Item className="m-2"><a href="">Hounted Toilet</a> by robert t bobs</ListGroup.Item>
                </ListGroup>
            </Container>
        </>
    )
}