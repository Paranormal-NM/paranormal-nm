import React from "react"
import {Comment} from "./Comment"
import {Col, Container, Row, Accordion} from "react-bootstrap";


export function CommentWrapper() {
    return (
        <>
            <div className="m-4">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Comments</Accordion.Header>
                        <Accordion.Body  style={{overflow: "scroll"}}>
                        <Comment/>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    )
}