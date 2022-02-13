import SignUpForm from "../components/SignUpForm/SignUpForm.component";
import Head from 'next/head';


function Login() {
    return (
        <div>
            <Head>
                <title>Twitter | Registration</title>
                <meta name="description" content="Developed By Markos Bahgat" />
                <link rel="icon" href="https://abs.twimg.com/favicons/twitter.2.ico" />
            </Head>
           <SignUpForm/>
        </div>
    );
}

export default Login;