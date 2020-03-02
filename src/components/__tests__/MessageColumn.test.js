import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MessageColumn, getValuesByPriority } from '../MessageColumn';

const mockMessages = [
  {
    message: 'message 1',
    id: '4ee3'
  },
  {
    message: 'message 2',
    id: '278'
  }
];

const mockMessagesWithPriority = priority =>
  mockMessages.map(m => ({ ...m, priority }));

describe('MessageColumn', () => {
  it('renders provided messages', () => {
    const priority = '1';
    const messages = mockMessagesWithPriority(priority);
    
    const { getByText } = render(
      <MessageColumn
        priority={priority}
        messages={messages}
        clearMessage={jest.fn()}
      />
    );
    expect(getByText('message 1')).toBeVisible();
    expect(getByText('message 2')).toBeVisible();
  });

  it('calls provided clearMessage with messageId when clicked', () => {
    const priority = '1';
    const messages = mockMessagesWithPriority(priority);
    const mockClearMessage = jest.fn();

    const { getAllByText } = render(
      <MessageColumn
        priority={priority}
        messages={messages}
        clearMessage={mockClearMessage}
      />
    );
    fireEvent.click(getAllByText('Clear')[0]);
    expect(mockClearMessage).toHaveBeenCalledWith('4ee3');
  });

  it('applies proper backgroundColor for errors (priority 1)', () => {
    const priority = '1';
    const messages = mockMessagesWithPriority(priority);
    const { backgroundColor } = getValuesByPriority(priority);

    const { getByTestId } = render(
      <MessageColumn
        priority={priority}
        messages={messages}
        clearMessage={jest.fn()}
      />
    );
    expect(getByTestId('message-4ee3')).toHaveStyle({ backgroundColor });
  });

  it('applies proper backgroundColor for warnings (priority 2)', () => {
    const priority = '2';
    const messages = mockMessagesWithPriority(priority);
    const { backgroundColor } = getValuesByPriority(priority);

    const { getByTestId } = render(
      <MessageColumn
        priority={priority}
        messages={messages}
        clearMessage={jest.fn()}
      />
    );
    expect(getByTestId('message-4ee3')).toHaveStyle({ backgroundColor });
  });

  it('applies proper backgroundColor for info (priority 3)', () => {
    const priority = '3';
    const messages = mockMessagesWithPriority(priority);
    const { backgroundColor } = getValuesByPriority(priority);

    const { getByTestId } = render(
      <MessageColumn
        priority={priority}
        messages={messages}
        clearMessage={jest.fn()}
      />
    );
    expect(getByTestId('message-4ee3')).toHaveStyle({ backgroundColor });
  });
});
