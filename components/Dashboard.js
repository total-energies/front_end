import Layout from "./Layout";
import Cards from '../components/Cards';
import Searchbar from "../components/Searchbar";
import Logo from "../components/Logo";
import AppName from "./AppName";




function Dashboard() {

    return (
        <div>
            <Layout>
                <AppName/>
                <Logo/>
                <Cards/>
                <Searchbar/>
            </Layout>

        </div>
    );

}






export default Dashboard