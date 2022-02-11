import React, {useState} from 'react';
import styles from './UploadMultiPic.module.scss';
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import { useDispatch } from 'react-redux';
import { newTweetActions } from '../../slices/newTweetSlice';

const UploadMultiPic = () => {
    const dispatch = useDispatch();
    const [imgUrls, setImgUrls] = useState([]);
    const {appendImg} = newTweetActions;
    const handleChange = (e) => {
        Array.prototype.map.call((e.target.files) , (item) => {
            const reader = new FileReader();
            reader.onload = function (item){
                const result = reader.result;
                dispatch(appendImg(item))
                    setImgUrls(imgUrls => [...imgUrls, result]);
                }
                reader.readAsDataURL(item)
            })
    }
    const handleDelete = (e) => {
        console.log(e.target.parentElement.attributes.name.nodeValue)
        setImgUrls(imgUrls.filter(item => item !== e.target.parentElement.attributes.name.nodeValue));
    }
    const handleOpenUpload = (e) => {
        e.target.parentElement.parentElement.lastElementChild.click();
    }
    return ( 
        <div>
            <div className={styles.container}> 
                <div>
                    <button id={styles.custom_btn}><i onClick={e => handleOpenUpload(e)} className="far fa-image"></i></button>
                    <input id={styles.default_btn} type="file" onChange={e =>  handleChange(e)} hidden/>
                </div>
            </div>
        </div>
     );
}
 
export default UploadMultiPic;