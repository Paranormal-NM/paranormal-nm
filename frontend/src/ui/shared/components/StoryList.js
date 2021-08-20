import React from "react"
import {Col, Container, Navbar, Nav, Row, Image, Form, FormControl, Button, ListGroup,} from "react-bootstrap";
import logo from "../../images/paranormal-nm-logo.png"
import icon from "../../images/magGlass.png"
import ghost from "../../images/ghostIcon.png"

export const StoryList = () => {
    return (
        <>


            <Container size={"lg"}>
                <div className="barGhost">
                    <span>GHOST STORIES</span> &nbsp; <span className="sortWhite">sort by: DATE | RATING</span>
                </div>
            </Container>



            <Container d-flex size={"lg"} itemID={"contentBody"}>
                <ListGroup>
                    <ListGroup.Item action variant="light" href="#link1"><span className={"storyTitle"}>Haunted Basement</span>
                        <span className="details">  by Scared Steve | Ghost Stories | Comments (9) | </span> <Image src={ghost}/><Image src={ghost}/><Image src={ghost}/></ListGroup.Item>

                    <ListGroup.Item action variant="light" href="#link2"><span className={"storyTitle"}>Grandma's Sunday Visits</span>
                       <span class="details">  by Janet B | Ghost Stories | Comments (14) | </span>  <Image src={ghost}/><Image src={ghost}/></ListGroup.Item>

                    <ListGroup.Item action variant="light" href="#link3"><span className={"storyTitle"}>Hallway Shadow Man</span>
                        <span class="details">  by Chris Bennett | Ghost Stories | Comments (19) | </span>  <Image src={ghost}/><Image src={ghost}/><Image src={ghost}/><Image src={ghost}/></ListGroup.Item>

                </ListGroup>

            </Container>


        </>
    )
}