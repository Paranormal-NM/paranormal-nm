import React from "react"
import {StoryList} from './shared/components/StoryList'
import {Sort} from './Sort'
export const Home = () => {
    return (
        <>
            <Sort/>
            <StoryList/>
        </>
    )
}

