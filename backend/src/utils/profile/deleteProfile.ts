//scoons cohort 34

import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";

export async function deleteProfile(profile: Profile) {
    try {
        const mySqlConnection = await connect()
        const mySqlDelete = 'DELETE FROM `profile` WHERE profileId = UUID_TO_BIN(:profileId)'
        const [result] = await mySqlConnection.execute(mySqlDelete, profile)
        return "Profile successfully deleted"
    } catch(error) {
        throw error
    }
}