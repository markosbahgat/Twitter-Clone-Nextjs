import Image from 'next/image';
import React, { useState } from 'react';
import styles from './post.module.scss';
import Link from 'next/link';
import SpeedDial from '../speedDial/SpeedDial';

function Post({post}) {
    const [likes, setLikes] = useState(post.likes);
    return (
        <div>
            <div className={styles.post_container}>
                <Link href={'/user/' + post.owner.id}><a style={{textDecoration:"none"}}>
                    <div className={styles.identity_container}>
                        <div className={styles.avatar_container}><Image alt="#UserImg" layout='fill' priority src={post.owner.picture}/></div>
                        <div>
                            <h2>{post.owner.firstName + ' ' + post.owner.lastName}</h2>
                            <span>{post.publishDate.slice(0, 4) + "/" + post.publishDate.slice(5, 7) + "/" + post.publishDate.slice(8, 10) + " : " + post.publishDate.slice(11, 16)}</span>
                        </div>
                    </div></a>
                </Link>
                <div className={styles.post_content_container}>
                    <p className={styles.Description}>{post.text}</p>
                    <div className={styles.postImg_container}><Image layout='fill' alt="#PostImg" priority src={post.image}/></div>
                    <div className={styles.post_icons}>
                        <div className={styles.firstDiv}>
                            <i className="far fa-comment"></i>
                            <span>{post.likes +10}</span>
                        </div>
                        <div>
                            <i className="fas fa-retweet"></i>
                            <span> {post.likes + 16}</span>
                        </div>
                        <div>
                            <i className="far fa-heart" onClick={() => setLikes(likes + 1)}></i>
                            <span> {likes}</span>
                        </div>
                        <div>
                            <SpeedDial OwnerId={post.owner.id} PostId={post.id}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;