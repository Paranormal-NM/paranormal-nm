//scoons cohort 34

import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";

export async function insertProfile(profile: Profile) : Promise<string>{
    try {
        const mysqlConnection = await connect();
        const query : string = 'INSERT INTO profile(profileId, profileActivationToken, profileAddressCity, profileAddressState, profileCreateTime, profileEmail, profileHash, profileUsername,   ) VALUES (UUID_TO_BIN(UUID()) , :profileActivationToken, :profileAddressCity, :profileAddressState, profileCreateTime, :profileEmail, :profileHash, :profileUsername)';
        await mysqlConnection.execute(query, profile);
        return 'Profile Successfully Created'
    } catch (error) {
        throw error
    }
}