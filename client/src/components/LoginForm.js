import React from 'react';
import { UserContext } from './UserProvider';

import withUser from './withUser';

const onSubmit = (e, actions) => {
  e.preventDefault();
  const username = e.target.elements.username.value;
  const password = e.target.elements.password.value;
  actions.onLogin();
  // TODO: Should verify that login was successful
  console.log("redirect to where you need to be");
};

const LoginForm = props => {
  console.log('UserContext', UserContext);
  console.log('props', props);
  const { actions } = props;
  return (
    <div className="ui container segment">
      <form className="ui form" onSubmit={e=> onSubmit(e, actions)}>
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
};

export default withUser(LoginForm);
