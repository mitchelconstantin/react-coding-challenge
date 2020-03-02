import React from 'react';
import { render } from '@testing-library/react';
import { SimpleSnackbar } from '../SimpleSnackbar';

describe('message-list', () => {
  it('is a blank slate to write tests in', () => {
    const { container } = render(
      <SimpleSnackbar numErrors={0} message={undefined} />
    );
    expect(container).not.toBeVisible();
    
  });
});

// test('calling render with the same component on the same container does not remount', () => {
//   const { getByTestId, rerender } = render(<NumberDisplay number={1} />);
//   expect(getByTestId('number-display').textContent).toBe('1');

//   // re-render the same component with different props
//   rerender(<NumberDisplay number={2} />);
//   expect(getByTestId('number-display').textContent).toBe('2');

//   expect(getByTestId('instance-id').textContent).toBe('1');
// });
