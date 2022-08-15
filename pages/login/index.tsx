import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { loginUser } from '../../services/auth.services';

const Login: NextPage = () => {
  const router = useRouter();
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const { email, password } = login;

  const handleChange = (e: any) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await loginUser(login);
    if (res.status === 201) {
      const returnUrl: any = router.query.returnUrl || '/movies';
      router.push(returnUrl);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          placeholder='jdoe@example.com'
        />
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          placeholder=''
        />
        <input type='submit' />
      </form>
    </div>
  );
};

export default Login;
