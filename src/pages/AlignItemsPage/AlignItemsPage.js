import { useState } from "react";
import { Container } from "../../components/Container";

import styles from './AlignItemsPage.module.css';
import { ButtonContainer } from "./components/ButtonContainer/ButtonContainer";
import { FlexItems } from "./components/FlexItems/FlexItems";

export const AlignItemsPage = () => {
  const [alignItems, setAlignItems] = useState('flex-start');

  return (
    <Container className={styles['align-container']}>
      <ButtonContainer
        className={styles['button-container']}
        setAlignItems={setAlignItems}
      />
      <FlexItems
        className={`${styles['flex-container']} ${styles[alignItems]}`}
      />
    </Container>
  );
};
