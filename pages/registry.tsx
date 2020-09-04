import React, { useState } from 'react';

import firebase from '../firebase/clientApp.js'
import Menubar from '../components/menubar';
import LoginWithTwitter from '../components/loginWithTwitter';
import Mytweet from '../components/mytweet';
import LogoutWithTwitter from '../components/logoutWithTwitter';
// ツイッターでログインするページ
// トップ部分に紹介機能を見せる。
// あなたは今ログインしてるかどうかを教える
// ログインしてる状態だったら

export default function Registry() {
          const[stringifyJson,setStringifyJson] = useState("");
          const [auth,setAuth] = useState(false);
          let responseJson:Object;
          firebase.auth().onAuthStateChanged(function(users){
            if(users){  
              setAuth(true);
            }else{
              setAuth(false);
            }
          })

          
          function LoginButton():JSX.Element{
            // ログインボタンを表示する
            return (
                <div className="main" onClick={login}>
                    <LoginWithTwitter />
                </div>
            )
          }
          function LogoutButton():JSX.Element{
            return (
                <div className="main" onClick={logout}>
                  <LogoutWithTwitter />
                </div>
                );
          }

          function logout() {
            //ログアウト処理
            firebase.auth().signOut().then(function(){
              console.log("ログアウト成功");
            }).catch(function(error){
              console.log("ログアウト失敗"+error)
            })
          }
          async function fetchTwitter(json):Promise<any>{
            ///　pages/api/tweets/get.tsにTwitter apiをリクエストしてその結果をもらう          
            await fetch('http://localhost:3000/api/tweets/get', {
                method: 'POST',
                headers: {
                  'content-type': 'application/json',
                },
                body: JSON.stringify(json),
              })
              .then(response=>response.json())
              .then(json=>{responseJson=json;setStringifyJson(JSON.stringify(json))})
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
                  {
                    stringifyJson!=''?<Mytweet stringifyJson={stringifyJson} />:null
                  }
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