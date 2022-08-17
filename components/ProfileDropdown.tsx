import React, { useState } from 'react';
import AccountIcon from './icons/AccountIcon';
import styles from '../styles/navbar.module.css';

const ProfileDropdown = () => {
  const [open, setOpen] = useState(false);
  const toggleDropdown = () => {
    setOpen(!open);
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
            <li>Logout</li>
          </ul>
        )}
      </div>
    </>
  );
};

export default ProfileDropdown;
