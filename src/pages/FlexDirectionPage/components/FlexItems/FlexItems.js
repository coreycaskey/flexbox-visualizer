import { Container } from '../../../../components/Container';
import { FlexItem } from '../../../../components/FlexItem';

import styles from '../../FlexDirectionPage.module.css';

export const FlexItems = ({ className }) => {
  return (
    <Container className={className}>
      <FlexItem className={styles['flex-item']} text="Flex Item 1" />
      <FlexItem className={styles['flex-item']} text="Flex Item 2" />
      <FlexItem className={styles['flex-item']} text="Flex Item 3" />
    </Container>
  );
};
