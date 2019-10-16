import React from 'react';
import "../styles/navbar.css";
function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-primary fixed-top">
            <div className="col-1"></div>
            <div className="col-3">
                <strong><h2 className="navtext">Clicky Game</h2></strong>
            </div>
            <div className="col-4">
                <h3 className="navtext">Click an image to begin!</h3>
            </div>
            <div className="col-4">
                <h2 className="navtext">Score:{} | Top Score: {}</h2>
            </div>
        </nav>
    );
}
export default Navbar;