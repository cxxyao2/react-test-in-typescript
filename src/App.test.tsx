import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'

import App, { LocationDisplay } from './App'

test('full app rendering/navigating', async () => {
  render(<App />, { wrapper: BrowserRouter })
  const user = userEvent.setup()

  const linkElement = screen.getByText(/you are home/i)
  expect(linkElement).toBeInTheDocument()

  // verify page content for expected route after navigating
  await user.click(screen.getByText(/about/i))
  expect(screen.getByText(/you are on the about page/i)).toBeInTheDocument()
})

test("landing on a bad page",()=>{
  const badRoute = '/some/bad/route'

  // use  <MemoryRouter> when you want to manually control the history
  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>
  )

  expect(screen.getByText(/no match/i)).toBeInTheDocument

})

test("rendering a component that uses useLocation",()=>{
  const route='/some-route'

  render(
    <MemoryRouter initialEntries={[route]}>
      <LocationDisplay />
    </MemoryRouter>
  )

  expect(screen.getByTestId('location-display')).toHaveTextContent(route)

})