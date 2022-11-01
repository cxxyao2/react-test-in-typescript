import { useState } from 'react'

const ToggleButton = () => {
  const [isDisplayed, setIsDisplayed] = useState(true)

  const toggleHandler = () => {
    setTimeout(() => setIsDisplayed((pre) => !pre), 500)
  }

  return (
    <>
      <div data-testid='content'> {isDisplayed && <p>Hello</p>}</div>
      <button onClick={toggleHandler}>toggle</button>
    </>
  )
}

export default ToggleButton
