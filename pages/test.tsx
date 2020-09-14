import Menubar from '../components/menubar'
import Header from '../components/header'
import LoginWithTwitter from '../components/loginWithTwitter'
import firebase from '../firebase/clientApp'
//home画面、クソツイを登録するボタン、クソツイを閲覧する画面


export default  function Test() {


return(
    <div className='parent'>
        <div className='top'>
            <Header text="こんにちは！" component={<LoginWithTwitter />}  />
        </div>  
        <div className='main'>
            
        </div>
        <footer>
            <Menubar></Menubar>
        </footer> 
        </div>  

    );
}
