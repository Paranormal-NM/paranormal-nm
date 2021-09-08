import {Schema} from 'express-validator';

export const storyValidator : Schema = {
    storyId: {
        isUUID: {
            errorMessage: 'Provide a valid Story ID.'
        }
    },

    storyProfileId: {
        isUUID: {
            errorMessage: 'Provide a valid Story Profile ID.'
        }
    },

    storyBody: {
        isLength: {
            errorMessage: 'Story cannot exceed 65,000 characters.',
            options: { max: 65535 }
        },
        trim: true,
        escape: true
    },

    storyCategoryId: {
        isUUID: {
            errorMessage: 'Provide a valid Category Profile ID.'
        }
    },

    storyLocationCity: {
        isLength: {
            errorMessage: 'City name cannot exceed 45 characters.',
            options: { min: 2, max: 45 }
        },
        trim: true,
        escape: true
    },

    storyLocationState: {
        isLength: {
            errorMessage: 'State name cannot exceed 2 characters.',
            options: {max: 2}
        },
        trim: true,
        escape: true
    },



    storyTitle: {
        isLength: {
            errorMessage: 'Title cannot exceed 45 characters.',
            options: {min: 3, max: 45}
        },
        trim: true,
        escape: true
    }
};