import { createSlice } from "@reduxjs/toolkit";
import {httpConfig} from "../ui/shared/utils/http-config";

const slice = createSlice({
    name: "profiles",
    initialState: [],
    reducers: {
        getAllProfiles: (profiles, action) => {
            return [...profiles, ...action.payload]
        }
    }
})

export const {getAllProfiles} = slice.actions

export const fetchProfileByProfileId = (profileId) => async (dispatch) => {
    const {data} =  await httpConfig.get(`/apis/profile/${profileId}`);
    dispatch(getAllProfiles(data));
};

export default slice.reducer