import axios from 'axios';


const GetCommentsApi = async (postId) => {
        
        try{
                const response = await axios.get(`https://dummyapi.io/data/v1/post/${postId}/comment?limit=10`, 
                {headers:{
                    "app-id":`${process.env.NEXT_PUBLIC_APP_ID}`
                }});
                return  response; 
                             
        }
        catch (error){
                console.log(error);
        }
}


export default GetCommentsApi;