import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_MATCHES" actions
function* fetchMatches() {
  try {
    const userInvitesSentResponse = yield axios.get('/api/matches/sentinvites');
    console.log('get all sent invites:', userInvitesSentResponse.data);
    yield put({ type: 'SET_USER_MATCHES', payload: userInvitesSentResponse.data });
    
    const userInvitesReceivedResponse = yield axios.get('/api/matches/receivedinvites');
    console.log('get all received invites:', userInvitesReceivedResponse.data);
    yield put({ type: 'SET_OTHER_MATCHES', payload: userInvitesReceivedResponse.data });

  } catch (error) {
    console.log('Matches GET request failed', error);
  }
}

function* acceptInvite(action) {
    try {
        yield axios.put('/api/matches/accept', action.payload);
        console.log('in acceptInvite saga', action.payload);
        yield put({type: 'FETCH_MATCHES'});
      } catch (error) {
        console.log('Accept Invite PUT request failed', error);
      }
    }

function* deleteMatch(action) {
    try {
        yield axios.delete(`/api/matches/delete/${action.payload}`);
        console.log('delete saga payload', action.payload);
        yield put({ type: 'FETCH_MATCHES' });
    } catch (error) {
        console.log('unable to delete match:', error);
    }
}

function* matchesSaga() {
  yield takeLatest('FETCH_MATCHES', fetchMatches);
  yield takeLatest('DELETE_MATCH', deleteMatch);
  yield takeLatest('ACCEPT_INVITE', acceptInvite);
}

export default matchesSaga;