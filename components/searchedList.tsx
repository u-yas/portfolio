import React, { Props, useState } from 'react'
// import ShareIcon from '@material-ui/icons/Share'
// import ThumbUpIcon from '@material-ui/icons/ThumbUp';
// import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import styles from '../scss/components/tweetList.module.scss';

//JSONを受け取ったらそのjsonの一つを



// const icon = require('../images/idcd3C87_400x400.png');
export default function SearchedList():JSX.Element{
        // JSON データの多重配列になっているもののいち要素を受け取る
        // Mapの個要素
        // 例
        // {
        //     "tweetID":"hogefuga",
        //     "category":"sexuhara"
        //     
        //     
        //     
        //     
        // }

        return(
            <div className={styles.parentTweetlist}>
                <div className={styles.listLeft}>
                    {/* 画像の部分の情報はまだ作成中なのできちんと表示されるかだけの確認 */}
                    <img className={styles.image} src="../static/twittericon13.png" />
                    被害者
                </div>

                <div className={styles.listRight}>
                    <div className={styles.nameRoot}>
                        <div className={styles.nameLabel}>@{twitterId}</div>
                        <div className={styles.nameText}>{category}</div>
                    </div>
                    <div className={styles.tweet}>
                        <div className={styles.tweetTitle}>
                            ツイート
                        </div>
                        <br />{tweet}
                    </div>
                    <div className={styles.text} >
                        <div className={styles.textTitle}>届いたクソリプ</div>
                        <br />{text}
                    </div>
                    <div className={styles.bottomRoot}>
                        <div className={styles.bottom}>
                            <div className={styles.shareButton}>
                                <ShareIcon fontSize="default" style={{color:"white",paddingLeft:"25%",paddingTop:"4%"}}/>
                            </div>
                            <div className={styles.fav}>
                                <div className={styles.icon}>
                                    <ThumbUpIcon fontSize="small" style={{color:"white",paddingLeft:"5px",paddingTop:"3px"}} />
                                </div>
                                <div className={styles.counter}>
                                    {fav}
                                </div>
                            </div>
                            <div className={styles.nonfav}>
                                <div className={styles.icon}>
                                    <ThumbDownIcon fontSize="small" style={{color:"white",paddingLeft:"5px",paddingTop:"3px"}} />
                                </div>
                                <div className={styles.counter}>
                                    {nonfav}
                                </div>
                            </div>
                            <div className={styles.created}>
                            登録日<br />{created}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

}


