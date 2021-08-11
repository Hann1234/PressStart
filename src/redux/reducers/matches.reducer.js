import { combineReducers } from 'redux';

//This reducer is used to store the matches returned from the server

const userMatches = (state = [], action) => {
    switch (action.type) {
        case 'SET_USER_MATCHES':
            return action.payload;
        default:
            return state;
    }
};

const otherMatches = (state = [], action) => {
    switch (action.type) {
        case 'SET_OTHER_MATCHES':
            return action.payload;
        default:
            return state;
    }
};
 
// matches will be on the redux state at:
// store.matches

// export default matchesReducer;

export default combineReducers({
    userMatches,
    otherMatches,
  });