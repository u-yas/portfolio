import React, { useState, ChangeEvent, Props } from 'react'
import firebase from '../firebase/clientApp'
import Mytweet from '../components/mytweet'
import {GetServerSideProps,  NextApiRequest, NextPageContext} from 'next'
import {parseCookies} from 'nookies'
import Replies from '../components/replies'
import Menubar from '../components/menubar'
import Header from '../components/header'
import {Tweet, User} from '../types/tweet'
//firebaseから読み取った自分のツイートを一覧で表示する




export default  function Mytweets({stringifyData,cookie}) {
    
    
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
        const toJSON = JSON.parse(stringifyData);
        const [isClicked,setIsClicked] = useState(false);
        const [replieData, setReplieData] = useState("");
        function rendeMyTweet(json:any):JSX.Element[]{
            let list:JSX.Element[] = [];
            let count = 0;
            for(let i in json){
                list.push(
                    <li key={count++} onClick={(e)=>requestRepliData({id:json[i]["id_str"],screenname:json[i]["user"]["screen_name"]})}>
                        <Mytweet  screenName={json[i]["user"]["screen_name"]}
                                    name={json[i]["user"]["name"]} 
                                    photoURL={json[i]["user"]["profile_image_url"]} 
                                    text={json[i]["text"]} 
                                    tweetID={json[i]["text"]}   
                        />
                    </li>
                )
            }
            return list;
        }
        
        function requestRepliData(data:Object):void{

            if(isClicked==true){
                console.log(isClicked);
                setIsClicked(false);
            }else{
                (async()=>{
                  const res = await fetch('http://localhost:3000/api/tweets/getReplies',{
                        //クリックしたTweet idのデータを送信する
                        mode: 'cors',
                        credentials:'include',
                        method: 'POST',
                        headers: {
                          'content-type': 'application/json',
                          
                        },
                        body: JSON.stringify(data),
                  })
                setIsClicked(true);
                const resData = JSON.stringify(res.json());
                setReplieData(resData);  
                })();
            }
        }
        
        if(replieData!="" && isClicked==true){
            return(

                <div className="parent">
                    <div className="top">
                        {replieData}:{isClicked}
                        <Header text="" component={<div>りぷらいついーと</div>}/>
                    </div>
                <div className='main'>
                    <Replies stringifyJson={replieData} />
                </div>
                <div className="footer">
                    <Menubar></Menubar>
                </div>
            </div>
            );
        }else{
            return(
                <div className="parent">
                    <div className="top">
                    {replieData}:{isClicked}
                        <Header text="" component={<div>まいついーと</div>}/>
                    </div>
                <div className='main'>
                    <ul style={{listStyle: "none"}} className="ul-remove-space">
                        {rendeMyTweet(toJSON)}
                    </ul>
                </div>
                <div className="footer">
                    <Menubar></Menubar>
                </div>
            </div>      
            );
        }
}

export async function getServerSideProps(ctx?:NextPageContext)  {
    const cookie = parseCookies(ctx);

    const res = await fetch('http://localhost:3000/api/tweets/getMyTweets', {
        credentials:'include',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        body: JSON.stringify(cookie),
        })
    
    const data = await res.json();
    const stringifyData = JSON.stringify(data,null,'    ');
    return {
        props:{
            stringifyData,
            cookie,
        }
    }
}