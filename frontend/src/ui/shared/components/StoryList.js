import React, {useEffect} from "react"
import {Col, Container, Navbar, Nav, Row, Image, Form, FormControl, Button, ListGroup,} from "react-bootstrap";
import logo from "../../images/paranormal-nm-logo.png"
import icon from "../../images/magGlass.png"
import ghost from "../../images/ghostIcon.png"
import {useDispatch, useSelector} from "react-redux";
import {fetchAllStories, fetchAllStoriesAndProfiles, fetchStoryByStoryId} from "../../../store/stories";
import {StoryListCard} from "../StoryListCard";

export const StoryList = () => {
    const stories = useSelector(state => state.stories ? state.stories : []);
    const dispatch = useDispatch();
    const effects = () => {
        dispatch(fetchAllStoriesAndProfiles());
        dispatch(fetchStoryByStoryId())
    };
    const inputs = [];

    useEffect(effects, inputs);

    console.log(stories)

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