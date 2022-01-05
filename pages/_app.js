import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
//import styles from '../styles/Login.modules.css'
 import { useEffect } from "react";
 import swal from 'sweetalert';
 import Swal from 'sweetalert2';

function MyApp({ Component, pageProps }) {

    useEffect(() => {
     import("bootstrap/dist/js/bootstrap");
   }, []); 

  return <Component {...pageProps} />
}

export default MyApp
