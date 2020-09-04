import React, { useState, ChangeEvent } from 'react'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import SeachIcon from '@material-ui/icons/Search'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Select from '@material-ui/core/Select'
import { Toolbar, MenuItem, TextField, Menu, IconButton, InputBase, colors } from '@material-ui/core'
import { getQueryParser } from 'next/dist/next-server/server/api-utils'
import Link from 'next/link'
import styles from '../scss/components/searchField.module.scss'

function today () {
    const today = new Date();
    const nowYear = today.getFullYear();
    const nowMonth = today.getMonth();
    const nowDay = today.getDate();
    const now = nowYear+"-"+nowMonth+"-"+nowDay
    return now;
}

function yesterday() {
    const today = new Date();
    const nowYear = today.getFullYear();
    const nowMonth = today.getMonth();
    const nowDay = today.getDate()-1;
    const yesterday:string=nowYear+"-"+nowMonth+"-"+nowDay
    return yesterday;    
}

export default function SearchField(){
    
    const [since, setSince] = useState(yesterday());
    const [until, setUntil] = useState(today());
    const [category, setCategory] = useState("None");
    const [user, setUser] = useState("any")
    
    const [style,setStyle] = useState({
                                backgroundColor: '#EEEEEE',
                                borderColor: 'white', 
                             });
    function nowDay () : string {
        var dt = new Date();
        var y = dt.getFullYear();
        var m = ("00" + (dt.getMonth()+1)).slice(-2);
        var d = ("00" + dt.getDate()).slice(-2);
        var result = y + "-" + m + "-" + d;
        return result;
    }
    return(
        <div>
            <form className={styles.root} 
                  style={style} 
                  onFocus={() => setStyle({backgroundColor: 'white',borderColor:'#7fcfe2'})} 
                  onBlur={() => setStyle({backgroundColor: '#EEEEEE',borderColor:'white'})}
            >
                <div className={styles.label}>
                    検索する
                </div>
                <div className={styles.dateroot}>
                    <div className={styles.datechildren}>
                    <Input type='date' defaultValue={nowDay()} id="since"  onChange={(e:ChangeEvent<HTMLInputElement>)=>setSince(e.target.value) }   />
                    ～
                    <Input type='date' defaultValue={nowDay()} id="until"  onChange={(e:ChangeEvent<HTMLInputElement>)=>setUntil(e.target.value) }  />
                    </div>
                </div>
                <div className={styles.tagsroot}>
                    <div className={styles.tag} >
                        <TextField id="tweet-category" defaultValue="none" onChange={(e:ChangeEvent<HTMLInputElement>)=>setCategory(e.target.value)}  label="タグ" select >
                            <MenuItem value="none" >
                                指定しない
                            </MenuItem>
                            <MenuItem value="hibou" >
                                誹謗中傷
                            </MenuItem>
                            <MenuItem value="sexuhara">
                                セクハラ
                            </MenuItem>
                            <MenuItem value="jibungatari">
                                自分語り
                            </MenuItem>
                            <MenuItem value="majikichi">
                                マジキチ
                            </MenuItem>
                        </TextField>
                    </div>
                    <div className={styles.user}>
                        <TextField id="twitter-id"  onChange={(e:ChangeEvent<HTMLInputElement>)=>setUser(e.target.value)}  label="twitterID" />
                    </div>
                    <Link href={`result/${user}?since=${since}&until=${until}&category=${category}`} passHref>
                        <div className={styles.icon} >
                            <IconButton aria-label='search'  size='small' edge='end'>
                                <SeachIcon fontSize="large" color="primary"   />
                            </IconButton>
                        </div>
                    </Link>
                </div>
            </form>
        </div>
        
    );
}