// Duncan Colhoun
// Cohort 34

import {Category} from "../interfaces/Category";
import {connect} from "../database.utils";
import {RowDataPacket} from "mysql2";

export async function selectAllCategories() : Promise<Category[]> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'SELECT BIN_TO_UUID(categoryId) AS categoryId, categoryName FROM category'
        const result = await mySqlConnection.execute(mySqlQuery) as RowDataPacket []
        return result[0] as Array<Category>
    } catch (error) {
        throw error
    }
}

