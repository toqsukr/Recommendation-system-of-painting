import React from 'react'

export const Button = ({children, ...propt}) => {
  return (
    <div>
        <button {...propt}>{children}</button>
    </div>
  )
}
