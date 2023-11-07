import {spawn, all} from 'redux-saga/effects'
import repositoriesSaga from './repositoriesSaga'

export default function* rootSaga() {
  const sagas = [repositoriesSaga]
  yield all(sagas.map(s => spawn(s)))
}
