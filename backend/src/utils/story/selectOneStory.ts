// Duncan Colhoun
// Cohort 34

import {Story} from "../interfaces/Story";
import {connect} from "../database.utils";
import {RowDataPacket} from "mysql2";

export async function selectOneStory(storyId: number) : Promise<Story|null> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'SELECT BIN_TO_UUID(storyId) AS storyId, BIN_TO_UUID (storyProfileId) AS storyProfileId, storyBody, storyCategoryId, storyLocationCity, storyLocationState, storyRating, storyTitle FROM story WHERE storyId = :storyId'
        const result = await mySqlConnection.execute(mySqlQuery, {storyId}) as RowDataPacket[]
        const stories : Array<Story> = result[0] as Array<Story>
        return stories.length === 1 ? {...stories[0]} : null;
    } catch (error) {
        throw error
    }
}


