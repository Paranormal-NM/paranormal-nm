import React from "react"
import {Col, Container, Row} from "react-bootstrap";


export function Comment() {
    return (
        <>
            <div className="m-2">
                <span>
                    <a href="">Commenters Name</a>
                </span>
               <div>
                   <span>
                   {/*    Comment Text*/}
                   </span>
               </div>
            </div>
        </>
    )
}