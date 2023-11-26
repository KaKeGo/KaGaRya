import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'

import { GameDetail } from '../../../slice/GameLists/GameDetail/gameDetailSlice'

import FadeIn from '../../../animations/FadeIn/FadeIn'

import './GameDetailView.css'


const GameDetailView = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { slug } = useParams()

  const game = useSelector(state => state.gameDetail.game)
  const status = useSelector(state => state.gameDetail.status)
  const error = useSelector(state => state.gameDetail.error)
  const {user, isAuthenticated} = useSelector((state) => state.authCheck)

  const [userLoaded, setUserLoaded] = useState(false)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(GameDetail(slug))
    }
    if (user) {
      setUserLoaded(true)
    }
  }, [status, dispatch, slug, user])



  if (status === 'loading') {
    return <div className='containers'>
      <div>Loading...</div>
    </div>
  } else if (status === 'idle' || status === 'succeeded') {
    return (
      <FadeIn>
      <div className='containers'>
        <div className='gamedetail__containers'>

        <div className='gamedetail__buttons'>

          <button 
            className='button__left btn__nav'
          >
            Back
          </button>

          <div className='button__right'>
            {userLoaded && user.roles.includes('GameCreator') && (
              <>
                <button className='button__delete btn__nav'>Delete</button>
                <button className='button__update btn__nav'>Update</button>
              </>
            )}
            {isAuthenticated && !user.roles.includes('GameCreator') && (
              <button className='button__report btn__nav'>Report</button>
            )}

          </div>

        </div>

        <div className='gamedetail__box'>

            <div className='gamedetail__column1'>

              <div className='inner__column1'>

                <div className='gamedetail__cover'>
                  <img className='cover' src={game.cover} alt={game.title}/>
                </div>

                <div className='gamedetail__title'>
                  <h2>{game.title}</h2>
                </div>

              </div>

              <div className='inner__column2'>

                {game && game.trailer && (
                <div className='trailer__container'>
                    <iframe 
                      className='trailer'
                      width="560" 
                      height="315" 
                      src={`${game.trailer.replace("watch?v=", "embed/")}?autoplay=1&mute=1&controls=0&loop=1&playlist=K_03kFqWfqs&modestbranding=1&rel=0&showinfo=0`} 
                      title="YouTube video player" 
                      frameborder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowfullscreen>
                    </iframe>
                </div>
                )}

              </div>
              
            </div>
            
            <div className='gamedetail__column2'></div>

            <div className='gamedetail__column3'></div>

        </div>
        </div>
      </div>
      </FadeIn>
    )
  } else if (status === 'failed') {
    return <div className='containers'>
      <div>Error: {error}</div>
    </div>
  } else {
    return <div className='containers'>
      <div>Unexpected status: {status}</div>
    </div>
  }
}

export default GameDetailView