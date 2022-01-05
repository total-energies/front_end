import React, { useState } from "react";
import router  from 'next/router';
import styles from '../styles/Sidebar.module.css';
import Image from "next/image";
import avatar from '../public/avatar-gfa56b2cea_1280.png';
import logOut from '../public/logout.png'; 
import Swal from 'sweetalert2';






function Sidebar()  {

    const handleLogOut = (e) => {
        e.preventDefault();

        return swal({
            title: "You have successfully logged out ",
            type: "warning",
            icon: "success",
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Yes, I am sure!',
            cancelButtonText: "No, cancel it!",
            closeOnConfirm: false,
            closeOnCancel: false
        }).then(okay => {
            if (okay) {
            // window.location.href = "URL";
            router.push({ pathname: '/login'});
           }
         });



    }

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
                    <h3 className={styles.profileText}>Admin</h3>
                    <p className={styles.profileRole}>Administrator</p>
                </div>

                <div className={styles.signOut}>
                <button type="submit"   className={styles.type}>
                <Image className={styles.logOutImg}
                src={logOut}
                alt="Logout icon"
                width={40}
                height={30}
                onClick={handleLogOut}
                />
                </button>

                </div>

            </div>

        </div>
    );

}



export default Sidebar 