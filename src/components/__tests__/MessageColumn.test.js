import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MessageColumn } from '../MessageColumn';

const mockMessages = [
  {
    message: 'error message 1',
    id: '4ee3'
  },
  {
    message: 'error message 2',
    id: '278'
  }
];
const mockMessagesWithPriority = priority =>
  mockMessages.map(m => ({ ...m, priority }));

describe('MessageColumn', () => {
  it('renders provided messages', () => {
    const { getByText } = render(
      <MessageColumn
        priority="1"
        messages={mockMessagesWithPriority('1')}
        clearMessage={jest.fn()}
      />
    );
    expect(getByText('error message 1')).toBeVisible();
    expect(getByText('error message 2')).toBeVisible();
  });

  it('renders calls provided clearMessage with messageId when clicked', () => {
    const mockClearMessage = jest.fn();
    const { getAllByText } = render(
      <MessageColumn
        priority="1"
        messages={mockMessagesWithPriority('1')}
        clearMessage={mockClearMessage}
      />
    );
    fireEvent.click(getAllByText('Clear')[0]);
    expect(mockClearMessage).toHaveBeenCalledWith('4ee3');
  });

  it('renders error cards with proper background color', () => {
    const { getByTestId } = render(
      <MessageColumn
        priority="1"
        messages={mockMessagesWithPriority('1')}
        clearMessage={jest.fn()}
      />
    );
    expect(getByTestId('message-4ee3')).toHaveStyle({
      backgroundColor: '#F56236'
    });
  });

  it('renders warning cards with proper background color', () => {
    const { getByTestId } = render(
      <MessageColumn
        priority="2"
        messages={mockMessagesWithPriority('2')}
        clearMessage={jest.fn()}
      />
    );
    expect(getByTestId('message-4ee3')).toHaveStyle({
      backgroundColor: '#FCE788'
    });
  });

  it('renders info cards with proper background color', () => {
    const { getByTestId } = render(
      <MessageColumn
        priority="3"
        messages={mockMessagesWithPriority('3')}
        clearMessage={jest.fn()}
      />
    );
    expect(getByTestId('message-4ee3')).toHaveStyle({
      backgroundColor: '#88FCA3'
    });
  });
});
