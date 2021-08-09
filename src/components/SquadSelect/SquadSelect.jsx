import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';


function SquadSelect() {
    // this component is the squad selection screen for the user.
    const user = useSelector((store) => store.user);
    const otherUsers = useSelector((store) => store.userGame);
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();

    console.log('otherUsers', otherUsers);

    useEffect(() => {
        dispatch({ 
            type: 'FETCH_USERS',
            payload: {
                game_id: params.id
            } 
        });
    }, [params.id]); //need to include [params.id] here?

    // const handleClick = (gameID) => {
    //     history.push(`/timeselect/${gameID}`); // useParams to pass game id to time select page
    // }
    
    return (
    <div className="container">
        <h1>SELECT YOUR SQUAD</h1>
        {/* <p>{otherUsers.games.game_title}</p> */}
        {/* <section className="games">
            {games.map(game => {
                return (
                    <div key={game.id} >
                        <h3>{game.game_title}</h3>
                        <img onClick={() => handleClick(game.id)} src={game.game_cover} alt={game.game_title}/>
                    </div>
                );
            })} */}
        {/* </section> */}
    </div>
    );
}

export default SquadSelect;
