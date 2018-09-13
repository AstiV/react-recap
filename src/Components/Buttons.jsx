import React from "react";

const Buttons = ({ Add, Minus }) => (
    <div>
        <button onClick={Add}>+</button>
        <button onClick={Minus}>-</button>
    </div>
);

export default Buttons;
