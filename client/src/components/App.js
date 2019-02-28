import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserProvider from './UserProvider';
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
          <UserProvider>
            <Header />
            <Switch>
              <Route path="/" exact component={LoginForm} />
              <Route path="/patients/" exact component={PatientsList} />
              <Route path="/patients/:id" exact component={PatientDetail} />
              <Route path="/patients/:id/edit" exact component={PatientEdit} />
            </Switch>
          </UserProvider>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
