import axios from '../helper/axios'

type User = {
  email: string;
  password: string;
};



export const loginUser = async (user: User) => {
  try {
    const res = await axios.post('/auth/signin', user);
    return res
  } catch (err) {
    console.error('Something went wrong', err);
    return {
      message: 'Something went wrong',
      status: 400
    }
  }
};

export const getCurrentUser = async () => {
  try {
    
    const res = await axios.get('/auth/whoami');
    return res
  } catch (err) {
    console.error(err);
    return {
      message: 'forbidden',
      status: 403
    }
  }
};
