import {useSelector} from 'react-redux'
import styles from '../components/post/post.module.scss';
import Link from 'next/link';
import Image from 'next/image';

function BookMarks() {
    const state = useSelector(state => state);
    
    return (
        <div style={{height:"100vh", overflow:"auto", marginLeft:"10%"}}>
            <h1>All Your BookMarks</h1>
            {state.fetch.bookmarks.map(item => ( 
                item.map(post => (
                    <div className={styles.post_container} key={post.id}>
                <Link href={'/user/' + post.owner.id}><a style={{textDecoration:"none"}}>
                    <div className={styles.identity_container}>
                        <div className={styles.avatar_container}><Image layout='fill' alt='#UserImg' priority src={post.owner.picture}/></div>
                        <div>
                            <h2>{post.owner.firstName + ' ' + post.owner.lastName}</h2>
                            <span>{post.publishDate.slice(0, 4) + "/" + post.publishDate.slice(5, 7) + "/" + post.publishDate.slice(8, 10) + " : " + post.publishDate.slice(11, 16)}</span>
                        </div>
                    </div></a>
                </Link>
                <div className={styles.post_content_container}>
                    <p className={styles.Description}>{post.text}</p>
                    <div className={styles.postImg_container}><Image layout='fill' alt='#PostImg' priority src={post.image}/></div>
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
                            <i className="far fa-heart"></i>
                            <span> {post.likes}</span>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
                ))
                ))}
        </div>
    );
}

export default BookMarks;