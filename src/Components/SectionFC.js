import React, { Component } from 'react';
import Button from './Button';

class Section extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }

    render() {
        return (
            <>
                <h1>Counter value is {this.state.counter}</h1>
                <Button />
                {/* <button>Increment</button> */}
            </>
        )
    }
}

export default Section;