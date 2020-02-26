import React from 'react';
import { render } from '@testing-library/react';
import MessageList from '../message-list';

describe('message-list', () => {
  it('is a blank slate to write tests in', () => {
    const { container } = render(<MessageList />);
    expect(container).toBeVisible();
  });

  it('contains one instance of all major components', async () => {
    const { findByTestId } = render(<MessageList />);
    await findByTestId('header');
    await findByTestId('start-stop');
    await findByTestId('clear');
    await findByTestId('info');
    await findByTestId('warning');
    await findByTestId('error');
  });
});
