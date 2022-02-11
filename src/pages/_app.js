import Layout from '../components/layout/layout.component';
import '../styles/globals.scss';
import { Provider } from 'react-redux';
import store from '../store/store.js';
import App from 'next/app';
import nookies from 'nookies'
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import { useEffect } from 'react';


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const cookies = parseCookies();
  useEffect(() => {
    if(!cookies.token){
      router.push("/login")
    }
    else if(cookies.token && router.pathname === '/login'){
      router.push("/home")
    }

  }, [router.pathname, cookies.token])
    return (
      <Provider store={store}>
            <Layout>
                <Component {...pageProps}/>
            </Layout>
      </Provider>
    );
}

MyApp.getInitialProps = async (context) => {
  const cookies = nookies.get(context.ctx);
    if(context.ctx.pathname === '/'){
      if(!cookies.token){
          context.ctx.res?.writeHead(302, {
              location: "/login",
              "content-Type": "text/html; charset=utf-8",
          });
          context.ctx.res?.end();
          
        }
        else if (cookies.token){
          context.ctx.res?.writeHead(302, {
              location: "/home",
              "content-Type": "text/html; charset=utf-8",
          });
          context.ctx.res?.end();
          
      }
    }
    const appProps = await App.getInitialProps(context);
  return {...appProps};
}

export default MyApp;

