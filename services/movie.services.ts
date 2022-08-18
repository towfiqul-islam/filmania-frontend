import axios from "axios";

const OMDB_API = 'http://www.omdbapi.com';
const OMDB_API_KEY = '85999445';

export const searchMovie = async (queryString: string) => {
    try {
        const res = await axios.get(`${OMDB_API}/?s=${queryString}&apiKey=${OMDB_API_KEY}`);
        return res;
    } catch (err) {
        console.error('something went wrong', err)
    }
    
}