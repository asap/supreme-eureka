import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Home
      </Link>
      <Link to="/patients" className="item">
        Patients List
      </Link>
      <Link to="/patients/1" className="item">
        Patients Detail
      </Link>
      <Link to="/patients/edit/1" className="item">
        Edit Patient
      </Link>
    </div>
  );
};

export default Header;
