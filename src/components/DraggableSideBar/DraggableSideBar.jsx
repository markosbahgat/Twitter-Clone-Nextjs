import React, {useEffect, useState} from 'react';
import styles from './SideBar.module.scss';
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import mainlogo from './n.jpg' 
import Image from 'next/image';
import Link from 'next/link';
import { destroyCookie } from 'nookies';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';

const DraggableSideBar = () => {

    
    const router = useRouter();
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    const [active , setActive] = useState(isTabletOrMobile);
    useEffect(() => {
        setActive(!isTabletOrMobile)
    }, [isTabletOrMobile])
    const handleLogOut = () => {
        destroyCookie(null, 'token');
        router.push("/login")
    }
    return ( 
        <div>
            <div className={styles[`sidebar`]} id={styles[active? "active": null]}>
                <div className={styles.logo_content}>
                    <div className={styles.logo}>
                        <div className={styles.logo_name}>BY: Markos Bahgat</div>
                    </div>
                    <i className={active? "fab fa-twitter fa-lg" : "fas fa-bars fa-lg"} 
                    style={{color:active&& "rgb(29, 155, 240)"}} id={styles.btn} onClick={() => setActive(!active)}></i>
                </div>
                <ul className={styles.nav_list}>
                    {/*<li>
                        <i className="fas fa-search" id={styles.searchIcon}></i>
                        <input type="text" placeholder='Search....'/>
                    </li>
                    */}<li>
                        <Link href="/home">
                            <a>
                                <i className='fas fa-home fa-lg' ></i>
                                <span className={styles.links_name}>Home</span>
                            </a>
                        </Link>
                        <span className={styles.tooltip}>Home</span>
                    </li>
                    <li>
                        <Link href="/explore">
                            <a href="#">
                                <i className="fas fa-hashtag fa-lg"></i>
                                <span className={styles.links_name}>Explore</span>
                            </a>
                        </Link>
                        <span className={styles.tooltip}>Expolre</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className="far fa-bell fa-lg"></i>
                            <span className={styles.links_name}>Notification</span>
                        </a>
                        <span className={styles.tooltip}>Notification</span>
                    </li>
                    <li>
                        <Link href="/users">
                            <a href="#">
                                <i className='fas fa-user-alt fa-lg' ></i>
                                <span className={styles.links_name}>User</span>
                            </a>
                        </Link>
                        <span className={styles.tooltip}>Users</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className="far fa-envelope fa-lg"></i>
                            <span className={styles.links_name}>Messages</span>
                        </a>
                        <span className={styles.tooltip}>Messages</span>
                    </li>
                    <li>
                        <Link href="/bookmarks">
                            <a href="#">
                                <i className="far fa-bookmark fa-lg"></i>
                                <span className={styles.links_name}>Bookmarks</span>
                            </a>
                        </Link>
                        <span className={styles.tooltip}>Bookmarks</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fas fa-chart-pie fa-lg"></i>
                            <span className={styles.links_name}>Analytics</span>
                        </a>
                        <span className={styles.tooltip}>Analytics</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className="far fa-list-alt fa-lg"></i>
                            <span className={styles.links_name}>List</span>
                        </a>
                        <span className={styles.tooltip}>List</span>
                    </li>
                    <li hidden={!active}>
                        <a href="#">
                            <i className="fas fa-ellipsis-h fa-lg"></i>
                            <span className={styles.links_name}>More</span>
                        </a>
                        <span className={styles.tooltip}>More</span>
                    </li>
                </ul>
                <div className={styles.profile_content}>
                    <div className={styles.profile}>
                        <div className={styles.profile_details}>
                            <div className={styles.avatarImg}>
                                <Image src={mainlogo} alt='' layout='responsive'/>
                            </div>
                            <div className={styles.name_job}>
                                <div className={styles.name}>Markos Bahgat</div>
                                <div className={styles.job}>Web Designer</div>
                            </div>
                        </div>
                        <i className="fas fa-sign-out-alt fa-lg" id={styles.log_out} onClick={() => handleLogOut()}></i>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default DraggableSideBar;