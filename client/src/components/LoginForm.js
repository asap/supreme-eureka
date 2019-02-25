import React from 'react';

const LoginForm = () => {
  return (
    <div className="ui container segment">
      <form className="ui form">
        <div className="ui field">
          <label>Email</label>
          <input type="text" />
        </div>
        <div className="ui field">
          <label>Password</label>
        <input type="password" />
        </div>
        <button class="ui button" type="submit">Log in</button>
      </form>
    </div>
  );
};

export default LoginForm;
