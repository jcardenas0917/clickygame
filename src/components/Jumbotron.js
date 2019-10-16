import React from 'react';
import "../styles/jumbotron.css";
function Jumbotron() {
    return (
        <div className="jumbotron">
            <h1 className="display-4 jumbotext" >Clicky Game!</h1>
            <p className="lead jumbotext">Click on an image to earn points, but don't click on any more than once!</p>

        </div>
    );
}
export default Jumbotron;