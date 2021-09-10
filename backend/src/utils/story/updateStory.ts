//Duncan Colhoun
//Cohort 34

import {Story} from "../interfaces/Story";
import {connect} from "../database.utils";
import {ResultSetHeader, RowDataPacket} from 'mysql2';

export async function updateStory(story: Story) : Promise<string> {
    try {
        const mySqlConnection = await connect()
//Might want to delete storyId and storyProfileId from input to prevent changes to these //permanently assigned values

        const mySqlQuery = 'UPDATE story SET storyBody = :storyBody, storyCategoryId = UUID_TO_BIN(:storyCategoryId), storyLocationCity = :storyLocationCity, storyLocationState =:storyLocationState,  storyTitle = :storyTitle WHERE storyId = UUID_TO_BIN(:storyId)';
    console.log(story)
        const [result]= await mySqlConnection.execute(mySqlQuery, story) as [ResultSetHeader, RowDataPacket]
        return "Story updated successfully"
    } catch (error) {
        throw error
    }
}

// export async function insertStory(story: Story) : Promise<string> {
//     try {
//         console.log('story inside insert function', story)
//         const mySqlConnection = await connect()
//
//         const mySqlQuery = "INSERT INTO story(storyId, storyProfileId, storyBody, storyCategoryId, storyLocationCity, storyLocationState, storyTitle) VALUES(UUID_TO_BIN(UUID()), UUID_TO_BIN(:storyProfileId), :storyBody, UUID_TO_BIN(:storyCategoryId), :storyLocationCity, :storyLocationState, :storyTitle)";
//
//         const [result]= await mySqlConnection.execute(mySqlQuery, story) as [ResultSetHeader, RowDataPacket]
//         return "Story created successfully"
//     } catch (error) {
//         throw error
//     }
// }