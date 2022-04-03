import { useMemo, useState } from 'react';

import { ButtonContainer, ButtonProps } from 'components/Button';
import { Container } from 'components/Container';
import { ItemContainer, ItemProps } from 'components/Item';

import { FlexWrap } from 'types/shared';

import styles from './FlexWrapPage.module.css';

export const FlexWrapPage = () => {
  const [flexWrap, setFlexWrap] = useState<FlexWrap>('no-wrap');

  const buttons: ButtonProps[] = useMemo(
    () => [
      {
        label: 'No Wrap',
        onClick: () => setFlexWrap('no-wrap'),
        isActive: flexWrap === 'no-wrap',
      },
      {
        label: 'Wrap',
        onClick: () => setFlexWrap('wrap'),
        isActive: flexWrap === 'wrap',
      },
      {
        label: 'Wrap Reverse',
        onClick: () => setFlexWrap('wrap-reverse'),
        isActive: flexWrap === 'wrap-reverse',
      },
    ],
    [flexWrap],
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
      <ItemContainer className={`flex-container ${styles[flexWrap]}`} items={items} />
    </Container>
  );
};
