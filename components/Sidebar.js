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
        <div className="sidebar" id={styles.sidebar}  >
        <div id="logo" className={styles.profile}>
        <Image className={styles.img}
                    src={avatar}
                    alt="profile picture"
                    width={100}
                    height={100}
                    />
          {/* <img className="logo" /> */}
        </div>
        <h3 className={styles.profileText} id={styles.textAlign}>Admin</h3>
        <p className={styles.profileRole} id={styles.textAlign}>Administrator</p>

       
                <button type="submit"   className="btn btn-danger position-absolute bottom-0 start-50 translate-middle-x rounded pe-4 ps-4">
                <Image className={styles.logOutImg}
                src={logOut}
                alt="Logout icon"
                width={40}
                height={30}
                onClick={handleLogOut}
                />
                </button>

              
      </div>
    );

}



export default Sidebar 