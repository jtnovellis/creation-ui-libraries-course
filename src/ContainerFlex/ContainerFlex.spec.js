import { render } from '@testing-library/react';
import ContainerFlex from './ContainerFlex';

describe('@components/ContainerFlex', () => {
  it('Given a normal component call it should render component', () => {
    const { getByRole } = render(<ContainerFlex role="banner" />);
    const containerTest = getByRole('banner');
    expect(containerTest).toBeDefined();
  });
  it('Given a normal component call it should have bgColor blue', () => {
    const { getByRole } = render(
      <ContainerFlex bgColor="blue" role="banner" />
    );
    const containerTest = getByRole('banner');
    expect(containerTest).toHaveStyle('background-color: blue;');
  });
});
