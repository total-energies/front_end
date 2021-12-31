import { Table } from "react-bootstrap";
import styles from '../styles/Table.module.css';

function  SearchTable(){

  
   
   function checkboxChange(e){

   }
    return(
      
    <div>

<Table responsive="xl" className="p-2 mt-5">
        <tbody>
          <tr className="mt-2">
            <td> <input type="checkbox" className="form-check-input ms-1" id="exampleCheck1"/></td>
            <td><p className="text-secondary">The Shareholders Agreement is an arrangement among the shareholders of the EACOP (East African Crude Oil Pipeline) Company. EACOP shareholders constitute the parties in the Upstream (Total, CNOOC and the Uganda National Oil Company UNOC) together with the Tanzania Petroleum Development Corporation, TPDC. It sets out the rights and obligations of shareholders, the operation of the business and the decision-making process.</p>
</td>
           
          </tr>
          <tr className="mt-2">
            <td><input type="checkbox" className="form-check-input ms-1" id="exampleCheck1"/></td>
            <td><p className="text-secondary">The Shareholders Agreement is an arrangement among the shareholders of the EACOP (East African Crude Oil Pipeline) Company. EACOP shareholders constitute the parties in the Upstream (Total, CNOOC and the Uganda National Oil Company UNOC) together with the Tanzania Petroleum Development Corporation, TPDC. It sets out the rights and obligations of shareholders, the operation of the business and the decision-making process.</p>
</td>
           
          </tr>
          <tr className="mt-2">
            <td><input type="checkbox" className="form-check-input ms-1" id="exampleCheck1"/></td>
            <td><p className="text-secondary">The Shareholders Agreement is an arrangement among the shareholders of the EACOP (East African Crude Oil Pipeline) Company. EACOP shareholders constitute the parties in the Upstream (Total, CNOOC and the Uganda National Oil Company UNOC) together with the Tanzania Petroleum Development Corporation, TPDC. It sets out the rights and obligations of shareholders, the operation of the business and the decision-making process.</p>
</td>
           
          </tr>

          <tr className="mt-2">
            <td><input type="checkbox" className="form-check-input ms-1" id="exampleCheck1"/></td>
            <td><p className="text-secondary">The Shareholders Agreement is an arrangement among the shareholders of the EACOP (East African Crude Oil Pipeline) Company. EACOP shareholders constitute the parties in the Upstream (Total, CNOOC and the Uganda National Oil Company UNOC) together with the Tanzania Petroleum Development Corporation, TPDC. It sets out the rights and obligations of shareholders, the operation of the business and the decision-making process.</p>
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