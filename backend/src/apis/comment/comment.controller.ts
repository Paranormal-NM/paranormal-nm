import {Request, Response, NextFunction} from 'express';

// Interfaces (represent the DB model and types of the columns associated with a specific DB table)
import {Comment} from '../../utils/interfaces/Comment';
import {Status} from '../../utils/interfaces/Status';
import {Profile} from "../../utils/interfaces/Profile";
import {insertComment} from "../../utils/comment/insertComment"
import {selectAllComments} from "../../utils/comment/selectAllComments";
import {selectCommentByCommentId} from '../../utils/comment/selectCommentByCommentId';
import { deleteComment } from '../../utils/comment/deleteComment';
import  {selectCommentsByCommentProfileId} from '../../utils/comment/selectCommentsByCommentProfileId'
import { selectCommentsByCommentStoryId } from '../../utils/comment/selectCommentsByCommentStoryId';


export async function getAllCommentsController(request: Request, response: Response): Promise<Response<Status>> {

    try {
        const data = await selectAllComments()
        // return the response
        const status: Status = {status: 200, message: null, data};
        return response.json(status);
    } catch(error) {
        console.error(error)
        return response.json({
            status: 500,
            message: "",
            data: []
        })
    }
}

export async function getCommentByCommentProfileIdController(request : Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>>{
    try {
        const     {commentProfileId} = request.params
        const data  = await selectCommentsByCommentProfileId(commentProfileId)
        return response.json({status:200, message: null, data});
    } catch(error) {
        console.error(error)
        return response.json({
            status: 500,
            message: "",
            data: []
        })
    }
}

export async function getCommentByCommentStoryIdController(request : Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>>{
    try {
        const     {commentStoryId} = request.params
        const data  = await selectCommentsByCommentStoryId(commentStoryId)
        return response.json({status:200, message: null, data});
    } catch(error) {
        console.error(error)
        return response.json({
            status: 500,
            message: "",
            data: []
        })
    }
}

export async function getCommentByCommentIdController(request : Request, response: Response, nextFunction: NextFunction) : Promise<Response<Status>>{
    try {
        const     {commentId} = request.params
        const data  = await selectCommentByCommentId(commentId)
        return response.json({status:200, message: null, data});
    } catch(error) {
        console.error(error)
        return response.json({
            status: 500,
            message: "",
            data: null
        })
    }
}

export async function postComment(request: Request, response: Response) : Promise<Response<Status>> {
    try {

        const {commentBody, commentTitle, commentStoryId} = request.body;
        // @ts-ignore
        const profile : Profile = request.session.profile as Profile
        const commentProfileId : string = <string>profile.profileId

        const comment: Comment = {
            commentId: null,
            commentProfileId,
            commentBody,
            commentTitle,
            commentStoryId
        }
        const result = await insertComment(comment)
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
            message: "Error Creating comment try again later.",
            data: null
        });
    }
}



export async function deleteCommentController(request: Request, response: Response) {
	try {
		const {commentId} = request.params;
        // @ts-ignore
        const profile : Profile = request.session.profile as Profile
        const commentProfileId : string = <string>profile.profileId
		const result = await deleteComment(commentProfileId, commentId)
		// @ts-ignore
        const status: Status = {status: 200, data, message: null}
		return response.json(status)
	} catch (error) {
		console.log(error)
	}
}


