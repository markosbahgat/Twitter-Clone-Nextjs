import React, { useState } from 'react';
import SignUpApi from '../api/signUpApi.js';
import { useRouter } from 'next/router';
import { parseCookies, setCookie } from 'nookies';


const useSignUp = () => {
    const cookies = parseCookies()
    console.log({ cookies })
    const [ error, setError ] = useState(null);
    const router = useRouter();
    const signUp = async (email, password) => {
            try{
                const data = await SignUpApi(email, password);
                const response = await data.data;
                localStorage.setItem("token", response.accessToken)
                setCookie(null, 'token', response.accessToken, {
                    maxAge: 30 * 24 * 60 * 60,
                    path: '/',
                  })
                if (data.status == 201) {
                    router.push("/home")
                }
                
            }
            catch (error){
                setError(error);
            }

        }
    return {
        signUp,
        error
    };
}
 
export default useSignUp;