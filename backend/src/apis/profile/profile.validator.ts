import {Schema} from "express-validator";

export const profileValidator : Schema = {
    profileId: {
        isUUID: {
            errorMessage: 'Please provide a valid ProfileId'
        }
    },
    profileUsername: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'Username must be between seven and thirty two characters',
            options: {min:7, max: 32 }
        }
    },


    profileEmail: {
        isEmail: {
            errorMessage: 'Please provide a valid email'
        },
        trim: true
    },

};