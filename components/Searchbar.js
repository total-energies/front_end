import React, { useEffect, useState, useRef } from "react";
import { Form } from "react-bootstrap";
import styles from '../styles/Searchbar.module.css';
import { Table } from "react-bootstrap";
import axios from "axios";
import Pdf from "react-to-pdf";

 //import Table from '../components/SearchTable';

const ref = React.createRef();


function Searchbar () {
  const [show, setShow] = useState(false);
  const [disable, setSearchButton] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [formInput, setFormInputs] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputs = (event) => {
    setShow(false);
    setSearchButton(false);
    let {name, value} = event.target
    setFormInputs({...formInput, [name]: value});
    setSearchTerm(event.target.value);
  }

  const handleEnterKey =(event) => {
    if (event.key === 'Enter') {
      toggleButton();

    }

  }

  const search = async (event) => {
    event.preventDefault();
    let data = await fetch('', {
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    });
    data = await data.json();
    console.log(data)
    let searchedResults = [...data.results]
    searchedResults.forEach(element => {
      element['checked'] = false;
      
    });
    setSearchResults(searchedResults);
    console.log('in God we trust',searchedResults);

  } 
    function toggleButton(){
      setSearchButton(true);
      setShow(true);
    }

    const handleClick = (event) => {
        swal({
            title: "Data submitted successfully!",
            text: "",
            icon: "success",
            buttons: {
              confirm: true,
            },
          });
      };
     

    return (

      <>
      {/* Modal */}
<div className="modal fade " id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div  className="modal-dialog ">
    <div  className="modal-content position-absolute top-50 start-50 translate-middle" id={styles.modalPosition}>
      <div  className="modal-header">
        <h5 className="modal-title" id={styles.titleAlign}>Add Data</h5>
        <button type="button"  className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div  className="modal-body form-center">
      <form>
      <select defaultValue={'DEFAULT'} className="form-select mt-3" aria-label="Default select example">
  <option value="DEFAULT">Theme</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

<select defaultValue={'DEFAULT'} className="form-select mt-3" aria-label="Default select example">
  <option value="DEFAULT">Sub Theme</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

<input type="email" className="form-control mt-3" id="exampleFormControlInput1" placeholder="Owner"></input>
<textarea className="form-control mt-3" id="exampleFormControlTextarea1" rows="3"  placeholder="Answer"></textarea>
      </form>
      </div>
      <div  className="modal-footer">
        <button type="button"  className={styles.saveButton} onClick={handleClick}>Save Data</button>
      </div>
    </div>
  </div>
</div>
        <div className={styles.container}>
       <Form id={styles.form} role="search" onSubmit={search}>
        <div className={styles.parentForm}>
        <div>  
       <input type='text' required id={styles.query} name="searchTerm" value={searchTerm} className={styles.inputType}  placeholder="Enter a Question"
        onChange={(handleInputs)} onKeyPress ={(handleEnterKey)}>
       </input>
       </div>
       <div className={styles.searchButton}>
        <button type="query"  className={styles.buttonType} onClick={toggleButton} disabled={disable}>Search</button>
       </div>

       <div className={styles.addButton} >
        <button type="button" value="submit" className={styles.buttonAdd} data-bs-toggle="modal" data-bs-target="#exampleModal">Add Data</button>
       </div>
       
       <div className={styles.searchButton}>
         <Pdf target={ref} filename="anwsers.pdf">
          {({ toPdf }) => <button type="button" name="exportBtn"  className={styles.buttonType} id={styles.exportButton} onClick={toPdf}>Export</button>}
        </Pdf>
       </div>
       </div>

       <div className="table mt-5" id={styles.TableID}  style={{
        display: show?"block":"none"
      }}>


<Table responsive="xl" className="p-2 mt-5 TableData" ref={ref}>
        <tbody>
          <tr className="mt-2">
           
            <td> <input type="checkbox" className="form-check-input ms-1" id="exampleCheck1"/></td>
            <td>
            <span>Environment/Owener Pauline</span>
              <p className="text-secondary">The Integrated Lake Albert Resource Development Project, including the Tilenga development and the EACOP pipeline, is a project consistent with this strategy of low-dead-end projects that are the most efficient in terms of greenhouse gas emissions. In particular, the greenhouse gas emissions intensity of this project is 13 kgCO2/boe, i.e. less than 1 MtCO2eq/year at the plateau (Scope 1 + 2), corresponding to a level much lower than the current average of TotalEnergies oil production which is of the order of 19 kgCO2/bep. </p>
           </td>
           
          </tr>
          
          <tr className="mt-2">
            <td><input type="checkbox" className="form-check-input ms-1" id="exampleCheck1"/></td>
            <td>
            <span>Financing/Owener Fabien</span>
              <p className="text-secondary">The integrated project to develop the Lake Albert resources, which consists of the Tilenga development and the EACOP pipeline, is consistent with our strategy to focus on projects with both a low breakeven point and low greenhouse gas footprint. This projects GHG emissions intensity comes to 13 kg CO2/boe, which is well below the current average of our oil portfolio of around 20 kg/boe.</p>
           </td>
           
          </tr>
          <tr className="mt-2">
            <td><input type="checkbox" className="form-check-input ms-1" id="exampleCheck1"/></td>
            <td>
            <span>Security/Owener Jean Michel</span>
              <p className="text-secondary">To-date - 10,000 people in the Tilenga footprint area, have been held over 3 years, to explain the land acquisition process and ensure that all interested and affected parties are informed and involved throughout the process.</p>
          </td>
           
          </tr>
        </tbody>
      </Table>

     
        {/* <Table data={searchResults} /> */}
    

      
      </div>
       </Form>
     
       </div>
       
       </>
    );

}

export default Searchbar