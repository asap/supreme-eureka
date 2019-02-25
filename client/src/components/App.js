import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import PatientsList from './PatientsList';
import PatientDetail from './PatientDetail';
import PatientEdit from './PatientEdit';
import LoginForm from './LoginForm';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div className="ui container">
          <Header />
          <Switch>
            <Route path="/" exact component={LoginForm} />
            <Route path="/patients/" exact component={PatientsList} />
            <Route path="/patients/:id" exact component={PatientDetail} />
            <Route path="/patients/edit/:id" exact component={PatientEdit} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
