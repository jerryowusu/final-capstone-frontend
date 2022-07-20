import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import CarForm from '../AddCar';

jest.mock('../AddCar');

test('renders CAR CAR', () => {
  render(<CarForm />);
  const addcar = screen.getByText('Create and Add New Cars');
  expect(addcar).toBeInTheDocument();
});
