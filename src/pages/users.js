
import UsersHOC from "../hoc/users.hoc";
import Head from "next/head";

function users() {
    
    return (
        <div style={{marginLeft:"10%", overflow:"auto", height:"100vh"}}>
            <Head>
                <title>Twitter | All Users</title>
                <meta name="description" content="Developed By Markos Bahgat" />
                <link rel="icon" href="https://abs.twimg.com/favicons/twitter.2.ico" />
            </Head>
            <UsersHOC/>
        </div>
    );
}

export default users;