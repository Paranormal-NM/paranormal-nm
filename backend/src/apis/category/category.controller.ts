import {Request, Response, NextFunction} from 'express';

// Interfaces (represent the DB model and types of the columns associated with a specific DB table)

import {Status} from '../../utils/interfaces/Status';
import {selectCategoryByCategoryId} from '../../utils/category/selectCategoryByCategoryId';
import {selectAllCategories} from "../../utils/category/selectAllCategories";


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

export async function getAllCategoriesController(request: Request, response: Response): Promise<Response<Status>> {

    try {
        const data = await selectAllCategories()
        // return the response
        const status: Status = {status: 200, message: null, data};
        return response.json(status);
    } catch(error) {
        return response.json({
            status: 500,
            message: "",
            data: []
        })
    }
}





