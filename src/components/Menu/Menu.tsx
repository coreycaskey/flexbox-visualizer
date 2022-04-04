import { Bar } from './Bar';
import { Container } from 'components/Container';

import styles from './Menu.module.css';

export interface MenuProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

export const Menu: React.FC<MenuProps> = ({ isOpen, toggleOpen }) => {
  return (
    <Container
      className={`${styles['menu-container']} ${isOpen ? styles['menu-container--opened'] : ''}`}
      onClick={toggleOpen}
    >
      <Bar className={`${styles['bar']} ${styles['top']}`} />
      <Bar className={`${styles['bar']} ${styles['middle']}`} />
      <Bar className={`${styles['bar']} ${styles['bottom']}`} />
    </Container>
  );
};
