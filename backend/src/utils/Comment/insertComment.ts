import {Comment} from "../interfaces/Comment";
import {connect} from "../database.utils";
import {ResultSetHeader, RowDataPacket} from 'mysql2';

export async function insertComment(comment: Comment) : Promise<string> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO comment(commentId, commentProfileId, commentStoryId, commentBody, commentTitle, commentDate ) VALUES(UUID_TO_BIN(UUID()), UUID_TO_BIN(:commentProfileId), UUID_TO_BIN(:commentStoryId), :commentBody, :commentTitle, NOW()";

        const [result]= await mySqlConnection.execute(mySqlQuery, comment) as [ResultSetHeader, RowDataPacket]
        return "Comment created successfully"
    } catch (error) {
        throw error
    }
}