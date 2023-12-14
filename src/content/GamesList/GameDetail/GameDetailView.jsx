import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faPenToSquare
} from '@fortawesome/free-solid-svg-icons'


import { GameDetail } from '../../../slice/GameLists/GameDetail/gameDetailSlice'
import { UpdateGame } from '../../../slice/GameLists/GameUpdate/gameUpdateSlice'
import { GameCategory } from '../../../slice/GameLists/GameCategory/gameCategorySlice'
import { CreateCategory } from '../../../slice/GameLists/CreateGameCategory/createGameCategory'

import FadeIn from '../../../animations/FadeIn/FadeIn'
import CSRFToken from '../../../CSRFToken'
import useEditableState from '../../../components/useEditableState/useEditableState'
import CustomDropdownSelect from '../../../components/CustomDropdownSelect/CustomDropdownSelect'

import './GameDetailView.css'


const GAME_VERSION = [
  { name: 'alpha', id: 'alpha' },
  { name: 'beta', id: 'beta' },
  { name: 'early access', id: 'early access' },
  { name: 'full release', id: 'full release' },
]


const GameDetailView = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { slug } = useParams()

  const [game, setGame] = useState(null)

  const [categoryName, setCategoryName] = useState('')

  const gameFromStore = useSelector(state => state.gameDetail.game)
  const categoryFromStore = useSelector(state => state.gameCategory.categories)
  const status = useSelector(state => state.gameDetail.status)
  const error = useSelector(state => state.gameDetail.error)
  const {user, isAuthenticated} = useSelector((state) => state.authCheck)
  const createCategoryError = useSelector(state => state.createCategory ? state.createCategory.error : null)

  const [addError, setAddError] = useState(null)
  const [userLoaded, setUserLoaded] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  const title = useEditableState('')
  const category = useEditableState('')
  const gameVersion = useEditableState('')

  useEffect(() => {
    if (status === 'idle') {
      dispatch(GameDetail(slug))
    }
    if (user) {
      setUserLoaded(true)
    }
  }, [status, dispatch, slug, user])

  useEffect(() => {
    dispatch(GameCategory())
  }, [dispatch])

  useEffect(() => {
    if (gameFromStore) {
      title.setValue(gameFromStore.title)
      if (gameFromStore && gameFromStore.category) {
        category.setValue(gameFromStore.category.id)
        setCategoryName(gameFromStore.category.name)
      }
      gameVersion.setValue(gameFromStore.game_version)

      setGame(gameFromStore)
    }
  }, [gameFromStore])

  useEffect(() => {
    dispatch(GameDetail(slug));

  }, [dispatch, slug]);

  const findCategory = (value, categories) => {
    return categories.find(cat => cat.id === Number(value));
  }

  const handleUpdate = async () => {
    dispatch(UpdateGame({ 
      slug, 
      updatedData: {
        title: title.value,
        category: category.value,
        game_version: gameVersion.value,
      } 
    })).then(() => {
      dispatch(GameDetail(slug))
    })

    const foundCategory = findCategory(category.value, categoryFromStore)
    
    if (foundCategory) {  
      setGame(prevGame => ({
        ...prevGame,
        title: title.value,
        category: foundCategory.id,
        gameVersion: gameVersion.value,
      }))
      
      setCategoryName(foundCategory.name)
    }

    setIsEditing(false)
  }

  const onSelectCategory = (itemId) => {
    console.log("Selected category ID: ", itemId);
    category.setValue(itemId);
  }

  const handleCategoryNameChange = (e) => {
    setCategoryName(e.target.value);
  }

  const onAddCategory = async () => {
    try {
      await dispatch(CreateCategory(categoryName))
      dispatch(GameCategory())
    } catch (err) {
      console.error(err);
    }
  }



  if (status === 'loading' || !game) {
    return <div className='containers'>
      <div>Loading...</div>
    </div>
  } else if (status === 'idle' || status === 'succeeded') {
    return (
      <FadeIn>
      <form className='containers'>
      {isEditing ? (
        <CSRFToken />
      ) : (<></>)}

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
                {isEditing ? (
                  <button
                    type='button'
                    className='button__save btn__nav'
                    onClick={handleUpdate}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    type='button'
                    className='button__update btn__nav'
                    onClick={() => setIsEditing(true)}
                  >
                    Update
                  </button>
                )}
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
                  <img className='cover' src='https://i.redd.it/bueqtztxmnj81.png' alt={game.title}/>
                </div>

                <div className='gamedetail__title gamedetail__info'>
                  {isEditing ? (
                    <>
                    <div className='input__container'>

                      <input className='input__content title__name'
                        type="text"
                        value={title.value}
                        onChange={title.handleChange}
                        onBlur={title.handleBlur}
                      />
                      <div className='input__icon'>
                        <FontAwesomeIcon icon={faPenToSquare}/>
                      </div>

                    </div>
                    <div className='input__highlight'></div>
                    </>
                  ) : (
                    <h2>{game.title}</h2>
                  )}
                </div>
                <div className='gamedetail__content score gamedetail__info'>
                  <h2>Users score: {game.average_rating}</h2>
                </div>
                <div className='gamedetail__content gamedetail__info'>
                  <h2>Content:</h2>
                  {isEditing ? (
                    <>
                      <div className='input__container'>
                        <CustomDropdownSelect
                          className='custom__select'
                          initialItems={categoryFromStore.map(cat => ({ name: cat.name, id: cat.id }))}
                          placeholder={game.category ? game.category : 'Select category'}
                          selectedItem={game && game.category ? categoryFromStore.find(cat => cat.id === Number(game.category)) : undefined}
                          onAddItem={onAddCategory}
                          onSelectItem={onSelectCategory}
                          value={category.value}
                          addItemText='New category'
                          onNewItemNameChange={handleCategoryNameChange}
                        />
                        <div className='input__icon'>
                          <FontAwesomeIcon icon={faPenToSquare}/>
                        </div>
                      </div>
                      <div className='input__highlight'></div>
                    </>
                  ) : (
                    <p>{game.category}</p>
                  )}
                </div>
                <div className='gamedetail__content gamedetail__info'>
                  <h2>Version:</h2>
                  {isEditing ? (
                    <>
                      <div className='input__container'>
                        <CustomDropdownSelect
                          className='custom__select'
                          initialItems={GAME_VERSION}
                          placeholder={game.game_version}
                          selectedItem={game ? game.game_version : gameVersion.value}
                          onSelectItem={gameVersion.setValue}
                        />
                        <div className='input__icon'>
                          <FontAwesomeIcon icon={faPenToSquare}/>
                        </div>
                      </div>
                      <div className='input__highlight'></div>
                    </>
                  ) : (
                    <p>{game.game_version}</p>
                  )}
                </div>
                <div className='gamedetail__content gamedetail__info'>
                  <h2>Developer:</h2>
                  <p>{game.developer}</p>
                </div>
                <div className='gamedetail__content gamedetail__info'>
                  <h2>Publisher:</h2>
                  <p>{game.game_publisher}</p>
                </div>
                <div className='gamedetail__content gamedetail__info'>
                  <h2>Release Date:</h2>
                  <p>{game.release_date}</p>
                </div>
                <div className='gamedetail__content gamedetail__info'>
                  <h2>Type of Game:</h2>
                  <p>{game && game.game_type && game.game_type.join(', ')}</p>
                </div>
                <div className='gamedetail__content gamedetail__info'>
                  <h2>game mode:</h2>
                  <p>{game && game.game_mode && game.game_mode.join(', ')}</p>
                </div>
                <div className='gamedetail__content gamedetail__info'>
                  <h2>platforms:</h2>
                  <p>{game && game.platforms && game.platforms.join(', ')}</p>
                </div>
                <div className='gamedetail__content gamedetail__info'>
                  <h2>tags:</h2>
                  <p>{game && game.tags && game.tags.join(', ')}</p>
                </div>

              </div>

              <div className='inner__column2'>

                <div className='trailer__container'>
                {game && game.trailer && (
                  <div className='trailer__container'>
                  <iframe 
                    className='trailer'
                    width="560" 
                    height="315" 
                    src={`${game.trailer}&autoplay=1&loop=1&mute=1&modestbranding=1&playlist=${game.trailer.split('/').pop().split('?')[0]}`}
                    title="Trailer" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                    ></iframe>
                  </div>
                )}
                </div>

                <div className='horizontal__line'></div>

                <div className='body__container'>
                {game && game.body && game.body.split('\r\n\r\n').map((paragraph, index) => (
                  <p key={index}>{paragraph.replace('\r\n', ' ')}</p>
                ))}
                </div>

              </div>
              
            </div>

            <div className='horizontal__line'></div>

            <div className='gamedetail__column2'>

              <h2 className='system__requirements__title'>System requirements</h2>

              <div className='column2__content'>
                <div className='column'>

                  <h3 className='column__title'>Minimum</h3>
                  <div className='column__horizontal__line'></div>
                  {game && game.minimum_requirements && (
                    <>
                      <p className='column__content'><span className='column__label'>OS:</span> {game.minimum_requirements.os}</p>
                      <p className='column__content'><span className='column__label'>CPU:</span> {game.minimum_requirements.cpu}</p>
                      <p className='column__content'><span className='column__label'>RAM:</span> {game.minimum_requirements.ram}</p>
                      <p className='column__content'><span className='column__label'>GPU:</span> {game.minimum_requirements.gpu}</p>
                      <p className='column__content'><span className='column__label'>Direct X:</span> {game.minimum_requirements.direct_x}</p>
                      <p className='column__content'><span className='column__label'>Storage:</span> {game.minimum_requirements.storage}</p>
                      <p className='column__content'><span className='column__label'>Sound Card:</span> {game.minimum_requirements.sound_card}</p>
                    </>
                  )}
                </div>

                <div className='column'>

                  <h3 className='column__title'>Recommended</h3>
                  <div className='column__horizontal__line'></div>
                  {game && game.recommended_requirements && (
                    <>
                      <p className='column__content'><span className='column__label'>OS:</span> {game.recommended_requirements.os}</p>
                      <p className='column__content'><span className='column__label'>CPU:</span> {game.recommended_requirements.cpu}</p>
                      <p className='column__content'><span className='column__label'>RAM:</span> {game.recommended_requirements.ram}</p>
                      <p className='column__content'><span className='column__label'>GPU:</span> {game.recommended_requirements.gpu}</p>
                      <p className='column__content'><span className='column__label'>Direct X:</span> {game.recommended_requirements.direct_x}</p>
                      <p className='column__content'><span className='column__label'>Storage:</span> {game.recommended_requirements.storage}</p>
                      <p className='column__content'><span className='column__label'>Sound Card:</span> {game.recommended_requirements.sound_card}</p>
                    </>
                  )}
                </div>

                <div className='column'>

                  <h3 className='column__title'>Highest</h3>
                  <div className='column__horizontal__line'></div>
                  {game && game.highest_requirements && (
                    <>
                      <p className='column__content'><span className='column__label'>OS:</span> {game.highest_requirements.os}</p>
                      <p className='column__content'><span className='column__label'>CPU:</span> {game.highest_requirements.cpu}</p>
                      <p className='column__content'><span className='column__label'>RAM:</span> {game.highest_requirements.ram}</p>
                      <p className='column__content'><span className='column__label'>GPU:</span> {game.highest_requirements.gpu}</p>
                      <p className='column__content'><span className='column__label'>Direct X:</span> {game.highest_requirements.direct_x}</p>
                      <p className='column__content'><span className='column__label'>Storage:</span> {game.highest_requirements.storage}</p>
                      <p className='column__content'><span className='column__label'>Sound Card:</span> {game.highest_requirements.sound_card}</p>
                    </>
                  )}
                </div>

              </div>

            </div>

            <div className='horizontal__line'></div>

            <div className='gamedetail__column3'>

              <div className='gamedetail__column3__text'>
                <p>Added by: {game.added_by} | Updated by: {game.updated_by}</p>
              </div>

              <p>
                If you have found any inaccuracies or have an idea on how to make things better, 
                click 'Report' and write to us.
              </p>

            </div>

        </div>
        </div>
      </form>
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
