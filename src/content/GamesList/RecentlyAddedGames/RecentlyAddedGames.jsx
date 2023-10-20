import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RecentlyGames } from '../../../slice/GameLists/RecentlyGames/recentlyGamesSlice'

import CommingSoonView from '../../../containers/CommingSoon/CommingSoon'
import GameMenu from '../../../containers/GameMenu/GameMenu'

import './RecentlyAddedGames.css'


const RecentlyAddedGames = () => {
    const dispatch = useDispatch()
    const { games, status, error } = useSelector((state) => state.recentlyGames)

    useEffect(() => {
        if (status === 'idle') {
            dispatch(RecentlyGames())
        }
    }, [status, dispatch])

    if (status === 'loading') {
        return <div>Loading...</div>
    } else if (status === 'succeeded') {
        return (
            <div className='recently__games__comp'>
                <div className='recently__games__container'>
                {games.map((game) => (
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