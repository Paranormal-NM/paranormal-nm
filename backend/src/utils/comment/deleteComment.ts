import {connect} from "../database.utils";
import {Comment} from "../interfaces/Comment";

export async function deleteComment(commentProfileId: string, commentId : string): Promise<string> {
    try {
        const mySqlConnection = await connect()
        const mySqlDelete = 'DELETE FROM `comment` WHERE commentProfileId = UUID_TO_BIN(:commentProfileId) AND commentId = UUID_TO_BIN(:commentId)'
        const [result] = await mySqlConnection.execute(mySqlDelete, {commentProfileId, commentId })
        return "comment successfully deleted"
    } catch(error) {
        throw error
    }
}