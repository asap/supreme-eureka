import React from 'react';
import patients from '../apis/patients';

export const UserContext = React.createContext({});

class UserProvider extends React.Component {
  state = {
    isLoggedIn: false,
  };

  get actions() {
    return {
      onLogin: this.handleLogin,
      onLogout: this.handleLogout,
    };
  }

  authenticateUser = async (username, password) => {
    const response = await patients.post('/users/login', {
      username,
      password,
    });
    console.log('response', response);
    if (response.status !== 200) throw Error('ERROR');

    return response.data.user;
  };

  handleLogin = async (username, password) => {
    console.log('logging in user', username);
    try {
      const user = await this.authenticateUser(username, password);
      console.log('found user', user);

      if (user) {
        this.setState({
          user,
          isLoggedIn: true,
        });
      }
      return user;
    } catch (error) {
      throw new Error(error);
    }
  };
  // TODO: Should kill session on server
  handleLogout = () => this.setState({ user: null, isLoggedIn: false });

  render() {
    const { isLoggedIn } = this.state;
    const { children } = this.props;
    console.log("this.props", this.props);

    return (
      <UserContext.Provider
        value={{
          isLoggedIn,
          actions: this.actions,
        }}>
        {children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
