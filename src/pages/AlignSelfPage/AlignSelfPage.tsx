import { useMemo, useState } from 'react';

import { ButtonContainer, ButtonProps } from 'components/Button';
import { Container } from 'components/Container';
import { ItemContainer, ItemProps } from 'components/Item';

import { AlignSelf } from 'types/shared';

import styles from './AlignSelfPage.module.css';

export const AlignSelfPage = () => {
  const [alignSelf, setAlignSelf] = useState<AlignSelf>('flex-start');

  const buttons: ButtonProps[] = useMemo(
    () => [
      {
        label: 'Flex Start',
        onClick: () => setAlignSelf('flex-start'),
        isActive: alignSelf === 'flex-start',
      },
      {
        label: 'Flex End',
        onClick: () => setAlignSelf('flex-end'),
        isActive: alignSelf === 'flex-end',
      },
      {
        label: 'Center',
        onClick: () => setAlignSelf('center'),
        isActive: alignSelf === 'center',
      },
      {
        label: 'Stretch',
        onClick: () => setAlignSelf('stretch'),
        isActive: alignSelf === 'stretch',
      },
      {
        label: 'Baseline',
        onClick: () => setAlignSelf('baseline'),
        isActive: alignSelf === 'baseline',
      },
    ],
    [alignSelf],
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
      <ItemContainer className={`flex-container ${styles[alignSelf]}`} items={items} />
    </Container>
  );
};
