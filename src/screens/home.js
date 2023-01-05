
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Footer from "../components/footer";
import UserGrid from "../components/UserGrid.js";

export default function Home() {
    return (
        <div className="page-home">
            <Header />
            <SearchBar />
            <UserGrid />
            <Footer />
        </div>
    );
}