import React from "react";

const Buttons = props => {
    return (
        <div>
            <button onClick={props.Add}>+</button>
            <button onClick={props.Minus}>-</button>
        </div>
    );
};

export default Buttons;
