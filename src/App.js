import React from "react";
import Number from "./Components/Number";
import Buttons from "./Components/Buttons";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            number: 0
        };

        // this._Add = this._Add.bind(this) => Don't need it if using arrow function in method
    }

    _Add = () => {
        this.setState({
            number: this.state.number + 1
        });
    };

    _Minus = () => {
        this.setState({
            number: this.state.number - 1
        });
    };

    render() {
        // let hello = "Hello World"
        return (
            <div>
                <h1>Hello World</h1>
                {/* <h2>{this.state.number}</h2> */}
                <Number number={this.state.number} />
                <Buttons Add={this._Add} Minus={this._Minus} />
                {/* <button onClick={this._Add}>+</button>
                <button onClick={this._Minus}>-</button> */}
            </div>
        );
    }
}

export default App;
