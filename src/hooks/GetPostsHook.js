import React, { useState } from 'react';
import GetPostsApi from '../api/GetPostsApi.js';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActions } from '../slices/fetchSlice.js';

const usePosts = () => {
    const dispatch = useDispatch();
    const [ error, setError ] = useState(null);
    const {fetchPosts} = fetchActions;
    const state = useSelector(state => state);
    const getPosts = async () => {
            try{
                const data = await GetPostsApi(state.fetch.page, state.fetch.limit);
                const response = await data.data;
                dispatch(fetchPosts(response))

            }
            catch (error){
                setError(error);
            }
        }
        
    return {
        getPosts,
        error
    };
}
 
export default usePosts;