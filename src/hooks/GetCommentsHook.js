import { useState } from 'react';
import GetCommentsApi from '../api/GetCommentsApi.js';
import { useDispatch } from 'react-redux';
import { fetchActions } from '../slices/fetchSlice.js';

const useComments = () => {
    const dispatch = useDispatch();
    const [ error, setError ] = useState(null);
    const {fetchCommetns} = fetchActions;
    const getComments = async (postId) => {
            try{
                const data = await GetCommentsApi(postId);
                const response = await data.data;
                dispatch(fetchCommetns(response))

            }
            catch (error){
                setError(error);
            }
        }
        
    return {
        getComments,
        error
    };
}
 
export default useComments;