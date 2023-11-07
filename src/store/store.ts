import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import {repositoriesReduser} from './slices/repositoriesSlice'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    repositories: repositoriesReduser,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

sagaMiddleware.run(rootSaga)
