import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './UserProvider';
import patients from '../apis/patients';

import withAuth from './withAuth';
import withUser from './withUser';

class PatientDetail extends React.Component {
  static contextType = UserContext;
  state = {
    patient: null,
  };

  fetchPatient = async id => {
    const response = await patients.get('/patients/' + id);
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

  maybeRenderEditButton = id => {
    if (this.context.userType !== 'patient') {
      return;
    }
    return (
      <div className="extra content">
        <Link to={`/patients/${id}/edit`} className="ui button primary">
          Edit Patient Details
        </Link>
      </div>
    );
  };

  render() {
    const { patient } = this.state;
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
              <span className="email">{patient.email}</span>
            </div>
            <div className="description">
              <div className="ui list">
                <div className="item">
                  <i className="phone icon" />
                  <div className="content">{patient.phone}</div>
                </div>
                <div className="item">
                  <i className="marker icon" />
                  <div className="content">{patient.address}</div>
                </div>
              </div>
            </div>
          </div>
          {this.maybeRenderEditButton(patient.id)}
        </div>
      </div>
    );
  }
}

const ComponentWithAuth = withAuth({
  redirectLocation: '/',
})(PatientDetail);

export default withUser(ComponentWithAuth);
