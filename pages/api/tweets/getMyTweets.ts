import {NowRequest, NowResponse} from '@vercel/node'
import {decrypt} from '../../../logic/encrypt'
import Twitter from 'twitter'
import fs from 'fs'
import jwt from 'jsonwebtoken'
import cookies from 'cookie';

export default (req:NowRequest, res:NowResponse) =>{
    //consumer key
    const consumerKey = process.env.TWITTER_CONSUMER_KEY;
    const consumerSecret = process.env.TWITTER_CONSUMER_SECRET;
    console.log(`etoken=${req.body.token}\nesecret=${req.body.secret}`)
    const encrypted_token  = req.body.token;
    const encrypted_secret = req.body.secret;
    const decryptedJWT = decrypt(process.env.PASSWORD,encrypted_secret,encrypted_token)

    jwt.verify(decryptedJWT,process.env.PRIVATE_KEY,(err,decoded)=>{
        if(err){
            res.json({
                err
            })
            res.redirect("./registry")
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
            const count = 2
            const param = { 
                count:count,
                include_rts:false,
            }
        
            const url = "https://api.twitter.com/1.1/statuses/user_timeline.json"
            twitter.get(url,param,(tweets,response,error)=>{
                    res.send(response)//res.send(responseで送れる)
                    res.end();
                })
                
        }
    })
}

