import React, { useState } from 'react';
import firebase from '../firebase/clientApp.js'
import Menubar from '../components/menubar';
import LoginWithTwitter from '../components/loginWithTwitter';
import Mytweets from './mytweets';
import LogoutWithTwitter from '../components/logoutWithTwitter';
import { useRouter } from 'next/router'

// ツイッターでログインするページ
// トップ部分に紹介機能を見せる。
// あなたは今ログインしてるかどうかを教える
// ログインしてる状態だったら

export default function Registry() {
    const router = useRouter();
    const[stringifyJson,setStringifyJson] = useState("");
    const [auth,setAuth] = useState(false);//認証に成功したかどうかの判定
    firebase.auth().onAuthStateChanged(function(users){
      //認証状態をlistenしてくれる
      if(users){  
        setAuth(true);
      }else{
        setAuth(false);
      }
    })

    async function logout() {
      //ログアウト処理
      await firebase.auth().signOut().then(function(){
        console.log("ログアウト成功");
      }).catch(function(error){
        console.log("ログアウト失敗"+error)
      })
    }
    async function fetchTwitter(json):Promise<any>{
      ///　pages/api/tweets/get.tsにTwitter apiをリクエストしてその結果をもらう          
      await fetch('http://localhost:3000/api/auth/setRegistry', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(json),
        })
        .then(()=>router.push('/mytweets'))
        //文字列にしたJSONをhooksに送る
        .catch(error=>console.log(`${error}`));
    }
    
    function login(){
      const providerTwitter =  new firebase.auth.TwitterAuthProvider();
      firebase.auth().signInWithPopup(providerTwitter).then(function(result){
        if(result.credential){
          const user = result.user;
          const credential = result.credential as firebase.auth.OAuthCredential;
          const json = {
            "token":credential.accessToken,
            "secret":credential.secret,
            "photo":user.photoURL,
            "screenname":result.additionalUserInfo.username
          };
          fetchTwitter(json);
        }
      })
    }
    
    return(
      <div className="parent">
        <div className="top">
        </div>
        {auth?
          <div className="main" onClick={()=>{setAuth(false);logout();}}>
            <LogoutWithTwitter />
          </div>:
          <div className="main" onClick={()=>{setAuth(true);login();}}>
            <LoginWithTwitter />
          </div>
        }
        <footer>
            <Menubar></Menubar>
        </footer>
      </div>
    );
}