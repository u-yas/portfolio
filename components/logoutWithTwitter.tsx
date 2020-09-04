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



export default function LogoutWithTwitter():JSX.Element{

    return(
        <div>
                <Button variant="contained" color="secondary"  endIcon={<TwitterIcon></TwitterIcon>}>ログアウトする</Button>            
        </div>
    );
}