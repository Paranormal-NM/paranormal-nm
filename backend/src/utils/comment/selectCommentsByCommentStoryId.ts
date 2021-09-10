import {Comment} from "../interfaces/Comment";
import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';

export async function selectCommentsByCommentStoryId(commentStoryId: string) : Promise<Comment[]> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = 'SELECT BIN_TO_UUID(commentId) AS commentId, BIN_TO_UUID (commentStoryId) AS commentStoryId, commentBody, commentTitle, commentDate FROM comment WHERE commentStoryId = UUID_TO_BIN(:commentStoryId) ORDER BY commentDate DESC'
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {commentStoryId})
        return result[0] as Comment[]
    } catch (error) {
        throw error
    }
}