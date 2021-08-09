import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "EDIT_PROFILE" actions
function* editProfile(action) {
  try {
    yield axios.put('/api/user/edit', action.payload);
    console.log('in edit profile');
    yield put({type: 'UPDATE_USER'});
  } catch (error) {
    console.log('Edit Profile PUT request failed', error);
  }
}

function* editProfileSaga() {
  yield takeLatest('EDIT_PROFILE', editProfile);
}

export default editProfileSaga;