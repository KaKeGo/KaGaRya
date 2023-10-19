import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

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

  const handlePrevPage = () => {
    if (games.previous) {
      dispatch(GameList({ url: games.previous }))
    }
  }
  const handleNextPage = () => {
    if (games.next) {
      dispatch(GameList({ url: games.next }))
    }
  }

  if (status === 'loading') {
    return <div>Loading...</div>
  } else if (status === 'succeeded') {
    return (
      <div>

        <ul>
          {games.results && games.results.map((game) =>(
            <li key={game.id}>{game.title}</li>
          ))}
        </ul>

        <div>
          <button onClick={handlePrevPage} disabled={!games.previous}>Previous</button>
          <button onClick={handleNextPage} disabled={!games.next}>Next</button>
        </div>

      </div>
    )
  } else if (status === 'failed') {
    return <div>Error: {error}</div>
  }

  return null
}

export default GameListView