import React from "react"
import {Col, Container, Navbar, Nav, Row, Image} from "react-bootstrap";
import logo from "../../images/paranormal-nm-logo.png"

export const LogoBar = () => {
    return (
        <>
            <Container fluid="lg">
                <Row>
                    <Col lg={5}>
                        <Image fluid src={logo}/>
                    </Col>
                    <Col lg={7}>

                    </Col>
                </Row>
                <Row>
                    <Navbar>
                        <Container>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="ms-auto">
                                    <Nav.Link href="#ghosts">GHOST STORIES</Nav.Link>
                                    <Nav.Link href="#places">HAUNTED PLACES</Nav.Link>
                                    <Nav.Link href="#near-death">NEAR DEATH EXPERIENCES</Nav.Link>
                                    <Nav.Link href="#paranormal">PARANORMAL EVENTS</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>


                </Row>
            </Container>
        </>
    )
}