import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, it } from 'vitest';
import MainPage from '../pages/MainPage';

describe('MainPage', () => {
  it('Renders all cards', () => {
    render(<MainPage />);
    expect(screen.getByText('Rovinj, Croatia')).toBeInTheDocument();
    expect(screen.getByText('Labin, Croatia')).toBeInTheDocument();
    expect(screen.getByText('Makarska, Croatia')).toBeInTheDocument();
    expect(screen.getByText('Sarteano, Italy')).toBeInTheDocument();

    expect(screen.getByText('Kotor, Montenegro')).toBeInTheDocument();
    expect(screen.getByText('Chiusi, Italy')).toBeInTheDocument();
    expect(screen.getByText('Eskilsminne, Sweden')).toBeInTheDocument();
    expect(screen.getByText('Neusiedl am Serr, Austria')).toBeInTheDocument();
  });
});
