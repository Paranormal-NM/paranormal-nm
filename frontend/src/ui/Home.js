import React from "react"
import {Col, Container, Row, Card, ListGroup } from "react-bootstrap";
import {Sort} from "./Sort";
import {StoryList} from "./shared/components/StoryList";



export function Home() {
    return (
        <>
            <Sort/>
            <StoryList/>
        </>
    )
}