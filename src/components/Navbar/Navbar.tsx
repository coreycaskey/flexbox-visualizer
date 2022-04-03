import { NavigationLink } from './NavbarLink';
import { Dropdown } from './Dropdown';

import logo from '../../logo.png';

import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => (
  <nav className={styles['navbar']}>
    <Link className={styles['logo-link']} to="/">
      <img src={logo} width="40px" height="40px" alt="Flex Logo" />
    </Link>
    <ul className={styles['navbar-container']}>
      <li className={styles['navbar-item']}>
        <NavigationLink
          redirectLink="/flex-direction"
          label="Flex Direction"
          className={styles['navbar-link']}
        />
      </li>
      <li className={styles['navbar-item']}>
        <NavigationLink
          redirectLink="/justify-content"
          label="Justify Content"
          className={styles['navbar-link']}
        />
      </li>
      <li className={styles['navbar-item']}>
        <NavigationLink
          redirectLink="/align-items"
          label="Align Items"
          className={styles['navbar-link']}
        />
      </li>
      <li className={styles['navbar-item']}>
        <NavigationLink
          redirectLink="/flex-wrap"
          label="Flex Wrap"
          className={styles['navbar-link']}
        />
      </li>
      <li className={styles['navbar-item']}>
        <NavigationLink
          redirectLink="/align-content"
          label="Align Content"
          className={styles['navbar-link']}
        />
      </li>
      <li className={styles['navbar-item']}>
        <NavigationLink redirectLink="/flex" label="Flex" className={styles['navbar-link']} />
      </li>
      {/* <Dropdown label="Flex Container Properties" /> */}
    </ul>
  </nav>
);
