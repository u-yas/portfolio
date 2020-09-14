import React, { useState, ChangeEvent, Props } from 'react'
import firebase from '../firebase/clientApp'
import styles from '../scss/components/mytweet.module.scss'
import { Tweet } from '../types/tweet';
import Replie from './replie';
//firebaseから読み取った自分のツイートを一覧で表示する


type Prop = {
    stringifyJson:string
};
function rendeReplie(json:Tweet){
    let list = [];
    for(let i in json){
        list.push(
            <li>
                <Replie  screenName={json[i].user.screen_name}
                            name={json[i].user.name} 
                            photoURL={json[i].user.profile_image_url} 
                            text={json[i].text} 
                />
            </li>
        )
    }
    return list;
}

export default  function Replies(prop:Prop) {
    const toJson = JSON.parse(prop.stringifyJson);
    
    return(
            <ul>
                {rendeReplie(toJson)}
            </ul>
    );
}