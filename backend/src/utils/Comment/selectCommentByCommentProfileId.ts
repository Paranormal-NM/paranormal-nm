import {Comment} from "../interfaces/Comment";
import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';

export async function selectCommentsByCommentProfileId(CommentProfileId: string) : Promise<Comment[]> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = 'SELECT BIN_TO_UUID(commentId) AS commentId, BIN_TO_UUID (commentProfileId) AS commentProfileId, commentBody, commentTitle, profile.profileAtHandle, profile.profileAvatarUrl FROM comment INNER JOIN profile ON profile.profileId = comment.commentProfileId WHERE commentProfileId = UUID_TO_BIN(:commentProfileId) ORDER BY commentDate DESC'
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {commentProfileId})
        return result[0] as Comment[]
    } catch (error) {
        throw error
    }
}