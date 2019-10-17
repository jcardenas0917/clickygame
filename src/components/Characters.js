import React from 'react';
import "../styles/characters.css";
function Characters(props) {
    return (

        <div className="img-container">
            <img id={props.id} alt={props.name} src={props.image} width="180" height="180" />
        </div>

    );
}
export default Characters;