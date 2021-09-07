import {Category} from "../interfaces/Category";
import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';

export async function selectCategoryByCategoryId(categoryId: string) : Promise<Category/> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = "SELECT BIN_TO_UUID(categoryId) AS categoryId,  from catgegory WHERE categoryId = UUID_TO_BIN(:categoryId)"
        const result = await mySqlConnection.execute(mySqlQuery, {categoryId}) as RowDataPacket[]

    } catch (error) {
        throw error
    }
}