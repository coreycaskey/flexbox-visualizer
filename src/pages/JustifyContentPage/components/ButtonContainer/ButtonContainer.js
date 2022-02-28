import { Button } from '../../../../components/Button';
import { Container } from '../../../../components/Container';

export const ButtonContainer = ({ className, setJustifyContent }) => {
  const toggleFlexStart = () => setJustifyContent('flex-start');
  const toggleFlexEnd = () => setJustifyContent('flex-end');
  const toggleCenter = () => setJustifyContent('center');
  const toggleSpaceBetween = () => setJustifyContent('space-between');
  const toggleSpaceAround = () => setJustifyContent('space-around');
  const toggleSpaceEvenly = () => setJustifyContent('space-evenly');

  return (
    <Container className={className}>
      <Button btnText="Flex Start" onClick={toggleFlexStart} />
      <Button btnText="Flex End" onClick={toggleFlexEnd} />
      <Button btnText="Center" onClick={toggleCenter} />
      <Button btnText="Space Between" onClick={toggleSpaceBetween} />
      <Button btnText="Space Around" onClick={toggleSpaceAround} />
      <Button btnText="Space Evenly" onClick={toggleSpaceEvenly} />
    </Container>
  );
};
