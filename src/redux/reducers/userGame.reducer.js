//This reducer is used to store the user data, times selected, and game name of the game selected by the current user returned from the server

const userGameReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_USER_GAME':
            return action.payload;
        default:
            return state;
    }
};
 
// user game will be on the redux state at:
// store.userGame

export default userGameReducer;
  