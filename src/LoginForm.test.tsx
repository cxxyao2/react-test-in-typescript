import React from 'react'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import LoginForm from './LoginForm'

test('should be able to type an email', () => {

  render(<LoginForm />)

  const emailInput = screen.getByRole<HTMLInputElement>('textbox', {
    name: /email/i
  })
  
  userEvent.type(emailInput, 'test@email.com')
  expect(emailInput.value).toBe('test@email.com')
})
