import React from 'react';
import { describe, test } from 'vitest';
import { screen, render } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { routerObj } from '../router';

describe('Router', () => {
  test('routing', () => {
    const memoRoute = createMemoryRouter(routerObj, {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={memoRoute} />);
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
