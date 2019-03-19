import React, { Component } from 'react';

import CounterHOC from './CounterHOC';
import DataContext from './context/data';

function HeaderComponent ({ logo, header, href, body, counter }){
    return <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        { header }
        <a  className="App-link"
            href={ href }
            target="_blank"
            rel="noopener noreferrer">
            { body }
        </a>
        Counter: { counter }
    </header>;
}

export default CounterHOC(DataContext)(HeaderComponent);
