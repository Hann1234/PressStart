import axios from 'axios';
import { call, takeLatest } from 'redux-saga/effects';

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

function* inviteSaga() {
  yield takeLatest('CREATE_INVITE', createInvite);
}

export default inviteSaga;