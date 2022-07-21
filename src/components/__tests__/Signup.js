import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Signup from '../Signup';

jest.mock('../Signup');

test('renders Signup', () => {
  render(<Signup />);
  const signup = screen.getByText('Sign Up');
  expect(signup).toBeInTheDocument();
});
