import React from 'react'
import { Link } from 'react-router-dom'

import './Content_navbar.css'

const Content_navbar = () => {
  return (
    <nav className='mb-4'>
        <div className='b mx-4 flex'>
            <div>

                <ul>
                    <li>
                        <Link></Link>
                    </li>
                </ul>

            </div>
        </div>
    </nav>
  )
}

export default Content_navbar