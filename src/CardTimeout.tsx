import React, { useEffect } from 'react'
export interface CardTimeoutProps {
  onSelect: (arg: any) => void
}

export const CardTimeout = ({ onSelect }: CardTimeoutProps) => {
  useEffect(() => {
    const timeoutID = setTimeout(() => {
      onSelect(null)
    }, 500)

    return () => {
      clearTimeout(timeoutID)
    }
  }, [onSelect])

  return (
    <div>
      {[1, 2, 3].map((choice) => (
        <button
          key={choice}
          data-testid={choice}
          onClick={() => onSelect(choice)}>
          {choice}
        </button>
      ))}
    </div>
  )
}
