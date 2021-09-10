import {Image, ListGroup} from "react-bootstrap";
import React from "react";

export const StoryListCard = ({story}) => {

    return (
        <>
            <ListGroup.Item action variant="light" href="#link1"><span className={"storyTitle"}>{story.storyTitle}</span>
                <span className="details">  {story.storyCategoryId}  </span></ListGroup.Item>
        </>
    )


}

