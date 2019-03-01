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
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;

    try {
      const user = await this.context.actions.onLogin(username, password);
      if (user && user.type) {
        // Redirect on log in
        if (user.type === 'patient') {
          this.props.history.push('/patients/' + user.id);
        } else if (user.type === 'doctor') {
          this.props.history.push('/patients/');
        }

        return;
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
        <form className="ui form" onSubmit={e => this.onSubmit(e)}>
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
