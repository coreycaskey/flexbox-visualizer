import { useState } from 'react';
import { Container } from '../../components/Container';
import { ButtonContainer } from './components/ButtonContainer/ButtonContainer';
import { FlexItems } from './components/FlexItems/FlexItems';

import styles from './FlexDirectionPage.module.css';

export const FlexDirectionPage = () => {
  const [flexDirection, setFlexDirection] = useState('row');

  return (
    <Container className={styles['direction-container']}>
      <ButtonContainer
        className={styles['button-container']}
        setFlexDirection={setFlexDirection}
      />
      <FlexItems
        className={`${styles['flex-container']} ${styles[flexDirection]}`}
      />
    </Container>
  );
};
