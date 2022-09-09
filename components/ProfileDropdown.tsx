import React, { useEffect, useState } from 'react';
import AccountIcon from './icons/AccountIcon';
import styles from '../styles/navbar.module.css';
import { logout } from '../services/auth/api';
import { useRouter } from 'next/router';
import Loader from './icons/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentTheme, toggleTheme } from '../store/themeReducer';

const ProfileDropdown = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(selectCurrentTheme)
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const toggleDropdown = () => {
    setOpen(!open);
  };
  const handleLogout = async () => {
    setLoading(true);
    const res = await logout();
    if (res?.status === 201) {
      setLoading(false);
      localStorage.removeItem('theme')
      window.location.reload()
    }
  };
  const handleTheme = () => {
    if (currentTheme === 'light') {
      dispatch(toggleTheme('dark'))
    } else if (currentTheme === 'dark') {
      dispatch(toggleTheme('light'))
    }

    toggleDropdown()
  }

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    dispatch(toggleTheme(currentTheme))
  }, [])

  return (
    <>
      <div className={styles.profile_dropdown_wrapper}>
        <div onClick={toggleDropdown}>
          <AccountIcon />
        </div>
        {open && (
          <ul className={styles.profile_dropdown}>
            <li onClick={handleTheme}>Switch theme</li>
            <li onClick={handleLogout}>{loading ? <Loader /> : 'Logout'}</li>
          </ul>
        )}
      </div>
    </>
  );
};

export default ProfileDropdown;
