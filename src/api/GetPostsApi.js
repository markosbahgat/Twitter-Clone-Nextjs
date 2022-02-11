import axios from 'axios';


const GetPostsApi = async (page, limit) => {
        
        try{
                const response = await axios.get(`https://dummyapi.io/data/v1/post?page=${page}&&limit=${limit}`, 
                {headers:{
                    "app-id":`${process.env.NEXT_PUBLIC_APP_ID}`
                }});
                return  response; 
                             
        }
        catch (error){
                console.log(error);
        }
}


export default GetPostsApi;