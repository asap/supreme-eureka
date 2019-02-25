import React from 'react';
import uuidv4 from 'uuid/v4';

const PatientsList = props => {
  return (
    <div className="ui container segment">
      <div className="ui search">
        <input className="prompt" type="text" placeholder="Search patients..." />
      </div>
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
              {patient.firstName} {patient.lastName}
            </td>
            <td>
              {patient.age}
            </td>
            <td>
              {patient.phoneNumber}
            </td>
            <td>
              {patient.address}
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientsList;
