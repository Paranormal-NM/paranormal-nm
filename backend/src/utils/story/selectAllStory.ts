// Duncan Colhoun
// Cohort 34

import {Story} from "../interfaces/Story";
import {connect} from "../database.utils";
import {RowDataPacket} from "mysql2";

export async function selectAllStories() : Promise<Story[]> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'SELECT BIN_TO_UUID(storyId) AS storyId, BIN_TO_UUID (storyProfileId) AS storyProfileId, storyBody, storyCategoryId, storyLocationCity, storyLocationState, storyRating, storyTitle FROM story'
        const result = await mySqlConnection.execute(mySqlQuery) as RowDataPacket []
        return result[0] as Array<Story>
    } catch (error) {
        throw error
    }
}

