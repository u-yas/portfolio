import Head from 'next/head'
import { useEffect } from 'react'
import { useUser } from '../context/userContext'

import Link from 'next/link'
import Menubar from '../components/menubar'
import SearchField from '../components/searchField'
import Tweet from '../components/tweetList'
import tweetJson from '../firestore.json'
//home画面、クソツイを登録するボタン、クソツイを閲覧する画面

// const strJson:string = JSON.stringify(tweet.tweetList);
// const strToObj:Object = JSON.parse(strJson);
// const tmp = Object.entries(json);

 export default  function Home() {

    
    return(
        <div className='parent'>
            <div className='top'>
              pompom
            </div>  
            <div className='main'>
                
            </div>
            <footer>
              <Menubar></Menubar>
            </footer> 
          </div>  

      );
}
