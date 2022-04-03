import { Container } from 'components/Container';
import { Item } from 'components/Item';
import { ItemProps } from './Item';

export interface ItemContainerProps {
  items: ItemProps[];
  className: string;
}

export const ItemContainer: React.FC<ItemContainerProps> = ({ items, className }) => {
  return (
    <Container className={className}>
      {items.map((item: ItemProps, index: number) => (
        <Item key={index} {...item} />
      ))}
    </Container>
  );
};
