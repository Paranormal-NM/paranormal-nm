import React from "react"
import {Col, Container, Row} from "react-bootstrap";


export function Sort() {
    return (
        <>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Sort</Accordion.Header>
                    <Accordion.Body>
                        <div className="m-2">
                            <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
                                <ToggleButton id="tbg-check-1" value={1}>
                                    Date
                                </ToggleButton>
                                <ToggleButton id="tbg-check-2" value={2}>
                                    Rating
                                </ToggleButton>
                                <ToggleButton id="tbg-check-3" value={3}>
                                    Length
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </>
    )
}