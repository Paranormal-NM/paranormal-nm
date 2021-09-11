import React, {useEffect} from "react"
import {Col, Container, Navbar, Nav, Row, Image, Form, FormControl, Button, ListGroup,} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllStories, fetchAllStoriesAndProfiles} from "../../../store/stories";
import {StoryListCard} from "../StoryListCard";

export const StoryList = () => {
    const stories = useSelector(state => state.stories ? state.stories : []);
    const profiles = useSelector(state => state.profiles ? state.profiles : []);
    const dispatch = useDispatch();
    const effects = () => {
        dispatch(fetchAllStoriesAndProfiles());
    };
    const inputs = [];

    useEffect(effects, inputs);

    console.log(stories)
    console.log(profiles)

    return (
        <>

            <Container d-flex size={"lg"} itemID={"contentBody"}>
                <ListGroup>
                    {stories.map(story => <StoryListCard key={story.storyId} story={story}/>)}
                </ListGroup>
            </Container>


        </>
    )
}