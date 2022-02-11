import Head from 'next/head'
import HomeHOC from '../hoc/home.hoc'
import usePosts from '../hooks/GetPostsHook';
import {useSelector, useDispatch} from 'react-redux';
import styles from '../styles/Home.module.scss'
import { fetchActions } from '../slices/fetchSlice';

export default function Home() {

  const state = useSelector(state => state);
  const dispatch = useDispatch();
  console.log(state);
  const {getPosts} = usePosts();
  const {pageAndLimit} = fetchActions;

  const handleFetching = (e) => {
    
    if (e.target.scrollHeight - e.target.scrollTop + e.target.clientHeight <= 3000
       && e.target.scrollHeight - e.target.scrollTop + e.target.clientHeight >= 2000
       && state.fetch.limit < 100) {

        dispatch(pageAndLimit(state.fetch.limit + 20));
        getPosts();

    }
  }

  return (
    <div className={styles.container} onScroll={(e) => handleFetching(e)}>
      <Head>
        <title>Twitter | Home</title>
        <meta name="description" content="Developed By Markos Bahgat" />
        <link rel="icon" href="https://abs.twimg.com/favicons/twitter.2.ico" />
      </Head>

      <main className={styles.main}>
          <HomeHOC/>
      </main>
    </div>
  )
}
