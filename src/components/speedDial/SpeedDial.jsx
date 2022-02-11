import React from 'react';
import styles from './speedDial.module.scss';
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { fetchActions } from '../../slices/fetchSlice';
const SpeedDial = ({id}) => {
    const dispatch = useDispatch();
    const {appendBookmarks} = fetchActions;
    return ( 
        <div className={styles.speed_dial}>
            <a className={styles.toggle}><i className="fas fa-external-link-alt" id={styles.shareBtn}></i></a>
            <ul className={styles.dials}>
                <li><i className="far fa-bookmark fa-lg" onClick={() => dispatch(appendBookmarks(id))}></i></li>
                <li><i className="fas fa-link" onClick={() => {navigator.clipboard.writeText( "http://localhost:1000/user/" + id)}}></i></li>
                <li><i className="far fa-envelope fa-lg"></i></li>
            </ul>
        </div>
     );
}
 
export default SpeedDial;