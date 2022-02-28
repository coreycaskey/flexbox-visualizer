import { Button } from '../../../../components/Button';
import { Container } from '../../../../components/Container';

export const ButtonContainer = ({ className, setAlignItems }) => {
  const toggleFlexStart = () => setAlignItems('flex-start');
  const toggleFlexEnd = () => setAlignItems('flex-end');
  const toggleCenter = () => setAlignItems('center');
  const toggleStretch = () => setAlignItems('stretch');
  const toggleBaseline = () => setAlignItems('baseline');

  return (
    <Container className={className}>
      <Button btnText="Flex Start" onClick={toggleFlexStart} />
      <Button btnText="Flex End" onClick={toggleFlexEnd} />
      <Button btnText="Center" onClick={toggleCenter} />
      <Button btnText="Stretch" onClick={toggleStretch} />
      <Button btnText="Baseline" onClick={toggleBaseline} />
    </Container>
  );
};
