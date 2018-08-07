import { FETCH_MENU, FETCH_MENU_SUCCESS, FETCH_MENU_FAILURE } from '../constants'
import { put, takeEvery, call } from 'redux-saga/effects'
import { apiMenu } from '../api';

function* fetchMenu(action) {
  try {
    const data = yield call(apiMenu);
    yield put({ type: FETCH_MENU_SUCCESS, data })
  } catch (error) {
    yield put({ type: FETCH_MENU_FAILURE })
  }
}

function* menuSaga () {
  yield takeEvery(FETCH_MENU, fetchMenu)
}

export default menuSaga;
