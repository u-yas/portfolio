import {NowRequest, NowResponse} from '@vercel/node'
import {decrypt} from '../../../logic/encrypt'
import Twitter from 'twitter'
export default (req:NowRequest, res:NowResponse) =>{
    const consumerKey = process.env.TWITTER_CONSUMER_KEY;
    const consumerSecret = process.env.TWITTER_CONSUMER_SECRET;
    const cryptToken = req.body.crypt_token; 
    const keyToken = req.body.random_token;
    const cryptSecret = req.body.crypt_secret;
    const keySecret = req.body.random_secret;
    console.log(`cryTok=${cryptToken}\ncrySec=${cryptSecret}`)
    const token = decrypt(process.env.PASSWORD,keyToken,cryptToken)
    const secret = decrypt(process.env.PASSWORD,keySecret,cryptSecret)
    console.log("token="+token+"\nsecret="+secret);
    // const {token,secret} = (():{token:string,secret:string}=>{
    //     const token:string = Decrypt(process.env.PASSWORD,
    //                                  jCookie["crypt_token"]
    //                                 );
    //     const secret:string = Decrypt(process.env.PASSWORD,
    //                                   jCookie["crypt_secret"]
    //                                 );
    //     return {token,secret}
    // })();
    


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

