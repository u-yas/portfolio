import React, { useState, ChangeEvent, Props } from 'react'
import firebase from '../firebase/clientApp'
import styles from '../scss/components/mytweet.module.scss'
//firebaseから読み取った自分のツイートを一覧で表示する


type Prop = {
    screenName:any;
    name:string;
    text:string;
    photoURL:any;
    tweetID:string;
};



export default  function Mytweet(prop:Prop) {


    return(
        <div className={styles.parentTweet}>
            <div className={styles.listLeft}>
                    <img  className={styles.image} src={prop.photoURL} />
            </div>
            <div className={styles.listRight}>
                <div className={styles.nameRoot}>
                    <div className={styles.nameLabel}>
                        {prop.name}
                    </div>
                    <div className={styles.nameText}>
                        @{prop.screenName}
                    </div>
                </div>
                    
                <div className={styles.text}>
                    {prop.text}
                </div>
            </div>
        </div>
    );
}