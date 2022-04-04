import { NavbarLink } from './NavbarLink';

import styles from './Navbar.module.css';

export interface NavbarLink {
  redirectLink: string;
  label: string;
}

const links: NavbarLink[] = [
  {
    redirectLink: '/flex-direction',
    label: 'Flex Direction',
  },
  {
    redirectLink: '/justify-content',
    label: 'Justify Content',
  },
  {
    redirectLink: '/align-items',
    label: 'Align Items',
  },
  {
    redirectLink: '/flex-wrap',
    label: 'Flex Wrap',
  },
  {
    redirectLink: '/align-content',
    label: 'Align Content',
  },
  {
    redirectLink: '/flex',
    label: 'Flex',
  },
  {
    redirectLink: '/align-self',
    label: 'Align Self',
  },
];

export interface NavbarLinksProps {
  isOpen: boolean;
  onClick: () => void;
}

export const NavbarLinks: React.FC<NavbarLinksProps> = ({ isOpen, onClick }) => {
  return (
    <ul
      className={`${styles['navbar-container']} ${
        isOpen ? styles['navbar-container--opened'] : ''
      }`}
    >
      {links.map((link: NavbarLink, index: number) => (
        <li className={styles['navbar-item']}>
          <NavbarLink
            key={index}
            redirectLink={link.redirectLink}
            label={link.label}
            className={styles['navbar-link']}
            onClick={onClick}
          />
        </li>
      ))}
    </ul>
  );
};
