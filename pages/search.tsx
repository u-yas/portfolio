import Head from 'next/head'
import { useEffect } from 'react'
import { useUser } from '../context/userContext'
import Link from 'next/link'
import SearchField from '../components/searchField';
import Menubar from '../components/menubar';
import Tweet from '../components/tweetList';
import json from '../firestore.json';
import firebase from '../firebase/clientApp';

export default function Search():JSX.Element{
    // let token:firebase.auth.AuthCredential;
    // firebase.auth().getRedirectResult().then((result)=>{
    //     if(result.credential){
    //         token = result.credential;
    //     }
    // })

    return(
        <div className="parent">
            <div className="top">
                <SearchField />
            </div>
            <div className='main'>
            </div>
            <footer>
                <Menubar></Menubar>
            </footer>
        </div>
    );
}