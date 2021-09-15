import React from "react"
import {StoryList} from './shared/components/StoryList'
import {Container} from "react-bootstrap";
export const Home = () => {



    return (
        <>
            <Container d-flex size={"lg"}>
            <div className="barGhost">
                <span>ALL STORIES</span>
            </div>
        </Container>
            <StoryList/>
        </>
    )
}

