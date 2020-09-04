import React, { Component } from 'react';
import firebaseAuth from 'firebase/auth';
import firebaseApp from 'firebase/app';
import  UserContextComp, { useUser }  from '../context/userContext';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Icon, Button, makeStyles } from '@material-ui/core';
import firebase from '../firebase/clientApp'


// ページごとに違うコンテンツを乗っける。（ログインしてなければログインボタンを乗っける）
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
        <div className="header-root">
            <div className="header-left">
                    <img  className="header-img" src="../static/idcd3C87_400x400.png" />
                <div className="header-component">
                    {/* 　受け取ったpropsの中身のコンポーネントがnullならレンダリングしない　*/}
                    {props.component==null ? null:props.component}
                </div>
            </div>
            <div className="header-right">
                <div className="header-text">
                    {props.text}
                </div>
            </div>
        </div>
    );
}