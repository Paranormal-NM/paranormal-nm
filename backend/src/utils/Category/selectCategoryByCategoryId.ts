import {Category} from "../interfaces/Category";
import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';

export async function selectCategoryByCategoryId(categoryId: string) : Promise<Category|null> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = "SELECT BIN_TO_UUID(categoryId) AS categoryId, categoryName FROM catgegory WHERE categoryId = UUID_TO_BIN(:categoryId)"
        const result = await mySqlConnection.execute(mySqlQuery, {categoryId}) as RowDataPacket[]
        const category : Array<Category> = result[0] as Array<Category>
        return category.length === 1 ? {...category[0]} : null;
    } catch (error) {
        throw error
    }
}