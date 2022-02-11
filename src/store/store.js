import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../slices/authSlice";
import { fetchReducer } from "../slices/fetchSlice";
import { newTweetReducer } from "../slices/newTweetSlice";

const store = configureStore({
    reducer:{auth: authReducer, fetch: fetchReducer, tweet: newTweetReducer},
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['newTweet/appendImg', 'fetch/appendNewTweet'],
        ignoredActionPaths: ["payload", "tweet.imgFile"],
      },
    }),
})

export default store;