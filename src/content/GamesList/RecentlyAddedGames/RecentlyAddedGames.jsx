import React from 'react'

import './RecentlyAddedGames.css'


const RecentlyAddedGames = () => {
  return (
    <div className='recently__games_comp'>
        <div className='column__1'>

            <div className='recently__games__title'>
                <h2>Last added games</h2>
            </div>

            <div className='recently__games__container'>
                <div className='recently__games__box'>
                    <div className='recently__games__content'>
                        <img className='game__icon'
                            src='https://c4.wallpaperflare.com/wallpaper/393/143/799/assassins-creed-the-ezio-collection-4k-wallpaper-preview.jpg'/>
                        <div className='game__title'>Assassin Creed 2</div>
                    </div>
                </div>
                <div className='recently__games__box'>
                    <div className='recently__games__content'>
                    <img className='game__icon'
                            src='https://images8.alphacoders.com/414/414551.jpg'/>
                            <div className='game__title'>Splinter Cell: Black List</div>
                    </div>
                </div>
                <div className='recently__games__box'>
                    <div className='recently__games__content'>
                        <img className='game__icon'
                            src='https://wallpapers.com/images/featured-full/best-gaming-background-n1s8zlfrny49wo0q.jpg'/>
                        <div className='game__title'>Wolvenstein: New order</div>
                    </div>
                </div>
                <div className='recently__games__box'>
                <div className='recently__games__content'>
                    <img className='game__icon'
                        src='https://getwallpapers.com/wallpaper/full/a/8/f/33274.jpg'/>
                        <div className='game__title'>Mortal Combat 11</div>
                    </div>
                </div>
                <div className='recently__games__box'>
                <div className='recently__games__content'>
                    <img className='game__icon'
                        src='https://getwallpapers.com/wallpaper/full/a/7/f/33098.jpg'/>
                    <div className='game__title'>Hitman 4</div>
                    </div>
                </div>
            </div>

        </div>

        <div className='column__2'>
            <div className='recently__games__title'>
                <h2>News</h2>
            </div>
        </div>

    </div>
  )
}

export default RecentlyAddedGames