import React, { useState } from "react";
//import { FiLogOut } from "react-icons/fa";
import styles from '../styles/Sidebar.module.css';
import Image from "next/image";
import avatar from '../public/avatar-gfa56b2cea_1280.png';
import logOut from '../public/logout.png'; 





function Sidebar()  {

   

    return(

        <div className={styles.wrapper}>

            <div className={styles.sider}>

                <div className={styles.profile}>
                    <Image className={styles.img}
                    src={avatar}
                    alt="profile picture"
                    width={100}
                    height={100}
                    />
                    <h3 className={styles.profileText}>Uger Paul</h3>
                    <p className={styles.profileRole}>Administrator</p>
                </div>

                <div className={styles.signOut}>
                <button type="submit" value="submit"  className={styles.type}>
                <Image className={styles.logOutImg}
                src={logOut}
                alt="Logout icon"
                width={40}
                height={30}
                />
                </button>

                </div>

            </div>

        </div>
    );

}



export default Sidebar 