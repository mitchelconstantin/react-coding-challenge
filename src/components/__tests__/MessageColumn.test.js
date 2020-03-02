import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MessageColumn } from '../MessageColumn';

const mockErrorMessages = [
  {
    message: 'error message 1',
    priority: 1,
    id: '4ee3'
  },
  {
    message: 'error message 2',
    priority: 1,
    id: '278'
  }
];

describe('MessageColumn', () => {
  it('renders provided messages and calls provided clearMessage with messageId when clicked', () => {
    const mockClearMessage = jest.fn();
    const { getByText, getAllByText } = render(
      <MessageColumn
        priority="1"
        messages={mockErrorMessages}
        clearMessage={mockClearMessage}
      />
    );
    expect(getByText('error message 1')).toBeVisible();
    expect(getByText('error message 2')).toBeVisible();
    fireEvent.click(getAllByText('Clear')[0]);
    expect(mockClearMessage).toHaveBeenCalledWith('4ee3');
  });
});
