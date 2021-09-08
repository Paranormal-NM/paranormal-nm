import {Request, Response, NextFunction} from 'express';

// Interfaces (represent the DB model and types of the columns associated with a specific DB table)
import {Story} from '../../utils/interfaces/Story';
import {Status} from '../../utils/interfaces/Status';
import {Profile} from "../../utils/interfaces/Profile";
import {insertStory} from "../../utils/story/insertStory"
import {selectAllStories} from "../../utils/story/selectAllStories";
import {selectStoryByStoryId} from "../../utils/story/selectStoryByStoryId";
import {deleteStory} from '../../utils/story/deleteStory';
import {selectStoriesByCategoryId} from "../../utils/story/selectStoriesByCategoryId";

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

export async function getStoriesByCategoryIdController(request : Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>>{
    try {
        const     {categoryId} = request.params
        const data  = await selectStoriesByCategoryId(categoryId)
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

export async function postStory(request: Request, response: Response) : Promise<Response<Status>> {
    try {

        const {tweetContent} = request.body;
        const profile : Profile = request.session.profile as Profile
        const tweetProfileId : string = <string>profile.profileId

        const story: Story = {
            storyId: null,
            storyProfileId,
            tweetContent,
            tweetDate: null
        }
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
            message: "Error Creating tweet try again later.",
            data: null
        });
    }
}



// export async function deleteTweet(request: Request, response: Response) {
// 	try {
// 		const {tweetId} = request.body;
// 		const result = await deleteTweet(tweetId)
// 		const status: Status = {status: 200, data, message: null}
// 		return response.json(status)
// 	} catch (error) {
// 		console.log(error)
// 	}
// }