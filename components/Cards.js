import axios  from 'axios';
import React, { useState,useEffect } from 'react';
import styles from '../styles/Cards.module.css';
import Image from "next/image";
import Logo from "../components/Logo";
import icon from '../public/categories.png';
import plus from '../public/add.png';
import pieChart from '../public/pie-chart.png';
import barChart from '../public/bar-graph.png';
//import Modal from "../components/Modal";
//import Owners from '../components/OwnerModal';

const baseUrl='https://te-searchengine.herokuapp.com/api/v1/owners/';

export default function Cards  () {

const [show, setShow] = useState(false);
const [owner,setState]= useState('');
const [post,setPost]= useState('');




const state={
  owner:''
};

const handleChange=event=>{
  setState({ [event.target.name] :event.target.value});
}





    return(

        
        <>
        {/*-----modals----  */}
             {/* Owner Modal */}
    <div className="modal fade " id="ModalOwner"  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div  className="modal-dialog ">
    <div  className="modal-content" id={styles.modalPosition}>
      <div  className="modal-header">
        <h5 className="modal-title" id={styles.titleAlign}>Add Owner</h5>
        <button type="button"  className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div  className="modal-body form-center">
      <form >
        <input type="text" className="form-control mt-3"  name="owner" id="exampleFormControlInput1" placeholder="Owner" onChange={handleChange}></input>
        
      </form>
      </div>
      <div  className="modal-footer">
        <button type="submit"  className={styles.saveButton}>Save Owner</button>
      </div>
    </div>
  </div>
</div>


     {/* Theme Modal */}
     <div className="modal fade " id="ModalTheme"  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div  className="modal-dialog ">
    <div  className="modal-content" id={styles.modalPosition}>
      <div  className="modal-header">
        <h5 className="modal-title" id={styles.titleAlign}>Add Theme</h5>
        <button type="button"  className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div  className="modal-body form-center">
      <form>
        <input type="text" className="form-control mt-3" id="exampleFormControlInput1" placeholder="Theme"></input>
        <input type="text" className="form-control mt-3" id="exampleFormControlInput1" placeholder="Sub Theme"></input>
      </form>
      </div>
      <div  className="modal-footer">
        <button type="button"  className={styles.saveButton}>Save Data</button>
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
                <div className="card rounded-3" id={styles.cardTwo}>
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
                        <h5 className="card-text text-white mt-2">Answers</h5>
                        <h1 className='text-white'>45</h1>
                        </div>
                            
                    </div>
                </div>

                 </div>
            </div>

        </div>
         </>
    )

}