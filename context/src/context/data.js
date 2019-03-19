import React, { createContext } from 'react';

import logo from '../logo.svg';

export default createContext({
    logo,
    description: 'logo',
    href: 'https://reactjs.org',
    body: 'Learn React',
    counter: 0,
    header: <p>Edit <code>src/App.js</code> and save to reload. </p>
});