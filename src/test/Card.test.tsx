import React from 'react';
import { screen, render } from '@testing-library/react';
import Card from '../components/Card';
import { describe, it } from 'vitest';
import { cards } from '../data/cards';

describe('Card', () => {
  it('Renders Card component', () => {
    render(<Card {...cards[0]} />);
    expect(screen.getByText('Rovinj, Croatia')).toBeInTheDocument();
  });
});
