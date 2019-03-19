import React from 'react';

import CounterHOC from './CounterHOC';
import DataContext from './context/data';

function Counter({ counter, method, body }){
    return <div>
        HOC Updated Counter: { counter }
        <button onClick={ method }>increment</button>
        { body }
  </div>;
}

export default CounterHOC(DataContext)(Counter);
