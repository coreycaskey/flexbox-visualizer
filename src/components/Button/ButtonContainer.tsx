import { Button, ButtonProps } from '.';
import { Container } from '../Container';

export interface ButtonContainerProps {
  buttons: ButtonProps[];
  className: string;
}

export const ButtonContainer: React.FC<ButtonContainerProps> = ({ buttons, className }) => (
  <Container className={className}>
    {buttons.map((button: ButtonProps, index: number) => (
      <Button key={index} {...button} />
    ))}
  </Container>
);
