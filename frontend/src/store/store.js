import stories from "./stories";

import {configureStore,combineReducers} from '@reduxjs/toolkit'
import profiles from "./profiles";
const reducer = combineReducers({stories, profiles})
export default configureStore({reducer});