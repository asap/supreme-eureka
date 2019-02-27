import React from 'react';
import { UserContext } from './UserProvider';

import withUser from './withUser';

class LoginForm extends React.Component {
  static contextType = UserContext;

  state = {
    showErrorMessage: false,
    message: '',
  };

  onSubmit = async (e, actions) => {
    e.preventDefault();
    console.log('submit props', this.props);
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    console.log('trying username', username);
    try {
      const user = await actions.onLogin(username, password);
      console.log('user', user);
      if (user && user.type) {
        if (user.type === 'patient') {
          // this.props.history.push('/patients/' + user.id);
          this.props.history.push('/patients/1');
        } else if (user.type === 'doctor') {
          this.props.history.push('/patients/');
        }
      }
    } catch (error) {
      console.log(error);
    }
    this.setState({
      showErrorMessage: true,
      message: 'Something is wrong with your username and password',
    });
  };

  renderMessage() {
    return (
      <div className="ui container">
        <div className="ui negative message">
          <div className="header">Sorry!</div>
          <p>{this.state.message}</p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="ui container segment">
        {this.state.showErrorMessage && this.renderMessage()}
        <form
          className="ui form"
          onSubmit={e => this.onSubmit(e, this.context.actions)}>
          <div className="ui field">
            <label>Email</label>
            <input type="text" name="username" />
          </div>
          <div className="ui field">
            <label>Password</label>
            <input type="password" name="password" />
          </div>
          <button className="ui button" type="submit">
            Log in
          </button>
        </form>
      </div>
    );
  }
}

export default withUser(LoginForm);
