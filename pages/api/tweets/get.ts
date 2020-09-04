import {NowRequest, NowResponse} from '@vercel/node'
import fs from 'fs'
import Twitter from 'twitter'
export default (req:NowRequest, res:NowResponse) =>{
    const consumerKey = process.env.TWITTER_CONSUMER_KEY;
        const consumerSecret = process.env.TWITTER_CONSUMER_SECRET;
        const token = req.body.token;
        const secret = req.body.secret;
        const photo = req.body.photo;
        let tweetJson;
        //Twitter API利用のため初期化
        const twitter = new Twitter({
            consumer_key:consumerKey,
            consumer_secret:consumerSecret,
            access_token_key:token,
            access_token_secret:secret,
        });
        const param = { count:6,
                        exclude_replies:false,
                        include_rts:false
                    }
        const url = "https://api.twitter.com/1.1/statuses/user_timeline.json"
        twitter.get(url,param,(tweets,response,error)=>{
                tweetJson = JSON.parse(JSON.stringify(tweets))
                console.log(`tweets:取り出せている`)
                fs.writeFile('peke.json',JSON.stringify(response,null,"\t"),()=>{});
                console.log(JSON.stringify(response))
                res.send(response)//res.send(responseで送れる)
                if(error){console.log("えらー:"+error)};             
        })
}