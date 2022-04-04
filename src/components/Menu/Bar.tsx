import { Container } from 'components/Container';

export interface BarProps {
  className: string;
}

export const Bar: React.FC<BarProps> = ({ className }) => (
  <Container className={className}>
    <div />
  </Container>
);
