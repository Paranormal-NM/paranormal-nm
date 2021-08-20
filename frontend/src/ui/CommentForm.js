import React from "react"
import {Col, Container, Row} from "react-bootstrap";


export function CommentForm() {
    return (
        <>
            <div className="m-2">
                <input type="text" className="form-control" id="comment" name="comment" placeholder="Type comment here"></input>
            </div>
        </>
)
}