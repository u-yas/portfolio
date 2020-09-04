import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import SeachIcon from '@material-ui/icons/Search'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Select from '@material-ui/core/Select'
import { Toolbar, MenuItem, TextField, Menu, IconButton } from '@material-ui/core'
import { getQueryParser } from 'next/dist/next-server/server/api-utils'



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