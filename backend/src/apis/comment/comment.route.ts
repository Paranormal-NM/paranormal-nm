import { Router } from 'express';
import {
    getAllCommentsController,
    getCommentByCommentIdController,
    getCommentByCommentProfileIdController,
    postComment,
    deleteCommentController,
    getCommentByCommentStoryIdController
} from './comment.controller';
import { asyncValidatorController } from '../../utils/controllers/asyncValidator.controller';
import { commentValidator } from './comment.validator';
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {check} from 'express-validator';
import {checkSchema} from 'express-validator';

const router = Router();

router.route('/')
    .get( getAllCommentsController)
    .post(isLoggedIn, asyncValidatorController(checkSchema(commentValidator)), postComment);

router.route("/:commentId").get(  asyncValidatorController([
    check("commentId", "please provide a valid commentId").isUUID()
]), getCommentByCommentIdController)


router.route("/commentProfileId/:commentProfileId").get(  asyncValidatorController([
    check("commentProfileId", "please provide a valid commentProfileId").isUUID()
]), getCommentByCommentProfileIdController)

router.route("/commentStoryId/:commentStoryId").get(  asyncValidatorController([
    check("commentStoryId", "please provide a valid commentStoryId").isUUID()
]), getCommentByCommentStoryIdController)

// router.route("/:commentId").delete( isLoggedIn,  asyncValidatorController([
//     check("commentId", "please provide a valid commentId").isUUID()
// ]), deleteCommentController)

// Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)

export default router;