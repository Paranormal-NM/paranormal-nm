import React from "react"
import {ListGroup, Container, ButtonGroup, Button } from "react-bootstrap";


export function Sort() {
    return (
        <>
            <Container>
                <ListGroup>
                    <ListGroup.Item className="m-2">
                        <span className="m-2">Sort</span>
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="secondary">Date</Button>
                            <Button variant="secondary">Rating</Button>
                            <Button variant="secondary">Length</Button>
                        </ButtonGroup>
                    </ListGroup.Item>
                </ListGroup>
            </Container>
        </>
    )
}