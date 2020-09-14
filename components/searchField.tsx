import React, { useState, ChangeEvent } from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import styles from '../scss/components/searchField.module.scss'
import {
        Form,
        Col,
        InputGroup,
        FormControl,
        Dropdown,
        DropdownButton,
        Button
        } from 'react-bootstrap'
import {MdSearch} from 'react-icons/md'

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
    const router = useRouter();
    // const [since, setSince] = useState(yesterday());
    // const [until, setUntil] = useState(today());
    // const [category, setCategory] = useState("None");
    // const [user, setUser] = useState("any")
    
    // const [style,setStyle] = useState({
    //                             backgroundColor: '#EEEEEE',
    //                             borderColor: 'white', 
    //                          });
    const [userID, setUserID] = useState("");
    const [category,setCategory] = useState("any");
    function nowDay () : string {
        const dt = new Date();
        const y = dt.getFullYear();
        const m = ("00" + (dt.getMonth()+1)).slice(-2);
        const d = ("00" + dt.getDate()).slice(-2);
        const result = y + "-" + m + "-" + d;
        return result;
    }
    return(
        // <div className={styles.root}>
            <Form className={styles.root}>
                <div className={styles.rootLeft}>
                        <InputGroup className="mb-2">
                            <InputGroup.Prepend>
                                <InputGroup.Text>id</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl id="id" type="text" value={userID} onChange={(e)=>setUserID((e.currentTarget as any).value)}  placeholder="@exampleID" />
                        </InputGroup>
                </div>
                <div className={styles.rootCenter}>
                    <Form.Control
                        as="select"
                        id="category"
                        custom
                        onChange={(e)=>setCategory((e.currentTarget as any).value)}
                    >
                        <option value="any">カテゴリ</option>
                        <option value="hibou">誹謗中傷</option>
                        <option value="sexuhara">セクハラ</option>
                        <option value="jibun">自分語り</option>
                        <option value="higai">被害妄想</option>

                    </Form.Control>
                            {/* <Dropdown.Item eventKey='any' value="指定しない"
                                        onSelect={(eventKey)=>setDropEventKey(eventKey)}
                                        >指定しない
                                        </Dropdown.Item>     
                            <Dropdown.Item eventKey='hibou' 
                                        onSelect={(eventKey)=>setDropEventKey(eventKey)}
                                        >誹謗中傷
                                        </Dropdown.Item>
                            <Dropdown.Item eventKey='sexuhara'
                                        onSelect={(eventKey)=>setDropEventKey(eventKey)}                                        
                                            >セクハラ</Dropdown.Item>
                            <Dropdown.Item eventKey='higaimousou'
                                        onSelect={(eventKey)=>setDropEventKey(eventKey)}                        
                                            >被害妄想</Dropdown.Item>
                            <Dropdown.Item eventKey='jibungatari'
                                        onSelect={(eventKey)=>setDropEventKey(eventKey)}                                                
                            >自分語り</Dropdown.Item>

                            </DropdownButton> */}
                </div>
                <div className={styles.rootRight}>
                    <Button onClick={()=>router.push({pathname: '/result//',query:{user:userID,category:category}})} variant="primary" type="submit">
                        <MdSearch size="1.4em" />
                    </Button>
                </div>
            </Form>
        // </div>
            //  <form className={styles.root} 
            //       style={style} 
            //       onFocus={() => setStyle({backgroundColor: 'white',borderColor:'#7fcfe2'})} 
            //       onBlur={() => setStyle({backgroundColor: '#EEEEEE',borderColor:'white'})}
            // >
            //     <div className={styles.label}>
            //         検索する
            //     </div>
            //     <div className={styles.dateroot}>
            //         <div className={styles.datechildren}>
            //         <Input type='date' defaultValue={nowDay()} id="since"  onChange={(e:ChangeEvent<HTMLInputElement>)=>setSince(e.target.value) }   />
            //         ～
            //         <Input type='date' defaultValue={nowDay()} id="until"  onChange={(e:ChangeEvent<HTMLInputElement>)=>setUntil(e.target.value) }  />
            //         </div>
            //     </div>
            //     <div className={styles.tagsroot}>
            //         <div className={styles.tag} >
            //             <TextField id="tweet-category" defaultValue="none" onChange={(e:ChangeEvent<HTMLInputElement>)=>setCategory(e.target.value)}  label="タグ" select >
            //                 <MenuItem value="none" >
            //                     指定しない
            //                 </MenuItem>
            //                 <MenuItem value="hibou" >
            //                     誹謗中傷
            //                 </MenuItem>
            //                 <MenuItem value="sexuhara">
            //                     セクハラ
            //                 </MenuItem>
            //                 <MenuItem value="jibungatari">
            //                     自分語り
            //                 </MenuItem>
            //                 <MenuItem value="kichigai">
            //                     キチガイ
            //                 </MenuItem>
            //             </TextField>
            //         </div>
            //         <div className={styles.user}>
            //             <TextField id="twitter-id"  onChange={(e:ChangeEvent<HTMLInputElement>)=>setUser(e.target.value)}  label="twitterID" />
            //         </div>
            //         <Link href={`result/${user}?since=${since}&until=${until}&category=${category}`} passHref>
            //             <div className={styles.icon} >
            //                 <IconButton aria-label='search'  size='small' edge='end'>
            //                     <SeachIcon fontSize="large" color="primary"   />
            //                 </IconButton>
            //             </div>
            //         </Link>
            //     </div>
            // </form>
        
    );
}