import React from 'react';
import { describe, it } from 'vitest';
import { screen, render, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

describe('SearchBar', () => {
  it('Input some text', () => {
    render(<SearchBar />);
    fireEvent.change(screen.getByRole('searchbox'), {
      target: { value: 'React' },
    });
    screen.debug();
  });
});
