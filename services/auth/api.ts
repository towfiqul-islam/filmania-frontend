import axios from '../../helper/axios'

type User = {
  username?: string;
  email: string;
  password: string;
};


export const registerUser = async (user: User) => {
  try {
    const res = await axios.post('/auth/signup', user);
    localStorage.setItem('userId', res.data.id)
    return res
  } catch (err) {
    console.error('Something went wrong', err);
    return {
      message: 'Something went wrong',
      status: 400
    }
  }
};



export const loginUser = async (user: User) => {
  try {
    const res = await axios.post('/auth/signin', user);
    localStorage.setItem('userId', res.data.id)
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

export const logout = async () => {
  try {
    const res = await axios.post('/auth/signout')
    return res
  } catch (err) {
    console.error(err);
    return {
      message: 'Something went wrong',
      status: 404
    }
  }
}
