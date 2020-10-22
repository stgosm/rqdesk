import React, { Component } from 'react';
import { AUTH_TOKEN } from '../constants';
import { gql, Mutation } from '@apollo/client';

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($userEmail: String!, $userPassword: String!, $userName: String!) {
    signup(userEmail: $userEmail, userPassword: $userPassword, userName: $userName) {
      token
    }
  }
`

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`

class Login extends Component {
  state = {
    login: true, // switch between Login and SignUp
    email: '',
    password: '',
    name: '',
  }

  render() {
    const { login, email, password, name } = this.state
    return (
      <div>
        <h4 className="mv3">{login ? 'Login' : 'Sign Up'}</h4>
        <div className="flex flex-column">
          {!login && (
            <input
              value={name}
              onChange={e => this.setState({ name: e.target.value })}
              type="text"
              placeholder="Your name"
            />
          )}
          <input
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
            type="text"
            placeholder="Your email address"
          />
          <input
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
            type="password"
            placeholder="Choose a safe password"
          />
        </div>
        <div className="flex mt3">
            <Mutation
                mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
                variables={{ email, password, name }}
                onCompleted={data => this._confirm(data)}
            >
                {mutation => (
                <div className="pointer mr2 button" onClick={mutation}>
                    {login ? 'login' : 'create account'}
                </div>
                )}
            </Mutation>
        </div>
      </div>
    )
  }

  _confirm = async () => {
    // ... you'll implement this 🔜
  }

  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token)
  }
}

export default Login