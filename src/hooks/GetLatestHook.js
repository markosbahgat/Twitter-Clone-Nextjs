import React, { useState } from 'react';
import GetPostsApi from '../api/GetPostsApi.js';
import { useDispatch } from 'react-redux';
import { fetchActions } from '../slices/fetchSlice.js';

const useLatest = () => {
    const dispatch = useDispatch();
    const [ error, setError ] = useState(null);
    const {fetchLatest} = fetchActions;
    const getLatest = async () => {
            try{
                const data = await GetPostsApi(5);
                const response = await data.data;
                dispatch(fetchLatest(response))

            }
            catch (error){
                setError(error);
            }
        }
        
    return {
        getLatest,
        error
    };
}
 
export default useLatest;