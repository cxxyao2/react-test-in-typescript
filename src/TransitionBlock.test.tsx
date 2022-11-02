import React, { Children, ReactNode, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { render, fireEvent, screen, waitFor, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import TransitionA from './TransitionA'

beforeEach(() => {
  jest.useFakeTimers()
})

afterEach(() => {
  jest.useRealTimers()
})

jest.mock('react-transition-group', () => {
  const FakeCSSTransition = jest.fn(() => null)
  return { CSSTransition: FakeCSSTransition }
})

test('you can mock things with jest.mock', () => {
  const { getByText } = render(<TransitionA />)
  expect(CSSTransition).toHaveBeenCalled()
})

test('you can trigger transiton by chaning state ', async () => {
  const user = userEvent.setup({ delay: null })

  const { getByText } = render(<TransitionA />)
  expect(CSSTransition).toHaveBeenCalledTimes(1)

  await user.click(getByText('Transition'))
  act(() => {
    jest.runAllTimers()
  })
  // expect(screen.getByTestId('content')).toContain('Enter')
})
// jest.mock('react-transition-group', () => {
//   const FakeTransition = jest.fn(({ children }) => children)
//   const FakeCSSTransition = jest.fn((props) =>
//     props.in ? <FakeTransition>{props.children}</FakeTransition> : null
//   )

//   return { CSSTransition: FakeCSSTransition, Transition: FakeTransition }
// })

// test('you can mock things with jest.mock', () => {
//   const { getByText, queryByText } = render(
//     <HiddenMessage initialShow={true} />
//   )

//   expect(getByText('Hello World')).toBeTruthy()

//   fireEvent.click(getByText('Toggle'))

//   expect(queryByText('Hello World')).toBeNull()
// })
