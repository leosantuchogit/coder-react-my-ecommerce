import axios from "axios";

const searchImages = async (term) => {

    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: "Client-ID arMxV_TuA8oOETK4Y_AKEGnQUwkMWACKKiHPUg-Xv5A"
        }, 
        params: {
            query:term
        }
    });

    return response.data.results;

}


export default searchImages;
