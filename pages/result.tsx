import React, { useState } from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router'
import firebase from '../firebase/clientApp'
import SearchedList from '../components/searchedList';
import json from '../firestore.json';
import Menubar from '../components/menubar';
import SearchField from '../components/searchField';
//自分のツイート一覧を表示する、そのツイートをクリックしたらリプライ一覧を表示する
//リプライを選択してタグを選択して決定ボタンを押して、ツイッターに共有するボタンを選択させる



//必要機能 並び替えコンポーネント、検索結果画面、
//共有ボタンを押したときの処理、ファボ/ディスファボを押したときの
//firebaseの処理
type searchTags = {
    user:string;
    category:string;
}
type tweetInfo = {
    id:string;
    iconURL:string;
    text:string;
    created:string;
}
export default function SearchIDs({docs}){
    //firestoreからツイートデータを引っ張ってくる

    const [state,setState] = useState({list:[]});

    return(
        <div className="parent">
              <div className="top">
                  <SearchField />
              </div>
            <div className='main'>
                <ul style={{listStyle: "none"}} className="ul-remove-space">
                    {/* jsxのリストを全列挙 */}
                    {/* {.map((item,id):JSX.Element=>{
                       return <li  onClick={()=>console.log("idは"+item.id)}><SearchedList key={id} tweetListData={item}/></li>
                    })} */}
                </ul>
                
            </div>
            <footer>
              <Menubar></Menubar>
            </footer>
        </div>
    );

}

const Search = (): searchTags =>{
    //クエリパラメーターから日付データとカテゴリを取得して
    //router.queryでパラメーターの文字列を&でオブジェクト情報として受け取る
    
    const router = useRouter()
    const {category} = router.query;
    const {user} = router.query;

    const categoryToString = isString(category);
    const userToString = isString(user)

    const tags:searchTags = {
        user:userToString,
        category:categoryToString,
    }

    return tags

}
function isString(value:string|string[]) {
    if('string' == typeof(value)){
        return value;
    }
}



export async function getServerSideProps(ctx) {
    const router = useRouter();
    (async()=>{
        if(firebase.auth().currentUser){
            const db = firebase.firestore();
            const tags:searchTags = Search();
            const tweetRef = db.collection("tweets")
                            .where("category","==", tags.category )
                            .where("id","<=", tags.user)
                            .orderBy('createdAt','desc')
                            .limit(20);
            const snapshots = await tweetRef.get();
            const docs = snapshots.docs.map(doc=>doc.data());
            //受け取ったコレクションをもとにtwitter api requestを送る  
            const res = await fetch('http://localhost:3000/api/tweets/getFilterdTweet', {
                credentials:'include',
                method: 'POST',
                  headers: {
                    'content-type': 'application/json'
                  },
                  body: JSON.stringify(docs),
                })
            
            const data = await res.json();
            return {
                props: {data},
            } 
        }else{
            router.push("/registry")
        }


    })(); 
}
