import { createSlice } from "@reduxjs/toolkit";
import {httpConfig} from "../ui/shared/utils/http-config";

const slice = createSlice({
    name: "categories",
    initialState: [],
    reducers: {
        getAllCategories: (categories, action) => {
            return action.payload
        }
    }
})

export const {getAllCategories} = slice.actions

export const fetchAllCategories = () => async (dispatch) => {
    const {data} = await httpConfig.get("/apis/category/");
    dispatch(getAllCategories(data));
};

export default slice.reducer