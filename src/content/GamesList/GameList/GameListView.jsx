import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import { GameList } from '../../../slice/GameLists/GameList/gameListSlice'

import './GameList.css'


const GameListView = () => {
  const dispatch = useDispatch()
  const games = useSelector((state) => state.gameList.games)
  const status = useSelector((state) => state.gameList.status)
  const error = useSelector((state) => state.gameList.error)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(GameList())
    }
  }, [status, dispatch])
  console.log(games)

  const handlePrevPage = () => {
    if (games.previous) {
      dispatch(GameList(games.previous))
    }
  }
  const handleNextPage = () => {
    if (games.next) {
      dispatch(GameList(games.next))
    }
  }

  if (status === 'loading') {
    return <div>Loading...</div>
  } else if (status === 'succeeded') {
    return (
      <div className='game__container'>

        <div className='game__column1'>
        {games.results && games.results.map((game) =>(
        <div className='games__box' key={game.id}>

            <img className='game_icon' src='https://get.wallhere.com/photo/video-games-Battlefield-Battlefield-4-screenshot-computer-wallpaper-stunt-performer-special-effects-pc-game-action-film-154724.jpg'/>
            <div className='games__title'>
              <h2>{game.title}</h2>
            </div>

          </div>
          ))}
        </div>

        <div className='game__column2'>
          <div className='game__pagination'>
            <button onClick={handlePrevPage} disabled={!games.previous}>
              <FontAwesomeIcon icon={faChevronLeft} size='lg' />Previous
            </button>
            <button onClick={handleNextPage} disabled={!games.next}>
              Next<FontAwesomeIcon icon={faChevronRight} size='lg' />
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