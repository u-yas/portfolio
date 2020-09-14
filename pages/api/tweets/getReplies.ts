import {NowRequest, NowResponse} from '@vercel/node'
import fs from 'fs'
import {decrypt} from '../../../logic/encrypt'
import Twitter from 'twitter'
import { parseCookies } from 'nookies'
import jwt from 'jsonwebtoken'
import { response } from 'express'
import next from 'next'
import cookie from 'cookie'
import {Replie,User} from '../../../types/replie'


type resultTypes = {
    screen_name:string;
    name:string;
    photoURL:string;
    text:string;
}[]
export default (req:NowRequest, res:NowResponse) =>{
    const cookies = cookie.parse(req.headers.cookie);
    console.log("/api/getReplies実行開始\ncookie=");
    const encrypted_token = cookies.token; 
    const encrypted_secret = cookies.secret;
    const consumerKey = process.env.TWITTER_CONSUMER_KEY;
    const consumerSecret = process.env.TWITTER_CONSUMER_SECRET;

    let result:any[];

    const tweetID = req.body.id;
    const screenName = req.body.screenname;
    console.log(`tweetID=${tweetID}\nscreen_name=${screenName}\nenToken=${encrypted_token}\nenSecret=${encrypted_secret}`);
    const decryptedJWT = decrypt(process.env.PASSWORD,encrypted_secret,encrypted_token)

    jwt.verify(decryptedJWT,process.env.PRIVATE_KEY,(err,decoded)=>{
        if(err){
            res.json({
                err
            })
        }else{
            const json = decoded;

            console.log("token="+json["token"]+"\nsecret="+json["secret"]);
            //Twitter API利用のため初期化
            const twitter = new Twitter({
                consumer_key:consumerKey,
                consumer_secret:consumerSecret,
                access_token_key:json["token"],
                access_token_secret:json["secret"],
            });

            const url = `https://api.twitter.com/1.1/search/tweets.json?lang=ja&q=to:${screenName}&count=20&since_id=${(tweetID-1).toString()}`
            for( let count:number = 0; count < 2; count++ ){
                twitter.get(url,(tweets,response,error)=>{
                    // response.forEach(element => {
                    //     if(element["statuses"]["in_reply_to_status_id_str"]==tweetID.toString()){
                    //         result[result.length] = {screen_name:element["user"]["screen_name"],
                    //                                  name: element["user"]["name"],
                    //                                  photoURL: element["user"]["profile_image_url"],
                    //                                  text:element["text"]
                    //                                 }
                    //     }
                    const resdata:Replie = response as Replie;
                    for(let i in resdata.statuses){
                        console.log("レスポンスJSON"+i.toString()+JSON.stringify(response[i]));
                        if(resdata[i].in_reply_to_status_id_str==tweetID.toString()){
                            console.log()
                            result[result.length] = {
                                                     "screen_name":resdata[i].user.screen_name,
                                                     "name": response[i].user.name,
                                                     "photoURL": response[i].user.profile_image_url,
                                                     "text": response[i].text
                                                    }
                        }
                    }                        
                });

            }  
            console.log(result);
            res.send(result);//res.send(responseで送れる)
            res.end();  
        }
    })

}