import {Schema} from 'express-validator';

export const categoryValidator : Schema = {
    categoryId: {
        isUUID: {
            errorMessage: 'please provide a valid categoryId'
        }
    }
}