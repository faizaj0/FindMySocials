import Header from "../components/header.js";
import Searchbar from "../components/searchbar.js";
import Footer from "../components/footer";
import Userlist from "../components/userlist.js";





export default function home() {
    return (
        <div className="home">
            <Header />
            <Searchbar />
            <Userlist />
            <Footer />
        </div>
    );
}