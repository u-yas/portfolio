import SearchField from '../components/searchField';
import Menubar from '../components/menubar';


export default function Search():JSX.Element{
    // let token:firebase.auth.AuthCredential;
    // firebase.auth().getRedirectResult().then((result)=>{
    //     if(result.credential){
    //         token = result.credential;
    //     }
    // })

    return(
        <div className="parent">
            <div className="top">
                <SearchField />
            </div>
            <div className='main'>
            </div>
            <footer>
                <Menubar></Menubar>
            </footer>
        </div>
    );
}