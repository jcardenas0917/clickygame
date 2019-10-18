import React from 'react';
import "../styles/characters.css";
function Characters(props) {
    return (
        <div onClick={() => props.clickHero(props.hero.id)} className="characters">
            <img className="icons" id={props.hero.id} alt={props.hero.name} src={props.hero.image} />
        </div>
    );
}
export default Characters;