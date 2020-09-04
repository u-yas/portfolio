import Head from 'next/head'
import { useEffect } from 'react'
import { useUser } from '../context/userContext'
import firebaseInit from '../firebase/clientApp.js'
import firebaseAuth from 'firebase/auth'
import Link from 'next/link'
import Menubar from '../components/menubar'
import SearchField from '../components/searchField'
import Tweet from '../components/tweetList'
import tweetJson from '../firestore.json'
import Header from '../components/header'
import LoginWithTwitter from '../components/loginWithTwitter'
//home画面、クソツイを登録するボタン、クソツイを閲覧する画面


export default  function Test() {


return(
    <div className='parent'>
        <div className='top'>
            <Header text="こんにちは！" component={<LoginWithTwitter />}  />
        </div>  
        <div className='main'>
            
        </div>
        <footer>
            <Menubar></Menubar>
        </footer> 
        </div>  

    );
}
