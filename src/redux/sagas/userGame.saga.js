import axios from 'axios';
import { takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "ADD_USER_GAME" action

function* addUserGame(action) {
  try {
   yield axios.post('/api/usergame', action.payload);
   yield put({ type: 'SER_USER_GAME'})
  } catch (error) {
    console.log('Failed to add user game time.', error);
  }
}

function* userGameSaga() {
  yield takeEvery('ADD_USER_GAME', addUserGame);
}

export default userGameSaga;