import {NowRequest, NowResponse} from '@vercel/node'
import {encrypt} from '../../../logic/encrypt'
import Twitter from 'twitter'
export default (req:NowRequest, res:NowResponse) =>{
    (()=>{
        const key = process.env.PASSWORD;
        const token = req.body.token;
        const secret = req.body.secret;
        const result_token:{result:string,iv:string} = encrypt(key,token);
        const result_secret:{result:string,iv:string} = encrypt(key,secret);
        console.log(`もとのtoken=${token}\nもとのsecret=${secret}`);
        console.log(`暗号化token=${result_token.result}\n暗号化secret=${result_secret.result}`)
        // console.log('復号化decryptedToken='+Decrypt(key,result_token)+"\n復号化secret="+Decrypt(key,result_secret))
        res.setHeader('Set-Cookie',[
                      `crypt_token=${result_token.result}; path=/mytweets; max_age=600; HttpOnly;`,
                      `random_token=${result_token.iv}; path=/mytweets; max_age=600; HttpOnly;`,
                      `crypt_secret=${result_secret.result}; path=/mytweets; max_age=600; HttpOnly;`,
                      `random_secret=${result_secret.iv}; path=/mytweets; max_age=600; HttpOnly`
                    ]);    
        return {token,secret}
    })()

    res.end()//res.send(responseで送れる)
        
}