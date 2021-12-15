import React from 'react'
import { IError } from '../interfaces'
import '../styles/Error.css'

const Error: React.FC<IError> = ({ error }) => {
  if (error !== null) {
    return (
      <div className='error-msg'>
        <span>{error}</span>
      </div>
    )
  }
  return null
}

export default Error
