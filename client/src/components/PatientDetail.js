import React from 'react';

const PatientDetail = props => {
  return (
    <div className="ui container segment">
      <div className="ui centered card">
        <div className="content">
          <div class="right floated meta">Age: {props.patient.age}</div>
          <h1 className="header">
            {props.patient.firstName} {props.patient.lastName}
          </h1>
        </div>
        <div className="content">
          <div className="meta">
            <span className="email">{props.patient.emailAddress}</span>
          </div>
          <div className="description">
            <div className="ui list">
              <div className="item">
                <i className="phone icon" />
                <div className="content">{props.patient.phoneNumber}</div>
              </div>
              <div className="item">
                <i className="marker icon" />
                <div className="content">{props.patient.address}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="extra content">
          <button className="ui primary button">Edit Patient Details</button>
        </div>
      </div>
    </div>
  );
};

export default PatientDetail;
