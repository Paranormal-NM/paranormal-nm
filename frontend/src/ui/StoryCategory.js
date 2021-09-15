import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import {fetchStoryByStoryCategoryId} from '../store/stories'
import {StoryListCard} from './shared/StoryListCard'
import {Container, ListGroup} from "react-bootstrap";
export function StoryCategory(props){
    const {match} = props
    const stories = useSelector(state => state.stories?? [])
    const dispatch = useDispatch()
    const initialEffects = () => {
        dispatch(fetchStoryByStoryCategoryId(match.params.id))
    }
    React.useEffect(initialEffects, [dispatch, match.params.id])
    return (<>





        <Container d-flex size={"lg"} itemID={"contentBody"}>

            <ListGroup.Item action variant="light" >
                <h1>{match.id}</h1>
                {stories.map(story => <StoryListCard story={story}/>)}
            </ListGroup.Item>
        </Container>

    </>)
}