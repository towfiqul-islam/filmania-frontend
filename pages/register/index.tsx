import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Loader from '../../components/icons/Loader';
import { registerUser } from '../../services/auth/api';

import styles from '../../styles/forms.module.css';

const Login: NextPage = () => {
  const router = useRouter();
  const [register, setRegister] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const { username, email, password } = register;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await registerUser(register);
    if (res.status === 201) {
      const returnUrl: string = router.query.returnUrl as string || '/movies';
      setLoading(false);
      router.push(returnUrl);
    } else {
      setLoading(false);
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
    }
  };

  return (
    <div className={styles.login_container}>
      {showError && (
        <p className={styles.invalid_alert}>Email already exists</p>
      )}
      <form className={styles.login_form} onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className={styles.input_field}>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            type='text'
            name='username'
            value={username}
            onChange={handleChange}
            placeholder='jdoe123'
            required
          />
        </div>
        <div className={styles.input_field}>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            placeholder='jdoe@example.com'
            required
          />
        </div>
        <div className={styles.input_field}>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            placeholder=''
            required
            minLength={3}
          />
        </div>
        <button type='submit'>
          {loading ? <Loader width='70px' height='20px' /> : 'Submit'}
        </button>

        <p className='text-center mt-20'>
          To login <Link href='/login'> click here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
