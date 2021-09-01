import {Category} from "../interfaces/Category";
import {connect} from "../database.utils";
import {ResultSetHeader, RowDataPacket} from 'mysql2';

export async function insertTweet(tweet: Category) : Promise<string> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO category(categoryId, categoryName ) VALUES(UUID_TO_BIN(UUID()), categoryName :categoryName )";

        const [result]= await mySqlConnection.execute(mySqlQuery, category) as [ResultSetHeader, RowDataPacket]
        return "Category created successfully"
    } catch (error) {
        throw error
    }
}