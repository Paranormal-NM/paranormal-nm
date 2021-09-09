import {Schema} from 'express-validator';

export const commentValidator : Schema = {
    commentProfileId: {
        isUUID: {
            errorMessage: 'please provide a valid commentProfileId'
        }
    },
    commentBody: {
        isLength: {
            errorMessage: 'a comment cannot be longer than 140 characters',
            options: { max: 140 }
        },
        trim: true,
        escape: true
    },
    commentTitle: {
        toDate: true
    }
};