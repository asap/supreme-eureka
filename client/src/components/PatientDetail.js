import React from 'react';
import patients from '../apis/patients';

class PatientDetail extends React.Component {
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
        <div className="ui centered card">
          <div className="content">
            <div className="right floated meta">Age: {patient.age}</div>
            <h1 className="header">
              {patient.firstName} {patient.lastName}
            </h1>
          </div>
          <div className="content">
            <div className="meta">
              <span className="email">{patient.emailAddress}</span>
            </div>
            <div className="description">
              <div className="ui list">
                <div className="item">
                  <i className="phone icon" />
                  <div className="content">{patient.phoneNumber}</div>
                </div>
                <div className="item">
                  <i className="marker icon" />
                  <div className="content">{patient.address}</div>
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
  }
}

export default PatientDetail;
