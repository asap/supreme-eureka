import React from 'react';
import { UserContext } from './UserProvider';

import withUser from './withUser';

class LoginForm extends React.Component {
  // TODO: maybe needs to be a controlled component
  // to throw error if login fails?
  // console.log('UserContext', UserContext);
  // console.log('props', props);
  // const { actions } = props;
  static contextType = UserContext;

  componentDidMount() {}

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
        if (user.id && user.type === 'patient') {
          this.props.history.push('/patients/' + user.id);
        } else if (user.type === 'doctor') {
          this.props.history.push('/patients/');
        }
      } 
    } catch (error) {
      // TODO: Render error
      console.error("can't log in", error);
    }
  };

  render() {
    return (
      <div className="ui container segment">
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
