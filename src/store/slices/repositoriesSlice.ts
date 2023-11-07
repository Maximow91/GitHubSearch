import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

export interface Reopsitory {
  id: number
  name: string
  description: string
  language: string
  stars: number
}

export interface RepositoriesState {
  page: number
  search: string
  loading: boolean
  error: string | null
  data: Reopsitory[] | null
}

const initialState: RepositoriesState = {
  page: 1,
  search: '',
  loading: false,
  error: null,
  data: null,
}

export const repositoriesSlice = createSlice({
  name: 'repositories',
  initialState,
  reducers: {
    loadRepositoriesPending: (
      state,
      action: PayloadAction<{page?: number; search?: string}>,
    ) => {
      state.loading = true
      state.page = action.payload.page || state.page
      state.search = action.payload.search || state.search
    },
    loadPeopleSuccess: (state, action: PayloadAction<Reopsitory[]>) => {
      state.loading = false
      state.data = action.payload
    },
    loadPeopleReject: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const {actions: repositoriesActions} = repositoriesSlice
export const {reducer: repositoriesReduser} = repositoriesSlice
