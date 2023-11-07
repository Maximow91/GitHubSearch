import {spawn, all} from 'redux-saga/effects'

export default function* rootSaga() {
  console.log('root saga')
  const sagas = []
  yield all(sagas.map(s => spawn(s)))
}
