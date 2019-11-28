import { connect } from 'react-redux';
import { createPoll } from '../../actions/poll_actions';
import PollForm from './poll_form';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    payload: state.polls.new
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPoll: payload => dispatch(createPoll(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PollForm);