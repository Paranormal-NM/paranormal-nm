
import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {StoryList} from './shared/components/StoryList'
import {Sort} from './Sort'
import {StoryListCard} from './shared/StoryListCard'
import {Col, Container, Navbar, Nav, Row, Image, Form, FormControl, Button, ListGroup} from "react-bootstrap";
export const Story = () => {

    const dispatch = useDispatch()




    return (
        <>
            <Sort/>
            <Container d-flex size={"lg"} itemID={"contentBody"}>

            </Container>
        </>
    )
}