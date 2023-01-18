import { render } from '@testing-library/react';
import Button from './Button';

describe('@components/Button', () => {
  it('Given a normal component call it should render component', () => {
    const { getByRole } = render(<Button type="button" />);
    const buttonTest = getByRole('button');
    expect(buttonTest).toBeDefined();
  });
});
