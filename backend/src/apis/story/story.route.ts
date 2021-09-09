import { Router } from 'express';
import {
    getAllStoriesController,
    getStoriesByProfileIdController,
    getStoryByStoryIdController,
    postStoryController,
    deleteStoryController,
    putStoryController, getStoriesByStoryCategoryIdController
} from './story.controller';
import { asyncValidatorController } from '../../utils/controllers/asyncValidator.controller';
import { storyValidator } from './story.validator';
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {check} from 'express-validator';
import {checkSchema} from 'express-validator';


const storyRoute = Router();
storyRoute.route("/:storyId").get(  asyncValidatorController([
    check("storyId", "please provide a valid storyId").isUUID()
]), getStoryByStoryIdController)


storyRoute.route("/storyProfileId/:storyProfileId").get(  asyncValidatorController([
    check("storyProfileId", "please provide a valid storyProfileId").isUUID()
]), getStoriesByProfileIdController)

// Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)
storyRoute.route('/')
    .get( getAllStoriesController)
    .post(isLoggedIn, asyncValidatorController(checkSchema(storyValidator)), postStoryController);

storyRoute.route("/storyCategoryId/:storyCategoryId").get(  asyncValidatorController([
    check("storyCategoryId", "please provide a valid storyCategoryId").isUUID()
]), getStoriesByStoryCategoryIdController)

storyRoute.route("/storyId/:storyId").put(isLoggedIn, asyncValidatorController(checkSchema(storyValidator)),
putStoryController)

storyRoute.route("/storyId/:storyId").delete(isLoggedIn, asyncValidatorController( [check("storyCategoryId", "please provide a valid storyId").isUUID()
]), deleteStoryController)


export default storyRoute;