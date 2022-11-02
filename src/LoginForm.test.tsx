import React from 'react'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import LoginForm from './LoginForm'

test('should be able to type an email', async () => {
  const user = userEvent.setup()
  render(<LoginForm />)

  const emailInput = screen.getByTestId('email')

  await user.type(emailInput, 'test@email.com')
  expect(emailInput).toHaveValue('test@email.com')
})

test('should be able to type an valid email', async () => {
  const user = userEvent.setup()
  render(<LoginForm />)

  const emailInput = screen.getByTestId('email')

  await user.type(emailInput, 'testemail.com')

  expect(emailInput).toHaveValue('testemail.com')

  await user.click(screen.getByRole('button', { name: 'Login' }))

  expect(await screen.findByText('Email is invalid')).toBeVisible()
})
