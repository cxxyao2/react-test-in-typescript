import React from 'react'

import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import ToggleButton from './ToggleButton'

test('Pressing the button hides the text', async () => {
  const user = userEvent.setup()

  render(<ToggleButton />)
  const button = screen.getByRole('button')

  await user.click(button)

  const text = screen.getByText('Hello World')
  await waitFor(() => expect(text).not.toBeInTheDocument())
})
