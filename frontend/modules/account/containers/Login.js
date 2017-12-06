import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as AuthActions from '../actions/AuthActions'
import LoginForm from '../components/LoginForm'

class Login extends React.Component {
  componentDidMount() {
    if (this.props.user.token) {
      this.props.history.push('/');
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.match.params.recipe !== this.props.match.params.recipe) {
  //     nextProps.recipeItemActions.reset();
  //     nextProps.recipeActions.load(nextProps.match.params.recipe);
  //     window.scrollTo(0, 0);
  //   }
  // }

  render() {
    let { user, authActions } = this.props;
    return (
        <LoginForm
          user={ user }
          authActions={ authActions }
        />
    );
  }
}

// Recipe.propTypes = {
//   recipes: PropTypes.array.isRequired,
//   lists: PropTypes.array.isRequired,
//   status: PropTypes.string.isRequired,
//   match: PropTypes.object.isRequired,
//   recipeActions: PropTypes.object.isRequired,
//   recipeItemActions: PropTypes.object.isRequired,
// };

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch, props) => ({
  authActions: bindActionCreators(AuthActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
