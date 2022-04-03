import { useMemo, useState } from 'react';

import { ButtonContainer, ButtonProps } from 'components/Button';
import { Container } from 'components/Container';
import { ItemContainer, ItemProps } from 'components/Item';

import { AlignContent } from 'types/shared';

import styles from './AlignContentPage.module.css';

export const AlignContentPage = () => {
  const [alignContent, setAlignContent] = useState<AlignContent>('normal');

  const buttons: ButtonProps[] = useMemo(
    () => [
      {
        label: 'Normal',
        onClick: () => setAlignContent('normal'),
        isActive: alignContent === 'normal',
      },
      {
        label: 'Flex Start',
        onClick: () => setAlignContent('flex-start'),
        isActive: alignContent === 'flex-start',
      },
      {
        label: 'Flex End',
        onClick: () => setAlignContent('flex-end'),
        isActive: alignContent === 'flex-end',
      },
      {
        label: 'Center',
        onClick: () => setAlignContent('center'),
        isActive: alignContent === 'center',
      },
      {
        label: 'Space Between',
        onClick: () => setAlignContent('space-between'),
        isActive: alignContent === 'space-between',
      },
      {
        label: 'Space Around',
        onClick: () => setAlignContent('space-around'),
        isActive: alignContent === 'space-around',
      },
      {
        label: 'Space Evenly',
        onClick: () => setAlignContent('space-evenly'),
        isActive: alignContent === 'space-evenly',
      },
      {
        label: 'Stretch',
        onClick: () => setAlignContent('stretch'),
        isActive: alignContent === 'stretch',
      },
    ],
    [alignContent],
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
      <ItemContainer
        className={`flex-container ${styles['flex-container']} ${styles[alignContent]}`}
        items={items}
      />
    </Container>
  );
};
