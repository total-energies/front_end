import React from 'react'
import Head from 'next/head'
import LoginForm from '../components/LoginForm'
import Image from 'next/image'
import logo from '../public/images/logo.jpg'
import search from '../public/images/search.png'
import styles from '../styles/Login.module.css'


export const login = () => {
    return (
        <div id={styles.bgColor}>
        <Head>
        <title>Login Page</title>
      </Head>
      <main id={styles.mainSize} >
        <div className="container mt-5 bg-white w-50 p-5 mb-5 bg-body rounded" id={styles.divSize}>
          <div className="row">
            <div className="col-sm-12 col-md-2">
            <Image
        src={logo}
        alt="TotalEngines logo"
      />
            </div>
        <div className="col-sm-12 col-md-10 mt-5 ">
          <h1 className="float-start" id={styles.heading}>Q & A ToolBox</h1>
        </div>
          </div>
          <div className="row mt-5" id={styles.divPosition}>
            <div className="col-sm-12 mt-5 col-md-6">
            <Image
        src={search}
        alt="search files"
        className="mt-4"
      />
            </div>
            <div className="col-md-1 d-flex border-light mt-4">
  <div className="vr bg-secondary shadow-lg p-0  rounded"></div>
</div>
            <div className="col-sm-12 col-md-5 mt-5">
              <LoginForm/>
            </div>
          </div>
        </div>

      </main>

<style jsx>{`
    html, body
     {
      background-color: #f8f8f8;
     }

     .container,col-sm-12 {

      background-color: #f8f8f8;
     }
      
      `}
     
</style>
        </div>

       
    )
}

export default login
