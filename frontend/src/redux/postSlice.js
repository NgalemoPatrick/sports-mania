import { createSlice } from '@reduxjs/toolkit'
import { dispatch } from './store';


const initialState = {
    posts: {}
};

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        getPosts(state, action) {
            state.posts = action.payload
        }
    }
})

export function SetPOsts(post) {
    return (dispatch, getState) => {
        dispatch(postSlice.actions.getPosts(post))
    }
}

export default postSlice.reducer