import {StateSchema} from '../types/StateSchema'

export const getRepState = (state: StateSchema) => state.repositories

export const getRepositoriesData = (state: StateSchema) =>
  state.repositories.data

export const getRepositoriesHasMore = (state: StateSchema) =>
  state.repositories.hasMore

export const getRepositoriesLoading = (state: StateSchema) =>
  state.repositories.loading

export const getRepositoriesError = (state: StateSchema) =>
  state.repositories.error ?? ''
