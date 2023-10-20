import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RecentlyGames } from '../../../slice/GameLists/RecentlyGames/recentlyGamesSlice'

import GameMenu from '../../../containers/GameMenu/GameMenu'

import './RecentlyAddedGames.css'


const RecentlyAddedGames = () => {
    const dispatch = useDispatch()
    const { games, status, error } = useSelector((state) => state.recentlyGames)
    const [showGames, setShowGames] = useState([])

    useEffect(() => {
        if (status === 'idle') {
            dispatch(RecentlyGames())
        }
    }, [status, dispatch])

    useEffect(() => {
        const updateShowGames = () => {
            const width = window.innerWidth
            if (width < 600) {
                setShowGames(games.slice(0, 4))
            } else if (width < 900) {
                setShowGames(games.slice(0, 8))
            } else if (width < 1220) {
                setShowGames(games.slice(0, 9))
            } else {
                setShowGames(games)
            }
        }

        window.addEventListener('resize', updateShowGames)
        updateShowGames()
    }, [games])

    if (status === 'loading') {
        return <div>Loading...</div>
    } else if (status === 'succeeded') {
        return (
            <div className='recently__games__comp'>
                <div className='recently__games__container'>
                {showGames.map((game) => (
                    <div className='recently__games__box' key={game.id}>
                        <div className='recently__games__content'>
                        <img className='game__icon' src={game.cover} />
                        <div className='game__title'>
                            <GameMenu />
                            {game.title}
                        </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        )
    } else if (status === 'failed') {
        return <div>Error: {error}</div>
    }

    return null
}

export default RecentlyAddedGames