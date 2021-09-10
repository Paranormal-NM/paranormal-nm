import {Schema} from 'express-validator';

export const commentValidator : Schema = {
    commentProfileId: {
        isUUID: {
            errorMessage: 'please provide a valid commentProfileId'
        }
    },
    commentBody: {
        isLength: {
            errorMessage: 'a comment cannot be longer than 3000 characters',
            options: { max: 3000 }
        },
        trim: true,
        escape: true
    },
    commentTitle: {
        isLength: {
            errorMessage: 'Comment title connot be longer than 45 characters.',
            options: { max: 45 }
        },
        trim: true,
        escape: true

    }
};