//import { useState } from "react";


import Head from "next/head";
import Sidebar from "./Sidebar";
// import Modal from "./Modal";
// import ThemeModal from "./ThemeModal";
// import OwnerModal from "./OwnerModal";




function Layout(props) {
    // const [showModal, setShowModal] = useState(true);
    // const [showThemeModal, setShowThemeModal] = useState(true);
    // const [showOwnerModal, setShowOwnerModal] = useState(false);


    return (
        <div>
            <Head>
            <title>Dashboard</title>
            </Head>
            <Sidebar/>
            <div>{props.children}</div>
            {/* <main>{props.content}</main>
            {showModal && (
            <Modal close={() => setShowModal(false)}>
                {showThemeModal && (
                <ThemeModal showOwner={() =>{
                    setShowOwnerModal(true);
                    setShowThemeModal(false);
                }}
                />
                )}
                {showOwnerModal && (
                <OwnerModal showTheme={() =>{
                    setShowOwnerModal(false);
                    setShowThemeModal(true);
                }}
                />
                )}
            </Modal>
            )}
            <style jsx>{`
            main {
                position: relative;
                max-width: 56em;
                background-color: white;
                padding: 2em;
                margin: 0 auto;
                box-sizing: border-box;
            }
            `}</style>       */}
        </div>
    );
}



export default Layout