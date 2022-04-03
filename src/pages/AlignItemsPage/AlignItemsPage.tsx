import { useMemo, useState } from 'react';

import { ButtonContainer, ButtonProps } from 'components/Button';
import { Container } from 'components/Container';
import { ItemContainer, ItemProps } from 'components/Item';

import { AlignItems } from 'types/shared';

import styles from './AlignItemsPage.module.css';

export const AlignItemsPage = () => {
  const [alignItems, setAlignItems] = useState<AlignItems>('flex-start');

  const buttons: ButtonProps[] = useMemo(
    () => [
      {
        label: 'Flex Start',
        onClick: () => setAlignItems('flex-start'),
        isActive: alignItems === 'flex-start',
      },
      {
        label: 'Flex End',
        onClick: () => setAlignItems('flex-end'),
        isActive: alignItems === 'flex-end',
      },
      {
        label: 'Center',
        onClick: () => setAlignItems('center'),
        isActive: alignItems === 'center',
      },
      {
        label: 'Stretch',
        onClick: () => setAlignItems('stretch'),
        isActive: alignItems === 'stretch',
      },
      {
        label: 'Baseline',
        onClick: () => setAlignItems('baseline'),
        isActive: alignItems === 'baseline',
      },
    ],
    [alignItems],
  );

  const items: ItemProps[] = useMemo(
    () => [
      {
        label: 'Flex Item 1',
        className: `flex-item ${styles['flex-item']}`,
      },
      {
        label: 'Flex Item 2',
        className: `flex-item ${styles['flex-item']}`,
      },
      {
        label: 'Flex Item 3',
        className: `flex-item ${styles['flex-item']}`,
      },
    ],
    [],
  );

  return (
    <Container className="page-container">
      <ButtonContainer className={styles['button-container']} buttons={buttons} />
      <ItemContainer className={`flex-container ${styles[alignItems]}`} items={items} />
    </Container>
  );
};
