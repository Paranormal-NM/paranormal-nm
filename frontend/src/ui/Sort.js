import React from "react"
import {ListGroup, Container, ButtonGroup, Button } from "react-bootstrap";


export function Sort() {
    return (
        <>
            <Container>
                <ListGroup>
                    <ListGroup.Item>
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