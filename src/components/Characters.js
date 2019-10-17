import React from 'react';
import "../styles/characters.css";
function Characters(props) {
    return (

        <div className="img-container">
            <span onClick={() => props.clickHero(props.id)} className="characters">
                <img id={props.id} alt={props.name} src={props.image} width="180" height="180" />
            </span>
        </div>

    );
}
export default Characters;