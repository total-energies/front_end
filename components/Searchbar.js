import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import styles from '../styles/Searchbar.module.css';
import axios from "axios";
import data from '../db.json';
import Table from '../components/SearchTable';





function Searchbar() {
  const [show, setShow] = useState(false);
  const [APIData, setAPIData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setsearchInput] = useState('');
  const [owner, setOwner] = useState('');
const [theme, setTheme] = useState('');
const [subtheme, setSubtheme] = useState('');
const [answer, setAnswer] = useState('');

  const url = '';
  useEffect(() => {
    axios.get(url)
      .then((response) => {
        console.log(response);
        setAPIData(response.data);

      })
  }, [])


  const searchItems = (searchValue) => {
    setsearchInput(searchValue)
    if (searchInput !== '') {
      const filteredData = APIData.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
      })
      setFilteredResults(filteredData);
    }
    else {
      setFilteredResults(APIData)
    }
  }

  const answerUrl= 'http://localhost:3000/answers';
  const addAnswer= async (theme,subtheme,owner,answer) =>{
    // console.log(owner);
    //const i=1;
    const id=Math.floor(Math.random()*1000)+1;
     const response = await axios.post(answerUrl,{id,...theme,...subtheme,...owner,...answer}).then(()=>{
       console.log(response);
     });
 }
 const answerSubmit=(e) => {
  e.preventDefault();

  if(!theme){
    alert("Please Add Theme and Subtheme");
    return
  }

  addAnswer({theme,subtheme,owner,answer});
  setTheme('');
  setSubtheme('');
  setOwner('');
  setAnswer('');
}



  function toggle() {
    setShow(!show);
  }

  function toggleButton() {
    setShow(!show);
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
      <div className="modal fade " id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog ">
          <div className="modal-content position-absolute top-50 start-50 translate-middle" id={styles.modalPosition}>
            <div className="modal-header">
              <h5 className="modal-title" id={styles.titleAlign}>Add Data</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body form-center">
              <form onSubmit={ answerSubmit}>
                <select defaultValue={'DEFAULT'} className="form-select mt-3" value={theme} onChange={(e) => setTheme(e.target.value)} aria-label="Default select example">
                  <option value="DEFAULT">--Theme---</option>
                  {
                    data.themes.map((result) => (<option key={result.id}>{result.theme}</option>))
                  }
                </select>

                <select defaultValue={'DEFAULT'} className="form-select mt-3" value={subtheme} onChange={(e) => setSubtheme(e.target.value)} aria-label="Default select example">
                  <option value="DEFAULT">--SubTheme---</option>
                  {
                    data.subthemes.map((result) => (<option key={result.id}>{result.subtheme}</option>))
                  }
                </select>

                <select defaultValue={'DEFAULT'} className="form-select mt-3" value={owner} onChange={(e) => setOwner(e.target.value)} aria-label="Default select example">
                  <option value="DEFAULT">--Owner---</option>
                  {
                    data.owners.map((result) => (<option key={result.id}>{result.owner}</option>))
                  }
                </select>
                <textarea className="form-control mt-3" id="exampleFormControlTextarea1" rows="3" placeholder="Answer" value={answer} onChange={(e) => setAnswer(e.target.value)}></textarea>

                <div className="modal-footer">
              <button type="submit" className={styles.saveButton} onClick={handleClick}>Save Data</button>
            </div>
              </form>
            </div>
          
          </div>
        </div>
      </div>


      <div className="container" >
        <div className="row" id={styles.searchBar}>
          <div className="col-sm-12 col-md-8 col-lg-8 p-3"  >
            <input
              type="text"
              name="search"
              id={styles.searchInput}
              className="form-control w-80 p-2"
              placeholder="Enter a Question"
              onChange={(e) => searchItems(e.target.value)}
            />
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 pt-3 ">
            <button type="button" className="btn  pt-2 me-2" id={styles.searchButton} onClick={toggle}>search</button>
            <button type="button" className="btn btn-primary pt-2  me-2"
              data-bs-toggle="modal" data-bs-target="#exampleModal"
            >Add</button>
            <button type="button" className="btn btn-danger pt-2 ">Export</button>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 pt-3 " style={{
            display: show ? "block" : "none"
          }}>
            <Table />
          </div>
        </div>



      </div>


    </>
  );

}


export default Searchbar