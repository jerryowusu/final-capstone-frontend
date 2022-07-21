import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import DeleteCar from '../DeleteCar';

jest.mock('../DeleteCar');

test('renders Delete car', () => {
  render(<DeleteCar />);
  const deletecar = screen.getByText('Delete Cars');
  expect(deletecar).toBeInTheDocument();
});
