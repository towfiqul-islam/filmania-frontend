import React from 'react';

import styles from '../styles/navbar.module.css';
import Logo from './Logo';
import ProfileDropdown from './ProfileDropdown';
import SearchInput from './SearchInput';

const WrappedNavbar = () => {
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

const Navbar = React.memo(WrappedNavbar)

export default Navbar;
