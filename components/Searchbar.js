import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import styles from '../styles/Searchbar.module.css';
import axios from "axios";

 import Table from '../components/SearchTable';


 



 

function Searchbar ({data}) {
  const [show, setShow] = useState(false);
  const [disable, setSearchButton] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [formInput, setFormInputs] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
    // const [APIData, setAPIData] = useState([]);
    // const [filteredResults, setFilteredResults] = useState([]);
    // const [searchInput, setsearchInput] = useState('');

  // const url = '';
  //   useEffect(() => {
  //     axios.get(url)
  //     .then((response) => {
  //       console.log(response);
  //       setAPIData(response.data);
        
  //     })
  //   }, [])


  //   const searchItems = (searchValue) => {
  //     setsearchInput(searchValue)
  //     if(searchInput !== ''){
  //       const filteredData = APIData.filter((item) => {
  //         return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
  //       })
  //       setFilteredResults(filteredData);
  //     }
  //     else {
  //       setFilteredResults(APIData)
  //     }
  //   }


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





    function toggle(){
      setShow(!show);
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
  <option value="1">Environment</option>
  <option value="2">Financing</option>
  <option value="3">Security</option>
</select>

<select defaultValue={'DEFAULT'} className="form-select mt-3" aria-label="Default select example">
  <option value="DEFAULT">Sub Theme</option>
  <option value="1">Climate</option>
  <option value="2">Oil Spill</option>
  <option value="3">ESIA</option>
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
        <button type="button" name="exportBtn"  className={styles.buttonType} id={styles.exportButton} >Export</button>
       </div>
       </div>

       <div className="table mt-5" id={styles.TableID}  style={{
        display: show?"block":"none"
      }}>
      <Table/>
      </div>
       </Form>
     
       </div>
       
       </>
    );

}

export default Searchbar