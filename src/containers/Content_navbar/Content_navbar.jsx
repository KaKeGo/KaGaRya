import React from 'react'
import { Link } from 'react-router-dom'

import './Content_navbar.css'

const Content_navbar = () => {
  return (
    <nav className='mb-4 mx-2 content_navbar'>
        <div className='p-4'>
            <div className='nav__links'>

                <ul>
                    <li className='icon'>
                      <Link to='game/list/public'>Games</Link>
                    </li>
                    <li className='icon'>
                      <Link to='anime/list'>Anime</Link>
                    </li>
                </ul>

            </div>
        </div>
    </nav>
  )
}

export default Content_navbar