import { Table } from "react-bootstrap";
import styles from '../styles/Table.module.css';

function  SearchTable(props){

    return(
      
    <div>

<Table responsive="xl" className="p-2 mt-5 TableData">
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