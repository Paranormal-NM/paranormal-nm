import {Story} from "../interfaces/Story";
import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';

export async function selectStoriesByProfileId(storyProfileId: string) : Promise<Story[]> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = 'SELECT BIN_TO_UUID(storyId) AS storyId, BIN_TO_UUID (storyProfileId) AS storyProfileId, storyBody, storyCategoryId, storyLocationCity, storyLocationState, storyTitle FROM story WHERE storyProfileId = :storyProfileId'

        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {storyProfileId})
        return result[0] as Story[]
    } catch (error) {
        throw error
    }
}

