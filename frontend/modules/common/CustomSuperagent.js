import defaults from 'superagent-defaults'

// Create a defaults context

let request = function() {
  let customRequest = defaults();

  // Setup some defaults
  customRequest.set('Accept', 'application/json');
  // Add the user token if the user is logged in
  const token = JSON.parse(localStorage.getItem('user'));
  if (token && token.hasOwnProperty('token')) {
    customRequest.set('Authorization', 'Token ' + token.token);
  }

  return customRequest;
};

module.exports.request = request;
