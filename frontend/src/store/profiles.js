import { createSlice } from "@reduxjs/toolkit";
import {httpConfig} from "../ui/shared/utils/http-config";

const slice = createSlice({
    name: "profiles",
    initialState: [],
    reducers: {
        getProfileByProfileId: (profiles, action) => {
            profiles.push(action.payload)
        }
    }
})

export const {getProfileByProfileId} = slice.actions

export const fetchProfileByProfileId = (profileId) => async dispatch => {
    const {data} =  await httpConfig(`/apis/profile/${profileId}`);
    dispatch(getProfileByProfileId(data))
};

export default slice.reducer