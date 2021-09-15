import React, {useState} from "react";
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
    // const storyCategory = (match) => {
    //     let currentCategory = match.stories[0].storyCategoryId
    //     let categories = match.categories
    //     const title = categories.find(currentCategory)
    // }
    const categories = useSelector(state => state.categories)
    const categoryName = categories.find(category => category.categoryId === match.params.id).categoryName

    React.useEffect(initialEffects, [dispatch, match.params.id])


    return (<>



        <Container d-flex size={"lg"} itemID={"contentBody"}>
            <div className="barGhost">
                <span>{categoryName}</span>
            </div>
            <ListGroup.Item action variant="light">
                <h1>{match.id}</h1>
                {stories.map(story => <StoryListCard story={story}/>)}
            </ListGroup.Item>
        </Container>

    </>)
}