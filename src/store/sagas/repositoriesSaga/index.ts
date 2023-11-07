import {PayloadAction} from '@reduxjs/toolkit'
import {NavigateFunction} from 'react-router-dom'
import {takeEvery, put} from 'redux-saga/effects'
import {getRouteTable} from '../../../router/routeConfig'
import {getRepositories} from '../../../services/getRepositories'
import {repositoriesActions} from '../../slices/repositoriesSlice'
import {Reopsitory} from '../../types/types'

export function* loadRepositoriesList(
  action: PayloadAction<{
    search: string
    page?: number
    navigate?: NavigateFunction
  }>,
) {
  try {
    const {search, page, navigate} = action.payload
    const data: Reopsitory[] = yield getRepositories(search, page)
    yield put(repositoriesActions.loadRepositoriesSuccess(data))
    if (search && navigate) {
      navigate(getRouteTable(search))
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      yield put(repositoriesActions.loadRepositoriesReject(error.message))
    } else {
      yield put(repositoriesActions.loadRepositoriesReject('Unknown error'))
    }
  }
}

export default function* repositoriesSaga() {
  yield takeEvery(
    repositoriesActions.loadRepositoriesPending,
    loadRepositoriesList,
  )
}
