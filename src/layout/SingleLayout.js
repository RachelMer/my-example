import React, {Component} from 'react';
import Box from 'grommet/components/Box';
import {Route} from 'react-router-dom';
import Login from '../components/public/Login';
import Register from '../components/public/Register';
import ForgotPassword from '../components/public/ForgotPassword';

class SingleLayout extends Component {

    render() {
        return (
            <Box align="center" full={true} justify="center" colorIndex="neutral-1">
                <Route exact path="/public/login" component={Login}/>
                <Route exact path="/public/register" component={Register}/>
                <Route exact path="/public/forgotPassword" component={ForgotPassword}/>
            </Box>
        )
    }
}
export default SingleLayout;