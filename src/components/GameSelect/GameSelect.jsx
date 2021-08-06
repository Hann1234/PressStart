import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';


function GameSelect() {
    // this component is the game selection screen for the user.
    const games = useSelector((store) => store.games);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_GAMES' });
    }, []);

    const handleClick = () => {
        history.push(`/timeselect/${gamesID}`);
    }
    
    return (
    <div className="container">
        <h1>SELECT YOUR GAME</h1>
        <section className="games">
            {games.map(game => {
                return (
                    <div key={game.id} >
                        <h3>{game.game_title}</h3>
                        <img onClick={() => handleClick(game.id)} src={game.game_cover} alt={game.game_title}/>
                    </div>
                );
            })}
        </section>
    </div>
    );
}

// this allows us to use <App /> in index.js
export default GameSelect;

// onClick={() => handleClick()}
