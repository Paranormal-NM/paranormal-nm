import React from "react"
import {Sort} from "./Sort"
import {StoryList} from './shared/components/StoryList'
import {CommentWrapper} from "./CommentWrapper"
import {Col, Container, Row, Card, Form, ListGroup, Button, ButtonGroup, Accordion} from "react-bootstrap";
import {CreateStory} from "./create-story/CreateStory";


export function Profile() {
    return (
        <>
<Container>
            <Row>
                <Col xs lg="12">
                    {/*<Accordion className="m-2" >*/}
                    {/*    <Accordion.Item eventKey="0">*/}
                    {/*        <Accordion.Header>Update Email</Accordion.Header>*/}
                    {/*        <Accordion.Body>*/}
                    {/*        </Accordion.Body>*/}
                    {/*    </Accordion.Item>*/}
                    {/*    <Accordion.Item eventKey="1">*/}
                    {/*        <Accordion.Header>Update Password</Accordion.Header>*/}
                    {/*        <Accordion.Body>*/}
                    {/*        </Accordion.Body>*/}
                    {/*    </Accordion.Item>*/}
                    {/*</Accordion>*/}
                        <CreateStory />
                    {/*<CommentWrapper/>*/}
                </Col>
           </Row>
</Container>
        </>
)
}