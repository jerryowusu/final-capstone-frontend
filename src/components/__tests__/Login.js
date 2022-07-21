import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Login from '../Login';

jest.mock('../Login');

test('renders Login', () => {
  render(<Login />);
  const login = screen.getByText('Login');
  expect(login).toBeInTheDocument();
});
