import React from 'react'

import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import ToggleButton from './ToggleButton'

beforeEach(() => {
  jest.useFakeTimers()
})

afterEach(() => {
  jest.useRealTimers()
})

test('Pressing the button hides the text', async () => {
  const user = userEvent.setup({ delay: null })

  render(<ToggleButton />)
  const button = screen.getByRole('button')

  const content = screen.getByTestId<HTMLDivElement>('content')
   expect(content).toContainHTML('Hello')
  await user.click(button)
  act(() => {
    jest.runAllTimers()
  })

  expect(content).not.toContain('Hello')
})
