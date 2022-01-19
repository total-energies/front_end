import Sidebar from "./Sidebar";
import Logo from "./Logo"
import Cards from "./Cards"
import Searchbar from "./Searchbar"
import styles from "../styles/Dashboard.module.css"


function Dashboard() {

    return (
        <div className="container">
            <div className={styles.containerLeft}>
                <Sidebar/>
           </div>
           <div className="ms-5" id={styles.containerRight}>
           <section id="section">
           <div className="row">
           <div className=" col-sm-12 col-md-12">
           <Logo className="position-absolute top-0 end-0"/>
           </div>
           </div>
           <div className="row">
               <div className="col-sm-12 col-md-12 col-lg-12">
               <Cards className={styles.menu}/>
               </div>
                <div className="row">
               <div className="col-sm-12 col-md-12 col-lg-12">
              <Searchbar/>
               </div>
           </div>
           </div>
           </section>
           </div>
        </div>
    );
}

export default Dashboard; 