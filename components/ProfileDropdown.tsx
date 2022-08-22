import React, { useState } from 'react';
import AccountIcon from './icons/AccountIcon';
import styles from '../styles/navbar.module.css';
import { logout } from '../services/auth/api';
import { useRouter } from 'next/router';
import Loader from './icons/Loader';

const ProfileDropdown = () => {
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
      router.push('/login');
    }
  };
  return (
    <>
      <div className={styles.profile_dropdown_wrapper}>
        <div onClick={toggleDropdown}>
          <AccountIcon />
        </div>
        {open && (
          <ul className={styles.profile_dropdown}>
            <li>Profile</li>
            <li onClick={handleLogout}>{loading ? <Loader /> : 'Logout'}</li>
          </ul>
        )}
      </div>
    </>
  );
};

export default ProfileDropdown;
