import React from 'react'
import { render, screen ,fireEvent} from '@testing-library/react'
import {CardTimeout} from './CardTimeout'

test('handles onClick', () => {
  const onSelect=jest.fn()
  render(<CardTimeout onSelect={onSelect} />)
  const buttonElement = screen.getByText('1')
  fireEvent.click(buttonElement)
  expect(onSelect).toHaveBeenCalledTimes(1)
})
