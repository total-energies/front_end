import { React } from 'react';
import {  Button, Form } from 'react-bootstrap';
import styles from "../styles/Modal.module.css";




function Owners (props) {
    if (!props.show) {
        return null;
      }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Your Data was Submitted Succefully`);
  }

      return (
        <div onClick={props.onClose} className={styles.modal}>
          <div onClick={(e) => e.stopPropagation()} className={styles.content}>
            <div className={styles.header}>
              <h4 className={styles.title}>{props.title}</h4>
            </div>
            <div className={styles.body}>
              <Form>
              <Form.Group >
                  <Form.Control type="name" placeholder="Theme"/>
                </Form.Group> <br></br>
                <Form.Group >
                  <Form.Control type="email" placeholder="Owner"/>
                </Form.Group>
              </Form>
    
            </div>
           <div className={styles.footer}>
             <Button type="submit" value="submit" onClick={(event)=>handleSubmit(event)} className="justify-content-between">Add Owner</Button>
           </div> 
          </div>
    
        </div>
      );

}





export default Owners