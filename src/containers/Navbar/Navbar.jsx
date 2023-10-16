import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faGripVertical, faRightToBracket, faUserPlus, faRightFromBracket, faGrip, faGear,
  faUser
} from '@fortawesome/free-solid-svg-icons'

import './Navbar.css'
import LogoutView from '../../content/Account/Logout/LogoutView'

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.authCheck.isAuthenticated)
  const user = useSelector((state) => state.authCheck.user)

  const isMobile = useMediaQuery({query: '(max-width: 600px'})
  
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu)
  }

  return (
    <nav className='mb-4 navbar p-1'>
      <div className='flex'>

        <div className='w-1/6 p-2'>

          <div className='text-center site__logo'>
            <Link className='icon' to='/'>KaGaRya</Link>
          </div>

        </div>

        <div className='w-1/2 flex-1 p-2 text-center mt-auto mb-auto nav__middle'>
          
          <div>
            <ul className='inline-flex space-x-6'>
            {isAuthenticated ? (
              <li>
              </li>
            ) : (
              <>
                <li>
                  <Link to='/register'>
                    {isMobile ? <FontAwesomeIcon className='icon' icon={faUserPlus} size='lg' /> :
                    <p className='icon'>Register <FontAwesomeIcon icon={faUserPlus}/></p>
                    }
                  </Link>
                </li>
                <li>
                  <Link to='/login'>
                    {isMobile ? <FontAwesomeIcon className='icon' icon={faRightToBracket} size='lg'/> :
                    <p className='icon'>Login <FontAwesomeIcon icon={faRightToBracket} /></p>
                    }
                  </Link>
                </li>
              </>
            )}
              <li className='icon'>
                <Link to='/news'>News</Link>
              </li>
              <li className='icon'>
                <Link to='/about'>About</Link>
              </li>
            </ul>
          </div>

        </div>

        <div className='w-2/6 text-right p-2 mt-auto mb-auto'>
          <ul className='inline-flex space-x-6 mx-2'>

          {isAuthenticated && user ? (
            <>
              <li>
                <Link to={`/profile/${user.slug}`}>
                  {user.username}
                </Link>
              </li>
              <li onClick={toggleMenu}>
                <FontAwesomeIcon className='cursor icon' icon={isOpenMenu ? faGripVertical : faGrip} size='lg' />
              </li>
              {isOpenMenu && (
                <ul className='dropdown__menu'>
                  <li className='icon cursor'>
                    {isMobile ? 
                      <FontAwesomeIcon icon={faUser} size="lg" />
                      : 
                      <p className='icon'>Profile <FontAwesomeIcon icon={faUser} /></p>
                    }
                  </li>
                  <li className='icon cursor'>
                    {isMobile ? 
                      <FontAwesomeIcon icon={faGear} size="lg" /> 
                      : 
                      <p className='icon'>Settings <FontAwesomeIcon icon={faGear} /></p>
                    }
                  </li>
                  <li>
                    {isMobile ? 
                    <LogoutView>
                      <FontAwesomeIcon className='icon' icon={faRightFromBracket} size='lg'/> 
                    </LogoutView> : 
                    <LogoutView>
                      <p className='icon'>Logout <FontAwesomeIcon icon={faRightFromBracket}/> </p>
                    </LogoutView>
                    }
                </li>
                </ul>
              )}
            </>
          ) : (
            <></>
          )}
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar