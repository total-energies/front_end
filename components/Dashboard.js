import Layout from "./Layout";
import Cards from '../components/Cards';
import Searchbar from "../components/Searchbar";
import Logo from "../components/Logo";




function Dashboard() {

    return (
        <div>
            <Layout>
                <Logo/>
                <Cards/>
                <Searchbar/>
            </Layout>

        </div>
    );

}






export default Dashboard