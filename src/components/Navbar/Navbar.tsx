import logo from '../../logo.png';

import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { Menu } from 'components/Menu';
import { useViewport } from 'hooks/useViewport';
import { Viewport } from 'types/shared';
import { useState } from 'react';
import { NavbarLinks } from './NavbarLinks';
import { useNavContext } from 'hooks/useNavContext';

export const Navbar: React.FC = () => {
  const viewport = useViewport();
  const { isMenuOpen, toggleMenu, closeMenu } = useNavContext();

  return (
    <nav className={styles['navbar']}>
      <Link className={styles['logo-link']} to="/" onClick={closeMenu}>
        <img src={logo} width="40px" height="40px" alt="Flex Logo" />
      </Link>
      {viewport === Viewport.Mobile && <Menu isOpen={isMenuOpen} toggleOpen={toggleMenu} />}
      <NavbarLinks isOpen={isMenuOpen} onClick={closeMenu} />
    </nav>
  );
};
