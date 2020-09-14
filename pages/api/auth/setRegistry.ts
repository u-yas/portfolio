import {NowRequest, NowResponse} from '@vercel/node'
import {encrypt} from '../../../logic/encrypt'
import jwt from 'jsonwebtoken'
export default (req:NowRequest, res:NowResponse) =>{
    (()=>{
        const key = process.env.PASSWORD;
        const json = {
            "token":req.body.token,
            "secret":req.body.secret
        }
        const token = jwt.sign(json,process.env.PRIVATE_KEY,{algorithm: "HS256",
                                                             expiresIn: 1800
                                                            })
        const encrypted = encrypt(key,token)
        console.log(`もとのtoken=${encrypted.result}\nもとのsecret=${encrypted.iv}`);

        res.setHeader('Set-Cookie',[
                      `token=${encrypted.result}; path=/; max_age=1800; HttpOnly;`,
                      `secret=${encrypted.iv}; path=/; max_age=1800; HttpOnly;`,
                    ]);    
                    res.end()//res.send(responseで送れる)

    })()

        
}