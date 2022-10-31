import React, {useState} from 'react'
export const Counter: React.FunctionComponent = () =>{
  const [count, setCount] = useState(0)

  return (
    <div>
      <button data-testid="Add One" onClick={()=> setCount(count + 1)}>Add one</button>
      <div role="contentinfo">Count is {count}</div>
    </div>
  )
}