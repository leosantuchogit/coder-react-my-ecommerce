

import "./styles.css";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";
import searchImages from "./apis/unsplash";



function App() {

    searchImages();
    
    return (
        <div>

            <NavBar />    
            <SearchBar />
            <ItemListContainer />
            <Footer />

         
        
        </div>

    );
}


export default App;