import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faChevronLeft, faChevronRight, faAnglesRight, faAnglesLeft
} from '@fortawesome/free-solid-svg-icons'

import { GameList } from '../../../slice/GameLists/GameList/gameListSlice'

import GameMenu from '../../../containers/GameMenu/GameMenu'
import Loading from '../../../components/Loading/Loading'


import './GameList.css'


const GameListView = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const games = useSelector((state) => state.gameList.games)
  const status = useSelector((state) => state.gameList.status)
  const error = useSelector((state) => state.gameList.error)
  const { user, isAuthenticated } = useSelector((state) => state.authCheck)
  
  const [userLoaded, setUserLoaded] = useState(false)

  const { gameStatus } = useParams()

  useEffect(() => {
    if (user) {
      setUserLoaded(true)
    }
  }, [user])


  useEffect(() => {
    if (userLoaded) {
      if (user && user.roles.includes('GameCreator')) {
        dispatch(GameList({ gameStatus }))
      } else {
        dispatch(GameList({ gameStatus: 'public' }))
        navigate(`/game/list/${gameStatus}`)
      }
    } else if (!isAuthenticated) {
      dispatch(GameList({ gameStatus: 'public' }))
      navigate(`/game/list/${gameStatus}`)
    }
  }, [dispatch, gameStatus, user, navigate, userLoaded, isAuthenticated])

  const handleFirsPage = () => {
    if (games.links.first) {
      dispatch(GameList({ url: games.links.first }));
    }
  }
  const handlePrevPage = () => {
    if (games.links.previous) {
      dispatch(GameList({ url: games.links.previous }));
    }
  }
  const handleNextPage = () => {
    if (games.links.next) {
      dispatch(GameList({ url: games.links.next }));
    }
  }
  const handleLastPage = () => {
    if (games.links.last) {
      dispatch(GameList({ url: games.links.last }))
    }
  }
  const handleCurrentPage = () => {
    if (games.links && games.links.current) {
      dispatch(GameList({ url: games.links.current }));
    }
  }

  if (status === 'loading') {
    return <Loading />
  } else if (status === 'succeeded') {
    return (
      <div className='game__container'>
        <div className='game__column1'>
        {games.results && games.results.map((game) =>(
        <div className='games__box' key={game.id}>
              <GameMenu 
                title={game.title} release_date={game.release_date}
                cover={game.cover} developer={game.developer}
                game_type={game.game_type} game_mode={game.game_mode}
                average_rating={game.average_rating} game_slug={game.game_slug}
              />
          </div>
          ))}
        </div>

        <div className='game__column2'>
          <div className='game__pagination'>

            <button onClick={handleFirsPage} disabled={!games.links.previous}>
              <FontAwesomeIcon icon={faAnglesLeft} size='lg'/>
            </button>

            <button onClick={handlePrevPage} disabled={!games.links.previous}>
              <FontAwesomeIcon icon={faChevronLeft} size='xl' />
            </button>

            {games.current_page > 1 && (
              <button className='above__number'>
                {games.current_page - 1}
              </button>
            )}

            <button className='middle__number' onClick={handleCurrentPage}>
              {games.current_page}
            </button>

            {games.current_page < games.total_pages && (
              <button className='above__number'>
                {games.current_page + 1}
              </button>
            )}

            {games.current_page < games.total_pages -1 && (
              <>
                <button className='above__number'>...</button>
                <button className='above__number'>{games.total_pages}</button>
              </>
            )}

            <button onClick={handleNextPage} disabled={!games.links.next}>
              <FontAwesomeIcon icon={faChevronRight} size='xl' />
            </button>

            <button onClick={handleLastPage} disabled={!games.links.next}>
              <FontAwesomeIcon icon={faAnglesRight} size='lg' />
            </button>

          </div>
        </div>

      </div>
    )
  } else if (status === 'failed') {
    return <div>Error: {error}</div>
  }

  return null
}

export default GameListView