import React from 'react'

import { render, screen, queryByAttribute } from '@testing-library/react'
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

test('should correctly set the default option', () => {
  render(<LoginForm />)
  expect(
    (
      screen.getByRole('option', {
        name: 'Select a country'
      }) as HTMLOptionElement
    ).selected
  ).toBe(true)
})

test('should display the correct number of options', () => {
  render(<LoginForm />)
  expect(screen.getAllByRole('option').length).toBe(4)
})

test('should allow user to change country', async () => {
  render(<LoginForm />)
  await userEvent.selectOptions(
    screen.getByRole('combobox'),
    screen.getByRole('option', { name: 'Ireland' })
  )
  expect(
    (screen.getByRole('option', { name: 'Ireland' }) as HTMLOptionElement)
      .selected
  ).toBe(true)
})

test('should be checked by default', async () => {
  render(<LoginForm />)
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked()

  await userEvent.click(screen.getByRole('checkbox'))

  expect(screen.getByRole('checkbox')).toBeChecked()
})

test('Button has correct inital color', async () => {
  const user = userEvent.setup()
  render(<LoginForm />)
  const colorButton = screen.getByRole('button', { name: 'change' })

  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })

  await user.click(colorButton)
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })
})
