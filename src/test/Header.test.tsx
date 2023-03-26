import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

import { BrowserRouter } from 'react-router-dom';

describe('Router', () => {
  it('should render main page', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
