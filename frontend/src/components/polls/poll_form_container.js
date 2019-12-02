import { connect } from 'react-redux';
import { createPoll, fetchUserPolls } from '../../actions/poll_actions';
import PollForm from './poll_form';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    formErrors: Object.values(state.errors.poll),
    choiceErrors: Object.values(state.errors.choices)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPoll: payload => dispatch(createPoll(payload)),
    fetchUserPolls: id => dispatch(fetchUserPolls(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PollForm);