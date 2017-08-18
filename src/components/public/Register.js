import React, {Component} from 'react';
import PropType from 'prop-types';
import Box from 'grommet/components/Box';
import Form from 'grommet/components/Form';
import Button from 'grommet/components/Button';
import FormField from 'grommet/components/FormField';
import Send from 'grommet/components/icons/base/Send';
import Heading from 'grommet/components/Heading';
import Axios from 'axios/dist/axios';
import DocumenTitle from 'react-document-title';

class Register extends Component {
    
    static isPrivate = false;
    
    constructor(props) {
        
        super(props);
        
        this._onSubmit = this._onSubmit.bind(this);
        this._onUsernameChange = this._onUsernameChange.bind(this);
        this._onPasswordChange = this._onPasswordChange.bind(this);
        this._onRepeatPasswordChange = this._onRepeatPasswordChange.bind(this);
        this._matchPasswords = this._matchPasswords.bind(this);
        
        this.state = {
            username: '',
            password: '',
            repeatPassword: ''
        };
        
        this.match = {
            psw1: '',
            psw2: ''
        }
    }
    
    componentDidMount() {
        this.userInput.focus();
    }
    
    _onSubmit(event) {
        event.preventDefault();
        
        let _state = this.state,
            username = _state.username,
            password = _state.password,
            repeatPassword = _state.repeatPassword;
        
        username.trim();
        
        let data = {
            email: username,
            password: password,
            repeatPassword: repeatPassword
        };
        
        Axios({
            method: 'post',
            url: 'http://visio.cloud/api/v1/register',
            data: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json'
            }
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            throw new Error(error);
        })
    }
    
    _onUsernameChange(event) {
        let username = event.target.value;
        this.setState({username: username});
    }
    
    _onPasswordChange(event) {
        this.match.psw1 = event.target.value;
        if (this._matchPasswords()) {
            console.log('match');
            this.setState({password: this.psw1});
        } else {
            console.log('not match');
        }
    }
    
    _onRepeatPasswordChange(event) {
        this.match.psw2 = event.target.value;
        if (this._matchPasswords()) {
            console.log('match');
            this.setState({repeatPassword: this.psw2});
        } else {
            console.log('not match');
        }
    }
    
    _matchPasswords() {
        if (this.match.psw1 === this.match.psw2) {
            return true
        } else {
            return false
        }
    }
    
    render() {
        return (
            <DocumenTitle title="Register Now">
                <Form plain={false} onSubmit={this._onSubmit}>
                    <Box colorIndex="light-1" wrap={true} pad="large">
                        <Box margin={{bottom: 'medium'}}>
                            <Heading align="center">
                                Register Form
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
                            <FormField label="Repeat password" htmlFor="Repeat password">
                                <input type="password" onChange={this._onRepeatPasswordChange}/>
                            </FormField>
                        </Box>
                        <Box margin={{vertical: 'small'}}>
                            <Button icon={<Send/>} primary={true} fill={true} label="Submit" type="submit"/>
                        </Box>
                    </Box>
                </Form>
            </DocumenTitle>
        )
    }
}

export default Register