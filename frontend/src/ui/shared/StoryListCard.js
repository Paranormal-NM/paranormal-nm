import {Image, ListGroup} from "react-bootstrap";
import React from "react";
import {useSelector} from "react-redux";

export const StoryListCard = ({story}) => {
    const profiles = useSelector(state => state.profiles ? state.profiles : null);
    const FindUserName = () => {
        const profile = profiles.find(profile => story.storyProfileId === profile.profileId)
        return (
            <>
                {profile && <p>{profile.profileUsername} </p>}
            </>

        )
    }
    const StoryTeaser = ({story}) => {

        const storyTeaser = story.substr(0,40)
        return (
            <>
                <p>
                    {storyTeaser}
                </p>
            </>
        )

    }



    return (
        <>
            <ListGroup.Item action variant="light" ><span className={"storyTitle"}>{story.storyTitle}</span>
                <span className="details">
                <FindUserName/>
                <StoryTeaser story={story.storyBody}/>
                </span></ListGroup.Item>
        </>
    )


}

