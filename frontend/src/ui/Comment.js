import React from "react"
import {Col, Container, Row} from "react-bootstrap";


export function Comment() {
    return (
        <>
            <div className="m-2 border">
                <span>
                    <a href="">Commenters Name</a>
                </span>
               <div>
                   <span>
                   This is a comment
                   </span>
               </div>
            </div>
        </>
    )
}