import React from 'react';
import styles from '../scss/components/loginWithTwitter.module.scss';
import firebase from '../firebase/clientApp';
import {FaTwitter} from 'react-icons/fa';
export default function LoginWithTwitter():JSX.Element{

    return(
        <div className={styles.buttonRoot}>
            <div className={styles.twitter}>
                <FaTwitter size='1.1em' className={styles.icon} />Twitterからログアウト
            </div>
        </div>
    );
}