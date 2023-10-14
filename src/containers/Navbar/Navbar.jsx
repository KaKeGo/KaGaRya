import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripVertical } from '@fortawesome/free-solid-svg-icons'

import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='mb-4 navbar p-1'>
      <div className='flex'>

        <div className='w-1/6 p-2'>

          <div className='text-center site__logo'>
            <Link to='/'>KaGaRya</Link>
          </div>

        </div>

        <div className='w-1/2 flex-1 p-2 text-center'>
          
          <div>
            <ul className='inline-flex space-x-6'>
              
              <li>
                <Link to='/register'>Register</Link>
              </li>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/logout'>Logout</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>

            </ul>
          </div>

        </div>

        <div className='w-1/6 text-right p-2'>
          <ul className='inline-flex space-x-6 mx-2'>

            <li>
              <Link to='home/'>Profile</Link>
            </li>
            <li>
              <FontAwesomeIcon className='cursor' icon={faGripVertical} />
            </li>

          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar