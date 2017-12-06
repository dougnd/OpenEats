import AuthConstants from '../constants/AuthConstants'

const status = (state = { token: null }, action) => {
  switch (action.type) {
    case AuthConstants.LOGIN_USER:
      const user = JSON.stringify(action.user);
      localStorage.setItem('user', user);
      return { ...action.user };
    case AuthConstants.LOGIN_ERROR:
      return { token: null, error: action.error };
    case AuthConstants.LOGOUT_USER:
      localStorage.removeItem('user');
      return { token: null };
    default:
      return state
  }
};

export default status
