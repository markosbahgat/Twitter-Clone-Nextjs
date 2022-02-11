import usePosts from '../hooks/GetPostsHook';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import useLatest from '../hooks/GetLatestHook.js';

import NewTweet from '../components/NewTweet/new-tweet.component';
import Post from '../components/post/post.component';


function HomeHOC() {
  const state = useSelector(state => state);
  const {getPosts} = usePosts();
    const {getLatest} = useLatest();
    useEffect(() => {
      getPosts();
      getLatest();
    }, [])
    return (
        <div>
        <NewTweet/>
        {state.fetch.posts.data?.map(post => (
            <Post post={post} key={post.id}/>
          ))}
        </div>
    );
}

export default HomeHOC;