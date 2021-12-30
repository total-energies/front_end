 import Head from 'next/head'
 import Image from 'next/image'
 import styles from '../styles/Home.module.css'

 function Home() {
  return (
   
       <div>
         <h1>welcome</h1>
        </div>
  )
}
export default Home
import Dashboard from "../components/Dashboard";



function HomePage() {

    return (
        <div>
            <Dashboard/>
        </div>
    );


}



export default HomePage
