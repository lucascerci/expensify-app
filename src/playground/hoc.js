//Highet Order Component (HOC) - A component (HOC) that render another component
//Reuse code
//Render hijacking
//prop manipulation
//abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p> 
    </div>
);


const withAdminWarning = (WrappedComponent) => {
    return (props) => (    
        <div>
            {props.isAdmin && <p>this is private info. Please dont share!</p>}
            <WrappedComponent {...props} />
        </div>
    );
};


const requireAuthentication = (WrappedComponent) => {
    return (props) => (    
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props}/>
            ) : (
                <p>Please login to view de info</p>
            )};
        </div>
    );
};


const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="There are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the details" />, document.getElementById('app'));