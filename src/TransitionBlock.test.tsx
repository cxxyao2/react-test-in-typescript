import React, { Children, ReactNode, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { render, fireEvent, screen, waitFor, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import TransitionA from './TransitionA'

jest.mock('react-transition-group', () => {
  const FakeCSSTransition = jest.fn(() => null)
  return { CSSTransition: FakeCSSTransition }
})

test('you can mock things with jest.mock', () => {
  const { getByText } = render(<TransitionA />)
  expect(CSSTransition).toHaveBeenCalled()
})

test('you can trigger transiton by chaning state ', async () => {
  const user = userEvent.setup()

  const { getByText } = render(<TransitionA />)
  expect(CSSTransition).toHaveBeenCalledTimes(1)

  // 1: {"appear": true, "children": <p data-testid="content" style={{"backgroundColor": "red"}}>Enter</p>, "classNames": "myclass", "in": true, "timeout": 5000}, {}
  // 2: {"appear": true, "children": <p data-testid="content" style={{"backgroundColor": "red"}}>Exit</p>, "classNames": "myclass", "in": false, "timeout": 5000}, {}

  expect(CSSTransition).toHaveBeenCalledWith(
    expect.objectContaining({
      in: true,
      appear: true,
      timeout: 5000
    }),
    expect.anything()
  )

  await user.click(getByText('Transition'))
  expect(CSSTransition).toHaveBeenLastCalledWith(
    expect.objectContaining({
      in: false,
      appear: true,
      timeout: 5000
    }),
    expect.anything()
  )
})

// partial matching
test('should contain important value in array', () => {
  const array = ['ignore', 'important']

  expect(array).toEqual(expect.arrayContaining(['important']))
})

test('should contain important value in nested object', () => {
  const nestedObject = {
    ignore: 'ignore',
    payload: {
      important: 'important',
      ignore: 'ignore'
    }
  }

  expect(nestedObject).toEqual(
    expect.objectContaining({
      payload: expect.objectContaining({
        important: 'important'
      })
    })
  )
})
