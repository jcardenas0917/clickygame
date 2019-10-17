import React from 'react';
import "../styles/jumbotron.css";
function Jumbotron(props) {
    return (
        <div className="jumbotron">
            <img id="avengers" alt="logo" src="/logo.png" />
            <h1 className="jumbotext">{props.winner}</h1>
        </div>
    );
}
export default Jumbotron;