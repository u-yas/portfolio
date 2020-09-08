import {NowRequest, NowResponse} from '@vercel/node'
import fs from 'fs'
import {decrypt} from '../../../logic/encrypt'
import Twitter from 'twitter'
export default (req:NowRequest, res:NowResponse) =>{


        const consumerKey = process.env.TWITTER_CONSUMER_KEY;
        const consumerSecret = process.env.TWITTER_CONSUMER_SECRET;
        const cookies = req.cookies;
        const {token,secret} = (():{token:string,secret:string}=>{
            const token:string = decrypt(process.env.PASSWORD,
                                            cookies["crypt_token"]
                                        );
            const secret:string = decrypt(process.env.PASSWORD
                                            ,cookies["crypt_secret"]
                                        );
            return {token,secret}
        })();
        
        

        //Twitter API利用のため初期化
        const twitter = new Twitter({
            consumer_key:consumerKey,
            consumer_secret:consumerSecret,
            access_token_key:token,
            access_token_secret:secret,
        });
        const param = { count:10,
                        include_rts:false,
                        exclude_replies:false
                    }

        const url = "https://api.twitter.com/1.1/statuses/user_timeline.json"
        twitter.get(url,param,(tweets,response,error)=>{
                // fs.writeFile("peke.json",JSON.stringify(response,null,'    '),()=>{})
                res.send(response)//res.send(responseで送れる)
        })
}