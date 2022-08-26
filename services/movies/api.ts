import Axios from 'axios';
import axios_instance from '../../helper/axios';
import { Movie, QueryParams } from '../../types/Movie';

const OMDB_API = 'http://www.omdbapi.com';
const OMDB_API_KEY = '85999445'; // Hide this

export const searchMovie = async (queryString: string) => {
  try {
    const res = await Axios.get(
      `${OMDB_API}/?s=${queryString}&apiKey=${OMDB_API_KEY}`
    );
    return res;
  } catch (err) {
    console.error('something went wrong', err);
  }
};

export const getAllMovies = async (params: QueryParams) => {
  try {
    const {
      type = '',
      userId = '',
      limit = 10,
      skip = 0,
      sortBy = 'title_asc',
    } = params;
    const res = await axios_instance.get( // Refactor this
      `/movies?limit=${limit}&skip=${skip}&type=${type && type}&userId=${
        userId && parseInt(userId)
      }&sortBy=${sortBy}`
    );
    return res;
  } catch (err) {
    console.error('something went wrong', err);
  }
};

export const addMovie = async (movie: Movie) => {
  try {
    const res = await axios_instance.post('/movies', movie)
    return res
  } catch (err) {
    console.error(err)
  }
  
}

export const getMoviesCount = async () => {
  try {
    const res = await axios_instance.get('/movies/count')
    return res
  } catch (err) {
    console.error(err)
  }
}

export const getUserFavorites = async () => {
  try {
    const res = await axios_instance.get('/movies/favorites');
    return res;
  } catch (err) {
    console.error(err)
  }
}
