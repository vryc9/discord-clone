import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import serverReducer from '../features/server/serverSlice'
export const store = configureStore({
    reducer: {
      serverReducer
    },
  })

export type AppStore = typeof store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk = ThunkAction<void, RootState, unknown, Action>