import { useEffect } from "react";
import { useSelector } from "react-redux";
import useUsers from "../hooks/GetUsersHook";
import Image from 'next/image';
import styles from '../styles/users.module.scss';
import Link from 'next/link'

const UsersHOC = () => {
    const state = useSelector(state => state);
    const {getUsers} = useUsers();
    useEffect(() => {
        getUsers();
    }, [])
    return ( 
        <div className={styles.main_container}>
            {state.fetch.users.data?.map(item => (
                <Link href={'/user/' + item.id} key={item.id}>
                    <div className={styles.user_container}>
                            <div className={styles.userImg_container}><Image src={item.picture} layout="fill"/></div>
                            <span>{item.title + ". " + item.firstName + " " + item.lastName}</span>
                    </div>
                </Link>
            ))}
            <button onClick={() => getUsers(state.fetch.limit + 50)}>Load More</button>
        </div>
     );
}
 
export default UsersHOC;