import React from 'react';
import { Link } from 'react-router-dom';
import patients from '../apis/patients';

import withAuth from './withAuth';
import withUser from './withUser';

class PatientEdit extends React.Component {
  state = {
    id: '',
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    address: '',
  };

  fetchPatient = async id => {
    const response = await patients.get('/patients/' + id);
    if (response.status !== 200) throw Error('ERROR');

    return response.data.patient;
  };

  updatePatient = async (id, body) => {
    const response = await patients.put('/patients/' + id, body);
    if (response.status !== 200) throw Error('ERROR');

    return response.data.patient;
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    try {
      const patient = await this.fetchPatient(id);
      this.setState({ ...patient });
    } catch (error) {
      console.error(error);
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    try {
      await this.updatePatient(this.state.id, this.state);
      this.props.history.push(`/patients/${this.state.id}`);
    } catch (error) {
      console.error(error);
    }
  };

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
    if (!this.state.email) {
      return this.renderNotFound();
    }

    const { firstName, lastName, age, email, address } = this.state;

    return (
      <div className="ui container segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="ui dividing header">Patient Information</div>
          <div className="field">
            <label>Name</label>
            <div className="two fields">
              <div className="field">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  value={firstName}
                  onChange={e => this.setState({ firstName: e.target.value })}
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={e => this.setState({ lastName: e.target.value })}
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
              value={age}
              onChange={e => this.setState({ age: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email Address </label>
            <input
              type="text"
              name="email_address"
              placeholder="Email Address"
              value={email}
              onChange={e => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Address </label>
            <input
              type="text"
              name="address"
              placeholder="Mailing Address"
              value={address}
              onChange={e => this.setState({ address: e.target.value })}
            />
          </div>
          <div className="extra content">
            <Link to={`/patients/${this.state.id}`} className="ui button">
              Cancel
            </Link>
            <button className="ui primary button">Save</button>
          </div>
        </form>
      </div>
    );
  }
}

const ComponentWithAuth = withAuth({
  redirectLocation: '/'
})(PatientEdit);

export default withUser(ComponentWithAuth);
