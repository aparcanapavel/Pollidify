import { connect } from 'react-redux';
import { fetchUserPolls } from '../../actions/poll_actions';
import UserPolls from './user_polls.js';

const mapStateToProps = (state) => {
  return {
    polls: Object.values(state.entities.polls.user),
    currentUser: state.session.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserPolls: id => dispatch(fetchUserPolls(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPolls);