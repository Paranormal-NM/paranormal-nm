//Duncan Colhoun
//Cohort 34

import {Story} from "../interfaces/Story";
import {connect} from "../database.utils";
import {ResultSetHeader, RowDataPacket} from 'mysql2';

export async function insertStory(story: Story) : Promise<string> {
    try {
        const mySqlConnection = await connect()

        const mySqlQuery = "INSERT INTO story(storyId, storyProfileId, storyBody, storyCategoryId, storyLocationCity, storyLocationState, storyRating, storyTitle) VALUES(UUID_TO_BIN(UUID()), :storyProfileId, :storyBody, :storyCategoryId, :storyLocationCity, :storyLocationState, :storyRating, :storyTitle)";

        const [result]= await mySqlConnection.execute(mySqlQuery, story) as [ResultSetHeader, RowDataPacket]
        return "Story created successfully"
    } catch (error) {
        throw error
    }
}
