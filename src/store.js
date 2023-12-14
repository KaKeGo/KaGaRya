import { configureStore } from '@reduxjs/toolkit'

// Global state
import authUserCheckReducer from './slice/Accounts/AuthUserCheck/authUserCheck'
import navigationReducer from './slice/GlobalSlices/navigation'
// User
import registerReducer from './slice/Accounts/Register/registerSlice'
import loginReducer from './slice/Accounts/Login/loginSlice'
import logoutReducer from './slice/Accounts/Logout/logoutSlice'
// Game List
import gameListReducer from './slice/GameLists/GameList/gameListSlice'
import gameCreateReducer from './slice/GameLists/CreateGame/createGameSlice'
import gameDetailReducer from './slice/GameLists/GameDetail/gameDetailSlice'
import gameUpdateReducer from './slice/GameLists/GameUpdate/gameUpdateSlice'
import gameCategoryReducer from './slice/GameLists/GameCategory/gameCategorySlice'
import categoryCreateReducer from './slice/GameLists/CreateGameCategory/createGameCategory'
// Game Events
import recentlyGamesReducer from './slice/GameLists/RecentlyGames/recentlyGamesSlice'


const store = configureStore({
    reducer: {
        // Global state
        authCheck: authUserCheckReducer,
        navigation: navigationReducer,
        // User
        register: registerReducer,
        login: loginReducer,
        logout: logoutReducer,
        // Game List
        gameList: gameListReducer,
        gameCreate: gameCreateReducer,
        gameDetail: gameDetailReducer,
        gameUpdate: gameUpdateReducer,
        gameCategory: gameCategoryReducer,
        gameCategoryCreate: categoryCreateReducer,
        // Game Events
        recentlyGames: recentlyGamesReducer,
    }
})

export default store
