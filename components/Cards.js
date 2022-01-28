import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styles from '../styles/Cards.module.css';
import Image from "next/image";
import Logo from "../components/Logo";
import icon from '../public/categories.png';
import plus from '../public/add.png';
import pieChart from '../public/pie-chart.png';
import barChart from '../public/bar-graph.png';
import data from '../db.json';




export default function Cards() {
  const [show, setShow] = useState(false);
  const [owner, setOwner] = useState('');
  const [theme, setTheme] = useState('');
  const [subtheme, setSubtheme] = useState('');

  const ownerUrl= 'http://localhost:3000/owners';
 

  const addOwner= async owner=>{
     // console.log(owner);
     //const i=1;
     const id=Math.floor(Math.random()*1000)+1;
      const response = await axios.post(ownerUrl,{id,...owner}).then(()=>{
        console.log(response);
      });
  }


  const ownerSubmit=(e) => {
    e.preventDefault();

    if(!owner){
      alert("Please Add Owner");
      return
    }
    addOwner({owner});
    setOwner('');
  }


  // theme and subtheme posting methods
  const themeUrl= 'http://localhost:3000/themes';
 


  const addThemes=async theme =>{
    //  console.log(theme);
    //  console.log(subtheme);
    const id=Math.floor(Math.random()*1000)+1;
    const response = await axios.post(themeUrl,{id,...theme}).then(()=>{
      console.log(response);
    });    
 }

 const themeSubmit=(e) => {
  e.preventDefault();

  if(!theme){
    alert("Please Add Theme and Subtheme");
    return
  }

  addThemes({theme});
  setTheme('');
}

const subthemeUrl= 'http://localhost:3000/subthemes';
const addSubThemes=async (theme,subtheme) =>{
  //  console.log(theme);
  //  console.log(subtheme);
  const id=Math.floor(Math.random()*1000)+1;
  const response = await axios.post(subthemeUrl,{id,...theme,...subtheme}).then(()=>{
    console.log(response);
  });    
}

const subthemeSubmit=(e) => {
  e.preventDefault();

  if(!subtheme){
    alert("Please Add Subtheme");
    return
  }

  addSubThemes({theme,subtheme});
  setTheme('');
  setSubtheme('');
}
 

  return (


    <>
      {/*-----modals----  */}
      {/* Owner Modal */}
      <div className="modal fade " id="ModalOwner" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog ">
          <div className="modal-content" id={styles.modalPosition}>
            <div className="modal-header">
              <h5 className="modal-title" id={styles.titleAlign}>Add Owner</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body form-center">
              <form onSubmit={ownerSubmit}>
                <input type="text" className="form-control mt-3"  value={owner}  id="exampleFormControlInput1" placeholder="Owner" onChange={(e)=>setOwner(e.target.value)}></input>
                <hr />
                <div className="modal-footer">
                  <button type="submit" className={styles.saveButton}>Save Owner</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>


      {/* Theme Modal */}
      <div className="modal fade " id="ModalTheme" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog ">
          <div className="modal-content" id={styles.modalPosition}>
            <div className="modal-header">
              <h5 className="modal-title" id={styles.titleAlign}>Add Theme</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body form-center">
              <form  onSubmit={themeSubmit}>
                <input type="text" className="form-control mt-3" value={theme} id="exampleFormControlInput1" placeholder="Theme" onChange={(e)=>setTheme(e.target.value)} ></input>
                <div className="modal-footer">
              <button type="submit" className={styles.saveButton}>Save Data</button>
            </div>
              </form>
            </div>
            
          </div>
        </div>
      </div>


      
      {/* Sub Theme Modal */}
      <div className="modal fade " id="ModalSubTheme" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog ">
          <div className="modal-content" id={styles.modalPosition}>
            <div className="modal-header">
              <h5 className="modal-title" id={styles.titleAlign}>Add Sub Theme</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body form-center">
              <form  onSubmit={subthemeSubmit}>
                {/* <input type="text" className="form-control mt-3" value={theme} id="exampleFormControlInput1" placeholder="Theme" onChange={(e)=>setTheme(e.target.value)} ></input> */}
                <select defaultValue={'DEFAULT'} className="form-select mt-3" value={theme} onChange={(e)=>setTheme(e.target.value)} aria-label="Default select example">
                <option value="DEFAULT">--Theme---</option>

                {
                  data.themes.map((result)=>(<option key={result.id}>{result.theme}</option>))
                }
              
               
              </select>
                <input type="text" className="form-control mt-3" value={subtheme} id="exampleFormControlInput1" placeholder="Sub Theme" onChange={(e)=>setSubtheme(e.target.value)} ></input>

                <div className="modal-footer">
              <button type="submit" className={styles.saveButton}>Save Data</button>
            </div>
              </form>
            </div>
            
          </div>
        </div>
      </div>
      {/*-----modals----  */}

      <div className='container p-5 mt-5'>
        {/* <div className='row p-3'>
             <div className='col-md-12'>
             <Logo className="float-end"/>
             </div>
             </div> */}
        <div className='row p-4 d-inline-flex p-2 bd-highlight me-5' id={styles.cardContainer}>
          <div className='col-md-4 mt-3'>
            <div className="card rounded-3 bg-primary" id={styles.cardOne}>
              <div className="card-body" id={styles.containerIconz}>

              <Image
                  src={pieChart}
                  id={styles.icons}
                  alt='category icon'
                  width={100}
                  height={100}
                />

                <div className="ms-3">
                  <h5 className="card-text text-white mt-2">Owners</h5>
                  <h1 className='text-white'>45</h1>
                </div>

                <button className="btn btn-default align-bottom">
                  <Image onClick={() => setShow(true)}
                    src={plus}
                    alt='plus icon'
                    width={50}
                    height={50}
                    data-bs-toggle="modal" data-bs-target="#ModalOwner"
                  />
                </button>
              </div>
            </div>
          </div>

          <div className='col-md-4 mt-3'>
            <div className="card rounded-3" id={styles.cardTwo}>
              <div className="card-body" id={styles.containerIconz}>

              <Image
                  src={icon}
                  alt='category icon'
                  id={styles.icons}
                  width={100}
                  height={100}
                />

                <div className="ms-3">
                  <h5 className="card-text text-white mt-2">Themes</h5>
                  <h1 className='text-white'>45</h1>
                </div >


                <button className="btn btn-default align-bottom">
                  <Image onClick={() => setShow(true)}
                    src={plus}
                    alt='plus icon'

                    id={styles.iconsPlus}
                    width={50}
                    height={50}
                    data-bs-toggle="modal" data-bs-target="#ModalTheme"
                  />
                </button>


              </div>
            </div>
          </div>
          <div className='col-md-4 mt-3'>

            <div className="card rounded-3" id={styles.cardThree}>
              <div className="card-body" id={styles.containerIconz}>


                <Image
                  src={barChart}
                  alt='category icon'
                  id={styles.icons}
                  width={100}
                  height={100}
                />

                <div className='ms-3'>
                  <h5 className="card-text text-white mt-2">SubThemes</h5>
                  <h1 className='text-white'>45</h1>
                </div>
                <button className="btn btn-default align-bottom">
                  <Image onClick={() => setShow(true)}
                    src={plus}
                    alt='plus icon'

                    id={styles.iconsPlus}
                    width={50}
                    height={50}
                    data-bs-toggle="modal" data-bs-target="#ModalSubTheme"
                  />
                </button>

              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  )

}