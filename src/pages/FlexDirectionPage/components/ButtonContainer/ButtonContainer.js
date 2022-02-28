import { Container } from '../../../../components/Container';
import { Button } from '../../../../components/Button';

export const ButtonContainer = ({ className, setFlexDirection }) => {
  const toggleRowDirection = () => setFlexDirection('row');
  const toggleColumnDirection = () => setFlexDirection('column');
  const toggleRowReverseDirection = () => setFlexDirection('row-reverse');
  const toggleColumnReverseDirection = () => setFlexDirection('column-reverse');

  return (
    <Container className={className}>
      <Button btnText="Row" onClick={toggleRowDirection} />
      <Button btnText="Column" onClick={toggleColumnDirection} />
      <Button btnText="Row Reverse" onClick={toggleRowReverseDirection} />
      <Button btnText="Column Reverse" onClick={toggleColumnReverseDirection} />
    </Container>
  );
};
