import React from 'react'
import { render, screen } from '@testing-library/react'
import { Person } from './Person'

test('render a name', () => {
  render(<Person name='Jack' />)
  const linkElement = screen.getByText(/Jack/i)
  expect(linkElement).toBeInTheDocument()
})

test('render contentinfo', () => {
  render(<Person name='Jack' />)
  const divElement = screen.getByRole(/contentinfo/i)
  expect(divElement).toHaveTextContent('telephone: 000')
})

test('have a role', () => {
  render(<Person name='Jack' />)
  const divElement = screen.getByRole(/contentinfo/i)
  expect(divElement).toHaveAttribute('role', 'contentinfo')
})
