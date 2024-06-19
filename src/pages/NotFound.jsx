import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='p-10 text-center'>
        Page Not Found go back to <Link to={'/'} className='text-blue-500'>Home Page</Link>
    </div>
  )
}
