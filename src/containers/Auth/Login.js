import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";

import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { divide } from 'lodash';
import { languages } from '../../utils';
import { convertToObject } from 'typescript';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false
        }
    }

    handleOnChangeUsername = (event) => {
        this.setState({ username: event.target.value})
    }

    handleOnChangePassword = (event) => {
        this.setState({ password: event.target.value})
    }

    handleLogin = () => {
        console.log('User: ' , this.state.username)
        console.log('Password: ' , this.state.password)
    }

    handleShowHidePassword = () => {
        this.setState({ isShowPassword: !this.state.isShowPassword })
    }

    render() {
        //introducing JSX


        return (
            <div className="login-background">
                <div className="login-container">
                    <div className="login-content row">
                        <div className="col-12 text-center login-text">Login</div>
                        <div className="col-12 form-group login-input">
                            <label>Username:</label>
                            <input type="text" className="form-control" placeholder='Enter your username'
                            value={this.state.username}
                            onChange={(event) => this.handleOnChangeUsername(event)}
                            />
                        </div>
                        <div className="col-12 form-group login-input">
                            <label>Password:</label>
                            <div className='custom-input-password'>
                                <input type={this.state.isShowPassword ? "text" : "password"} className="form-control" placeholder='Enter your password'
                                value={this.state.password}
                                onChange={(event) => this.handleOnChangePassword(event)}
                                />
                                <span onClick={() => {this.handleShowHidePassword()}}>
                                    <i className={this.state.isShowPassword ? "fa fa-eye" : "fa fa-eye-slash"}></i>
                                </span>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className='btn-login' onClick={() => this.handleLogin()}>Login</button>
                        </div> 
                        <div className="col-12">
                            <span className='forgot-password'>Forgot your password?</span>
                        </div>
                        <div className="col-12 text-center  mt-3">
                            <span className='text-other-login'>Or Login with</span>
                        </div>
                        <div className='col-12 social-login'>
                            <i class="fab fa-google-plus google"></i>
                            <i className="fab fa-facebook-square facebook"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
        return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
