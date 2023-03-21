import React from 'react';
import ErrorPage from '../pages/ErrorPage';
import { describe, it } from 'vitest';
import { screen, render } from '@testing-library/react';

describe('ErrorPage', () => {
  it('Renders ErrorPage', () => {
    render(<ErrorPage />);
    expect(screen.getByText('404')).toBeInTheDocument();
  });
});
