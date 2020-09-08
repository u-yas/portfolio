import React, { useState, ChangeEvent, Props } from 'react'
import firebase from '../firebase/clientApp'
import Mytweet from '../components/mytweet'
import {Cookies,useCookies} from 'react-cookie'
import {GetServerSideProps, NextPageContext} from 'next'
import {parseCookies} from 'nookies'
//firebaseから読み取った自分のツイートを一覧で表示する

type Prop = {
    stringifyData:string;
}



export default  function Mytweets({stringifyData}:Prop) {
    
    
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
    let count = 0;
    // const toJson = JSON.parse(stringifyData)
    // toJson.forEach(item => {
    //     console.log(item['user']['screen_name']+`\ncount=${count}~~~~~~~~~~~~~`)
    //     count++;
    // });
        
    return(
        <ul>
            {/* {toJson.forEach(item => {
            <li>
              <Mytweet  screenName={item["user"]["screen_name"]}
                        name={item["user"]["name"]} 
                        photoURL={item["user"]["profile_image_url"]} 
                        text={item["text"]} 
                        tweetID={item["id_str"]} />
            </li>
            })} */}
        </ul>
    );
}

export async function getServerSideProps(ctx:NextPageContext)  {
    const cookie = parseCookies(ctx);

    const res = await fetch('http://localhost:3000/api/tweets/getMyTweets', {
        credentials:'include',
        method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(cookie),
        })
    
    const data = await res.text().catch((error)=>console.log(`サーバーサイドプロップス=${error}`));
    const stringifyData = JSON.stringify(data);
    return {
        props:{
            stringifyData,
        }
    }
}