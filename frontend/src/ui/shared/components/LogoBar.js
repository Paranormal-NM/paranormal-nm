import React from "react"
import {Col, Container, Navbar, Nav, Row, Image, Form, FormControl, Button} from "react-bootstrap";
import logo from "../../images/paranormal-nm-logo.png"
import icon from "../../images/magGlass.png"

export const LogoBar = () => {
    return (
        <>
            <Container fluid="lg">
                <Row className="logoBar">
                    <Col lg={5}>
                        <Image fluid="lg" src={logo}/>
                    </Col>
                    <Col lg={7}>
                         <row>

                            <button type="button" class="buttonStory">SUBMIT YOUR STORY!</button>

                            <a class="login" href={"#"}>Log In / Sign Up</a>

                        </row>

                    </Col>
                </Row>
                <Row>
                    <Navbar>
                        <Container>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav className="ms-auto">
                                    <Nav.Link className="navGhost" href="#ghosts">GHOST STORIES</Nav.Link>
                                    <Nav.Link className="navPlaces" href="#places">HAUNTED PLACES</Nav.Link>
                                    <Nav.Link className="navNear" href="#near-death">NEAR DEATH EXPERIENCES</Nav.Link>
                                    <Nav.Link className="navPara" href="#paranormal">PARANORMAL EVENTS</Nav.Link>
                                </Nav>
                                <Form className="d-flex">
                                    <FormControl size="sm"
                                        type="search"
                                        placeholder="Search"
                                        className="mr-2"
                                        aria-label="Search"
                                    />
                                    <Button><Image src={icon}/></Button>
                                </Form>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                </Row>

           </Container>

            <Container size={"lg"}>
                <div className="barGhost">
                    <span>GHOST STORIES</span> &nbsp; <span className="sortWhite">sort by: DATE | RATING | LENGTH</span>
                </div>

            </Container>
        </>
    )
}