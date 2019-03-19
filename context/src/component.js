import React, { Component } from 'react';

class MyComponent extends Component{
    render(){
        const { count, handler } = this.props; 

        return <div>
            Hello World { count }
            <button onClick={ handler }>Click Me!</button>
        </div>;
    }
}

class MySmartComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            counter: 0
        };
    }

    resetCounter(){
        this.setState({ counter: 0 });
    }

    componentDidMount(){
        setTimeout(() => this.setState({ counter: this.state.counter + 1 }), 1000);
    }

    render(){
        return <React.Fragment>
            <MyComponent counter={ this.state.counter } handler={ this.resetCounter.bind(this) } />
            <MyComponent counter={ this.state.counter } />
        </React.Fragment>

    }
}