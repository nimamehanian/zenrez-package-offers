import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Spring, animated } from 'react-spring/renderprops';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { InputAdornment, IconButton } from '@material-ui/core';
import Button from 'components/button/button';
import { $slate } from 'styles/colors';
import { disableHighlight } from 'styles/mixins';

const LOGIN_MUTATION = gql`
  mutation {
    serviceLandingLogin(studioId: $studioId, username: $studioId, password: $studioId) {
      accessToken
    }
  }
`;

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
      mode: 'login',
      showPassword: false,
      formData: {
        studioId: 'mbo|743',
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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.resetPassword = this.resetPassword.bind(this);
  }

  handleChange(key) {
    const { formData } = this.state;
    return event => (
      this.setState({
        formData: { ...formData, [key]: event.target.value },
      })
    );
  }

  signup() {
    const {
      formData: {
        studioId,
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
      },
    } = this.state;
    console.log(`SIGNUP: ${studioId} :: ${firstName} :: ${lastName} :: ${email} :: ${password} :: ${phoneNumber}`);
  }

  login() {
    // const { mutate } = this.props;
    const { formData: { studioId, email, password } } = this.state;
    console.log(`LOGIN: ${studioId} : ${email} : ${password}`);
  }

  resetPassword() {
    const { formData: { email } } = this.state;
    console.log(`RESET PASSWORD: ${email}`);
  }

  handleSubmit(mutation) {
    console.log('mutation', mutation);
    mutation();
    const { mode } = this.state;
    switch (mode) {
      case 'signup':
        this.signup();
        break;
      case 'login':
        this.login();
        break;
      case 'resetPw':
        this.resetPassword();
        break;
      default:
        break;
    }
  }

  render() {
    const {
      copy,
      mode,
      formData: {
        studioId,
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
      },
      showPassword,
    } = this.state;

    const { studioName, primaryColor } = this.props;

    return (
      <AuthFormWrapper primaryColor={primaryColor}>
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
                  value={firstName}
                  onChange={this.handleChange('firstName')}
                />
                <TextField
                  type="text"
                  name="lastName"
                  label="Last Name"
                  value={lastName}
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
          value={email}
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
                value={password}
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
                value={phoneNumber}
                onChange={this.handleChange('phoneNumber')}
              />
            </animated.div>
          )}
        </Spring>
        <Mutation
          mutation={LOGIN_MUTATION}
          variables={{ studioId, email, password }}
          onCompleted={data => console.log('DATA:', data)}
        >
          {(mutation) => {
            return (
              <Button
                onClickHandler={() => this.handleSubmit(mutation)}
                text={copy[mode].buttonText}
                primaryColor={primaryColor}
                style={{ margin: '16px 0px 0px' }}
              />
            );
          }}
        </Mutation>
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
    );
  }
}

export default AuthForm;
