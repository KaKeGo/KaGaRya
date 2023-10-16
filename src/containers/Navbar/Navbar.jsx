import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faGripVertical, faRightToBracket, faUserPlus, faRightFromBracket
} from '@fortawesome/free-solid-svg-icons'

import './Navbar.css'
import LogoutView from '../../content/Account/Logout/LogoutView'

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.authCheck.isAuthenticated)
  const user = useSelector((state) => state.authCheck.user)   

  const isMobile = useMediaQuery({query: '(max-width: 600px'})

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
                {isMobile ? 
                <LogoutView>
                  <FontAwesomeIcon className='icon' icon={faRightFromBracket} size='lg'/> 
                </LogoutView> : 
                <LogoutView>
                  <p className='icon'>Logout <FontAwesomeIcon icon={faRightFromBracket}/> </p>
                </LogoutView>
                }
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
            </ul>
          </div>

        </div>

        <div className='w-2/6 text-right p-2'>
          <ul className='inline-flex space-x-6 mx-2'>

          {isAuthenticated && user ? (
            <>
              <li>
                <Link to={`/profile/${user.slug}`}>
                  {user.username}
                </Link>
              </li>
              <li>
                <FontAwesomeIcon className='cursor' icon={faGripVertical} />
              </li>
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