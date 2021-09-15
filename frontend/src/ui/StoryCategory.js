import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import {fetchStoryByStoryCategoryId} from '../store/stories'
import {StoryListCard} from './shared/StoryListCard'

export function StoryCategory(props){
    const {match} = props
    const stories = useSelector(state => state.stories?? [])
    const dispatch = useDispatch()
    const initialEffects = () => {
        dispatch(fetchStoryByStoryCategoryId(match.params.id))
    }
    React.useEffect(initialEffects, [dispatch, match.params.id])
    return (<>
        <h1>{match.id}</h1>
        {stories.map(story => <StoryListCard story={story}/>)}
    </>)
}