import { Router } from 'express';
import {
    getAllCommentsController,
    getCommentByCommentIdController,
    getCommentByCommentProfileIdController,
    postComment,
    deleteComment
} from './comment.controller';
import { asyncValidatorController } from '../../utils/controllers/asyncValidator.controller';
import { commentValidator } from './comment.validator';
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {check} from 'express-validator';
import {checkSchema} from 'express-validator';

const router = Router();
router.route("/:commentId").get(  asyncValidatorController([
    check("tweetId", "please provide a valid tweetId").isUUID()
]), getCommentByCommentIdController)


router.route("/commentProfileId/:commentProfileId").get(  asyncValidatorController([
    check("commentProfileId", "please provide a valid commentProfileId").isUUID()
]), getCommentByCommentProfileIdController)

// Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)
router.route('/')
    .get( getAllCommentsController)
    .post(isLoggedIn, asyncValidatorController(checkSchema(commentValidator)), postComment);

export default router;