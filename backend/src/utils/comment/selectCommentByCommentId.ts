import {Comment} from "../interfaces/Comment";
import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';

export async function selectCommentByCommentId(commentId: string) : Promise<Comment|null> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = "SELECT BIN_TO_UUID(commentId) AS commentId, BIN_TO_UUID (commentProfileId) AS commentProfileId, commentBody, commentTitle from comment WHERE commentId = UUID_TO_BIN(:commentId)"
        const result = await mySqlConnection.execute(mySqlQuery, {Comment}) as RowDataPacket[]
        const comments : Array<Comment> = result[0] as Array<Comment>
        return Comment.length === 1 ? {...comments[0]} : null;
    } catch (error) {
        throw error
    }
}