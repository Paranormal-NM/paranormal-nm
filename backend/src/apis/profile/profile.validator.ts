import {Schema} from "express-validator";

export const profileValidator : Schema = {
    profileId: {
        isUUID: {
            errorMessage: 'Please provide a valid ProfileId'
        }
    },

    profileLocationCity: {
        isLength: {
            errorMessage: 'City name cannot exceed 45 characters.',
            options: {min: 2, max: 45}
        },
        trim: true,
        escape: true
    },

    profileLocationState: {
        isLength: {
            errorMessage: 'State name cannot exceed 2 characters.',
            options: {max: 2}
        },
        trim: true,
        escape: true
    },

    profileUsername: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'Username must be between 7 and 32 characters',
            options: {min: 7, max: 32}
        }
    },

    profileEmail: {
        isEmail: {
            errorMessage: 'Please provide a valid Email Address',
        },
        isLength: {
            errorMessage: 'Email Address must not exceed 45 characters',
            options: {min: 7, max: 45}
        },
        trim: true
    }
};