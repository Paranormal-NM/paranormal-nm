//Duncan Colhoun
//Cohort 34

import {Story} from "../interfaces/Story";
import {connect} from "../database.utils";
import {ResultSetHeader, RowDataPacket} from 'mysql2';

export async function updateStory(story: Story) : Promise<string> {
    try {
        const mySqlConnection = await connect()
//Might want to delete storyId and storyProfileId from input to prevent changes to these //permanently assigned values

        const mySqlQuery = 'UPDATE story SET storyBody = :storyBody, storyCategoryId = :storyCategoryId, storyLocationCity = :storyLocationCity, storyLocationState =:storyLocationState, storyRating=:storyRating, storyTitle = :storyTitle WHERE storyId = :storyId';

        const [result]= await mySqlConnection.execute(mySqlQuery, story) as [ResultSetHeader, RowDataPacket]
        return "Story updated successfully"
    } catch (error) {
        throw error
    }
}
