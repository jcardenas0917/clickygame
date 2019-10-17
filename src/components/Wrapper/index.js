import React from "react";
import "./style.css";

function Wrapper(props) {
    return (
        <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
                <div className="wrapper">{props.children}</div>
            </div>
        </div>
    )


}

export default Wrapper;
