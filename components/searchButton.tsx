import React from 'react'
import SeachIcon from '@material-ui/icons/Search'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton/IconButton';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon:{
        paddingTop: '2.3vh',
    }
  }),
);
export default function SearchButton () {
    const classes = useStyles(); 
    return(
        <IconButton  className={classes.icon} aria-label='search' color='primary' size='medium' edge='end'>
            <SeachIcon />
        </IconButton>
    )
}