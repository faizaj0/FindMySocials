
import Header from "../components/header.js";
import Searchbar from "../components/searchbar.js";
import Footer from "../components/footer";
import UserGrid from "../components/UserGrid.js";

export default function Home() {
    return (
        <div className="home">
            <Header />
            <Searchbar />
            <UserGrid />
            <Footer />
        </div>
    );
}