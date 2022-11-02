import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import './transitiona.css'

const TransitionA = () => {
  const [isEnter, setIsEnter] = useState(true)

  return (
    <div className='container'>
      <button onClick={() => setIsEnter((pre) => !pre)}>Transition</button>
      <CSSTransition
        in={isEnter}
        timeout={5000}
        appear={true}
        classNames='myclass'>
        <p data-testid='content' style={{ backgroundColor: 'red' }}>
          {isEnter ? 'Enter' : 'Exit'}
        </p>
      </CSSTransition>
    </div>
  )
}

export default TransitionA
