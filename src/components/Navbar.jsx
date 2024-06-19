import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {

  const isActive = (e)=>{
    return e.isActive && 'text-green-500';
  }  
  return (
    <div className='flex gap-4 p-4 shadow-md'>
        <NavLink className={isActive} to='/'>Home</NavLink>
        <NavLink className={isActive} to='/about'>About</NavLink>
        <NavLink className={isActive} to='/contact'>Contact</NavLink>
        <NavLink className={isActive} to='/posts'>Posts</NavLink>
    </div>
  )
}
