import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_GAMES" actions
function* fetchGames() {
  try {
    const gamesResponse = yield axios.get('/games');
    console.log('get all:', gamesResponse.data);
    yield put({ type: 'SET_GAMES', payload: gamesResponse.data });
  } catch (error) {
    console.log('Games GET request failed', error);
  }
}

function* gamesSaga() {
  yield takeEvery('FETCH_GAMES', fetchGames);
}

export default gamesSaga;