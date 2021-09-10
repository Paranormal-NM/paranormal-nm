import {Story} from "../interfaces/Story";
import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';

export async function selectStoriesByCategoryId(storyCategoryId: string) : Promise<Story[]> {
    try {
        console.log(storyCategoryId)
        const mySqlConnection = await connect();
        const mySqlQuery = 'SELECT BIN_TO_UUID(storyId) AS storyId, BIN_TO_UUID (storyProfileId) AS storyProfileId, storyBody,BIN_TO_UUID(storyCategoryId) as storyCategoryId, storyLocationCity, storyLocationState, storyTitle FROM story WHERE storyCategoryId = UUID_TO_BIN(:storyCategoryId)'

        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {storyCategoryId})
        return result[0] as Array<Story>
    } catch (error) {
        throw error
    }
}

