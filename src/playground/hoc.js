//Highet Order Component (HOC) - A component (HOC) that render another component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p> 
    </div>
};

ReactDOM.render(<Info info="this is the details" />, document.getElementById('app'));