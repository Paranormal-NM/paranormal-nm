import { Router } from 'express';
import {
    getCategoryByCategoryIdController
} from './category.controller';
import { asyncValidatorController } from '../../utils/controllers/asyncValidator.controller';
import { tweetValidator } from './category.validator';
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {check} from 'express-validator';
import {checkSchema} from 'express-validator';

const router = Router();
router.route("/:categoryId").get(  asyncValidatorController([
    check("tweetId", "please provide a valid tweetId").isUUID()
]), getCategoryByCategoryIdController)


// Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)
router.route('/')
    .get( getCategoryByCategoryIdController)

export default router;