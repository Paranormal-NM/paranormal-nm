import {Comment} from "../interfaces/Comment";
import {connect} from "../database.utils";
import {ResultSetHeader, RowDataPacket} from 'mysql2';

export async function updateProfile(comment: Comment): Promise<string>  {
    try {
        const mysqlConnection = await connect();
        const query : string = 'UPDATE comment SET commentBody = :commentBody, commentTitle = :commentTitle, WHERE commentId = UUID_TO_BIN(:commentId)';
        await mysqlConnection.execute(query, comment)
        return 'Comment successfully updated'
    } catch (error) {
        throw error
    }
}