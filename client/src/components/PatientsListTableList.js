import React from 'react';
import uuidv4 from 'uuid/v4';

import { Link } from 'react-router-dom';

const PatientsListTableList = props => {
  return (
    <table className="ui selectable striped celled table">
      <thead>
        <tr>
          <th>Patient</th>
          <th>Age</th>
          <th>Phone Number</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {props.patients.map(patient => (
          <tr key={uuidv4()}>
            <td>
              <Link to={`/patients/${patient.id}`}>
                {patient.firstName} {patient.lastName}
              </Link>
            </td>
            <td>{patient.age}</td>
            <td>{patient.phone}</td>
            <td>{patient.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PatientsListTableList;
