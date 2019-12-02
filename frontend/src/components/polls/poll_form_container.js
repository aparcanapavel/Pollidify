import { connect } from 'react-redux';
import { createPoll, fetchUserPolls } from '../../actions/poll_actions';
import PollForm from './poll_form';
import { selectPolls } from "../../reducers/selectors";

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    formErrors: Object.values(state.errors.poll),
    choiceErrors: Object.values(state.errors.choices),
    userPolls: selectPolls(state, state.session.user.created)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPoll: payload => dispatch(createPoll(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PollForm);