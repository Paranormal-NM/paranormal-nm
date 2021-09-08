import { Router } from 'express';
import {
    getOneStoryController,
    getAllStoryController,
    putUpdateStoryController,
    postStory

} from './story.controller';
import { asyncValidatorController } from '../../utils/controllers/asyncValidator.controller';
import { storyValidator } from './story.validator';
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {check} from 'express-validator';
import {checkSchema} from 'express-validator';

const router = Router();
router.route("/:tweetId").get(  asyncValidatorController([
    check("storyId", "please provide a valid storyId").isUUID()
]), getStoryByStoryIdController)


router.route("/storyProfileId/:storyProfileId").get(  asyncValidatorController([
    check("storyProfileId", "please provide a valid storyProfileId").isUUID()
]), getStoryByStoryIdController)

// Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)
router.route('/')
    .get( getAllStoryController)
    .post(isLoggedIn, asyncValidatorController(checkSchema(storyValidator)), postStory);

export default router;