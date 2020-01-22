import {
  call,
  put,
  takeEvery,
  takeLatest,
  select
} from 'redux-saga/effects'
import C from '../constants/constants'
import {
  request,
  changeToken
} from '../actions/actions'

export const getProject = (state) => state.password

function* getApiData() {
  try {
    // отсюда будет отправляться пароль и логин
    const state = yield select(); // получаем состояние из store для отправки
    console.log(state)
    const data = yield fetch("http://localhost:3000/tokens/1")
      .then(res => res.json())
    yield put(changeToken(data))
    localStorage['token'] = JSON.stringify(data)
  } catch (e) {
    console.log(e)
  }
}

export default function* mySagas() {
  yield takeEvery(C.REQUESTED, getApiData)
}