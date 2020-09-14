import React, { useState, ChangeEvent, Props } from 'react'
import firebase from '../firebase/clientApp'
import styles from '../scss/components/mytweet.module.scss'
//firebaseから読み取った自分のツイートを一覧で表示する


type Prop = {
    screenName:string;
    name:string;
    text:string;
    photoURL:string;
};

function shareTweet(repliData:any){
    //ツイート共有機能を使って
    // #ゴミッター #セクハラ　などをつけてツイートさせる


}


export default  function Replie(prop:Prop) {

        console.log(prop.text);
    return(
        <div className={styles.root}>
            <div className={styles.rootLeft}>
                <div className={styles.icon}>
                    <img src={prop.photoURL} />
                </div>
            </div>
            <div className={styles.rootRight}>
                <div className={styles.name}>
                    {prop.name}
                </div>
                <div className={styles.screenName}>
                    {prop.screenName}
                </div>
                <div className={styles.text}>
                    {prop.text}
                </div>
                <div className={styles.sharebutton}>

                </div>
                <div className={styles.category}>

                </div>
            </div>
        </div>
    );
}