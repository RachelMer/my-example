import React, {Component} from 'react';
import LoginForm from 'grommet/components/LoginForm';
import Anchor from 'grommet/components/Anchor';
import Axios from 'axios/dist/axios';
import { sessionService } from 'redux-react-session';

class Login extends Component {
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(fields) {
        let data = {
            email: fields.username,
            password: fields.password,
        };
        Axios({
            method: 'post',
            url: 'http://visio.cloud/api/v1/login',
            data: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json'
            }
        }).then(function (response) {
            /*sessionAuth.accountUUID = response.headers['-x-account-uuid'];
            sessionAuth.accesToken = response.headers['-x-access-token'];
            sessionService.saveSession(sessionAuth.accesToken);*/
        }).catch(function (error) {
            throw new Error (error);
        })
    }

    render() {
        return (
            <LoginForm onSubmit={this.onSubmit}
                       title="test_active@gmail.com"
                       secondaryText="TEST_@CTIV3"
                       forgotPassword={<Anchor href='#' label='Forgot password?'/>}
                       align="center"
            />
        )
    }
}

export default Login;
