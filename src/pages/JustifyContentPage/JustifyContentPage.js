import { useState } from 'react';
import { Container } from '../../components/Container';
import { ButtonContainer } from './components/ButtonContainer/ButtonContainer';
import { FlexItems } from './components/FlexItems/FlexItems';

import styles from './JustifyContentPage.module.css';

export const JustifyContentPage = () => {
  const [justifyContent, setJustifyContent] = useState('flex-start');

  return (
    <Container className={styles['justify-container']}>
      <ButtonContainer
        className={styles['button-container']}
        setJustifyContent={setJustifyContent}
      />
      <FlexItems
        className={`${styles['flex-container']} ${styles[justifyContent]}`}
      />
    </Container>
  );
};
