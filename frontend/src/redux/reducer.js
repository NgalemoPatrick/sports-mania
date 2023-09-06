import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./postSlice";
import postSlice from "./postSlice";

const rootReducer = combineReducers({
    user: userSlice,
    posts: postSlice
})


export {rootReducer}