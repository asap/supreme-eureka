import React from 'react';
import { Link } from 'react-router-dom';
import patients from '../apis/patients';
import uuidv4 from 'uuid/v4';

import withAuth from './withAuth';
import withUser from './withUser';

const SearchBar = props => {
  return (
    <div className="ui search">
      <input
        className="prompt"
        type="text"
        placeholder="Search patients..."
        value={props.searchTerm}
        onChange={props.onUpdateSearchTerm}
      />
    </div>
  );
};

const TableList = props => {
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

class PatientsList extends React.Component {
  state = {
    searchTerm: '',
    patients: [],
    filteredPatients: [],
  };

  fetchPatients = async () => {
    const response = await patients.get('/patients');
    if (response.status !== 200) throw Error('ERROR');

    return response.data.patients;
  };

  handlePatientFilter = term => {
    const filteredPatients = this.state.patients.filter(patient => {
      return (
        patient.firstName.toLowerCase().includes(term.toLowerCase()) ||
        patient.lastName.toLowerCase().includes(term.toLowerCase())
      );
    });
    this.setState({ searchTerm: term, filteredPatients });
  };

  async componentDidMount() {
    try {
      const patients = await this.fetchPatients();
      this.setState({ patients, filteredPatients: patients });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div className="ui container segment">
        <SearchBar
          searchTerm={this.state.searchTerm}
          onUpdateSearchTerm={e => this.handlePatientFilter(e.target.value)}
        />
        <TableList patients={this.state.filteredPatients} />
      </div>
    );
  }
}

const ComponentWithAuth = withAuth({
  redirectLocation: '/'
})(PatientsList);

export default withUser(ComponentWithAuth);
