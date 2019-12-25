import { connect } from "react-redux";
import { signup, clearErrors, login } from "../../actions/session_actions";
import SignupForm from "./signup_form";

const mapStateToProps = state => {
  return {
    signedIn: state.session.isAuthenticated,
    errors: Object.values(state.errors.session),
    user: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
    login: user => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
