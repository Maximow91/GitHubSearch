import {PayloadAction} from '@reduxjs/toolkit'
import {NavigateFunction} from 'react-router-dom'
import {call, takeEvery, put} from 'redux-saga/effects'
import {getRouteTable} from '../../../router/routeConfig'
import {getRepositories} from '../../../services/getRepositories'
import {repositoriesActions} from '../../slices/repositoriesSlice'
import {Reopsitory} from '../../types/types'

export function* loadRepositoriesList(
  action: PayloadAction<{
    search?: string
    page?: number
    navigate?: NavigateFunction
    initial?: boolean
  }>,
) {
  try {
    const {search, page, navigate, initial} = action.payload
    const data: Reopsitory[] = yield call(
      getRepositories,
      search,
      page,
      initial,
    )
    yield put(repositoriesActions.loadRepositoriesSuccess(data))
    if (search && navigate) {
      navigate(getRouteTable(search))
    }
  } catch (error) {
    yield put(repositoriesActions.loadRepositoriesReject(error.message))
  }
}

export default function* repositoriesSaga() {
  yield takeEvery(
    repositoriesActions.loadRepositoriesPending,
    loadRepositoriesList,
  )
}
