import React from 'react'
import Link from 'next/link'
import PropTypes from "prop-types";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import PostAddIcon from '@material-ui/icons/PostAdd';
import firebaseAuth from 'firebase/auth'


export default function Menubar() {

  return (
    <div className="root">
      <Grid container>
        <Grid item xs >
          <Link href="/registry">
              <Paper className='paper'>
                  <PostAddIcon className='menu-icon' fontSize='large'/>
              </Paper>
            </Link>
        </Grid>
        <Grid item xs>
            <Link href="/mypage/[id]">
                <Paper className='paper'>
                    <HomeIcon className='menu-icon' fontSize='large' />
                </Paper>
            </Link>
        </Grid>
        <Grid item xs>
          <Link href="/search">
              <Paper className='paper' >
                  <SearchIcon className='menu-icon' fontSize='large'  />
              </Paper>
            </Link>
        </Grid>
      </Grid>
    </div>
  );
}
