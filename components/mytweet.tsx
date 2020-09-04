import React, { useState, ChangeEvent, Props } from 'react'
import firebase from '../firebase/clientApp'

//firebaseから読み取った自分のツイートを一覧で表示する


type Prop = {
    stringifyJson:string;
};





export default  function Mytweet(prop:Prop) {
    const toJson = JSON.parse(prop.stringifyJson);
    console.log("始める")
    let count = 0;
    toJson.forEach(item => {
        console.log(item['user']['screen_name']+`\ncount=${count}~~~~~~~~~~~~~`)
        count++;
    });
        
    return(
        <div>

        </div>
    );
}