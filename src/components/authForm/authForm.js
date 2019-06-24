import React, { Component } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from 'components/button/button';
import { $slate } from 'styles/colors';
import DataContext from 'components/data';
import { InputAdornment, IconButton } from '@material-ui/core';

const AuthFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px 0px;
  background: ${$slate};
  p {
    width: 350px;
    font-size: 12px;
    opacity: 0.7;
  }
`;

const Title = styled.div`
  font-size: 20px;
`;

const AuthOptions = styled.div`
  font-size: 14px;
  text-align: center;
  margin-top: 8px;
  div {
    line-height: 2;
  }
  span {
    margin-left: 4px;
    text-decoration: underline;
    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }
`;

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // mode options: `signup`, `login`, and `resetPw`
      mode: 'signup',
      showPassword: false,
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: '',
      },
      copy: {
        signup: {
          title: 'Sign up to take advantage of this offer!',
          buttonText: 'create account',
        },
        login: {
          title: 'Log in to take advantage of this offer!',
          buttonText: 'log in',
        },
        resetPw: {
          title: 'It\'s okay. We got you!',
          buttonText: 'reset password',
        },
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(key) {
    const { formData } = this.state;
    return event => (
      this.setState({
        formData: { ...formData, [key]: event.target.value },
      })
    );
  }

  render() {
    const {
      copy,
      mode,
      formData,
      showPassword,
    } = this.state;

    return (
      <DataContext.Consumer>
        {({ studioName }) => (
          <AuthFormWrapper>
            <Title>{copy[mode].title}</Title>
            <TextField
              type={showPassword ? 'text' : 'password'}
              label="Password"
              value={formData.password}
              onChange={this.handleChange('password')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      aria-label="toggle password visibility"
                      onClick={() => this.setState({ showPassword: !showPassword })}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              text={copy[mode].buttonText}
              style={{ margin: '16px 0px 0px' }}
            />
            {
              mode === 'signup' && (
                <p>
                  {`
                    By creating an account, I authorize ${studioName}
                    to create a MINDBODY account on my behalf,
                    which is used to schedule classes and add passes to my account.
                  `}
                </p>
              )
            }
            <AuthOptions>
              {
                mode === 'signup' && (
                  <>
                    Already have an account?
                    <span onClick={() => this.setState({ mode: 'login' })}>Log in</span>
                  </>
                )
              }
              {
                mode === 'login' && (
                  <>
                    <div>
                      Don&apos;t have an account?
                      <span onClick={() => this.setState({ mode: 'signup' })}>Make one!</span>
                    </div>
                    <div>
                      Forgot your password?
                      <span onClick={() => this.setState({ mode: 'resetPw' })}>Let&apos;s reset it!</span>
                    </div>
                  </>
                )
              }
              {
                mode === 'resetPw' && (
                  <>
                    <div>
                      Don&apos;t have an account?
                      <span onClick={() => this.setState({ mode: 'signup' })}>Make one!</span>
                    </div>
                    <div>
                      Remember your credentials?
                      <span onClick={() => this.setState({ mode: 'login' })}>Log in!</span>
                    </div>
                  </>
                )
              }
            </AuthOptions>
          </AuthFormWrapper>
        )}
      </DataContext.Consumer>
    );
  }
}

export default AuthForm;
