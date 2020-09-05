import React from 'react'
import Link from 'next/link'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import PostAddIcon from '@material-ui/icons/PostAdd';
import styles from '../scss/components/menubar.module.scss';

export default function Menubar() {

  return (
    <div className={styles.root}>
      <Grid container>
        <Grid item xs >
          <Link href="/registry">
              <Paper className={styles.paper}>
                  <PostAddIcon className={styles.menuicon} fontSize='large'/>
              </Paper>
            </Link>
        </Grid>
        <Grid item xs>
            <Link href="/mypage/[id]">
                <Paper className={styles.paper}>
                    <HomeIcon className={styles.menuicon} fontSize='large' />
                </Paper>
            </Link>
        </Grid>
        <Grid item xs>
          <Link href="/search">
              <Paper className={styles.paper} >
                  <SearchIcon className={styles.menuicon} fontSize='large'  />
              </Paper>
            </Link>
        </Grid>
      </Grid>
    </div>
  );
}
