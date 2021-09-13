import React, {useEffect} from "react"
import {Col, Container, Navbar, Nav, Row, Image, Form, FormControl, Button, ListGroup,} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllStories, fetchAllStoriesAndProfiles, fetchStoryByStoryId} from "../../../store/stories";
import {StoryListCard} from "../StoryListCard";

export const StoryList = () => {
    const stories = useSelector(state => state.stories ? state.stories : []);
    const dispatch = useDispatch();
    const effects = () => {
        dispatch(fetchAllStoriesAndProfiles());
        // dispatch(fetchStoryByStoryId())
    };


    useEffect(effects, [dispatch]);



    return (
        <>

            <Container d-flex size={"lg"} itemID={"contentBody"}>
                <ListGroup>
                    {stories.map(story => <StoryListCard  key={story.storyId} story={story}/>)}
                </ListGroup>
            </Container>


        </>
    )
}