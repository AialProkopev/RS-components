import React from 'react';
import { describe, it } from 'vitest';
import { screen, render } from '@testing-library/react';
import AboutPage from '../pages/AboutPage';

describe('AboutPage', () => {
  it('Renders', () => {
    render(<AboutPage />);
    expect(screen.getByText('Airbnb Clone')).toBeInTheDocument();
  });
});
