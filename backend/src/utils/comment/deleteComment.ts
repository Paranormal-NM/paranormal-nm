import {connect} from "../database.utils";
import {Comment} from "../interfaces/Comment";

export async function deleteComment(comment: Comment) {
    try {
        const mySqlConnection = await connect()
        const mySqlDelete = 'DELETE FROM `comment` WHERE commentProfileId = UUID_TO_BIN(:commentProfileId) AND commentId = UUID_TO_BIN(:commentId)'
        const [result] = await mySqlConnection.execute(mySqlDelete, comment)
        return "Comment successfully deleted"
    } catch(error) {
        throw error
    }
}