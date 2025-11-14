import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavItem = ({to, children}) => (
  <NavLink to={to} className={({isActive}) => 
    'px-3 py-2 rounded-md text-sm font-medium ' + (isActive ? 'bg-primary text-white' : 'text-gray-700 hover:bg-slate-100')}>
    {children}
  </NavLink>
)

export default function Navbar(){
  return (
    <header className='bg-white shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16 items-center'>
          <div className='flex items-center space-x-4'>
            <div className='text-2xl font-bold text-sea'>AI Disaster</div>
            <nav className='hidden md:flex space-x-2'>
              <NavItem to='/'>Home</NavItem>
              <NavItem to='/alerts'>Alerts</NavItem>
              <NavItem to='/predictions'>Predictions</NavItem>
              <NavItem to='/contact'>Contact</NavItem>
            </nav>
          </div>
          <div className='flex items-center space-x-3'>
            <button className='px-3 py-1 border rounded-md text-sm'>Sign in</button>
          </div>
        </div>
      </div>
    </header>
  )
}
