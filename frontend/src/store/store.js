import stories from "./stories";

import {configureStore,combineReducers} from '@reduxjs/toolkit'
import profiles from "./profiles";
import auth from "./auth";
import categories from "./categories"
const reducer = combineReducers({stories, categories, auth, profiles})
export default configureStore({reducer});