import React, { useState, ChangeEvent, Props } from 'react'
import firebase from '../firebase/clientApp'

//firebaseから読み取った自分のツイートを一覧で表示する


type Prop = {
    stringifyJson:string;
};



export default  function Mytweet(prop:Prop) {
    // [   
    //     {
    //         "a":1,
    //         "b":{
    //             "c":"hoge"
    //         }
    //     },
    //     {
    //         "a":20,
    //         "b":{
    //             "c":"fuga"
    //         }
    //     }
    // ]
    // のとき、"a":1がほしければ、json[0]["a"]
    // "b":{"c":"fuga"}がほしいとき、json[1]["b"]["c"]
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