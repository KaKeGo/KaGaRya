import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div>

        <div>
          <Link>KaGaRya</Link>
        </div>

        <div>

          <ul>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Profile</Link>
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
    </div>
  )
}

export default Navbar