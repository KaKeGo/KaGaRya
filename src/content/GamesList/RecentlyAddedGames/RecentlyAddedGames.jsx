import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RecentlyGames } from '../../../slice/GameLists/RecentlyGames/recentlyGamesSlice'

import GameMenu from '../../../containers/GameMenu/GameMenu'

import './RecentlyAddedGames.css'


const RecentlyAddedGames = ({ onShowMoreButtonChange }) => {
    const dispatch = useDispatch()
    const { games, status, error } = useSelector((state) => state.recentlyGames)
    const [showGames, setShowGames] = useState([])
    const [showMoreButton, setShowMoreButton] = useState(false)

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
                setShowMoreButton(true)
            } else if (width < 900) {
                setShowGames(games.slice(0, 8))
                setShowMoreButton(true)
            } else if (width < 1220) {
                setShowGames(games.slice(0, 9))
                setShowMoreButton(true)
            } else {
                setShowGames(games)
                setShowMoreButton(false)
            }
        }

        window.addEventListener('resize', updateShowGames)
        updateShowGames()
    }, [games])
    
    useEffect(() => {
        onShowMoreButtonChange(showMoreButton)
    }, [showMoreButton, onShowMoreButtonChange])

    const handleShowMore = () => {
        showGames(games)
        setShowMoreButton(false)
    }

    if (status === 'loading') {
        return <div>Loading...</div>
    } else if (status === 'succeeded') {
        return (
            <div className='recently__games__container'>
            {showGames.map((game) => (
                <div className='recently__games__box' key={game.id}>
                    <GameMenu 
                        title={game.title} release_date={game.release_date}
                        cover={game.cover} developer={game.developer}
                        game_type={game.game_type} game_mode={game.game_mode}
                        average_rating={game.average_rating}
                    />
                </div>
            ))}
            </div>
        )
    } else if (status === 'failed') {
        return <div>Error: {error}</div>
    }

    return null
}

export default RecentlyAddedGames