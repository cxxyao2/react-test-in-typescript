import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { NameConsumer, NameContext, NameProvider } from './context-name'
import userEvent from '@testing-library/user-event'

test('NameConsumer shows default value', async () => {
  const user = userEvent.setup()
  render(
    <NameProvider>
      <NameConsumer></NameConsumer>
    </NameProvider>
  )

  expect(screen.getByTestId('currentName')).toHaveTextContent(
    'Your name: unknown'
  )

  const updateButton = screen.getByRole<HTMLButtonElement>('button', {
    name: 'change'
  })
  await user.click(updateButton)
  expect(screen.getByTestId('currentName')).toHaveTextContent('Your name: Mike')
})
