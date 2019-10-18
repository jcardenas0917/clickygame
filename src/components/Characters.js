import React from 'react';
import "../styles/characters.css";
function Characters(props) {
    return (
        <div onClick={() => props.clickHero(props.id)} className="characters">
            <img class="icons" id={props.id} alt={props.name} src={props.image} />
        </div>
    );
}
export default Characters;