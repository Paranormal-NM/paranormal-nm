import React from "react"
import {Col, Container, Row} from "react-bootstrap";


export function Comment() {
    return (
        <>
            <div className="m-2">
                <label htmlFor="Comment">Comment</label>
                <input type="text" className="form-control" id="comment" name="comment" placeholder="comment">
            </div>
        </>
    )
}