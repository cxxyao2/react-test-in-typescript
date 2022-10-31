import React from 'react'

export const Person = ({ name }: { name: string }) => (
  <div>
    {' '}
    Name is {name}
    <p role='contentinfo'>telephone: 000</p>
  </div>
)
