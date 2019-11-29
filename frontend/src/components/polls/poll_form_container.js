import { connect } from 'react-redux';
import { createPoll } from '../../actions/poll_actions';
import PollForm from './poll_form';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    payload: state.entities.polls.new,
    formErrors: Object.values(state.errors.poll),
    choiceErrors: Object.values(state.errors.choices)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPoll: payload => dispatch(createPoll(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PollForm);