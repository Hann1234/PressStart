import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_MATCHES" actions
function* fetchMatches() {
  try {
    const matchesResponse = yield axios.get('/api/matches/get');
    console.log('get all matches:', matchesResponse.data);
    yield put({ type: 'SET_MATCHES', payload: matchesResponse.data });
  } catch (error) {
    console.log('Matches GET request failed', error);
  }
}

function* matchesSaga() {
  yield takeLatest('FETCH_MATCHES', fetchMatches);
}

export default matchesSaga;