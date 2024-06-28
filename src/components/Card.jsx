import React from 'react'

const Card = ({ children, background = 'bg-gray-100'}) => {
  return (
    <div className={`${background} p-6 rounded-lg shadow-md`}>
      {children}
    </div>
  )
}

export default Card
