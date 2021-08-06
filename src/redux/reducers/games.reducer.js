//This reducer is used to store the games returned from the server

const gamesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_GAMES':
            return action.payload;
        default:
            return state;
    }
};
 
// games will be on the redux state at:
// state.games

export default gamesReducer;
  