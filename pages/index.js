
import Dashboard from "../components/Dashboard";
import Login from "./login";
import { useState} from "react";
import router from 'next/router';
import React, { useEffect } from "react";



// export async function getServerSideProps(context) {
//   const res = await fetch('https://rickandmortyapi.com/api/character')
//   const answersResults = await res.json();
//   return {
//     props: { 
//       answersResults
//     },
//   }
// }


export default function HomePage() {

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
       setMounted(true);
       const { pathname } = router
       if (pathname == '/') {
        router.push('/login');
      }
   }, [])

    return (
        <div>
            <Dashboard/>
        </div>
    );


}



