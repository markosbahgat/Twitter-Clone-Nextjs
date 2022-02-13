import { createSlice } from "@reduxjs/toolkit";


const fetchSlice = createSlice({
    name:'fetch',
    initialState: { posts: [], comments: [], tags: [], users: [], latest: [], bookmarks: [], provider: {}, page: 1, limit: 20 },
    reducers:{
        fetchPosts: (state, action) => {
            if(action.payload.data.length > 20){
                state.posts.data = [...state.posts.data, ...action.payload.data.slice(state.posts.data.length, state.limit)];
                
            }else{
                state.posts = action.payload;
            }
        },
        appendNewTweet: (state, action) => {
            state.posts.data = [action.payload, ...state.posts.data];
        },
        fetchCommetns: (state, action) => {
            state.comments = action.payload;
        },
        fetchUsers: (state, action) => {
            state.users = action.payload;
        },
        fetchLatest: (state, action) => {
            state.latest = action.payload;
        },
        fetchTags: (state, action) => {
            state.tags = action.payload;
        },
        appendBookmarks: (state, action) => {
            const bookedmarkItem = state.posts.data?.filter(item => item.id === action.payload)
            const bookedmarkItemFromProvider = state.provider.postsData.data?.filter(item => item.id === action.payload)
            state.bookmarks.push(bookedmarkItem? bookedmarkItem : bookedmarkItemFromProvider);
        },
        appendProvider: (state, action) => {
            console.log(action.payload);
            state.provider = action.payload;
        },
        pageAndLimit: (state, action) => {
            if(action.payload <= 20){
                state.page = action.payload;
            }
            else if(action.payload > 20){
                state.limit = action.payload;
            }
        },
        
    }
})

export const fetchReducer = fetchSlice.reducer;
export const fetchActions = fetchSlice.actions;