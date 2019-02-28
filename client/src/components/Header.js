import React from 'react';
import { Link } from 'react-router-dom';

import withUser from './withUser';

const loggedInButtons = actions => (
  <>
    <Link to="/patients" className="item">
      Patients List
    </Link>
    <Link to="/patients/:id" className="item">
      Patients Detail
    </Link>
    <Link to="/patients/:id/edit" className="item">
      Edit Patient
    </Link>
    <Link to="" onClick={actions.onLogout} className="item">
      Log Out
    </Link>
  </>
);

const loggedOutButtons = actions => (
  <>
    <Link to="/" className="item">
      Home
    </Link>
  </>
);

const Header = props => {
  console.log('props', props);
  const { isLoggedIn, actions } = props;
  let buttons;
  if (isLoggedIn) {
    buttons = loggedInButtons(actions);
  } else {
    buttons = loggedOutButtons(actions);
  }
  return <div className="ui secondary pointing menu">{buttons}</div>;
};

export default withUser(Header);
