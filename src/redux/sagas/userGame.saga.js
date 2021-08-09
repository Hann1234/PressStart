import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "ADD_USER_GAME" action

function* addUserGame(action) {
  try {
  //  yield axios.post('/api/usergame', action.payload); which is correct?
      yield call(axios.post, '/api/usergame', action.payload);
      // yield put({ type: 'FETCH_USER_GAME'})
  } catch (error) {
    console.log('Failed to add user game time.', error);
  }
}

// function* fetchUserGame(action) {
//   try {
//       const userGame = yield axios.get('/api/usergame', action.payload);
//       yield put({ type: 'SET_USER_GAME', payload: userGame.data})
//   } catch (error) {
//       console.log('unable to retrieve user game:', error);
//   }
// }

function* userGameSaga() {
  yield takeLatest('ADD_USER_GAME', addUserGame);
  // yield takeLatest('FETCH_USER_GAME', fetchUserGame);
}

export default userGameSaga;