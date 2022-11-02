import React, { Children, ReactNode, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { render, fireEvent } from '@testing-library/react'
export interface FadeProps extends React.HTMLProps<HTMLElement> {
  in: boolean;
}

export const Fade: React.FC<FadeProps> = (props) => {
  return (
    <CSSTransition in={props.in} timeout={1000} classNames='fade'>
      {props.children}
    </CSSTransition>
  )
}

export const HiddenMessage = ({ initialShow }: { initialShow: boolean }) => {
  const [show, setShow] = useState(initialShow || false)
  const toggle = () => setShow((pre) => !pre)
  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      <Fade in={show}>
        <div>Hello World</div>
      </Fade>
    </div>
  )
}
