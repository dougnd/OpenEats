import history from './history'

const authCheckRedirect = () => {
  if (!localStorage.getItem('user')) {
    history.replace('/login');
  }
};

export default authCheckRedirect
