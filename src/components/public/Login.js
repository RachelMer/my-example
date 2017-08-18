import React, {Component} from 'react';
import PropType from 'prop-types';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Edit from 'grommet/components/icons/base/Edit'
import Form from 'grommet/components/Form';
import Button from 'grommet/components/Button';
import FormField from 'grommet/components/FormField';
import Send from 'grommet/components/icons/base/Send';
import Heading from 'grommet/components/Heading';
import CheckBox from 'grommet/components/CheckBox';
import Axios from 'axios/dist/axios';
import {accountUuid, accessToken, authenticated} from '../../actions/session';
import {store} from "../../store";
import DocumenTitle from 'react-document-title';

class Login extends Component {
    
    static isPrivate = false;
    
    constructor(props) {
        
        super(props);
        
        this._onSubmit = this._onSubmit.bind(this);
        this._onUsernameChange = this._onUsernameChange.bind(this);
        this._onPasswordChange = this._onPasswordChange.bind(this);
        this._onRememberMeChange = this._onRememberMeChange.bind(this);
        
        this.state = {
            username: '',
            password: '',
            rememberMe: false
        }
    }
    
    componentDidMount() {
        this.userInput.focus();
    }
    
    _onSubmit(event) {
        event.preventDefault();
        
        let _state = this.state,
            username = _state.username,
            password = _state.password;
        
        username.trim();
        
        let data = {
            email: username,
            password: password
        };
        
        Axios({
            method: 'post',
            url: 'http://samplesite.com/login',
            data: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json'
            }
        }).then(function (response) {
            console.log(response);
            store.dispatch(accountUuid(response.headers['-x-account-uuid']));
            store.dispatch(accessToken(response.headers['-x-access-token']));
            store.dispatch(authenticated(true));
        }).catch(function (error) {
            console.log(error);
            throw new Error(error);
        })
    }
    
    _onUsernameChange(event) {
        let username = event.target.value;
        this.setState({username: username});
    }
    
    _onPasswordChange(event) {
        let password = event.target.value;
        this.setState({password: password});
    }
    
    _onRememberMeChange(event) {
        let rememberMe = event.target.checked;
        this.setState({rememberMe: rememberMe});
    }
    
    render() {
        return (
            <DocumenTitle title="Login Page">
                <Form plain={false} onSubmit={this._onSubmit}>
                    <Box colorIndex="light-1" wrap={true} pad="large">
                        <Box margin={{bottom: 'medium'}}>
                            <Heading align="center">
                                Login Form
                            </Heading>
                        </Box>
                        <Box margin={{bottom: 'small'}}>
                            <FormField label="E-mail" htmlFor="E-mail">
                                <input ref={(input) => {
                                    this.userInput = input
                                }} type="text" onChange={this._onUsernameChange}/>
                            </FormField>
                            <FormField label="Password" htmlFor="Password">
                                <input type="password" onChange={this._onPasswordChange}/>
                            </FormField>
                        </Box>
                        <Box margin={{vertical: 'small'}}>
                            <CheckBox name="rememberMe" label="Remember Me" onChange={this._onRememberMeChange}/>
                        </Box>
                        <Box margin={{vertical: 'small'}}>
                            <Button icon={<Send/>} primary={true} fill={true} label="Submit" type="submit"/>
                        </Box>
                        <Box margin={{top: 'small'}}>
                            <Anchor label="Forgot password?" path="/public/forgotPassword"
                                    a11yTitle="Recover Password"/>
                        </Box>
                        <Box margin={{top: 'medium'}} pad={{vertical: 'small'}} align="center" separator="horizontal">
                            <Anchor label="Not registered yet?" align="start" path="/public/register"
                                    a11yTitle="Sign Up"
                                    icon={<Edit/>} animateIcon={true}/>
                        </Box>
                    </Box>
                </Form>
            </DocumenTitle>
        )
    }
}


export default Login