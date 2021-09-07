// Duncan Colhoun
// Cohort 34

import {connect} from "../database.utils";
import {Story} from "../interfaces/Story";

export async function deleteStory(story: Story) {
    try {
        const mySqlConnection = await connect()
        const mySqlDelete = 'DELETE FROM `story` WHERE storyId = UUID_TO_BIN(:storyId)'
        const [result] = await mySqlConnection.execute(mySqlDelete, story)
        return "Story successfully deleted."
    } catch(error) {
        throw error
    }
}

