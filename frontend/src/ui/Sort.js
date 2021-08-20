import React from "react"
import {ListGroup, Container, ButtonGroup, Button } from "react-bootstrap";


export function Sort() {
    return (
        <>
                <Container size={"lg"}>
                    <div className="barGhost">
                        <span>GHOST STORIES</span> &nbsp; <span className="sortWhite">sort by: DATE | RATING</span>
                    </div>
                </Container>
        </>
    )
}