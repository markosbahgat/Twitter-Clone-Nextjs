import axios from 'axios';


const GetTagsApi = async (limit) => {
        
        try{
                const response = await axios.get(`https://dummyapi.io/data/v1/tag?limit=${limit}`, 
                {headers:{
                    "app-id":`${process.env.NEXT_PUBLIC_APP_ID}`
                }});
                return  response; 
                             
        }
        catch (error){
                console.log(error);
        }
}


export default GetTagsApi;