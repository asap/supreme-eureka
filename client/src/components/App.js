import React from 'react';
import PatientsList from './PatientsList';
import PatientDetail from './PatientDetail';
import PatientEdit from './PatientEdit';
import LoginForm from './LoginForm';
import faker from 'faker';

const patients = [...Array(10)].map((_, i) => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  age: faker.random.number({min:21, max:80}),
  emailAddress: faker.internet.exampleEmail(),
  phoneNumber: faker.phone.phoneNumberFormat(1),
  address: faker.address.streetAddress("###"),
}));

const App = () => {
  return <div><LoginForm /></div>;
  // return <div><PatientsList patients={patients}/></div>;
  // return <div><PatientDetail patient={patients[3]}/></div>;
  // return <div><PatientEdit patient={patients[3]}/></div>;
};

export default App;
