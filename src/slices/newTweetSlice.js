import { createSlice } from "@reduxjs/toolkit";


const newTweetSlice = createSlice({
    name:'newTweet',
    initialState:{imgFile: [], description: ""},
    reducers:{
        appendDes: (state, action) => {
            state.description = action.payload;
        },
        appendImg: (state, action) => {
            state.imgFile = action.payload;

        }
    }
})

export const newTweetReducer = newTweetSlice.reducer;
export const newTweetActions = newTweetSlice.actions;