import axios from "axios";


export const fetchData = async (page, spe, gen) => {
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}${spe}${gen}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
};