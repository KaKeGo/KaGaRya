import React, { useState } from 'react'
import eldenring from './elden-ring.jpg'

import './Home.css'

const Home = () => {

  const [isTextVisible, setIsTextVisible] = useState(true);

  const handleClick = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <div className="box">
      <div className="box_up">
        <div>
          <div><img src={eldenring} className="box_img"/></div>
          </div>
          <p className="box_name">Elden ring</p>
        </div>
      <div className="home">
        <div className="info_left">
         <p className="info_left_hidden" onClick={handleClick}>Więcej informacji o grze</p> 
         {isTextVisible && <div>
          <p className="info_left1">Content:</p>
          <p className="info_left2">Game</p>
          <p className="info_left1">Version:</p>
          <p className="info_left2">Full Realease</p>
          <p className="info_left1">Developer:</p>
          <p className="info_left2">FromSoftware</p>
          <p className="info_left1">Release date:</p>
          <p className="info_left2">25-02-2022</p>
          <p className="info_left1">Type of game:</p>
          <p className="info_left2">Action RPG, przygodowe</p>
          <p className="info_left1">Platforms:</p>
          <p className="info_left2">PlayStation 4, PC</p> </div>}
        </div>
        <div className="info_right">
          <iframe className="info_yt" width="560" height="315" src="https://www.youtube.com/embed/E3Huy2cdih0?si=UTg6Aa3KMqVJ8TIH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <p className="info_right1">Elden Ring is a 2022 action role-playing game developed by FromSoftware.
            It was directed by Hidetaka Miyazaki with worldbuilding provided by fantasy
            writer George R. R. Martin. It was published for PlayStation 4, PlayStation 5,
            Windows, Xbox One, and Xbox Series X/S on February 25 by FromSoftware in Japan
            and Bandai Namco Entertainment internationally. Players control a customizable
            player character who is on a quest to repair the Elden Ring and become the new Elden Lord.
            Elden Ring is presented through a third-person perspective; players freely roam its interactive open world.
            The six main areas are traversed using the player character's steed Torrent as the primary mode of travel.
            Linear, hidden dungeons can be explored to find useful items. Players can use several types of weapons
            and magic spells, including non-direct engagement enabled by stealth mechanics. Throughout the game's world,
            checkpoints enable fast travel and allow players to improve their attributes using an in-game currency
            called runes. Elden Ring features an online multiplayer mode in which players can join for cooperative play and player-versus-player combat.</p>
        </div>
      </div>
    </div>
  )
}

export default Home
