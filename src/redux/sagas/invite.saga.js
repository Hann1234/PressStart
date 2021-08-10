import axios from 'axios';
import { call, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "CREATE_INVITE" action

function* createInvite(action) {
    console.log('action inside post sage', action);
  try {
  //  yield axios.post('/api/matches', action.payload); which is correct?
      yield call(axios.post, '/api/matches', action.payload);
      console.log('action.payload in post saga', action.payload);
      alert('Invite has been sent');
  } catch (error) {
    console.log('Failed to create invite.', error);
  }
}

function* inviteSaga() {
  yield takeLatest('CREATE_INVITE', createInvite);
}

export default inviteSaga;