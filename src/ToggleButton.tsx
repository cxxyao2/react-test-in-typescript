import { useState } from 'react'

const ToggleButton = () => {
  const [isDisplayed, setIsDisplayed] = useState(true)

  const toggleHandler = () => {
    setTimeout(() => setIsDisplayed((pre) => !pre), 1000)
  }

  return (
    <>
      <div> {isDisplayed && <p>Hello World</p>}</div>
      <button onClick={toggleHandler}>toggle</button>
    </>
  )
}

export default ToggleButton
