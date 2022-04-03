import { useMemo, useState } from 'react';

import { ButtonContainer, ButtonProps } from 'components/Button';
import { Container } from 'components/Container';
import { ItemContainer, ItemProps } from 'components/Item';

import { FlexDirection } from 'types/shared';

import styles from './FlexDirectionPage.module.css';

export const FlexDirectionPage: React.FC = () => {
  const [flexDirection, setFlexDirection] = useState<FlexDirection>('row');

  const buttons: ButtonProps[] = useMemo(
    () => [
      {
        label: 'Row',
        onClick: () => setFlexDirection('row'),
        isActive: flexDirection === 'row',
      },
      {
        label: 'Column',
        onClick: () => setFlexDirection('column'),
        isActive: flexDirection === 'column',
      },
      {
        label: 'Row Reverse',
        onClick: () => setFlexDirection('row-reverse'),
        isActive: flexDirection === 'row-reverse',
      },
      {
        label: 'Column Reverse',
        onClick: () => setFlexDirection('column-reverse'),
        isActive: flexDirection === 'column-reverse',
      },
    ],
    [flexDirection],
  );

  const items: ItemProps[] = useMemo(
    () => [
      {
        label: 'Flex Item 1',
        className: 'flex-item',
      },
      {
        label: 'Flex Item 2',
        className: 'flex-item',
      },
      {
        label: 'Flex Item 3',
        className: 'flex-item',
      },
    ],
    [],
  );

  return (
    <Container className="page-container">
      <ButtonContainer className={styles['button-container']} buttons={buttons} />
      <ItemContainer className={`flex-container ${styles[flexDirection]}`} items={items} />
    </Container>
  );
};
