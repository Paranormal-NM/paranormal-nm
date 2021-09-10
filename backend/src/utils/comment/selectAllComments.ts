import {Comment} from "../interfaces/Comment";
import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";
import {Status} from "../interfaces/Status";
import {RowDataPacket,} from "mysql2"

export async function selectAllComments() : Promise<Comment[]> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'SELECT BIN_TO_UUID(commentId) AS commentId, BIN_TO_UUID (commentProfileId) AS commentProfileId, BIN_TO_UUID(commentStoryId) AS commentStoryId, commentBody, commentTitle FROM comment'
        const result = await mySqlConnection.execute(mySqlQuery) as RowDataPacket[]
        return result[0] as Array<Comment>
    } catch (error) {
        throw error
    }
}