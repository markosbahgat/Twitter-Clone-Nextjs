import { useState } from 'react';
import GetTagsApi from '../api/GetTagsApi.js';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActions } from '../slices/fetchSlice.js';

const useTags = () => {
    const dispatch = useDispatch();
    const [ error, setError ] = useState(null);
    const {fetchTags} = fetchActions;
    const state = useSelector(state => state);
    const getTags = async () => {
            try{
                const data = await GetTagsApi(state.fetch.limit);
                const response = await data.data;
                dispatch(fetchTags(response))

            }
            catch (error){
                setError(error);
            }
        }
        
    return {
        getTags,
        error
    };
}
 
export default useTags;