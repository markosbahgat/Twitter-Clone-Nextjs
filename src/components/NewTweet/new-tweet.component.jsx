import Image from 'next/image';
import logo from './n.jpg';
import styles from './new-tweet.module.scss';
import { useForm } from "react-hook-form";
import UploadMultiPic from '../UploadMultiPicture/UploadMultiPicture';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newTweetActions } from '../../slices/newTweetSlice';
import { useMediaQuery } from 'react-responsive';
import {fetchActions} from '../../slices/fetchSlice.js';

function NewTweet() {
    const state = useSelector(state => state);
    const isPhone = useMediaQuery({query: "(max-width: 1224px)"});
    const dispatch = useDispatch();
    const {appendDes} = newTweetActions;
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {appendNewTweet} = fetchActions;
    const onSubmit = data => {
        document.getElementById("DesInput").value = '';
        const fullData = {
            id:"60d0fe4f5311236168a10a1945",
            image:state.tweet.imgFile.target.result,
            likes:2,
            publishDate: "2020-05-20T07:57:54.421Z",
            text: data.tweetText,
            owner:{
                firstName: "Markos",
                id: "60d0fe4f5311236168a10a19",
                lastName: "Bahgat",
                picture: logo,
                title: "Mr",
            }
        }
        console.log(fullData);
        dispatch(appendNewTweet(fullData))

    };
    const HandleTextare = (e) => {
        e.target.style.height = isPhone? "40px" : '60px';
        let scHeight = e.target.scrollHeight;
        e.target.style.height = `${scHeight}px`;
      };
      const [text, setText] = useState("");
      const handleOpenCamera = () => {
        var onFailSoHard = function(e) {
            console.log('Reeeejected!', e);
          };
        
          navigator.getUserMedia({video: true, audio: true}, function(localMediaStream) {
              console.log(localMediaStream)
        
        }, onFailSoHard);
    }
    const[center, setCenter] = useState();
    
      const geouccess = (position) => {
          const coords = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
          }
          setCenter(coords);
      };
      const geoError = (error) => {
        switch(error.code) {
          case error.TIMEOUT:
            console.log(error.message);
            break;
        }
      };
      const handleClick = () =>{
          navigator.geolocation.getCurrentPosition(geouccess, geoError, {enableHighAccuracy: true, maximumAge: 10000, timeout:5000});
      }
    return (
        <div>
            <div className={styles.tweet_container}>
                <h2>Home</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.first_container}>
                        <div className={styles.img_container}>
                            <Image src={logo} alt="#UserImg" layout="responsive"/>
                        </div>
                        <div className={styles.input_container}><textarea onKeyUp={(e) => HandleTextare(e)} placeholder="What's Happening?" {...register("tweetText")} id="DesInput"></textarea></div>
                    </div>

                    <hr/>
                        {errors.tweetText && <font color='red'>* This field is required</font>}
                        <input type="submit" hidden id='formsubmit'/>
                </form>

                    <div className={styles.buttons_container}>
                        <div>
                            <UploadMultiPic/>
                            <i className="fas fa-video" onClick={handleOpenCamera}></i>
                            <i className="far fa-calendar-alt"></i>
                            <i className="fas fa-map-marker-alt" onClick={handleClick}></i>
                        </div>
                        <div>
                            <button ><label htmlFor='formsubmit' type='submit'>Tweet</label></button>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default NewTweet;