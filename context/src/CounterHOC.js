import React, { Component } from 'react';

export default function createMyHOC(Context){
    const { Provider, Consumer } = Context;
    
    return function(WrappedComponent){
        return class MyHOCComponent extends Component{
            static contextType = Context;

            constructor(props){
                super(props);
    
                this.state = { counter: 0 };
                this.increment = this.increment.bind(this);
            }
    
            increment(){
                this.setState({ counter: this.state.counter + 1 });
            }
    
            render(){
                const { context } = this;

                return <Provider value={{
                        counter: this.state.counter,
                        method: this.increment
                    }}>
                    <Consumer >
                        { newContext => <WrappedComponent { ...this.props } { ...context } {...newContext} /> }
                    </Consumer>
                </Provider>;
            }
        }
    }
}