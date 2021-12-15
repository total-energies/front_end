import Head from "next/head";
import Sidebar from "./Sidebar";



function Layout(props) {


    return (
        <div>
            <Head>
            <title>Dashboard</title>
            </Head>
            <Sidebar/>
            <div>
                {props.children}
            </div>
        </div>
    );
}



export default Layout