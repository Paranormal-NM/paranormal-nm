//Duncan Colhoun
//Cohort 34

import {Story} from "../interfaces/Story";
import {connect} from "../database.utils";
import {ResultSetHeader, RowDataPacket} from 'mysql2';

export async function updateStory(story: Story) : Promise<string> {
    try {
        const mySqlConnection = await connect()
//Might want to delete storyId and storyProfileId from input to prevent changes to these //permanently assigned values

        const mySqlQuery = "UPDATE story(storyId, storyProfileId, storyBody, storyCategoryId, storyLocationCity, storyLocationState, storyRating, storyTitle) VALUES :storyId, :storyProfileId, :storyBody, :storyCategoryId, :storyLocationCity, :storyLocationState, :storyRating, :storyTitle)";

        const [result]= await mySqlConnection.execute(mySqlQuery, story) as [ResultSetHeader, RowDataPacket]
        return "Story updated successfully"
    } catch (error) {
        throw error
    }
}
