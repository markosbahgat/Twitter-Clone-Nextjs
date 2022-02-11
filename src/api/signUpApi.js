import axios from 'axios';

const SignUpApi = async (email, password) => {
        
        try{
                const response = await axios.post(`${process.env.NEXT_PUBLIC_SIGN_UP_API_BASE_URL}/auth/user/sign-up`, {email, password});
                return  response; 
        }
        catch (error){
                console.log(error);
        }
}


export default SignUpApi;