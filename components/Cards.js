import React, { useState,useEffect } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/Cards.module.css';
import Image from "next/image";
import icon from '../public/categories.png';
import plus from '../public/add.png';
import pieChart from '../public/pie-chart.png';
import barChart from '../public/bar-graph.png';
//import Modal from "../components/Modal";
//import Owners from '../components/OwnerModal';


export default function Cards  () {
const [show, setShow] = useState(false);
const [owner,setOwner]= useState('');

const submitOwner = async event => {
 // event.preventDefault()

  const res = await fetch(
    'https://te-searchengine.herokuapp.com/api/v1/owners/',
    {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
       owner
      }),
    }
  )

  const result = await res.json();
  // result.user => 'Ada Lovelace'
  console.log(result);
}
    return (
<>

    {/* Owner Modal */}
    <div className="modal fade " id="ModalOwner"  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div  className="modal-dialog ">
    <div  className="modal-content" id={styles.modalPosition}>
      <div  className="modal-header">
        <h5 className="modal-title" id={styles.titleAlign}>Add Owner</h5>
        <button type="button"  className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div  className="modal-body form-center">
      <form onSubmit={submitOwner}>
        <input type="text" className="form-control mt-3" value="owner" name="owner" id="exampleFormControlInput1" placeholder="Owner" onChange={(event)=>setOwner(event.target.value)}></input>
        
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


        <Container id={styles.container} > 
        <Row>
          <Col>

     

          <Card className={styles.cardOne}>
            <Card.Body>
            <div className={styles.containerIconz}>
            <div className={icon}>

                <Image 
                src={icon}
                alt='category icon'
                width={100}
                height={100}/>
                </div>
                <div className={styles.textOne}>
                <h5 className={styles.themes}>Themes</h5>
                <div className={styles.number}>
                    45
                </div>
                </div>
                <div className={styles.plus}>
                    <Image onClick={() => setShow(true)}
                    src={plus}
                    alt='plus icon'
                    width={50}
                    height={50}
                    data-bs-toggle="modal" data-bs-target="#ModalTheme"
                    />
                    {/* <Modal title="Add Theme" onClose={() => setShow(false)} show={show}/> */}
                </div>
             </div>
            </Card.Body>
            </Card>
            </Col>
          <Col>

        
          <Card className={styles.cardTwo}>
            <Card.Body>
            <div className={styles.containerIconz}>
            <div className={icon}>
                <Image 
                src={pieChart}
                alt='category icon'
                width={100}
                height={100}
                />
                </div>
                <div className={styles.textOne}>
                <h5 className={styles.themes}>Owners</h5>
                <div className={styles.number}>
                    85
                </div>
                </div>
                <div className={styles.plus}>
                    <Image onClick={() => setShow(true)}
                    src={plus}
                    alt='plus icon'
                    width={50}
                    height={50}
                    data-bs-toggle="modal" data-bs-target="#ModalOwner"
                    />
                </div>
                {/* <Owners title="Add Owner" onClose={() => setShow(false)} show={show}/>  */}
             </div>
            </Card.Body>
            </Card>
            </Col>
          <Col>
          <Card className={styles.cardThree}>
            <Card.Body>
            <div className={styles.containerIconz}>
            <div className={icon}>
                <Image 
                src={barChart}
                alt='category icon'
                width={100}
                height={100}/>
                </div>
                <div className={styles.textOne}>
                <h5 className={styles.themes}>Answers</h5>
                <div className={styles.number}>
                    1450
                </div>
                </div>
             </div>
            </Card.Body>
            </Card>
            </Col>
        </Row>
      </Container>
      </>
    );

}



// export default Cards