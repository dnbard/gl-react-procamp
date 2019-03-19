import React, { Component } from 'react';

// import DataContext from './context/data';
// import CounterProvider from './CounterProvider';
import Counter from './Counter';
import Header from './header';

import './App.css';

// const { Consumer } = DataContext;


class App extends Component {
  // static contextType = DataContext;

  render() {
    // const { context } = this;

    return (
      <div className="App">
        <Header />
        <Counter />
      </div>
    );
  }
}

export default App;
