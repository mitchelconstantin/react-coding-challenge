import React from 'react';
import { render } from '@testing-library/react';
import MessageList from '../message-list';

describe('message-list', () => {
  it('is a blank slate to write tests in', () => {
    const { container } = render(<MessageList />);
    expect(container).toBeVisible();
  });

  it('contains all major components', () => {
    const { getAllByTestId, getByTestId } = render(<MessageList />);
    const appHeader = getAllByTestId('header');
    expect(appHeader.length).toBe(1);

    const startStopButton = getAllByTestId('start-stop');
    expect(startStopButton.length).toBe(1);

    const clearButton = getAllByTestId('clear');
    expect(clearButton.length).toBe(1);

    const infoSection = getAllByTestId('info');
    expect(infoSection.length).toBe(1);

    const warningSection = getAllByTestId('warning');
    expect(warningSection.length).toBe(1);

    const errorSection = getAllByTestId('error');
    expect(errorSection.length).toBe(1);
  });
});
