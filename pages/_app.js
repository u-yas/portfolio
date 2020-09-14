import UserProvider from '../context/userContext'
import '../scss/Layout.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
// Custom App to wrap it with context provider
export default function App({ Component, pageProps }) {
  return (
    // <UserProvider>
      <Component {...pageProps} />
    // </UserProvider>
  )
}
