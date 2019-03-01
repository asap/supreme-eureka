import React from 'react';
import patients from '../apis/patients';

export const UserContext = React.createContext({});

class UserProvider extends React.Component {
  state = {
    isLoggedIn: false,
    userType: '',
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

    if (response.status !== 200) throw Error('ERROR');

    return response.data.user;
  };

  handleLogin = async (username, password) => {
    try {
      const user = await this.authenticateUser(username, password);

      if (user) {
        this.setState({
          isLoggedIn: true,
          userType: user.type,
        });
      }
      return user;
    } catch (error) {
      throw new Error(error);
    }
  };

  handleLogout = () => this.setState({ userType: '', isLoggedIn: false });

  render() {
    const { isLoggedIn, userType } = this.state;
    const { children } = this.props;

    return (
      <UserContext.Provider
        value={{
          isLoggedIn,
          userType,
          actions: this.actions,
        }}>
        {children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
