// Duncan Colhoun
// Cohort 34

import {Story} from "../interfaces/Story";
import {connect} from "../database.utils";
import {RowDataPacket} from "mysql2";

export async function selectStoryByStoryId(storyId: string) : Promise<Story|null> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'SELECT BIN_TO_UUID(storyId) AS storyId, BIN_TO_UUID (storyProfileId) AS storyProfileId, storyBody, BIN_TO_UUID (storyCategoryId) as storyCategoryId, storyLocationCity, storyLocationState, storyTitle FROM story WHERE storyId = UUID_TO_BIN (:storyId)'
        const result = await mySqlConnection.execute(mySqlQuery, {storyId}) as RowDataPacket[]
        const stories : Array<Story> = result[0] as Array<Story>
        return stories.length === 1 ? {...stories[0]} : null;
    } catch (error) {
        throw error
    }
}


