import {Request, Response, NextFunction} from 'express';

// Interfaces (represent the DB model and types of the columns associated with a specific DB table)
import {Category} from '../../utils/interfaces/Category';
import {Status} from '../../utils/interfaces/Status';
import {selectCategoryByCategoryId} from '../../utils/Category/selectCategoryByCategoryId';


export async function getCategoryByCategoryIdController(request : Request, response: Response, nextFunction: NextFunction) : Promise<Response<Status>>{
    try {
        const     {categoryId} = request.params
        const data  = await selectCategoryByCategoryId(categoryId)
        return response.json({status:200, message: null, data});
    } catch(error) {
        return response.json({
            status: 500,
            message: "",
            data: null
        })
    }
}





