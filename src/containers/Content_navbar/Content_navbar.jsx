import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import './Content_navbar.css'

const Content_navbar = () => {
  const location = useLocation()

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

        {location.pathname.startsWith('/game/list/public') && (
          <div className='additional__menu'>
            
            <ul className='list'>
              <li className='icon'>
                <Link>Platforms</Link>
              </li>
              <li className='icon'>
                <Link>GameDeveloper</Link>
              </li>
            </ul>

          </div>
        )}

    </nav>
  )
}

export default Content_navbar