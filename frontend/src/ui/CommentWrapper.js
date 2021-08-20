import React from "react"
import {Comment} from "./Comment"
import {CommentForm} from "./CommentForm"
import {Col, Container, Row, Accordion} from "react-bootstrap";


export function CommentWrapper() {
    return (
        <>
            <div className="m-2">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Comments</Accordion.Header>
                        <Accordion.Body  style={{overflow: "scroll"}}>
                        <Comment/>
                            <CommentForm/>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    )
}