import { Router } from 'express';
import {
    getAllCategoriesController,
    getCategoryByCategoryIdController
} from './category.controller';
import { asyncValidatorController } from '../../utils/controllers/asyncValidator.controller';
import { categoryValidator } from './category.validator';
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {check} from 'express-validator';
import {checkSchema} from 'express-validator';

const categoryRoute = Router();
categoryRoute.route("/:categoryId").get(  asyncValidatorController([
    check("categoryId", "please provide a valid categoryId").isUUID()
]), getCategoryByCategoryIdController)


// Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)
categoryRoute.route('/')
    .get( getAllCategoriesController)

export default categoryRoute;