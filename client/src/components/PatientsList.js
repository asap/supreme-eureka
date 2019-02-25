import React from 'react';
import patients from '../apis/patients';
import uuidv4 from 'uuid/v4';

class PatientsList extends React.Component {
  state = {
    patients: [],
  };

  fetchPatients = async () => {
    const response = await patients.get('/patients');
    if (response.status !== 200) throw Error('ERROR');

    return response.data.patients;
  };
  async componentDidMount() {
    try {
      this.setState({ patients: await this.fetchPatients() });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div className="ui container segment">
        <div className="ui search">
          <input
            className="prompt"
            type="text"
            placeholder="Search patients..."
          />
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
            {this.state.patients.map(patient => (
              <tr key={uuidv4()}>
                <td>
                  {patient.firstName} {patient.lastName}
                </td>
                <td>{patient.age}</td>
                <td>{patient.phoneNumber}</td>
                <td>{patient.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PatientsList;
