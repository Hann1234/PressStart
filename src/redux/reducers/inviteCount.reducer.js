//This reducer is used to store the pending invite counts returned from the server

const inviteCountReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_INVITE_COUNT':
            return action.payload;
        default:
            return state;
    }
};
 
// inviteCount will be on the redux state at:
// store.inviteCount

export default inviteCountReducer;
  