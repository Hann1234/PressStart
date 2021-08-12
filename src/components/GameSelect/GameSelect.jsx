import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';

//carousel imports
import { Carousel, CarouselItem, CarouselIndicators } from "reactstrap";

function GameSelect() {
    // this component is the game selection screen for the user.
    const games = useSelector((store) => store.games);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_GAMES' });
    }, []);

    const handleClick = (gameID) => {
        history.push(`/timeselect/${gameID}`); // useParams to pass game id to time select page
    }

    //carousel consts:

    const [activeIndex, setActiveIndex] = React.useState(0);
    const [animating, setAnimating] = React.useState(false);
    const onExiting = () => {
        setAnimating(true);
    };
    const onExited = () => {
        setAnimating(false);
    };
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };
    const goToIndex = newIndex => {
        if (animating) return;
        setActiveIndex(newIndex);
    };
        
    return (
        <>
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          <CarouselIndicators
            items={games}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {games.map(game => {
            return (
              <CarouselItem
                onExiting={onExiting}
                onExited={onExited}
                key={game.id}
              >
                <img onClick={() => handleClick(game.id)} src={game.game_cover} alt={game.game_title} />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{game.game_title}</h5>
                </div>
              </CarouselItem>
            );
          })}
          <a
            className="carousel-control-prev"
            data-slide="prev"
            href="#pablo"
            onClick={e => {
              e.preventDefault();
              previous();
            }}
            role="button"
          >
            <i className="now-ui-icons arrows-1_minimal-left"></i>
          </a>
          <a
            className="carousel-control-next"
            data-slide="next"
            href="#pablo"
            onClick={e => {
              e.preventDefault();
              next();
            }}
            role="button"
          >
            <i className="now-ui-icons arrows-1_minimal-right"></i>
          </a>
        </Carousel>
      </>
    );
}

export default GameSelect;

{/* <div className="container">
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
    </div> */}
