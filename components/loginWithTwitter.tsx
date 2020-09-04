import React from 'react';
import  UserContextComp, { useUser }  from '../context/userContext';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Icon, Button, makeStyles } from '@material-ui/core';
import firebase from '../firebase/clientApp'

type userProfile = {
    name:string;
    screenName:string;
    photoURL:string;
    token:string;
    secret:string;
  }
  let profile:userProfile;
  let boo:Boolean


export default function LoginWithTwitter():JSX.Element{

    return(
        <div>
                <Button variant="contained" color="primary"  endIcon={<TwitterIcon></TwitterIcon>}>Twitterからログイン</Button>
        </div>
    );
}