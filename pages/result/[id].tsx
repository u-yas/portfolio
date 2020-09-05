import React, { useState } from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router'
import firebase from '../../firebase/clientApp'
import SearchedList, {receiveJson,testJson} from '../../components/searchedList';
import json from '../../firestore.json';
import Menubar from '../../components/menubar';
import SearchField from '../../components/searchField';
//自分のツイート一覧を表示する、そのツイートをクリックしたらリプライ一覧を表示する
//リプライを選択してタグを選択して決定ボタンを押して、ツイッターに共有するボタンを選択させる



//必要機能 並び替えコンポーネント、検索結果画面、
//共有ボタンを押したときの処理、ファボ/ディスファボを押したときの
//firebaseの処理
type searchTags = {
    since:Date,
    until:Date,
    category:string,
}
export default function SearchIDs(){
    //firestoreからツイートデータを引っ張ってくる

    const [state,setState] = useState({list:[]});
    async function getDatas () {
        const db = firebase.firestore();
        const tags:searchTags = Search();
        const tweetRef = db.collection("tweets")
                        .where("category","==", tags.category )
                        .where("createdAt","<=", tags.since)
                        .where("createdAt",">=", tags.until)
                        .orderBy('createdAt','desc')
                        .limit(20);
        const snapshots = await tweetRef.get();
        const docs = snapshots.docs.map(doc=>doc.data());
        await setState({
            list:docs,
        });
    }

    
    const tweetJsons:receiveJson = json
    function jsonTo (jToStr:receiveJson): receiveJson["tweetList"]{
        const toMap:receiveJson["tweetList"] = jToStr.tweetList;
        return  toMap;
    }
    const toTestJsons:receiveJson["tweetList"] = jsonTo(tweetJsons);

    
    return(
        <div className="parent">
              <div className="top">
                  <SearchField />
              </div>
            <div className='main'>
                <ul style={{listStyle: "none"}} className="ul-remove-space">
                    {/* jsxのリストを全列挙 */}
                    {toTestJsons.map((item,id):JSX.Element=>{
                       return <li  onClick={()=>console.log("idは"+item.id)}><SearchedList key={id} tweetListData={item}/></li>
                    })}
                </ul>
                
            </div>
            <footer>
              <Menubar></Menubar>
            </footer>
        </div>
    );

}

const Search = ():searchTags =>{
    //クエリパラメーターから日付データとカテゴリを取得して
    //router.queryでパラメーターの文字列を&でオブジェクト情報として受け取る
    //クエリパラメーターから受け取った年月日を文字列として
    
    const router = useRouter()
    const {category} = router.query;
    const {since} = router.query;
    const {until} = router.query;

    const categoryToString = isString(category);
    const untilString = isString(until);
    const sinceString = isString(since);
    const sinceNumber =Date.parse(sinceString);
    const untilNumber = Date.parse(untilString);

    const untilDate = new Date(untilNumber);
    const sinceDate = new Date(sinceNumber);

    const tags:searchTags = {
        since:sinceDate,
        until:untilDate,
        category:categoryToString,
    }

    return tags

}
function isString(value:string|string[]) {
    if('string' == typeof(value)){
        return value;
    }
}



{/* export async function getStaticPaths() {
//paramデータを取得する　ex: localhost:3000/search/[id] -> return id
const paths = getAllSearchIds()
    return {
        paths,
        fallback: false
        }
} */}

{/* 
export async function getStaticProps({ params }){
//paramデータから
} */}
