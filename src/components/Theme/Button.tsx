import React from 'react'
import { ButtonProps } from '../../types/Button.types'

const Button: React.FC<ButtonProps> = ({ height, width, padding, color, title, onClick }) => {
   

  return (
      <button onClick={onClick} className={`${height} flex items-center justify-center bg-green-600 cursor-pointer rounded  ${width} ${padding} ${color}`}>{title}</button>
  )
}

export default Button