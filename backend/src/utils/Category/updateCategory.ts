import {Category} from "../interfaces/Category";
import {connect} from "../database.utils";
import {ResultSetHeader, RowDataPacket} from 'mysql2';

export async function updateProfile(category: Category): Promise<string>  {
    try {
        const mysqlConnection = await connect();
        const query : string = 'UPDATE category SET categoryName = :categoryName WHERE categoryId = UUID_TO_BIN(:categoryId)';
        await mysqlConnection.execute(query, category)
        return 'Category successfully updated'
    } catch (error) {
        throw error
    }
}