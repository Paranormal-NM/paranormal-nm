import {Request, Response, NextFunction} from 'express';

// Interfaces (represent the DB model and types of the columns associated with a specific DB table)
import {Comment} from '../../utils/interfaces/Comment';
import {Status} from '../../utils/interfaces/Status';
import {Profile} from "../../utils/interfaces/Profile";
import {insertComment} from "../../utils/comment/insertComment"
import {selectAllComments} from "../../utils/comment/selectAllComments";
<<<<<<< HEAD:backend/src/apis/Comment/comment.controller.ts
import {selectCommentsByCommentProfileId} from "../../utils/comment/selectCommentByCommentProfileId";
=======
import {selectCommentsByCommentProfileId} from "../../utils/Comment/selectCommentByCommentProfileId";
>>>>>>> 0f1916b015b5ed9e3e281d68814a6a110106d62b:backend/src/apis/comment/comment.controller.ts
import {selectCommentByCommentId} from '../../utils/comment/selectCommentByCommentId';
import {deleteComment} from '../../utils/comment/deleteComment'

export async function getAllCommentsController(request: Request, response: Response): Promise<Response<Status>> {

    try {
        const data = await selectAllComments()
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

export async function getCommentByCommentProfileIdController(request : Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>>{
    try {
        const     {commentProfileId} = request.params
        const data  = await selectCommentsByCommentProfileId(commentProfileId)
        return response.json({status:200, message: null, data});
    } catch(error) {
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
        return response.json({
            status: 500,
            message: "",
            data: null
        })
    }
}

export async function postComment(request: Request, response: Response) : Promise<Response<Status>> {
    try {

        const {commentBody} = request.body;
        const profile : Profile = request.session.profile as Profile
        const commentProfileId : string = <string>profile.profileId

        const comment: Comment = {
            commentId: null,
            commentProfileId,
            commentBody,
            commentTitle
        }
        const result = await insertComment(comment)
        const status: Status = {
            status: 200,
            message: result,
            data: null
        };
        return response.json(status);

    } catch(error) {
        return  response.json({
            status: 500,
            message: "Error Creating comment try again later.",
            data: null
        });
    }
}



export async function deleteComment(request: Request, response: Response) {
	try {
		const {commentId} = request.body;
		const result = await deleteComment(commentId)
		const status: Status = {status: 200, data, message: null}
		return response.json(status)
	} catch (error) {
		console.log(error)
	}
}
