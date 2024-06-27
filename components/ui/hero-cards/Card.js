import React from 'react'

const Card = ({style, children}) => {
  return (
    <div className={style}>{children}</div>
  )
}

export default Card