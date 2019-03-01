import React from 'react';
import PatientsListSearchBar from './PatientsListSearchBar';
import PatientsListTableList from './PatientsListTableList';
import patients from '../apis/patients';

import withAuth from './withAuth';
import withUser from './withUser';

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
        <PatientsListSearchBar
          searchTerm={this.state.searchTerm}
          onUpdateSearchTerm={e => this.handlePatientFilter(e.target.value)}
        />
        <PatientsListTableList patients={this.state.filteredPatients} />
      </div>
    );
  }
}

const ComponentWithAuth = withAuth({
  redirectLocation: '/',
})(PatientsList);

export default withUser(ComponentWithAuth);
