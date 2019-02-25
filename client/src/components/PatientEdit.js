import React from 'react';

const PatientEdit = props => {
  return (
    <div className="ui container segment">
      <form className="ui form">
        <div className="ui dividing header">Patient Information</div>
        <div className="field">
          <label>Name</label>
          <div className="two fields">
            <div className="field">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                value={props.patient.firstName}
              />
            </div>
            <div className="field">
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={props.patient.lastName}
              />
            </div>
          </div>
        </div>
        <div className="two wide field">
          <label>Age</label>
          <input
            type="text"
            name="age"
            placeholder="Age"
            value={props.patient.age}
          />
        </div>
        <div className="field">
          <label>Email Address </label>
          <input
            type="text"
            name="email_address"
            placeholder="Email Address"
            value={props.patient.emailAddress}
          />
        </div>
        <div className="field">
          <label>Address </label>
          <input
            type="text"
            name="address"
            placeholder="Mailing Address"
            value={props.patient.Address}
          />
        </div>
        <div className="extra content">
          <button className="ui button">Cancel</button>
          <button className="ui primary button">Save</button>
        </div>
      </form>
    </div>
  );
};
export default PatientEdit;
