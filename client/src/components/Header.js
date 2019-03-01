import React from 'react';
import { Link } from 'react-router-dom';

import withUser from './withUser';

const doctorAdminButtons = () => (
  <>
    <Link to="/patients" className="item">
      Patients List
    </Link>
  </>
);

const loggedInButtons = actions => (
  <>
    <Link to="" onClick={actions.onLogout} className="red active item">
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
  const { userType, isLoggedIn, actions } = props;
  let doctorButtons;
  let buttons;
  if (isLoggedIn) {
    buttons = loggedInButtons(actions);
  } else {
    buttons = loggedOutButtons(actions);
  }
  if (userType === 'doctor') {
    doctorButtons = doctorAdminButtons();
  }
  return (
    <div className="ui secondary menu">
      {buttons}
      {doctorButtons}
    </div>
  );
};

export default withUser(Header);
