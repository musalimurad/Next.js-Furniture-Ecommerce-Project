import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

function MyApp({ Component, pageProps }) {
  return (
     <>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
     </>
     
   
  )
}

export default MyApp
