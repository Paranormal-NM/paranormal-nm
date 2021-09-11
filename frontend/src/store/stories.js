import { createSlice } from "@reduxjs/toolkit";
import {httpConfig} from "../ui/shared/utils/http-config";
import _ from "lodash"
import {fetchProfileByProfileId, getProfileByProfileId} from "./profiles";

const slice = createSlice({
    name: "stories",
    initialState: [],
    reducers: {
        getAllStories: (stories, action) => {
            return action.payload
        }
    }
})

const storySlice = createSlice({
    name: "singleStory",
    initialState: [],
    reducers: {
    getStoryByStoryId: (story, action) => {
        return action.payload
    }
}
})




export const {getAllStories} = slice.actions
export const {getStoryByStoryId} = slice.actions

export const fetchAllStories = () => async (dispatch) => {
    const {data} =  await httpConfig.get("/apis/story/");
    dispatch(getAllStories(data));
};

export const fetchStoryByStoryId = (id) => async (dispatch, getState) => {
    const state = getState()
    console.log (state)
    // const {data} = await httpConfig.get(`/apis/story/${id}`)
    // dispatch(getStoryByStoryId(data))

}

export const fetchAllStoriesAndProfiles = () => async (dispatch, getState) => {
    await dispatch(fetchAllStories())
    const profileIds = _.uniq(_.map(getState().stories, "storyProfileId"))
    profileIds.forEach(profileId => dispatch(fetchProfileByProfileId(profileId)))
}

export default slice.reducer