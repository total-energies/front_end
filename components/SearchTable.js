import { Table } from "react-bootstrap";
import styles from '../styles/Table.module.css';

function  SearchTable({index, answer, owner, theme}){

    return(
      
    <div key={index}>

<Table responsive="xl" className="p-2 mt-5 TableData">
        <tbody>
          <tr className="mt-2">
           
            <td> <input type="checkbox" className="form-check-input ms-1" id="exampleCheck1"/></td>
            <td>
            <span>{theme}/{owner}</span>
              <p className="text-secondary">{answer} </p>
           </td>
           
          </tr>
          
          <tr className="mt-2">
            <td><input type="checkbox" className="form-check-input ms-1" id="exampleCheck1"/></td>
            <td>
            <span>{theme}/{owner}</span>
              <p className="text-secondary">{answer}</p>
           </td>
           
          </tr>
          <tr className="mt-2">
            <td><input type="checkbox" className="form-check-input ms-1" id="exampleCheck1"/></td>
            <td>
            <span>{theme}/{owner}</span>
              <p className="text-secondary">{answer}</p> 
          </td>
           
          </tr>
        </tbody>
      </Table>

      <div className="w-100">
      <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-center">
    <li className="page-item"><a className="page-link" id={styles.paginationText} href="#">Previous</a></li>
    <li className="page-item active"><a className="page-link" id={styles.activeText} href="#">1 <span className="sr-only"></span> </a></li>
    <li className="page-item"><a className="page-link" id={styles.paginationText} href="#">2</a></li>
    <li className="page-item"><a className="page-link"  id={styles.paginationText} href="#">3</a></li>
    <li className="page-item"><a className="page-link" id={styles.paginationText} href="#">Next</a></li>
  </ul>
</nav>
      </div>
        
    </div>
    );
}

export default SearchTable