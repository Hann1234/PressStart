import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_GAMES" actions
function* fetchGames() {
  try {
    const gamesResponse = yield axios.get('/api/games');
    console.log('get all:', gamesResponse.data);
    yield put({ type: 'SET_GAMES', payload: gamesResponse.data });
  } catch (error) {
    console.log('Games GET request failed', error);
  }
}

function* gamesSaga() {
  yield takeLatest('FETCH_GAMES', fetchGames);
}

export default gamesSaga;