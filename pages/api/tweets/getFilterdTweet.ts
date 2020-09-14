import {NowRequest, NowResponse} from '@vercel/node'
import fs from 'fs'
import {decrypt} from '../../../logic/encrypt'
import Twitter from 'twitter'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'
export default (req:NowRequest, res:NowResponse) =>{
     // フィルタリングをかけたfirebaseのtweet idをもとに
     // statuses/lookupでツイートを取得する
    const consumerKey = process.env.TWITTER_CONSUMER_KEY;
    const consumerSecret = process.env.TWITTER_CONSUMER_SECRET;
    const encrypted_token  = cookie.parse(req.headers.cookie).token;;
    const encrypted_secret = cookie.parse(req.headers.cookie).secret;
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
            
            
            const param = { 
                id
                        }
        
            const url = "https://api.twitter.com/1.1/statuses/lookup.json
            twitter.get(url,param,(tweets,response,error)=>{
                    fs.writeFile("replie.json",JSON.stringify(response,null,'    '),()=>{})
                    res.send(response)//res.send(responseで送れる)
                    res.end();
                })
                
        }
    })

}