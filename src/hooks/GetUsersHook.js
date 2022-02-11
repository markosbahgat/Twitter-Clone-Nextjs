import { useState } from 'react';
import GetUsersApi from '../api/GetUsersApi.js';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActions } from '../slices/fetchSlice.js';

const useUsers = () => {
    const dispatch = useDispatch();
    const [ error, setError ] = useState(null);
    const {fetchUsers} = fetchActions;
    const state = useSelector(state => state);
    const getUsers = async (page = state.fetch.limit) => {
            try{
                const data = await GetUsersApi(page);
                const response = await data.data;
                dispatch(fetchUsers(response))

            }
            catch (error){
                setError(error);
            }
        }
        
    return {
        getUsers,
        error
    };
}
 
export default useUsers;