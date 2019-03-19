import React, { Component } from 'react';

import DataContext from './context/data';

const { Provider } = DataContext;

export default class CounterProvider extends Component{
    constructor(...args){
        super(...args);

        this.state = { counter: 0 };

        this.increment = this.increment.bind(this);
    }

    increment(){
        this.setState({ counter: this.state.counter + 1 });
    }

    render(){
        return <Provider value={{ counter: this.state.counter, method: this.increment }}>
            { this.props.children }
        </Provider>;
    }
}
