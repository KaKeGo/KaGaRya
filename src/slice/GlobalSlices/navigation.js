import { createSlice } from '@reduxjs/toolkit'

// in navigationSlice.js
const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    prevPath: null,
    gameStatus: null,
    lastVisitedPage: null, // new state field
  },
  reducers: {
    setPrevPath: (state, action) => {
      state.prevPath = action.payload;
    },
    setGameStatus: (state, action) => {
      state.gameStatus = action.payload;
    },
    setLastVisitedPage: (state, action) => { // new action
      state.lastVisitedPage = action.payload;
    },
  },
});

export const { setPrevPath, setGameStatus, setLastVisitedPage } = navigationSlice.actions

export default navigationSlice.reducer