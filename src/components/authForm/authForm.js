import React, { Component } from 'react';
import { Spring, animated } from 'react-spring/renderprops';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { InputAdornment, IconButton } from '@material-ui/core';
import Button from 'components/button/button';
import { $slate } from 'styles/colors';
import { disableHighlight } from 'styles/mixins';
import DataContext from 'components/data';

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
  input[type="text"] {
    width: 164px;
  }
  input[type="email"], input[type="tel"] {
    width: 343px;
  }
  input[type="password"], input[type="passwordtext"] {
    width: 299px;
  }
  & .MuiFormLabel-root.Mui-focused, .MuiFormLabel-filled {
    margin-top: 8px;
    color: ${({ primaryColor }) => primaryColor};
  }
  & .MuiInput-underline:after {
    border-bottom: ${({ primaryColor }) => `2px solid ${primaryColor}`};
  }
`;

const Title = styled.div`
  font-size: 20px;
`;

const NameInputs = styled.div`
  display: flex;
  justify-content: space-between;
  width: 343px;
`;

const AuthOptions = styled.div`
  font-size: 14px;
  text-align: center;
  margin-top: 8px;
  ${disableHighlight}
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
        {({ studioName, colors: { primary } }) => (
          <AuthFormWrapper primaryColor={primary}>
            <Title>{copy[mode].title}</Title>
            <Spring
              native
              to={{
                opacity: mode === 'signup' ? 1 : 0,
                height: mode === 'signup' ? 48 : 0,
                yPos: mode === 'signup' ? 0 : 48,
              }}
              config={(keys) => {
                switch (keys) {
                  case 'opacity':
                    return { mass: 1, tension: 720, friction: 24 };
                  default:
                    return { mass: 1, tension: 360, friction: 36 };
                }
              }}
            >
              {({ opacity, height, yPos }) => (
                <animated.div style={{ opacity, height, transform: yPos.interpolate(y => `translate3d(0px, ${y}px, 0px)`) }}>
                  <NameInputs>
                    <TextField
                      type="text"
                      name="firstName"
                      label="First Name"
                      value={formData.firstName}
                      onChange={this.handleChange('firstName')}
                    />
                    <TextField
                      type="text"
                      name="lastName"
                      label="Last Name"
                      value={formData.lastName}
                      onChange={this.handleChange('lastName')}
                    />
                  </NameInputs>
                </animated.div>
              )}
            </Spring>
            <TextField
              type="email"
              name="email"
              label="Email"
              value={formData.email}
              onChange={this.handleChange('email')}
            />
            <Spring
              native
              to={{
                opacity: mode === 'signup' || mode === 'login' ? 1 : 0,
                height: mode === 'signup' || mode === 'login' ? 48 : 0,
                yPos: mode === 'signup' || mode === 'login' ? 0 : -48,
              }}
              config={(keys) => {
                switch (keys) {
                  case 'opacity':
                    return { mass: 1, tension: 720, friction: 24 };
                  default:
                    return { mass: 1, tension: 360, friction: 36 };
                }
              }}
            >
              {({ opacity, height, yPos }) => (
                <animated.div style={{ opacity, height, transform: yPos.interpolate(y => `translate3d(0px, ${y}px, 0px)`) }}>
                  <TextField
                    type={showPassword ? 'passwordtext' : 'password'}
                    name="password"
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
                </animated.div>
              )}
            </Spring>
            <Spring
              native
              to={{
                opacity: mode === 'signup' ? 1 : 0,
                height: mode === 'signup' ? 48 : 0,
                yPos: mode === 'signup' ? 0 : -48,
              }}
              config={(keys) => {
                switch (keys) {
                  case 'opacity':
                    return { mass: 1, tension: 720, friction: 24 };
                  default:
                    return { mass: 1, tension: 360, friction: 36 };
                }
              }}
            >
              {({ opacity, height, yPos }) => (
                <animated.div style={{ opacity, height, transform: yPos.interpolate(y => `translate3d(0px, ${y}px, 0px)`) }}>
                  <TextField
                    type="tel"
                    name="phoneNumber"
                    label="Phone Number"
                    value={formData.phoneNumber}
                    onChange={this.handleChange('phoneNumber')}
                  />
                </animated.div>
              )}
            </Spring>
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
