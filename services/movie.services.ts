import Axios from 'axios';
import axios_instance from '../helper/axios';

const OMDB_API = 'http://www.omdbapi.com';
const OMDB_API_KEY = '85999445';

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

export const getAllMovies = async (filters: any) => {
  try {
    const { type = '', userId = '', limit = 10, skip = 0 } = filters;
    const res = await axios_instance.get(
      `/movies?limit=${limit}&skip=${skip}&type=${type && type}&userId=${
        userId && parseInt(userId)
      }`
    );
    return res;
  } catch (err) {
    console.error('something went wrong', err);
  }
};
