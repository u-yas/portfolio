import React, { Component } from 'react';
import firebaseAuth from 'firebase/auth';
import firebaseApp from 'firebase/app';
import  UserContextComp, { useUser }  from '../context/userContext';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Icon, Button, makeStyles } from '@material-ui/core';
import firebase from '../firebase/clientApp';
import styles from '../scss/header.module.scss';


// Propでそれを用意して受け取れるようにする

type contents = {
    //textは本文、コンポーネントはtwitter loginボタンとか、imageは<img />のコンポーネント
    text:string,
    component:JSX.Element|null,

}

export default function Header(props:contents){
    let propComponent:JSX.Element;
    if(props.component==null){

    }else{
       propComponent  = props.component
    }

    return(
        <div className={styles.headerRoot}>
            <div className={styles.headerLeft}>
                    <img  className={styles.headerImg} src="../static/idcd3C87_400x400.png" />
                <div className={styles.headerComponent}>
                    {/* 　受け取ったpropsの中身のコンポーネントがnullならレンダリングしない　*/}
                    {props.component==null ? null:props.component}
                </div>
            </div>
            <div className={styles.headerRight}>
                <div className={styles.headerText}>
                    {props.text}
                </div>
            </div>
        </div>
    );
}