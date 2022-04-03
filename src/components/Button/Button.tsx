import styles from './Button.module.css';

export interface ButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, isActive, onClick }) => (
  <button onClick={onClick} className={isActive ? styles['active'] : ''}>
    {label}
  </button>
);
