import UserProvider from '../context/userContext'
import '../scss/Layout.scss'
import '../scss/searchField.scss'
import '../scss/components/tweetList.scss'
import '../scss/components/header.scss'
import '../scss/components/menubar.scss'
// Custom App to wrap it with context provider
export default function App({ Component, pageProps }) {
  return (
    // <UserProvider>
      <Component {...pageProps} />
    // </UserProvider>
  )
}
