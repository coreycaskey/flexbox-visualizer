import { useMemo, useState } from 'react';

import { ButtonContainer, ButtonProps } from 'components/Button';
import { Container } from 'components/Container';
import { ItemContainer, ItemProps } from 'components/Item';

import { JustifyContent } from 'types/shared';

import styles from './JustifyContentPage.module.css';

export const JustifyContentPage = () => {
  const [justifyContent, setJustifyContent] = useState<JustifyContent>('flex-start');

  const buttons: ButtonProps[] = useMemo(
    () => [
      {
        label: 'Flex Start',
        onClick: () => setJustifyContent('flex-start'),
        isActive: justifyContent === 'flex-start',
      },
      {
        label: 'Flex End',
        onClick: () => setJustifyContent('flex-end'),
        isActive: justifyContent === 'flex-end',
      },
      {
        label: 'Center',
        onClick: () => setJustifyContent('center'),
        isActive: justifyContent === 'center',
      },
      {
        label: 'Space Between',
        onClick: () => setJustifyContent('space-between'),
        isActive: justifyContent === 'space-between',
      },
      {
        label: 'Space Around',
        onClick: () => setJustifyContent('space-around'),
        isActive: justifyContent === 'space-around',
      },
      {
        label: 'Space Evenly',
        onClick: () => setJustifyContent('space-evenly'),
        isActive: justifyContent === 'space-evenly',
      },
    ],
    [justifyContent],
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
      <ItemContainer className={`flex-container ${styles[justifyContent]}`} items={items} />
    </Container>
  );
};
