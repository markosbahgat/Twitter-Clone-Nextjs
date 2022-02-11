import styles from '../styles/errorPage.module.scss';
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import Link from 'next/link';

function Error404() {
    const router = useRouter();
    useEffect(()=> {
        setTimeout(()=> {
            router.push("/home");
        }, 5000)
    }, [router])
    return (
        <div>
            <main className={styles.main}>
                <h1>
                    Oops, the page you are looking for is not found.
                </h1>
                <div style={{display:"flex", alignItems:"center",gap:"3%", marginTop:"20px", width:"26%"}}>
                    <button className={styles.Home_button}><Link href="/home"><a>Go Home</a></Link></button>
                    <button className={styles.Profile_button}><Link href="/"><a>Visit Profile</a></Link></button>
                </div>
            </main>
        </div>
    );
}

export default Error404;