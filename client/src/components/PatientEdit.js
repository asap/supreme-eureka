import React from 'react';
import patients from '../apis/patients';

class PatientEdit extends React.Component {
  state = {
    patient: null,
  };

  fetchPatient = async id => {
    const response = await patients.get('/patients/' + id);
    console.log('response', response);
    if (response.status !== 200) throw Error('ERROR');

    return response.data.patient;
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    try {
      this.setState({ patient: await this.fetchPatient(id) });
    } catch (error) {
      console.error(error);
    }
  }

  renderNotFound() {
    return (
      <div className="ui container">
        <div className="ui negative message">
          <div className="header">Patient Not Found</div>
          <p>Sorry, we can't find this patient</p>
        </div>
      </div>
    );
  }

  render() {
    const { patient } = this.state;
    console.log('patient', patient);
    if (!patient) {
      return this.renderNotFound();
    }
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
                  value={patient.firstName}
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  value={patient.lastName}
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
              value={patient.age}
            />
          </div>
          <div className="field">
            <label>Email Address </label>
            <input
              type="text"
              name="email_address"
              placeholder="Email Address"
              value={patient.emailAddress}
            />
          </div>
          <div className="field">
            <label>Address </label>
            <input
              type="text"
              name="address"
              placeholder="Mailing Address"
              value={patient.address}
            />
          </div>
          <div className="extra content">
            <button className="ui button">Cancel</button>
            <button className="ui primary button">Save</button>
          </div>
        </form>
      </div>
    );
  }
}
export default PatientEdit;
