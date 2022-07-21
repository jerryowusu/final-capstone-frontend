import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Homepage from '../Homepage';

jest.mock('../Homepage');

test('renders Available Cars', () => {
  render(<Homepage />);
  const homepage = screen.getByText('Available Cars');
  expect(homepage).toBeInTheDocument();
});
