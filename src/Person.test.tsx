import React from 'react';
import { render, screen } from '@testing-library/react';
import { Person } from './Person';


test('render a name', () => {
  render(<Person name="Jack" />);
  const linkElement = screen.getByText(/Jack/i);
  expect(linkElement).toBeInTheDocument();
});


test('render contentinfo', () => {
  render(<Person name="Jack" />);
  const linkElement = screen.getByRole(/contentinfo/i);
  expect(linkElement).toBeInTheDocument();
});

