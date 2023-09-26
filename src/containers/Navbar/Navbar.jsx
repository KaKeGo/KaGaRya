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

          <div className='text-center'>
            <Link>KaGaRya</Link>
          </div>

        </div>

        <div className='w-1/2 flex-1 p-2 text-center'>
          
          <div>
            <ul className='inline-flex space-x-6'>

              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Register</Link>
              </li>
              <li>
                <Link>Login</Link>
              </li>
              <li>
                <Link>Logout</Link>
              </li>

            </ul>
          </div>

        </div>

        <div className='w-1/6 text-right p-2'>
          <ul className='inline-flex space-x-6 mx-2'>

            <li>
              <Link>Profile</Link>
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