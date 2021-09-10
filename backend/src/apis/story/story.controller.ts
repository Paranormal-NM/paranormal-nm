import {Request, Response, NextFunction} from 'express';

// Interfaces (represent the DB model and types of the columns associated with a specific DB table)
import {Story} from '../../utils/interfaces/Story';
import {Status} from '../../utils/interfaces/Status';
import {Profile} from "../../utils/interfaces/Profile";
import {insertStory} from "../../utils/story/insertStory";
import {updateStory} from "../../utils/story/updateStory";
import {selectAllStories} from "../../utils/story/selectAllStories";
import {selectStoryByStoryId} from "../../utils/story/selectStoryByStoryId";
import {deleteStory} from '../../utils/story/deleteStory';
import {selectStoriesByCategoryId} from "../../utils/story/selectStoriesByCategoryId";
import {selectStoriesByProfileId} from "../../utils/story/selectStoriesByProfileId";

export async function getAllStoriesController(request: Request, response: Response): Promise<Response<Status>> {

    try {
        const data = await selectAllStories()
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

export async function getStoriesByStoryCategoryIdController(request : Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>>{
    try {
        const     {storyCategoryId} = request.params
        const data  = await selectStoriesByCategoryId(storyCategoryId)
        return response.json({status:200, message: null, data});
    } catch(error) {
        return response.json({
            status: 500,
            message: "",
            data: []
        })
    }
}

export async function getStoryByStoryIdController(request : Request, response: Response, nextFunction: NextFunction) : Promise<Response<Status>>{
    try {
        const     {storyId} = request.params
        const data  = await selectStoryByStoryId(storyId)
        return response.json({status:200, message: null, data});
    } catch(error) {
        return response.json({
            status: 500,
            message: "",
            data: null
        })
    }
}

export async function postStoryController(request: Request, response: Response) : Promise<Response<Status>> {
    try {

        const {storyBody, storyCategoryId, storyLocationCity, storyLocationState, storyTitle } = request.body;
        // @ts-ignore
        const profile : Profile = request.session.profile as Profile
        const storyProfileId : string = <string>profile.profileId

        const story: Story = {
            storyId: null,
            storyProfileId,
            storyBody,
            storyCategoryId,
            storyLocationCity,
            storyLocationState,
            storyTitle


        }
        console.log(story);

        const result = await insertStory(story)
        const status: Status = {
            status: 200,
            message: result,
            data: null
        };
        return response.json(status);

    } catch(error) {
        return  response.json({
            status: 500,
            message: "Error Creating story try again later.",
            data: null
        });
    }
}



export async function deleteStoryController(request: Request, response: Response) {
	try {
		const {storyId} = request.body;
		const result = await deleteStory(storyId);
		const status: Status = {status: 200, data: result, message: null}
		return response.json(status)
	} catch (error) {
		console.log(error)
	}
}


export async function putStoryController(request: Request, response: Response) : Promise<Response<Status>> {
    try {

        const {storyId, storyBody, storyCategoryId, storyLocationCity, storyLocationState, storyTitle } = request.body;
        // @ts-ignore
        const profile : Profile = request.session.profile as Profile
        const storyProfileId : string = <string>profile.profileId

        const story: Story = {
            storyId,
            storyProfileId,
            storyBody,
            storyCategoryId,
            storyLocationCity,
            storyLocationState,
            storyTitle


        }
        const result = await updateStory(story)
        const status: Status = {
            status: 200,
            message: result,
            data: null
        };
        return response.json(status);

    } catch(error) {
        console.error(error)
        return  response.json({
            status: 500,
            message: "Error updating story try again later.",
            data: null
        });
    }
}


export async function getStoriesByProfileIdController(request : Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>>{
    try {
        const     {storyProfileId} = request.params
        const data  = await selectStoriesByProfileId(storyProfileId)
        return response.json({status:200, message: null, data});
    } catch(error) {
        return response.json({
            status: 500,
            message: "",
            data: []
        })
    }
}


