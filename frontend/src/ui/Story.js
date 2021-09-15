
import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {StoryList} from './shared/components/StoryList'
import {StoryListCard, FindUserName} from './shared/StoryListCard'
import {fetchStoryByStoryId} from '../store/stories'
import {Col, Container, Navbar, Nav, Row, Image, Form, FormControl, Button, ListGroup} from "react-bootstrap";




export const Story = (props) => {

    const {match} = props

    const dispatch = useDispatch()

console.log(match.params.storyId)
    const sideEffects = () => {
        // The dispatch function takes actions as arguments to make changes to the store/redux.
        dispatch(fetchStoryByStoryId(match.params.storyId));

    };

    /**
     * Pass both sideEffects and sideEffectInputs to useEffect.
     * useEffect is what handles rerendering of components when sideEffects resolve.
     * E.g when a network request to an api has completed and there is new data to display on the dom.
     **/
    useEffect(sideEffects,  [match.params.storyId, dispatch]);

    const story = useSelector(state => (
        state.stories
            ? state.stories
            : null
    ));
console.log(story)

    return (
        <>
            <Container d-flex size={"lg"} itemID={"contentBody"}>
            <div className="barGhost">
                <span>GHOST STORIES</span>
            </div>

                    <ListGroup.Item action variant="light" >
                        <span className={"storyTitle"}>{story.storyTitle}</span>
                        {/*<FindUserName/>*/}
                        <span className="details">


                            {/*<StoryBody story={story.storyBody}/>*/}

                            {story ? <p>{story.storyBody}</p> : ''}

                        </span>
                    </ListGroup.Item>
            </Container>
        </>
    )
}