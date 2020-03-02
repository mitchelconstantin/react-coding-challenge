import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SimpleSnackbar } from '../SimpleSnackbar';

describe('SimpleSnackbar', () => {
  it('renders message when numErrors increases', () => {
    const { queryByText, rerender } = render(
      <SimpleSnackbar numErrors={10} message={'message'} />
    );
    expect(queryByText('message')).toBeFalsy();
    rerender(<SimpleSnackbar numErrors={11} message={'new message'} />);
    expect(queryByText('new message')).toBeVisible();
  });

  it('does not render message when numErrors decreases', () => {
    const { queryByText, rerender } = render(
      <SimpleSnackbar numErrors={10} message={'message'} />
    );
    expect(queryByText('message')).toBeFalsy();
    rerender(<SimpleSnackbar numErrors={9} message={'new message'} />);
    expect(queryByText('new message')).toBeFalsy();
  });

  it('dismisses message when X is clicked', () => {
    const { queryByText, getByText, rerender } = render(
      <SimpleSnackbar numErrors={10} message={'message'} />
    );
    rerender(<SimpleSnackbar numErrors={11} message={'new message'} />);
    expect(queryByText('new message')).toBeVisible();
    fireEvent.click(getByText('X'));
    expect(queryByText('new message')).not.toBeVisible();
  });
});
