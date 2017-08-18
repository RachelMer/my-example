import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import {store, history} from "./store";
import throttle from 'lodash/throttle';
import {connect} from 'react-redux'

//Mock of an Auth method, can be replaced with an async call to the backend. Must return true or false
/*let isAuthenticated = false;*/

/*store.subscribe(throttle(
    function () {
        isAuthenticated = store.getState().session.authenticated;
    }, 1000
));*/

const AuthRoute = ({component, ...props}) => {
    
    let isAuthenticated = true;//props.authenticated;
    const PRIVATE_ROOT = '/private/';
    const PUBLIC_ROOT = '/public/login';
    
    const {isPrivate} = component;
    
    if (isAuthenticated) {
        //User is Authenticated
        if (isPrivate === true) {
            //If the route is private the user may proceed.
            return <Route {...props} component={component}/>;
        }
        else {
            //If the route is public, the user is redirected to the app's private root.
            return <Redirect to={PRIVATE_ROOT}/>;
        }
    }
    else {
        //User is not Authenticated
        if (isPrivate === true) {
            //If the route is private the user is redirected to the app's public root.
            return <Redirect to={PUBLIC_ROOT}/>;
        }
        else {
            //If the route is public, the user may proceed.
            return <Route {...props} component={component}/>;
        }
    }
};

const {element, func, bool} = PropTypes;

AuthRoute.propTypes = {
    component: PropTypes.oneOfType([
        element,
        func
    ]).isRequired,
    authenticated: PropTypes.bool
};

const mapStateToProps = (state) =>({
    authenticated : state.session.authenticated
});

export default AuthRoute