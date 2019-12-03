import { connect } from 'react-redux';
import { createPoll, fetchPolls } from '../../actions/poll_actions';
import PollForm from './poll_form';
import { selectPolls } from "../../reducers/selectors";

const mapStateToProps = (state) => {
  let newCreated;
  if (state.session.user.created.length > 7) {
    let num;
    num = (state.session.user.created.length - 7)
    newCreated = state.session.user.created.slice(num)
  } else {
    newCreated = state.session.user.created
  }

  return {
    currentUser: state.session.user,
    formErrors: Object.values(state.errors.poll),
    choiceErrors: Object.values(state.errors.choices),
    userPolls: selectPolls(state, newCreated)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPoll: payload => dispatch(createPoll(payload)),
    fetchPolls: () => dispatch(fetchPolls())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PollForm);