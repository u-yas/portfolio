import React, { Props, useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import firestore from 'firebase/firestore'
import { makeStyles, createStyles, Theme } from '@material-ui/core'
import ShareIcon from '@material-ui/icons/Share'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';


//JSONを受け取ったらそのjsonの一つを
export type testJson={
        tweetListData:{
            id: number;
            twitterId: string;
            tweet: string;
            text: string;
            category: string;
            createdAt: string;
            fav: number;
            nonfav: number;
        };
    }

export type receiveJson={
    tweetList: {
        id:number;
        twitterId: string;
        tweet:string;
        text: string;
        category: string;
        createdAt: string;
        fav: number;
        nonfav: number;
    }[];
}
// const icon = require('../images/idcd3C87_400x400.png');
export default function Tweet(Props:testJson):JSX.Element{
        // JSON データの多重配列になっているもののいち要素を受け取る
        // Mapの個要素
        // 例
        // {
        //     "twitterId":"hogefuga",
        //     "photoURL":"pbs.twimg.com/hogehoge",
        //     "category":"セクハラ"
        //     "text" : "きみ可愛いねぐへへへｈ",
        //     "fav" : 20,
        //     "nonfav": 2,
        //     "createdAt": 2020-08-04,
        // }
        const tweetInfo = Props.tweetListData;

        const twitterId = tweetInfo.twitterId;
        const tweet = tweetInfo.tweet;
        const text = tweetInfo.text;
        const category = tweetInfo.category;
        const fav = tweetInfo.fav;
        const nonfav = tweetInfo.nonfav;
        const created = tweetInfo.createdAt;

        return(
            <div className="parent-tweetlist">
                <div className="list-left">
                    {/* 画像の部分の情報はまだ作成中なのできちんと表示されるかだけの確認 */}
                    <img className="image" src="../static/twittericon13.png" />
                    被害者
                </div>

                <div className="list-right">
                    <div className="name-root">
                        <div className="name-label">@{twitterId}</div>
                        <div className="name-text">{category}</div>
                    </div>
                    <div className="tweet">
                        <div className="tweet-title">
                            ツイート
                        </div>
                        <br />{tweet}
                    </div>
                    <div className="text" >
                        <div className="text-title">届いたクソリプ</div>
                        <br />{text}
                    </div>
                    <div className="bottom-root">
                        <div className="bottom">
                            <div className="share-button">
                                <ShareIcon fontSize="default" style={{color:"white",paddingLeft:"25%",paddingTop:"4%"}}/>
                            </div>
                            <div className="fav">
                                <div className="icon">
                                    <ThumbUpIcon fontSize="small" style={{color:"white",paddingLeft:"5px",paddingTop:"3px"}} />
                                </div>
                                <div className="counter">
                                    {fav}
                                </div>
                            </div>
                            <div className="nonfav">
                                <div className="icon">
                                    <ThumbDownIcon fontSize="small" style={{color:"white",paddingLeft:"5px",paddingTop:"3px"}} />
                                </div>
                                <div className="counter">
                                    {nonfav}
                                </div>
                            </div>
                            <div className="created">
                            登録日<br />{created}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

}


