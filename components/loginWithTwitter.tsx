import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Button } from '@material-ui/core';
import firebase from '../firebase/clientApp'

export default function LoginWithTwitter():JSX.Element{

    return(
        <div>
                <Button variant="contained" color="primary"  endIcon={<TwitterIcon></TwitterIcon>}>Twitterからログイン</Button>
        </div>
    );
}