import '../styles/globals.css'
import "antd/dist/antd.css"
import Footer from '../components/Footer';
import Header from '../components/Header';


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  )}

export default MyApp
