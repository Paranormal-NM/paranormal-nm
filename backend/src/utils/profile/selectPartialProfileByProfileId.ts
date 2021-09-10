//scoons cohort 34

import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";
import {RowDataPacket} from 'mysql2';

export async function selectPartialProfileByProfileId(profileId: string): Promise<Profile|null> {
    console.log(profileId)
    try {
        const mysqlConnection = await connect();
        const mysqlQuery: string = "SELECT BIN_TO_UUID(profileId) as profileId, profileUsername FROM profile WHERE profileId = UUID_TO_BIN(:profileId)"
        const result = await mysqlConnection.execute(mysqlQuery ,{profileId}) as RowDataPacket[]
        const rows: Profile[]  = result[0] as Profile[]
        return rows.length === 1 ? {...rows[0]} : null;
    }  catch (error) {
        throw error
    }
}