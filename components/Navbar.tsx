import React from 'react';

import styles from '../styles/navbar.module.css';
import Logo from './Logo';
import ProfileDropdown from './ProfileDropdown';
import SearchInput from './SearchInput';

const Navbar = () => {
  return (
    <>
      <div className={styles.nav_wrapper}>
        <Logo />
        <SearchInput />
        <ProfileDropdown />
      </div>
    </>
  );
};

export default Navbar;
