import { Form } from "react-bootstrap";
import styles from '../styles/Searchbar.module.css';




function Searchbar () {

    return (
       <Form id={styles.form} role="search" >
        <div className={styles.parentForm}>
        <div>  
       <input type='search' id={styles.query} name="" className={styles.inputType} placeholder="Enter a Question">
       </input>
       </div>
       <div className={styles.searchButton}>
        <button type="submit" value="submit" className={styles.buttonType}>Search</button>
       </div>
       <div className={styles.addButton}>
        <button type="submit" value="submit" className={styles.buttonAdd}>Add Data</button>
       </div>
       </div>
       </Form>
       
    );

}








export default Searchbar