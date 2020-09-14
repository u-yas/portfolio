import React from 'react'
import Link from 'next/link'

import {MdHome,MdAssignment,MdSearch} from 'react-icons/md'
import {IconContext} from 'react-icons'
import styles from '../scss/components/menubar.module.scss';

export default function Menubar() {

  return (
    <IconContext.Provider value={{style: {color:"white",fontSize:"30px"}}}>
      <div className={styles.root}>
          <div className={styles.leftGrid}>
            <Link href="/registry">
                <div className={styles.paper}>
                    <MdAssignment size='1.7em' />
                </div>
            </Link>
          </div>
          <div className={styles.centerGrid}>
              <Link href="/mypage/[id]">
                  <div className={styles.paper}>
                      <MdHome size='1.7em'/>
                  </div>
              </Link>
          </div>
          <div className={styles.rightGrid}>
            <Link href="/search">
                <div className={styles.paper}>
                    <MdSearch size='1.7em' />
                </div>
              </Link>
          </div>
      </div>
    </IconContext.Provider>
  );
}
