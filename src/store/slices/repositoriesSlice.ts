import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {NavigateFunction} from 'react-router-dom'
import {Reopsitory, RepositoriesState} from '../types/types'

const initialState: RepositoriesState = {
  page: 1,
  hasMore: true,
  loading: false,
  error: null,
  data: [],
}

export const repositoriesSlice = createSlice({
  name: 'repositories',
  initialState,
  reducers: {
    loadRepositoriesPending: (
      state,
      action: PayloadAction<{
        page?: number
        search?: string
        navigate?: NavigateFunction
        initial?: boolean
      }>,
    ) => {
      state.loading = true
      state.page = action.payload?.page || state.page
      if (action.payload.initial) {
        state.data = []
      }
    },
    loadRepositoriesSuccess: (state, action: PayloadAction<Reopsitory[]>) => {
      if (!action.payload.length) {
        state.loading = false
        state.hasMore = false
      } else {
        state.loading = false
        state.data = [...state.data, ...action.payload]
      }
    },
    loadRepositoriesReject: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const {actions: repositoriesActions} = repositoriesSlice
export const {reducer: repositoriesReduser} = repositoriesSlice
