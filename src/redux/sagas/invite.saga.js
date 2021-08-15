import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//import sweetalert2:
import Swal from 'sweetalert2';

// worker Saga: will be fired on "CREATE_INVITE" action

function* createInvite(action) {
    console.log('action inside post sage', action);
  try {
      yield axios.post('/api/matches/invite', action.payload);
      console.log('action.payload in post saga', action.payload);
      Swal.fire('Invite has been sent!');
  } catch (error) {
    console.log('Failed to create invite.', error);
  }
}

function* inviteCount() {
  try {
    const inviteCountResponse = yield axios.get('/api/matches/count');
    console.log('get invite count:', inviteCountResponse.data);
    yield put({ type: 'SET_INVITE_COUNT', payload: inviteCountResponse.data });
  } catch (error) {
    console.log('invite count request failed', error);
  }
}

function* inviteSaga() {
  yield takeLatest('CREATE_INVITE', createInvite);
  yield takeLatest('FETCH_INVITE_COUNT', inviteCount);
}

export default inviteSaga;